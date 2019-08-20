import React from 'react';
// import styles from './style.css';

const Summary = (props) => {
  return (
    <tr>
      <td>
        <p className="summary">{props.description}</p>
      </td>
    </tr>
  );
}


export default Summary;