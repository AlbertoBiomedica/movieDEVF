import ContentWrapper from '../componens/contentWrapper';
// import NavPages from '../componens/navegationPages'
import { useEffect, useState } from "react"
import { useQuery } from "../hooks/useQuery";
import {useParams} from 'react-router-dom';

const Home = () => {
    const {id} = useParams();
    console.log(id)

    // Constantes para consultar a la API movidDB
    const API_KEY = "9b2c1cf9fb118a4d3fece49469282b85"
    const MOVIE_API = `https://api.themoviedb.org/3/`;

    // Constantes para manejar la busqueda mediante la url
    const query = useQuery();
    const search = query.get("search");

    console.log(search);

    // Constante para definir el limite de la paginación
    let limit = 2;

    // constantes de estados para controla la paginación y guardar las peliculas traidas de la API
    const [movies, setMovies] = useState([]);
    const [offset, setOffset] = useState(1);


    useEffect(() => {
        grupoMovies(offset, limit);

        return() => setMovies([]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search])

    // Funciones para consultar las pelicualas de la api
    function traerMovie(id) {
        const searchUrl = search
            ? "search/movie?query=" + search
            : `movie/popular?&page=${id}`;
            fetch(`${MOVIE_API}${searchUrl}&api_key=${API_KEY}`)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                }
            })
            .then((data) => {
                setMovies(data.results)
            })
            .catch(error => console.log(error));
    }

    function grupoMovies(offset, limit) {
        for (let i = offset; i <= offset + limit; i++) {
            traerMovie(i);
        }
    }

    // Funciones para la paginación
    function pre() {
        if (offset != 1) {
            let aux = offset;
            aux -= 1;
            setOffset(aux);
            grupoMovies(offset, limit);
        }

    }

    function next() {
        let aux = offset;
        aux += 1;
        setOffset(aux)
        grupoMovies(offset, limit);
    }


    return (

        <>
            <ContentWrapper movies={movies} />
            <nav id="btnNavegacion" className="pagination p-3">
                <ul className="pagination">
                    <li className="page-item" id="previous">
                        <button className='btn btn-warning' type="button"
                            onClick={pre}>Anterior</button>
                    </li>
                    <li className="page-item" id="next">
                        <button className='btn btn-warning' type="button" onClick={next}>Siguiente</button>
                    </li>
                </ul>
            </nav>
        </>
    )


}

export default Home;