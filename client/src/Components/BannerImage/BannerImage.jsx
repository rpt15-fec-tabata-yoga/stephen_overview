import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';


const BannerImage = (props) => {
    return (
      <tr>
        <td>
          <img id={styles.banner} src={props.image} alt="header" />
        </td>
      </tr>
    );
  }

export default BannerImage;