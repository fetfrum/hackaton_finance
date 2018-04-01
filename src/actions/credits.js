import * as types from '../constants';
import { creditsDbRef, auth } from '../firebase';

/**
 * FETCH CREDIT ACTIONS
 */
const fetchCreditsStart = () => ({
  type: types.FETCH_CREDITS_START,
});

const fetchCreditsSuccess = credits => ({
  type: types.FETCH_CREDITS_SUCCESS,
  payload: { credits },
});

const fetchCreditsFail = error => ({
  type: types.FETCH_CREDITS_FAIL,
  payload: { error },
});

/**
 * ADD CREDIT ACTIONS
 */
const addCreditStart = () => ({
  type: types.ADD_CREDIT_START,
});

const addCreditSuccess = (key, credit) => ({
  type: types.ADD_CREDIT_SUCCESS,
  payload: { key, credit },
});

const addCreditFail = error => ({
  type: types.ADD_CREDIT_FAIL,
  payload: { error },
});

export const addCredit = credit => dispatch => {
  const currentUserId = auth.currentUser.uid;

  dispatch(addCreditStart());

  creditsDbRef
    .child(currentUserId)
    .push(credit)
    .catch(err => dispatch(addCreditFail(err)));
};

/**
 * DELETE NOTE ACTIONS
 */
const deleteCreditStart = () => ({
  type: types.DELETE_CREDIT_START,
});

const deleteCreditSuccess = creditId => ({
  type: types.DELETE_CREDIT_SUCCESS,
  payload: { creditId },
});

const deleteCreditFail = error => ({
  type: types.DELETE_NOTE_FAIL,
  payload: { error },
});

export const deleteCredit = creditId => dispatch => {
  const currentUserId = auth.currentUser.uid;

  dispatch(deleteCreditStart());

  creditsDbRef
    .child(`${currentUserId}/${creditId}`)
    .remove()
    .catch(error => dispatch(deleteCreditFail(error)));
};

/**
 * CREATE NOTES NODE DB OBSERVER ACTIONS
 */

/**
 * Fetching all notes once on initial page load
 *
 * @param {string} userId current authenticated user id
 * @param {function} dispatch redux store method
 */
const initOnceOnValueListener = (userId, dispatch) => {
  dispatch(fetchCreditsStart());

  creditsDbRef
    .child(userId)
    .once('value', snapshot => {
      const credits = snapshot.val() ? snapshot.val() : {};

      dispatch(fetchCreditsSuccess(credits));
    })
    .catch(error => dispatch(fetchCreditsFail(error)));
};

// FIXME: addNoteSuccess sometimes being fired after delete o.O
/**
 * Listen for child_added event and
 * dispatch an action to update state
 *
 * @param {string} userId current authenticated user id
 * @param {function} dispatch redux store method
 */
const initChildAddedListener = (userId, dispatch) => {
  creditsDbRef
    .child(userId)
    .orderByKey()
    .limitToLast(1)
    .on('child_added', snapshot => {
      const credits = snapshot.val();
      const key = snapshot.key;

      dispatch(addCreditSuccess(key, credits));
    });
};

/**
 * Listen for child_removed event and
 * dispatch an action to update state
 *
 * @param {string} userId current authenticated user id
 * @param {function} dispatch redux store method
 */
const initChildRemovedListener = (userId, dispatch) => {
  creditsDbRef.child(userId).on('child_removed', snapshot => {
    const key = snapshot.key;

    dispatch(deleteCreditSuccess(key));
  });
};

// FIXME: решить проблему с child_added при первом запросе
// приходит "лишний итем" и пока что просто из-за костыля
// работает ок, так как fetch_notes_success переписывает поверх
export const createCreditsDbObserver = () => dispatch => {
  if (auth.currentUser) {
    const currentUserId = auth.currentUser.uid;

    initOnceOnValueListener(currentUserId, dispatch);
    initChildAddedListener(currentUserId, dispatch);
    initChildRemovedListener(currentUserId, dispatch);
  }
};

/**
 * TODO: если нужно следить за изменениями узла
 *
 * notesDbRef.child(currentUserId).on('child_changed', snapshot => {...});
 *
 * используется метод ref.update({...})
 * где ref это ссылка на узел который необходимо обновить
 */
