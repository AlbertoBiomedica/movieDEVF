import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from './ModalTrailer';


const Movie = () => {
    const {id} = useParams();

    // Constantes para la consulta y acceso a la API 
    const API_KEY = "9b2c1cf9fb118a4d3fece49469282b85";
    const MOVIE_API = `https://api.themoviedb.org/3/movie/`;
    const IMAGE_PATH = "https://image.tmdb.org/t/p/w342";

    // Constantes para la extracción de los detalles de la pelicula
    const [MovieDetails, setMovieDetails] = useState({});
    const [Genero, setGenero] = useState([]);
    const [Country, setCountry] = useState([]);
    const [Companies, setCompanies] = useState([]);
    const [Video, setVideo] = useState("");
    const [keyVideo, setKeyVideo] = useState("");
    const [nameVideo, setNameVideo] = useState("");

    // Constantes para el modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (keyVideo,nameVideo) => {
        setShow(true);
        setKeyVideo(keyVideo)
        setNameVideo(nameVideo)
    }

    useEffect(() => {
        fetch(`${MOVIE_API}${id}?api_key=${API_KEY}&language=es-ES`)
            .then(response => response.json())
            .then(dataJson => {
                console.log(dataJson)
                fetchMovie(dataJson.id);
                setMovieDetails(dataJson);
                setGenero(dataJson.genres);
                setCountry(dataJson.production_countries);
                setCompanies(dataJson.production_companies);
            }
            )
            .catch(error => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [API_KEY, MOVIE_API, id])

    const fetchMovie = async (id) => {
        const {data} = await axios.get(`${MOVIE_API}${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setVideo(trailer ? trailer : data.videos.results[0]);
        }
        // setMovie(data)
    }


    return (
        <>
            {console.log(MovieDetails.id)}
            <div className='container'>
                <div className="card mb-3 movie-card">
                    <div className="row g-0">
                        <div className="col-12 col-md-4 col-lg-3">
                            <img src={IMAGE_PATH + MovieDetails.poster_path} className="img-fluid rounded-start" alt={MovieDetails.title} />
                        </div>
                        <div className="col-12 col-md-8 col-lg-9">
                            <div className="card-body">
                                <h2 className="card-title">{MovieDetails.title}</h2>
                                {
                                    Genero.map((genero) => {
                                        return (
                                            <h6 className='movie-genero' key={genero.id}>{genero.name}</h6>
                                        )
                                    })
                                }
                                <p className="card-text">{MovieDetails.overview}</p>
                                <p className="card-text"><small className="text-body-secondary">{MovieDetails.tagline}</small></p>
                                <div className='d-flex justify-content-around flex-wrap pb-3'>
                                    <p className="card-text"><i className="fa-regular fa-clock fa-bounce"></i> {MovieDetails.runtime} <span>Minutos</span> </p>
                                    <p className="card-text"><i className="fa-solid fa-calendar-days fa-bounce"></i> {MovieDetails.release_date}</p>
                                    <p className="card-text"><i className="fa-solid fa-star fa-bounce"></i> {MovieDetails.vote_average}</p>
                                    <p className="card-text"><i className="fa-solid fa-user fa-bounce"></i> {MovieDetails.vote_count}</p>
                                </div>
                                <div className='d-flex justify-content-around flex-wrap pb-3'>
                                    {
                                        Country.map((pais) => {
                                            return (
                                                <p className="card-text" key={pais.iso_3166_1}><i className="fa-solid fa-earth-americas fa-bounce"></i> {pais.name}</p>
                                            )
                                        })
                                    }
                                </div>
                                <h6>Productoras</h6>
                                <div className='d-flex justify-content-around flex-wrap pb-3'>
                                    {
                                        Companies.map((companie) => {
                                            return (
                                                <p className="card-text" key={companie.iso_3166_1}> {companie.name}</p>
                                            )
                                        })
                                    }
                                </div>
                                <button className='btn btn-warning my-3' type="button" onClick={() => handleShow(Video.key,MovieDetails.title)}> <i className="fa-solid fa-play"></i> Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
        <Trailer show={show} handleClose={handleClose} keyVideo={keyVideo} nameVideo={nameVideo} />
        </>
    );
}

export default Movie;
