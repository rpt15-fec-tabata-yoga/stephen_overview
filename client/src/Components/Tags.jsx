import React from 'react';
// import styles from './style.css';


// depending on the number of tags, create that many <a> tags and style those tags
// add on hover

const Tags = (props) => {
  return (
    <tr>
      <td>
        <div className="details pd-bottom-small">Popular user-defined tags for this product:</div>
        <div>
          <a className="tags" href="#">RPG</a>
          <a className="tags" href="#">Pixel Graphics</a>
        </div>
      </td>
    </tr>
  );
}

export default Tags;