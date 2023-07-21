import React from 'react'
import './home.scss'
import {useGetMoviesQuery} from "../redux/movie";
const Home = () => {
    const {data=[]} = useGetMoviesQuery()
    console.log(data)

    return (
    <section className='home'>
    <div className='home__container'>
        <div className='home__cards'>

             {
                data.map((el)=>
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