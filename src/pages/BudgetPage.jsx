import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotesDbObserver } from '../actions';

//Components
import AddInput from '../components/AddInput';
import MainContent from '../components/MainContent';

// TODO: Добавить стили
// const ownStyles = {};

class BudgetPage extends Component {
  componentWillMount() {
    this.props.onCreateNotesDbObserver();
  }

  render() {
    return (
      <div>
        <AddInput />
        <MainContent />
      </div>
    );
  }
}

const mdtp = dispatch => ({
  onCreateNotesDbObserver: () => dispatch(createNotesDbObserver()),
});

export default connect(null, mdtp)(BudgetPage);
