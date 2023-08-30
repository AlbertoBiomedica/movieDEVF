/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'

const GeneroMovie = ({name, id}) => {

    return (
        <>
            <li className="nav-item" key={id}>
                <Link id="btnInscribirA" className="nav-link collapsed" to={`/movie/genero/${id}`}>
                    <span>{name}</span>
                </Link>
            </li>
        </>
    )
}

export default GeneroMovie;