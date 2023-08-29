import { useEffect, useState } from "react"
import { Link } from 'react-router-dom'
import Movie from "./movie";
import axios from 'axios';

// https://api.themoviedb.org/3/genre/movie/list?api_key=9b2c1cf9fb118a4d3fece49469282b85&language=es-ES

// import Movie from './movie'
// import Youtube from 'react-youtube'

const ContentWrapper = () => {
    const API_KEY = "9b2c1cf9fb118a4d3fece49469282b85"
    // const MOVIE_API = `https://api.themoviedb.org/3/discover/movie?api_key=`;
    const MOVIE_API = `https://api.themoviedb.org/3/movie/`;
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    let limit = 120;
    let offset = 1;

    const [movies, setMovies] = useState([]);
    let [FiltroMovies, setFiltroMovies] = useState([]);

    // useEffect(() => {
    //     fetch(`${MOVIE_API}${API_KEY}`)
    //         .then(response => response.json())
    //         .then(dataJson => {
    //             console.log(dataJson)
    //             setMovies(dataJson.results)
    //         }
    //         )
    //         .catch(error => console.log(error))
    // }, [MOVIE_API, API_KEY])

    useEffect(() => {
        grupoMovies(offset, limit);
        console.log(FiltroMovies)
        // filtrarMoviesRotas();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, limit])

    // function traerMovies(id) {
    //     let data = [];
    //     let moviesFiltradas;
    //     try {
    //         fetch(`${MOVIE_API}${id}?api_key=${API_KEY}`)
    //             .then(response => {
    //                 if (response.ok) {
    //                     return response.json();
    //                 }else{
    //                     return "";
    //                 }
    //             })
    //             .then(dataJson => {
    //                 data.push(dataJson)
    //                 moviesFiltradas = data.filter((filtro) => {
    //                     return filtro !== undefined;
    //                 }); 
    //                 return moviesFiltradas;
    //             }
    //             )
    //             .catch(error => console.log(error))
    //     } catch (error) {
    //         if (error.response) {
    //             // The request was made and the server responded with a status code
    //             // that falls out of the range of 2xx
    //             // console.log(error.response.data);
    //             // console.log(error.response.status);
    //             // console.log(error.response.headers);
    //         } else if (error.request) {
    //             // The request was made but no response was received
    //             // `error.request` is an instance of XMLHttpRequest in the 
    //             // browser and an instance of
    //             // http.ClientRequest in node.js
    //             console.log(error.request);
    //         } else {
    //             // Something happened in setting up the request that triggered an Error
    //             console.log('Error', error.message);
    //         }
    //         console.log(error.config);
    //     }
    //     return moviesFiltradas
    // }

    function traerMovie(id) {
        const movie =
            fetch(`${MOVIE_API}${id}?api_key=${API_KEY}`)
                .then((respuesta) => {
                    if (respuesta.ok) {
                        return respuesta.json();
                    }
                })
                .then((datos) => datos)
                .catch(error => console.log(error));
        return movie;
    }

    function grupoMovies(offset, limit) {
        // let aux = [];
        let consultaMovie;
        for (let i = offset; i <= offset + limit; i++) {
            consultaMovie = traerMovie(i);
            consultaMovie.then((movie) => {
                // console.log(movie)
                setFiltroMovies(FiltroMovies.push(movie));
            })
        }
        // console.log(moviesFiltradas)
        // console.log(FiltroMovies)
        // console.log(aux)
        // setFiltroMovies(aux);
    }

    function filtrarMoviesRotas(){
        console.log(FiltroMovies);
        const moviesFiltradas = FiltroMovies.filter((filtro) => {
            return filtro !== undefined;
        })
        console.log(moviesFiltradas)
    }


    return (
        <>
            <div className='d-flex flex-wrap p-1'>
                { 
                    // FiltroMovies.map((movie) => {
                    //     if(movie !== null){
                    //         return (
                    //             <div className='col-12 col-md-3 col-lg-2' key={movie.title}>
                    //                 <div className='card'>
                    //                     <Link to={`/movie/${movie.id}`}>
                    //                         <img src={IMAGE_PATH + movie.poster_path} className='card-img-top' alt={movie.title} />
                    //                     </Link>
                    //                 </div>
                    //             </div>
                    //         )
                    //     }
                    // })
                }
            </div>
        </>
    )
}

export default ContentWrapper;