/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'


// https://api.themoviedb.org/3/genre/movie/list?api_key=9b2c1cf9fb118a4d3fece49469282b85&language=es-ES

// import Movie from './movie'
// import Youtube from 'react-youtube'

const ContentWrapper = ({movies}) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342"

    return (
        <>
            <div className='d-flex flex-wrap p-1'>
                {
                    movies.map((movie) => {
                        return (
                            <div className='col-12 col-md-3 col-lg-2' key={movie.id}>
                                <div className='card mb-3'>
                                    <Link to={`/movie/${movie.id}`}>
                                        <img src={IMAGE_PATH + movie.poster_path} className='card-img-top' alt={movie.title} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ContentWrapper;