import React from 'react';
// import styles from './style.css';


class BannerImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <tr>
        <td>
          <img id="banner" src="https://source.unsplash.com/random/460x125" alt="header" />
        </td>
      </tr>
    );
  }
}

export default BannerImage;