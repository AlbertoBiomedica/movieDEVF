import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Trailer from './ModalTrailer';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Link } from 'react-router-dom'




// eslint-disable-next-line react/prop-types
const Movie = ({ sidebar }) => {
    const { id } = useParams();

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 4 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

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
    const [nameActores, setNameActores] = useState([]);
    const [similarmovie, setSimilarMovie] = useState([]);

    // Constantes para el modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (keyVideo, nameVideo) => {
        setShow(true);
        setKeyVideo(keyVideo)
        setNameVideo(nameVideo)
    }

    const fetchMovie = async (id) => {
        const { data } = await axios.get(`${MOVIE_API}${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: "videos"
            }
        })

        if (data.videos && data.videos.results) {
            const trailer = data.videos.results.find(vid => vid.name === "Official Trailer")
            setVideo(trailer ? trailer : data.videos.results[0]);
        }
    }

    fetchMovie(id);

    useEffect(() => {
        fetch(`${MOVIE_API}${id}?api_key=${API_KEY}&language=es-MX`)
            .then(response => response.json())
            .then(dataJson => {
                setMovieDetails(dataJson);
                setGenero(dataJson.genres);
                setCountry(dataJson.production_countries);
                setCompanies(dataJson.production_companies);
            }
            )
            .catch(error => console.log(error));

        fetch(`${MOVIE_API}${id}/credits?api_key=${API_KEY}&language=es-MX`)
            .then(response => response.json())
            .then(dataJson => {
                setNameActores(dataJson.cast);
            }
            )
            .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [API_KEY, MOVIE_API, id]);

    useEffect(() => {
        fetch(`${MOVIE_API}${id}/credits?api_key=${API_KEY}&language=es-MX`)
            .then(response => response.json())
            .then(dataJson => {
                setNameActores(dataJson.cast);
            }
            )
            .catch(error => console.log(error));

        fetch(`${MOVIE_API}${id}/similar?api_key=${API_KEY}&language=es-MX`)
            .then(response => response.json())
            .then(dataJson => {
                setSimilarMovie(dataJson.results);
            }
            )
            .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [API_KEY, MOVIE_API, id]);



    return (
        <>
            <div className={sidebar ? 'posicion-contenedor2-movie' : 'posicion-contenedor-movie movie'}>
                <div className="card mb-3 movie-card fondoCard">
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
                                <p className="card-text" key={MovieDetails.overview}>{MovieDetails.overview}</p>
                                <p className="card-text" key={MovieDetails.tagline}><small className="text-body-secondary">{MovieDetails.tagline}</small></p>
                                <div className='d-flex justify-content-around flex-wrap pb-3'>
                                    <p className="card-text"><i className="fa-regular fa-clock fa-bounce" key={MovieDetails.runtime}></i> {MovieDetails.runtime} <span>Minutos</span> </p>
                                    <p className="card-text" key={MovieDetails.release_date}><i className="fa-solid fa-calendar-days fa-bounce"></i> {MovieDetails.release_date}</p>
                                    <p className="card-text" key={MovieDetails.vote_average}><i className="fa-solid fa-star fa-bounce"></i> {MovieDetails.vote_average}</p>
                                    <p className="card-text" key={MovieDetails.vote_count}><i className="fa-solid fa-user fa-bounce"></i> {MovieDetails.vote_count}</p>
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
                                <button className='btn btn-warning my-3' type="button" onClick={() => handleShow(Video.key, MovieDetails.title)}> <i className="fa-solid fa-play"></i> Trailer</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Actores</h3>
                <Carousel
                    responsive={responsive}
                >
                    {nameActores.map((actor) => {
                        return (
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="actor">
                                    <p>Nombre: {actor.name}</p>
                                    <p>Personaje: {actor.character}</p>
                                    <p>Rol: {actor.known_for_department}</p>
                                </Tooltip>}
                                key={actor.name}
                            >
                                <div className='contenedor-img-actor pb-3' id='actor'>
                                    <img src={IMAGE_PATH + actor.profile_path} alt={actor.name} />
                                </div>
                            </OverlayTrigger>
                        )
                    })}
                </Carousel>;

                <h3>Peliculas similares</h3>
                <Carousel
                    responsive={responsive}
                >
                    {similarmovie.map((Smovie) => {
                        return (
                            <OverlayTrigger
                                placement="right"
                                overlay={<Tooltip id="Smovie">
                                    <p>Nombre: {Smovie.title}</p>
                                </Tooltip>}
                                key={Smovie.name}
                            >
                                <div className='contenedor-img-actor pb-3' id='Smovie'>
                                    <Link to={`/movie/${Smovie.id}`} className='image-movie'>
                                        <img src={IMAGE_PATH + Smovie.poster_path} alt={Smovie.title} />
                                    </Link>
                                </div>
                            </OverlayTrigger>
                )
                    })}
            </Carousel>;

        </div >


            <Trailer show={show} handleClose={handleClose} keyVideo={keyVideo} nameVideo={nameVideo} />
        </>
    );
}

export default Movie;
