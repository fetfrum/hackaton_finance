import React, { Component } from 'react';
import { connect } from 'react-redux';
//import {addCredit} from '../../actions/credits';
import { creditsDbRef, auth } from '../../firebase';

const AddCredit = () => {
	let form = null,
        creditName = null,
        creditValue = null,
        creditType = null;

	const onFormSubmit = (evt) => {

		evt.preventDefault();
        const credit ={creditName: creditName.value,
         creditValue: creditValue.value,
         creditType: creditType.value};
      //    console.log (credit);
         const currentUserId = auth.currentUser.uid;       
         creditsDbRef
           .child(currentUserId)
           .push(credit)
           .catch(err => console.log(err));
		form.reset();
	}

	return (
		<form className="SearchForm" onSubmit={onFormSubmit} ref={node => (form = node)}>
            <input className="SearchForm__input" placeholder="Введите название траты" 
            type="text" ref={node => (creditName = node)} />
            <input className="SearchForm__input" placeholder="Введите сумму траты" 
            type="text" ref={node => (creditValue = node)} />
            <input className="SearchForm__input" placeholder="Введите тип траты" 
            type="text" ref={node => (creditType = node)} />
            <button>Ok</button>
		</form>		
	);
}

export default AddCredit;