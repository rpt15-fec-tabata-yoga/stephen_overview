import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';
import Tooltip from '../Tooltip/Tooltip.jsx';


class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      top: 0,
      left: 0
    };
    this.references();
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }
  references() {
    this.toolTipRef = React.createRef();
  };

  handleMouseOver(e) {
    let currentElement = e.currentTarget;

    if (currentElement != null) {
      let rect = currentElement.getBoundingClientRect();    }
    this.setState({ visible: true });
  }

  handleMouseOut() {
    this.setState({ visible: false });
  }

  render() {
    let developerUrl = `https://store.steampowered.com/developer/${this.props.developer}`;
    let publisherUrl = `https://store.steampowered.com/publisher/${this.props.publisher}`;
    let formattedDate = this.props.release_date.slice(0, 10)

    return (
      <tr>
        <td>
          <table className={styles.details}>
            <tbody>
              <tr>
                <td className={styles.colLeft} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}><a className={styles.details} href="#">
                {
                  this.state.visible &&
                  <Tooltip ref={this.toolTipRef}/>
                }
                  Recent Reviews:</a></td>
                <td className={styles.colRight}><a className={styles.colRight} href="#">
                **add recent reviews</a></td>
              </tr>
              <tr>
                <td className={`${styles.colLeft} ${styles.pdBottomSmall}`}><a className={styles.details} href="#">
                {
                  this.state.visible &&
                  <Tooltip ref={this.toolTipRef}/>
                }
                All Reviews:</a></td>
                <td className={`${styles.colRight} ${styles.pdBottomSmall}`}><a className={styles.colRight} href="#">**add all reviews</a></td>
              </tr>
              <tr>
                <td className={`${styles.colLeft} ${styles.pdBottomBig}`}>Release Date:</td>
                <td className={`${styles.pdBottomBig} ${styles.date}`}>{formattedDate}</td>
              </tr>
              <tr>
                <td className={styles.colLeft}>Developer:</td>
                <td className={`${styles.colRight} ${styles.link}`}><a href={developerUrl}>{this.props.developer}</a></td>
              </tr>
              <tr>
                <td className={`${styles.colLeft} ${styles.pdBottomBig}`}>Publisher:</td>
                <td className={`${styles.colRight} ${styles.pdBottomBig} ${styles.link}`}><a href={publisherUrl}>{this.props.publisher}</a></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    );
  }
}


export default Details;