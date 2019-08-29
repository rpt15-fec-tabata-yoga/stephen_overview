import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';

const Summary = (props) => {
  return (
    <div className={styles.summary}>
      {props.description}
    </div>
  );
}


export default Summary;