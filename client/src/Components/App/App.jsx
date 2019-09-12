import React from 'react';
import axios from 'axios';
import BannerImage from '../BannerImage/BannerImage.jsx';
import Summary from '../Summary/Summary.jsx';
import Details from '../Details/Details.jsx';
import Tags from '../Tags/Tags.jsx';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';
import isPosOrNeg from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/utils/utilities.js';


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
      totalReviews: [],
      percentTotalReviewsPosOrNeg: '',
      overallPosOrNeg: '',
      recentPosOrNeg: '',
      recent: [],
      percentRecentPosOrNeg: ''
    };

    // this.handleMouseOver = this.handleMouseOver.bind(this);
    // this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    this.getGameData();
    this.getImage();
    this.getReviews();
  }

  // getGameData using axios get
  getGameData() {
    axios.get('/api/overview/' + this.state.gameId)
      .then((res) => {
        // handle data
        this.setState({
          description: res.data[0].description,
          release_date: res.data[0].release_date,
          developer: res.data[0].developer,
          publisher: res.data[0].publisher,
          tags: res.data[0].tags
          // add two more keys for overall reviews and recent reviews
        })
      })
      .catch((err) => {
        console.log('error in get request in client', err);
      });
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
      });
  }

  // review once Therese sets up her database
  getReviews() {
    axios.get('/api/reviews/' + this.state.gameId)
    .then((data) => {
      this.setState({
        totalReviews: data.data
      });
    })
    .then(() => {
      let posOrNeg = isPosOrNeg(this.state.totalReviews);
      this.setState({
        overallPosOrNeg: posOrNeg[1],
        percentTotalReviewsPosOrNeg: posOrNeg[0]
      });
    })
    .then(() => {
      let recent = [];
      let today = new Date();
      let thirtyDaysAgo = new Date(today - (30 * 86400000));
      for (let i = 0; i < this.state.totalReviews.length; ++i) {
        let posted = new Date(this.state.totalReviews[i].posted);
        if (thirtyDaysAgo <= posted && posted <= today) {
          recent.push(this.state.totalReviews[i]);
        }
      }
      let posOrNeg = isPosOrNeg(recent);
      this.setState({
        recent: recent,
        recentPosOrNeg: posOrNeg[1],
        percentRecentPosOrNeg: posOrNeg[0]
      });
    })
    .catch((err) => {
      throw(err);
    });
  }

  render() {
    const {state} = this;
    return (
      <div className={styles.container}>
            <BannerImage image={state.image} />
            <Summary description={state.description} />
            <Details
              developer={state.developer}
              publisher={state.publisher}
              release_date={state.release_date}
              totalReviews={state.totalReviews}
              percentTotalReviewsPosOrNeg={state.percentTotalReviewsPosOrNeg}
              overallPosOrNeg={state.overallPosOrNeg}
              recentPosOrNeg={state.recentPosOrNeg}
              recent={state.recent}
              percentRecentPosOrNeg={state.percentRecentPosOrNeg}
            />
            <Tags userTags={state.tags} />
      </div>
    );
  }
}

export default App;