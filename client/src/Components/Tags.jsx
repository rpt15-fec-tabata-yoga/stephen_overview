import React from 'react';

// depending on the number of tags, create that many <a> tags and style those tags
// add on hover

const Tags = (props) => {
  return (
    <tr>
      <td>
        <div class="details pd-bottom-small">Popular user-defined tags for this product:</div>
        <div>
          <a class="tags" href="#">RPG</a>
          <a class="tags" href="#">Pixel Graphics</a>
        </div>
      </td>
    </tr>
  );
}

export default Tags;