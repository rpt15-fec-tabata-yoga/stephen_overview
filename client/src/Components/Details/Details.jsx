import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';


const Details = (props) => {
  let developerUrl = `https://store.steampowered.com/developer/${props.developer}`;
  let publisherUrl = `https://store.steampowered.com/publisher/${props.publisher}`;
  return (
    <tr>
      <td>
        <table className={styles.details}>
          <tbody>
            <tr>
              <td className={styles.colLeft}><a className={styles.details} href="#">Recent Reviews:</a></td>
              <td className={styles.colRight}><a className={styles.colRight} href="#">**add recent reviews</a></td>
            </tr>
            <tr>
              <td className={`${styles.colLeft} ${styles.pdBottomSmall}`}><a className={styles.details} href="#">All Reviews:</a></td>
              <td className={`${styles.colRight} ${styles.pdBottomSmall}`}><a className={styles.colRight} href="#">**add all reviews</a></td>
            </tr>
            <tr>
              <td className={`${styles.colLeft} ${styles.pdBottomBig}`}>Release Date:</td>
              <td className={`${styles.pdBottomBig} ${styles.date}`}>{props.release_date}</td>
            </tr>
            <tr>
              <td className={styles.colLeft}>Developer:</td>
              <td className={`${styles.colRight} ${styles.link}`}><a href={developerUrl}>{props.developer}</a></td>
            </tr>
            <tr>
              <td className={`${styles.colLeft} ${styles.pdBottomBig}`}>Publisher:</td>
              <td className={`${styles.colRight} ${styles.pdBottomBig} ${styles.link}`}><a href={publisherUrl}>{props.publisher}</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default Details;