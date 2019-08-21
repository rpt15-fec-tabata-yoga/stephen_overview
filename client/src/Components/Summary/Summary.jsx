import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';

const Summary = (props) => {
  return (
    <tr>
      <td>
        <p className={styles.summary}>{props.description}</p>
      </td>
    </tr>
  );
}


export default Summary;