import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createNotesDbObserver } from '../actions';




// TODO: Добавить стили
const ownStyles = {
};

class BudgetPage extends Component {
  componentWillMount() {
    this.props.onCreateNotesDbObserver();
  }

  render() {
    return (
      <div style={ownStyles}>
        <sidebar>menu</sidebar>
        Страница бюджета
      </div>
    );
  }
}

const mdtp = dispatch => ({
  onCreateNotesDbObserver: () => dispatch(createNotesDbObserver()),
});

export default connect(null, mdtp)(BudgetPage);
