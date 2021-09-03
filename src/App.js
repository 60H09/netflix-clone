import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/Banner/Banner'
import RowPost from './components/RowPost/RowPost'
import axios from './axios'
import {APIKEY} from './constants/constants'



import './App.css'

function App() {

  const [movie,setMovie] = React.useState('')
  React.useEffect(() => {
    axios.get('trending/all/week?api_key='+APIKEY+'&language=en-US').then(response=>setMovie(response.data.results[0]))
      }
  , [])

    const [movies,setMovies] = React.useState([])
    React.useEffect(() => {
        axios.get('trending/all/week?api_key='+APIKEY+'&language=en-US').then(response=>setMovies(response.data.results))
        }
    , [])

    function setBanner(ID){
      for(var i=0;i<movies.length;i++){
        if(movies[i].id == ID){
          setMovie(movies[i])
        }
      }
    }
    
    const [action,setAction] = React.useState([])
    React.useEffect(() => {
        axios.get('discover/movie?api_key='+APIKEY+'&with_genres=28').then(response=>setAction(response.data.results))
        }
    , [])

    function setBannerAction(ID){
      for(var i=0;i<action.length;i++){
        if(action[i].id == ID){
          setMovie(action[i])
        }
      }
    }

    const [comedy,setComedy] = React.useState([])
    React.useEffect(() => {
        axios.get('discover/movie?api_key='+APIKEY+'&with_genres=35').then(response=>setComedy(response.data.results))
        }
    , [])

    function setBannerComedy(ID){
      for(var i=0;i<comedy.length;i++){
        if(comedy[i].id == ID){
          setMovie(comedy[i])
        }
      }
    }



  

  return (
    <div className="App">
    <Navbar />
    <Banner movie={movie} />
    <RowPost title="trending" id = {movie.id} onclick={setBanner} movies = {movies} genre = {false}  />
    <RowPost title="Action" id = {movie.id} onclick={setBannerAction} movies = {action} genre = {true}  />
    <RowPost title="comedy" id = {movie.id} onclick={setBannerComedy} movies = {comedy} genre = {true}  />

    </div>
  );
}

export default App;
