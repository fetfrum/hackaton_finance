import React, { Component } from "react";
import { creditsDbRef, auth } from "../../firebase";
import moment from 'moment';

import "./style.css";

class MainContent extends Component {
  state = {
    keys: {}
  };
  componentDidMount() {
    const currentUserId = auth.currentUser.uid;
    let creditName, creditType, creditValue;
    creditsDbRef.child(currentUserId).once("value", snapshot => {
      // snapshot.forEach(value=>{
      //   creditsDbRef.child(currentUserId+'/'+value.key+'/creditName').once("value", (snapshot)=>{
      //     creditName = snapshot.node_.value_;
      //   });
      //   creditsDbRef.child(currentUserId+'/'+value.key+'/creditType').once("value", (snapshot)=>{
      //     creditType = snapshot.node_.value_;
      //   });
      //   creditsDbRef.child(currentUserId+'/'+value.key+'/creditValue').once("value", (snapshot)=>{
      //     creditValue = snapshot.node_.value_;
      //   });
      //   keys.push( {
      //     creditName,
      //     creditType,
      //     creditValue
      //   });
      // });
      this.setState({ keys: snapshot.val() });
    });
  }

  render() {
    // this.state.keys.map((key,index)=>{
    //   console.log(key.creditName)
    // })
    const element = [];
    for (const key in this.state.keys) {
      element.push(this.state.keys[key]);
    }
    console.log("render: ", element);
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
