import React from 'react';
import axios from 'axios';
import BannerImage from './BannerImage.jsx';
import Summary from './Summary.jsx';
import Details from './Details.jsx';
import Tags from './Tags.jsx';

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
            <Tags />
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;