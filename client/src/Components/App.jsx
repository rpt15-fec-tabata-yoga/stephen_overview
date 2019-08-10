import React from 'react';
import axios from 'axios';
import BannerImage from './BannerImage.jsx';
import Summary from './Summary.jsx';
import Details from './Details.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // getData using axios get

  render() {
    return (
      <div>
        <table id="overview">
          <tbody>
            <BannerImage />
            <Summary />
            <Details />
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;