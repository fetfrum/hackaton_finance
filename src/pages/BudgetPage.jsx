import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCreditsDbObserver } from '../actions';

//Components
import AddInput from '../components/AddInput';
import MainContent from '../components/MainContent';
import AddCredit from '../components/AddCredit';
import CreditList from '../components/CreditsList'
//import updateDB from '../utility';

// TODO: Добавить стили
// const ownStyles = {};

class BudgetPage extends Component {
  state={
    text: "test"
  }
  componentWillMount() {
    this.props.onCreateCreditsDbObserver();
  }

  updateDB=(text)=>{
    this.setState({text: text});
  }


  render() {
    return (
      <div>
<<<<<<< HEAD
        <AddInput  updateDB={this.updateDB} />
        <MainContent creditsUpdate={this.state.text} />
  
=======
        <AddInput />
        <MainContent />
       {/* TODO: Перенести форму расходов в модальное окно, вызываемое по клику на плюсик */}
        {/* <div>
          <AddCredit />
        </div> */}
>>>>>>> stasbereza
      </div>
    );
  }
}

const mdtp = dispatch => ({
  onCreateCreditsDbObserver: () => dispatch(createCreditsDbObserver()),
});

export default connect(null, mdtp)(BudgetPage);
