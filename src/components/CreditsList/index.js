import React from 'react';

const Note = ({ text }) => (
  <div>
    <p>Трата: {text}</p>
  </div>
);


const CreditsList = ({ credits }) => (
  
  <ul> text
    {/* {credits.map(credit => (
      <li key={credit.id}>
        <Note  {...credit} />
      </li>
    ))} */}
    {console.log(credits)}
  </ul>
);

export default CreditsList;