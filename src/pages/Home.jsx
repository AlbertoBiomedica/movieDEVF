/* eslint-disable react/prop-types */
import ContentWrapper from '../componens/contentWrapper';
import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { useQuery } from "../hooks/useQuery";
import Spiner from '../componens/spiner';

const Home = ({sidebar}) => {

    // Constantes para consultar a la API movidDB
    const API_KEY = "9b2c1cf9fb118a4d3fece49469282b85"
    const MOVIE_API = `https://api.themoviedb.org/3/`;

    const query = useQuery();
    const search = query.get("search");
    const genero = query.get("genero");
    const inicio = query.get("inicio");

    // constantes de estados para controla la paginación y guardar las peliculas traidas de la API
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);


    useEffect(() => {
        traerMovie();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search, genero, page])

    // Funciones para consultar las pelicualas de la api
    function traerMovie() {
        `movie/popular?&page=${page}`
        const searchUrl = search
            ? "search/movie?query=" + search + "&page=" + page
            : genero ?`discover/movie?with_genres=${genero}&page=${page} `: inicio? `movie/popular?&page=${page}`:`movie/popular?&page=${page}`;
        fetch(`${MOVIE_API}${searchUrl}&api_key=${API_KEY}&language=es-MX`)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                }
            })
            .then((data) => {
                setMovies((prevMovies) => prevMovies.concat(data.results));
                setHasMore(data.page < data.total_pages);
            })
            .catch(error => console.log(error));
    }


    return (
        <>
            <InfiniteScroll className={sidebar? 'posicion-contenedor2' : 'posicion-contenedor' }
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spiner/>}
            >
                <ContentWrapper movies={movies} />
            </InfiniteScroll>
        </>
    )


}

export default Home;