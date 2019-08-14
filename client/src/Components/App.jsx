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
      image: 'https://source.unsplash.com/random/460x125',
      description: '',
      releaseDate: '',
      developer: '',
      publisher: '',
      tags: [],
      reviews: {}
    };
  }

  componentDidMount() {
    this.getData();
    this.getImage();
    this.getReviews();
  }

  // getData using axios get
  getData() {
    axios.get('/api/overview')
      .then((res) => {
        // handle data
        console.log('res from axios get in client', res.data);
        this.setState({
          description: res.data.description,
          releaseDate: res.data.releaseDate,
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
    axios.get('/api/image')
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
    axios.get('/api/reviews')
      .then((res) => {
        // handle data
        console.log('res from axios get in client for reviews', res.data);
        this.setState({ reviews: res.data })

      })
      .catch((err) => {
        console.log('error in get request in client', err);
      })
  }


  render() {
    return (
      <div>
        <table id="overview">
          <tbody>
            <BannerImage image={this.state.image} />
            <Summary description={this.state.description} />
            <Details developer={this.state.developer} publisher={this.state.publisher} />
            <Tags userTags={this.state.tags} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;