import React from 'react';
import axios from 'axios';
// import styles from './style.css';
import BannerImage from './BannerImage.jsx';
import Summary from './Summary.jsx';
import Details from './Details.jsx';
import Tags from './Tags.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: {}
    };
  }

  componentDidMount() {
    this.getData();
  }

  // getData using axios get
  getData() {
    axios.get('/game-overview')
      .then((res) => {
        // handle data
        console.log('res from axios get in client', res.data);
        this.setState({ game: res.data })

      })
      .catch((err) => {
        console.log('error in get request in client');
      })
  }

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
    );
  }
}

export default App;