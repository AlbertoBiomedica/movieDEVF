import { Link } from 'react-router-dom'
import GeneroMovie from './GeneroMovie';
import { useEffect, useState } from "react"

const Sidebar = () => {

    const API_KEY = "9b2c1cf9fb118a4d3fece49469282b85"
    const MOVIE_API = `https://api.themoviedb.org/3/genre/movie/list?api_key=`;

    const [genero, setGenero] = useState([]);

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



    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                {/* <!-- Sidebar - Brand --> */}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon rotate-n-15">
                        <i className="fas fa-laugh-wink"></i>
                    </div>
                    <div className="sidebar-brand-text mx-3">Dev.F Movie</div>
                </Link>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider my-0" />


                {/* <!-- Nav Item - Dashboard --> */}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Home</span></Link>
                </li>

                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Heading --> */}
                <div className="sidebar-heading">
                    Interface
                </div>

                {genero.map((genero) =>{
                    return(
                        <GeneroMovie id={genero.id} name={genero.name} key={genero.id}/>
                    )
                })}


                {/* <!-- Divider --> */}
                <hr className="sidebar-divider" />

                {/* <!-- Sidebar Toggler (Sidebar) --> */}
                <div className="text-center d-none d-md-inline">
                    <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
            </ul>
        </>
    )
}

export default Sidebar;

