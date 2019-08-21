import React from 'react';
import styles from '/Users/jenn/Desktop/HackReactor/FEC/stephen_overview/public/style.css';

// add on hover

const Tags = (props) => {
  return (
    <tr>
      <td>
        <div className={`${styles.details} ${styles.pdBottomSmall}`}>Popular user-defined tags for this product:</div>
        <div>
          {props.userTags.map((tag) => {
            let url = `https://store.steampowered.com/tags/en/${tag}`
            return (
              <a className={styles.tags} href={url} key={tag}>{tag}</a>
            );
          })}
        </div>
      </td>
    </tr>
  );
}

export default Tags;