/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

const GeneroMovie = ({name, id}) => {

    const history = useNavigate();
    function handleSearch (){
        history("/?genero=" + id);
    }

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
    return (
        <>
            <li className="nav-item" key={getRandomArbitrary(0,id)}>
                <button id="btnInscribirA" className="nav-link collapsed" onClick={handleSearch}>
                    <span>{name}</span>
                </button>
            </li>
        </>
    )
}

export default GeneroMovie;