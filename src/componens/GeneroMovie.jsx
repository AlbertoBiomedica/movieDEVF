/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const GeneroMovie = ({name, id}) => {

    const history = useNavigate();
    function handleSearch (){
        history("/?genero=" + id);
    }

    return (
        <>
            <li className="nav-item" key={id}>
                <button id="btnInscribirA" className="nav-link collapsed" onClick={handleSearch}>
                    <span>{name}</span>
                </button>
            </li>
        </>
    )
}

export default GeneroMovie;