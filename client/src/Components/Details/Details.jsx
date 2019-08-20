import React from 'react';
// import styles from './style.css';


const Details = (props) => {
  let developerUrl = `https://store.steampowered.com/developer/${props.developer}`;
  let publisherUrl = `https://store.steampowered.com/publisher/${props.publisher}`;
  return (
    <tr>
      <td>
        <table className="details">
          <tbody>
            <tr>
              <td className="col-left"><a className="details" href="#">Recent Reviews:</a></td>
              <td className="col-right"><a className="col-right" href="#">**add recent reviews</a></td>
            </tr>
            <tr>
              <td className="col-left pd-bottom-small"><a className="details" href="#">All Reviews:</a></td>
              <td className="col-right pd-bottom-small"><a className="col-right" href="#">**add all reviews</a></td>
            </tr>
            <tr>
              <td className="col-left pd-bottom-big">Release Date:</td>
              <td className="pd-bottom-big date">{props.release_date}</td>
            </tr>
            <tr>
              <td className="col-left">Developer:</td>
              <td className="col-right link"><a href={developerUrl}>{props.developer}</a></td>
            </tr>
            <tr>
              <td className="col-left pd-bottom-big">Publisher:</td>
              <td className="col-right pd-bottom-big link"><a href={publisherUrl}>{props.publisher}</a></td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}

export default Details;