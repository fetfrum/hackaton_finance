import React, { Component } from "react";
import { creditsDbRef, auth } from "../../firebase";
import moment from 'moment';

import "./style.css";

class MainContent extends Component {
  constructor(props){
    super(props) 
    this.state = {
      keys: {},
    }
  }
  componentDidMount() {
    const currentUserId = auth.currentUser.uid;
    let creditName, creditType, creditValue;
    creditsDbRef.child(currentUserId).orderByKey().once("value", snapshot => {
      this.setState({ keys: snapshot.val() });
    });
    creditsDbRef.child(currentUserId).orderByKey().limitToLast(1).on("child_added", snapshot => {
      this.setState({ keys: snapshot.val() });
    });

  }


  render() {
    const element = [];
    for (const key in this.state.keys) {
      element.push(this.state.keys[key]);
    }
    return (
      // <div className="MainContent col s12">
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Сумма</th>
            <th>Категория</th>
            <th>Дата</th>
            <th>Комментарий</th>
          </tr>
        </thead>
        <tbody>
        {element.map((key, index) => (
          <tr key={index}>
            <td>{index+1}. {key.creditName}</td>
            <td>{key.creditValue}</td>
            <td>{key.creditType}</td>
            <td>{moment.unix(key.creditDate).format('DD.MM.YYYY')}</td>
            <td>{key.creditDescription}</td>
          </tr>
        ))}
        </tbody>
      </table>

    );
  }
}

export default MainContent;
