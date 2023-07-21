import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

export const movieSlice = createApi({
    reducerPath:'movies',
    baseQuery:fetchBaseQuery({
        baseUrl:'http://localhost:8080/'
    }),
    endpoints:(build)=>({
    getMovies:build.query({
        query:()=>'movies'
    }),
        addMovie:build.mutation({
            query:(movie)=>({
                url:'movies',
                method:'POST',
                body:movie
            })
        })
    })
})
export const {useGetMoviesQuery,useAddMovieMutation} = movieSlice
