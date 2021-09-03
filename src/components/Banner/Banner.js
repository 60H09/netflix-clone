import React from 'react'
import './Banner.css'
import {imgURL} from '../../constants/constants'

function Banner(props) {
 
    
    const wallpaper = imgURL +  props.movie.backdrop_path
    console.log(props.movie)
    return (
        <div style={{backgroundImage:'url('+wallpaper+')'}} className="banner" >
         <div className="overlay">
         <div className="contents">
          <div className="title"><h3>{props.movie.original_title ? props.movie.original_title : props.movie.original_name}</h3></div>
          <div className="banner_buttons">
             <button className="button">Add</button>
             <button className="button">My List</button>
          </div>
          <div className="description">{ props.movie.overview}</div>
         </div>   
        </div>
        </div>
        
    )
}

export default Banner
