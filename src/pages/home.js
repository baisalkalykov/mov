import React, { useEffect, useState } from 'react'
import './home.scss'
import axios from 'axios'
const Home = () => {
 const [movie,setMovie]= useState([])
    useEffect (()=>{
        axios('http://localhost:3000/movies')
        .then(({data})=>setMovie(data))
    },[])
    return (
    <section className='home'>
    <div className='home__container'>
        <div className='home__cards'>
             {
                movie.map((el)=>
                 <div className='home__card'>
                    <img src={el.image}/>
                    <h3>{el.title}</h3>
                    <p>{el.genre}</p>
                 </div>
                )
             }
        </div>
    </div>
    </section>
  )
}

export default Home