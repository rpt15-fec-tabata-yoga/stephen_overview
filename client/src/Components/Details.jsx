import React from 'react';

const Details = (props) => {
  return (
    <tr>
      <table class="details">
        <tbody>
          <tr>
            <td class="col-left">Recent Reviews:</td>
            <td>**add recent reviews</td>
          </tr>
          <tr>
            <td class="col-left end-review">All Reviews:</td>
            <td class="end-review">**add all reviews</td>
          </tr>
          <tr>
            <td class="col-left end-release">Release Date:</td>
            <td class="end-release">**add release date</td>
          </tr>
          <tr>
            <td class="col-left">Developer:</td>
            <td>**add developer</td>
          </tr>
          <tr>
            <td class="col-left">Publisher:</td>
            <td>**add publisher</td>
          </tr>
        </tbody>
      </table>
    </tr>
  );
}

export default Details;