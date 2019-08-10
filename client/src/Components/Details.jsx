import React from 'react';

const Details = (props) => {
  return (
    <tr>
      <table class="details">
        <tbody>
          <tr>
            <td class="col-left"><a class="details" href="#">Recent Reviews:</a></td>
            <td class="col-right"><a class="col-right" href="#">**add recent reviews</a></td>
          </tr>
          <tr>
            <td class="col-left pd-bottom-small"><a class="details" href="#">All Reviews:</a></td>
            <td class="col-right pd-bottom-small"><a class="col-right" href="#">**add all reviews</a></td>
          </tr>
          <tr>
            <td class="col-left pd-bottom-big">Release Date:</td>
            <td class="pd-bottom-big date">**add release date</td>
          </tr>
          <tr>
            <td class="col-left">Developer:</td>
            <td class="col-right link"><a href="#">**add developer</a></td>
          </tr>
          <tr>
            <td class="col-left pd-bottom-big">Publisher:</td>
            <td class="col-right pd-bottom-big link"><a href="#">**add publisher</a></td>
          </tr>
        </tbody>
      </table>
    </tr>
  );
}

export default Details;