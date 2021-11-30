import React, { Component } from 'react'
import { Consumer } from '../../context'

import Spinner from '../Layout/Spinner';

export default class Tracks extends Component{
  render(){
  return(
<Consumer>
  {
  value=>{
      const {track_list}  = value;
      if(track_list === undefined || track_list.length===0){
        return <Spinner/>
      }
      else{
        return <h1>Feched successfully</h1>
      }
    }
  }
</Consumer>
  )
  }
}
