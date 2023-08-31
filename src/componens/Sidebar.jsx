/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import GeneroMovie from './GeneroMovie';
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


const Sidebar = ({ showSidebar }) => {

    const API_KEY = "9b2c1cf9fb118a4d3fece49469282b85"
    const MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;

    const [genero, setGenero] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        fetch(`${MOVIE_API}${API_KEY}`)
            .then((respuesta) => {
                if (respuesta.ok) {
                    return respuesta.json();
                }
            })
            .then((data) => {
                setGenero(data.genres);
            })
            .catch(error => console.log(error));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const history = useNavigate();
    function handleSearch() {
        setState(true)
        history("/?inicio=" + state);
    }

    return (
        <>
            <ul className='navbar-nav fondo-list sidebar sidebar-dark posicion-sidebar'>
                {/* <!-- Sidebar - Brand --> */}
                <button className="sidebar-brand d-flex align-items-center justify-content-center btn-inicio" onClick={handleSearch}>
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Dev.F Movie</div>
                </button>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />


                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <button className="nav-link" onClick={handleSearch}>
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span></button>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                <div className="dropdown-center">
                    <button className="dropdown-toggle btn-personalizado" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Generos
                    </button>
                    <ul className="dropdown-menu fondo-list sidebarPersonalizada">
                        {genero.map((genero) => {
                            return (
                                <>
                                    <GeneroMovie className={"dropdown-item"} id={genero.id} name={genero.name} key={genero.id} />
                                </>
                            )
                        })}

                    </ul>
                </div >



                {/* <!-- Divider --> */}
                < hr className="sidebar-divider" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}

                <div className="text-center d-md-inline" >
                    <Button
                        className='rounded-circle border-0'
                        onClick={showSidebar}
                        id="sidebarToggle"
                    >
                    </Button>
                </div >
            </ul >
        </>
    )
}

export default Sidebar;

