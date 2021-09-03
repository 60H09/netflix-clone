import React from 'react'
import './RowPost.css'
import {imgURL} from '../../constants/constants'


function RowPost(props) {
   
   function handleClick(event){
       //console.log(event.target.id)
       props.onclick(event.target.id)
   }
   

    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
           { props.movies.filter(film=>{return film.id!==props.id}).map(function(film,index){
                return(<div onclick={window.scrollTo(0, 0)}><img className="poster" key={index} index={index} id={film.id} src={props.genre ? imgURL+film.backdrop_path : imgURL+film.poster_path } alt="" onClick={handleClick} style={{width:props.genre ?'250px' : null}} /></div>)
            })}
                      
            </div>
        </div>
    )
}

export default RowPost
