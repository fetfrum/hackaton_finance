import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCreditsDbObserver } from '../actions';

//Components
import AddInput from '../components/AddInput';
import MainContent from '../components/MainContent';
import AddCredit from '../components/AddCredit';
import CreditList from '../components/CreditsList'

// TODO: Добавить стили
const ownStyles = {};

class BudgetPage extends Component {
  componentWillMount() {
    this.props.onCreateCreditsDbObserver();
  }

  render() {
    return (
      <div>
        <AddInput />
        <MainContent />
       {/* TODO: Перенести форму расходов в модальное окно, вызываемое по клику на плюсик */}
        <div>
          <AddCredit />
        </div>
      </div>
    );
  }
}

const mdtp = dispatch => ({
  onCreateCreditsDbObserver: () => dispatch(createCreditsDbObserver()),
});

export default connect(null, mdtp)(BudgetPage);
