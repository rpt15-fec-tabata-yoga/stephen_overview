import React from 'react';
// import styles from './style.css';


const BannerImage = (props) => {
    return (
      <tr>
        <td>
          <img id="banner" src={props.image} alt="header" />
        </td>
      </tr>
    );
  }

export default BannerImage;