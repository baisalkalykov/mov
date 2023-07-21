import React from 'react';
import {useForm} from "react-hook-form";
import {useAddMovieMutation} from "../../redux/movie";

const AddMovie = () => {
    const{
        register,
        handleSubmit,
        formState:{errors}
    } = useForm()
    const [addMovie] = useAddMovieMutation()

    const postMovie = (movie)=>{
        addMovie(movie)
    }
    return (
        <section onSubmit={handleSubmit(postMovie)} className='addMovie'>
            <div className="container">
                <form  action="">
                    <h2>добавить фильм</h2>
                    <input {...register('image')} type="text" placeholder='фотография'/>
                    <input {...register('title')} type="text" placeholder='название'/>
                    <input {...register('text')} type="text" placeholder='текст'/>
                    <button>Создать</button>
                </form>
            </div>
        </section>
    );
};

export default AddMovie;