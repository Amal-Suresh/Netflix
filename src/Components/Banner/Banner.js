import React from 'react'
import { useEffect,useState } from 'react'
import {API_KEY,imageBaseUrl} from '../../constants/constants'
import "./Banner.css"
import axios from "../../axios"


function Banner() {
  
  const [movie,setMovie]=useState([])

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
    .then((response)=>{
      const randomNumber = Math.floor(Math.random() * 21);
      setMovie(response.data.results[randomNumber]);

    })

  },[]);
  return (
    <div style={{backgroundImage:`url(${movie? imageBaseUrl+movie.backdrop_path:""})`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie?.title}</h1>
            <div className='banner-button'>
                <button className='buttons'>Play</button>
                <button className='buttons'>My list</button>
            </div>
            <h1 className='description'>{movie?.overview}</h1>
        </div>
        <div className="fade-bottom"></div>
    </div>
  )
  }

export default Banner