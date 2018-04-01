import React, { Component } from "react";
import { creditsDbRef, auth } from "../../firebase";

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
            <th>Статья расхода</th>
            <th>Дата</th>
            <th>Сумма</th>
          </tr>
        </thead>
        <tbody>
        {element.map((key, index) => (
          <tr key={index}>
            <td>{index+1}. {key.creditName}</td>
            <td>{key.creditType}</td>
            <td>{key.creditValue}</td>
          </tr>
        ))}
        </tbody>
      </table>

    );
  }
}

export default MainContent;
