/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const ContentWrapper = ({ movies }) => {
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    return (
        <>
            <div className='d-flex flex-wrap p-1'>
                {
                    movies.map((movie) => {
                        return (
                            <OverlayTrigger
                                placement="bottom"
                                overlay={<Tooltip key={movie.id} id="movie2">{movie.title}</Tooltip>}
                                key={getRandomArbitrary(0,movie.id)}
                            >
                                <div className='col-12 col-md-3 col-lg-2' key={movie.id} id='movie2'>
                                    <div className='card mb-3'>
                                        <Link to={`/movie/${movie.id}`} className='image-movie'>
                                            <img src={IMAGE_PATH + movie.poster_path} className='card-img-top' alt={movie.title} />
                                        </Link>
                                    </div>
                                </div>
                            </OverlayTrigger>

                        )
                    })
                }
            </div>
        </>
    )
}

export default ContentWrapper;