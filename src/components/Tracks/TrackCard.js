import React from 'react'

import {Link} from 'react-router-dom';

import './Track_card.css'

 const TrackCard = (props) =>{
  const {track} = props;
  return (
    <div className="cols-md-12">
      <div className="card shadow-sm p-3">
        <div className="card-body">
          <h5>{track.artist_name}</h5>
        </div>
          <div className="row">
            <div className="col-md-8">
              <strong>
                <i className="fas fa-play"></i>Track
              </strong>:{track.track_name}
              <br/>
              <strong>
                <i className="fas fa-compact-disc"></i>Album
              </strong>:{track.album_name}
            </div>
            <div className="col-md-4">
              <center>
              <Link to={`lyrics/track/${track.track_id}`} className="btn btn-dark float-right">
                <i className="fas fa-chevron-right"></i>View Lyrics
              </Link>
              </center>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TrackCard;
