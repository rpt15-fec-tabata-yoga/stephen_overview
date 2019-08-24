import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';

class Tooltip extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.tooltip}>
        <div className={styles.tooltipLabel}>
         89% of the 1,050 user reviews in the last 30 days are positive.
        </div>
      </div>
    )
  }
}

export default Tooltip;