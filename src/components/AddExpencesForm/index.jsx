import React, { Component } from 'react';
import { creditsDbRef, auth } from '../../firebase';
//import classnames from 'classnames';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import ExpencesItems from '../ExpencesItems';
import 'react-datepicker/dist/react-datepicker.css';
import icon28 from '../../icons/icon-28.svg';
import icon29 from '../../icons/icon-29.svg';
import icon30 from '../../icons/icon-30.svg';
import icon31 from '../../icons/icon-31.svg';
import icon35 from '../../icons/icon-35.svg';
import icon34 from '../../icons/icon-34.svg';
import icon23 from '../../icons/icon-23.svg';
import icon32 from '../../icons/icon-32.svg';
import icon36 from '../../icons/icon-36.svg';
import icon37 from '../../icons/icon-37.svg';
import icon38 from '../../icons/icon-38.svg';
import styles from './styles.css';

class AddExpencesForm extends Component {
constructor(props){
  super(props)
  this.state = {
    startDate: moment(),
    type: ''
  }
}

  // state = {
  //   name: '',  
  //   summ: '',
  //   date: '',
  //   comment: '',
  // };
// state = {
  
// };
handleChange = this.handleChange.bind(this);
type = this.type.bind(this);


handleChange(date) {
  this.setState({
    startDate: date
  });
}
type(event) {
  this.setState({
    type: event.target.alt
  });
  // console.log(event.target.alt)
}


onFormSubmit = (evt) => {
  evt.preventDefault();
  // const creditType = "--"; 
  const credit ={
       creditName:        this.creditName.value, 
       creditValue:       this.creditValue.value,
       creditType:        this.state.type, 
       creditDate:       this.state.startDate.unix(), 
       creditDescription: this.creditDescription.value,
        }; //-
        // console.log(credit);
        // debugger;
       const currentUserId = auth.currentUser.uid;       
       creditsDbRef
         .child(currentUserId)
         .push(credit)
         .catch(err => console.log(err));
  this.form.reset();
  this.props.close();
}

// _handleShutForm = () => {
//   this.setState({
//     isVisibleAddExpForm: false
//   });
// };
  // handleInputChange = evt => { 
  //   const value = evt.target.value;
  //   const type = evt.target.type;
  //   this.setState({ [type]: value });
  // };

  render() {
    const icons = ["icon-28", "icon-29", "icon-30", "icon-31", "icon-35", "icon-34", "icon-23", "icon-32", "icon-36", "icon-37", "icon-38"];
        
        const names = ["Здоровье", "Еда", "Гигиена", "Жилье", "Одежда", "Спорт", "Отдых", "Связь", "Транспорт", "Питомцы", "Подарки"];
        
        const images = icons.map((image, index) => {
           return (
                <div className="ExpencesItem" onClick={this.type} key={names[index]}>
                    <img key={image} src={require(`../../icons/${image}.svg`)} className="ExpencesItem__icon" alt={ names[index] } />
                    <p className="ExpencesItem__name">{ names[index] }</p>
                </div>
           );
        });
    //const { name, summ, date, comment } = this.state;
    const { isVisibleAddExpForm } = this.state;
    return (
      <form className="AddExpencesForm"  onSubmit={this.onFormSubmit}
      ref={node => (this.form = node)}
      >
       <p className="Heading">Новые расходы</p>
        <input
          // className={styles.input}
          type="text"
          // value={name}
          // onChange={this.handleInputChange}
          placeholder="Название"
          required
          autoFocus
          ref={node => (this.creditName = node)}
        />
        <input
          // className={styles.input}
          type="text"
          // value={summ}
          // onChange={this.handleInputChange}
          placeholder="Сумма"
          required
          autoFocus
          ref={node => (this.creditValue = node)}
        />
          {/* <ExpencesItems 
          // ref={node => (this.creditDate = node)}/
          /> */}
          <div className="ExpencesItems">
                {images}
            </div>
          <div className="date">
          <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
          dateFormat="DD/MM/YYYY"
          // ref={node => (this.creditDate = node)}
        />
          </div>
           <input
          // className={styles.input}
          type="text"
          // value={comment}
          // onChange={this.handleInputChange}
          placeholder="Комментарий"
          required
          ref={node => (this.creditDescription = node)}
         />
         <div className="buttons">
          <button className="waves-effect orange darken-1 btn">
            Сохранить
          </button>
          <button className="waves-effect orange darken-1 btn" onClick={this.props.close}>
            Отмена
          </button>
         </div>
      </form>
    );
  }
}

export default AddExpencesForm;