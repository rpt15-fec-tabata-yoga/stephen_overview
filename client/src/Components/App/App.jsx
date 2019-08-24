import React from 'react';
import axios from 'axios';
import BannerImage from '../BannerImage/BannerImage.jsx';
import Summary from '../Summary/Summary.jsx';
import Details from '../Details/Details.jsx';
import Tags from '../Tags/Tags.jsx';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameId: window.location.pathname.split('/')[1],
      image: 'https://source.unsplash.com/random/460x125',
      description: '',
      release_date: '',
      developer: '',
      publisher: '',
      tags: [],
      reviews: {}
      // visible: false
    };

    // this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    this.getGameData();
    // this.getImage();
    // this.getReviews();
  }

  // getGameData using axios get
  getGameData() {
    axios.get('/api/overview/' + this.state.gameId)
      .then((res) => {
        // handle data
        this.setState({
          description: res.data.description,
          release_date: res.data.release_date,
          developer: res.data.developer,
          publisher: res.data.publisher,
          tags: res.data.tags
          // add two more keys for overall reviews and recent reviews
        })
      })
      .catch((err) => {
        console.log('error in get request in client', err);
      })
  }

  // review once Bryan updates his database
  getImage() {
    axios.get('/api/image/' + this.state.gameId)
      .then((res) => {
        // handle data
        console.log('res from axios get in client for image', res.data);
        this.setState({ image: res.data })
      })
      .catch((err) => {
        console.log('error in get request in client', err);
      })
  }

  // review once Therese sets up her database
  getReviews() {
    axios.get('/api/reviews/' + this.state.gameId)
      .then((res) => {
        // handle data
        console.log('res from axios get in client for reviews', res.data);
        this.setState({ reviews: res.data })
      })
      .catch((err) => {
        console.log('error in get request in client', err);
      })
  }

  // handleMouseOver() {
  //   this.setState({ visible: true });
  // }

  // handleMouseOut() {
  //   this.setState({ visible: false });
  // }

  render() {
    return (
      <div>
        <table id={styles.overview}>
          <tbody>
            <BannerImage image={this.state.image} />
            <Summary description={this.state.description} />
            <Details developer={this.state.developer} publisher={this.state.publisher} release_date={this.state.release_date} />
            <Tags userTags={this.state.tags} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;