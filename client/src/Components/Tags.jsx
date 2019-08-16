import React from 'react';
// import styles from './style.css';

// add on hover

const Tags = (props) => {
  return (
    <tr>
      <td>
        <div className="details pd-bottom-small">Popular user-defined tags for this product:</div>
        <div>
          {props.userTags.map((tag) => {
            let url = `https://store.steampowered.com/tags/en/${tag}`
            return (
              <a className="tags" href={url} key={tag}>{tag}</a>
            );
          })}
        </div>
      </td>
    </tr>
  );
}

export default Tags;