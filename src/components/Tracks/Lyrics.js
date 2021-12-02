import React, { useState,useEffect } from 'react'
import Spinner from '../Layout/Spinner';
import { Link,useParams } from 'react-router-dom';

import axios from "axios";


const Lyrics = (props) => {
    const [track, setTrack] = useState({});
  const [lyrics, setLyrics] = useState({});
  
  const {id} = useParams();
  
  useEffect(() => {
    axios
      .get(
        `https://corsanywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_LYRIC_KEY}`
      )
      .then(res => {
        let lyrics = res.data.message.body.lyrics;
        setLyrics({ lyrics });

        return axios.get(
          `https://corsanywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_LYRIC_KEY}`
        );
      })
      .then(res => {
        let track = res.data.message.body.track;
        setTrack({ track });
      })
      .catch(err => console.log(err));
  });
  // componentDidMount() {
    // console.log(this.props.match && this.props.match.params.param);
  // }
  // componentDidMount(){
  //     const postID ="226936152";
  //       axios.get(`https://corsanywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${postID}&apikey=${process.env.REACT_APP_LYRIC_KEY}`)
  //     .then(res=> {
  //     this.setState(
  //     {
  //       lyrics:res.data.message.body.lyrics});
  //       return axios.get(`https://corsanywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${postID}&apikey=${process.env.REACT_APP_LYRIC_KEY}`)
  //     })
  //     .then(res=> {
  //       this.setState(
  //         {
  //         track:res.data.message.body.track
  //       });
  //     })
  //     .catch(err=>console.log(err));
  //     // }
  // }
            
  // render() {
    // const id = ({match})=>{ <h1>{match.params.id}</h1>};
    // const {track,lyrics}  = this.state;
    if(track === undefined || Object.keys(track).length===0 || lyrics=== undefined || Object.keys(lyrics).length===0){
      return <Spinner/>
    }
    else{
      return (
        <React.Fragment>
          <Link to="/lyrics-finder-app/" className="btn btn-dark btn-sm mb-4">
            Go Back
          </Link>
          <div className="card">
            <h5 className="card-header">
              {track.track.track_name} by{" "}
              <span className="text-secondary">{track.track.artist_name}</span>
            </h5>
            <div className="card-body">
              <pre className="card-text">{lyrics.lyrics.lyrics_body}</pre>
            </div>
          </div>

          <ul className="list-group mt-3">
            <li className="list-group-item">
              <strong>Album ID</strong>: {track.track.album_id}
            </li>
            <li className="list-group-item">
              <strong>Song Genre</strong>:{" "}
              {track.track.primary_genres.music_genre_list.length === 0
                ? "NO GENRE AVAILABLE"
                : track.track.primary_genres.music_genre_list[0].music_genre
                .music_genre_name}
            </li>
            <li className="list-group-item">
              <strong>Explicit Words</strong>:{" "}
              {track.track.explicit === 0 ? "No" : "Yes"}
            </li>
            <li className="list-group-item">
              <strong>Release Date</strong>:{" "}
              {/* <Moment format="MM/DD/YYYY"> */}
              {/* {moment(new Date()).format("DD/MM/YYYY")} */}
                {/* {track.track.first_release_date} */}
              {/* </Moment> */}
            </li>
          </ul>
        </React.Fragment>
      )
    }
  }
// }

// const App = (props) => {

//   console.log(props.match.params);

// };

export default Lyrics;