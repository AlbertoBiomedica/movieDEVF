import { useEffect, useState } from "react"
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
function Navbar({showSidebar}) {
    const query = useQuery();
    const search = query.get("search");

    const [searchText, setSearchText] = useState("");
    const history = useNavigate();

    useEffect(() => {
        setSearchText(search || "");
    }, [search]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history("/?search=" + searchText);
    };

    function handleSearch(event) {
        setSearchText(event.target.value);
    }



    return (
        <>
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow d-flex d-sm-flex posicion-navbar posicion-navbar">

                <div className='navbar px-2 mx-2 my-2'>
                    <button className='menu-bars' onClick={showSidebar}>
                        <i className="fa-solid fa-bars"></i>
                    </button>
                </div>

                {/* <!-- Topbar Search --> */}
                <form onSubmit={handleSubmit}
                    className="d-flex d-sm-flex d-md-flex my-2 navbar-search barra w-auto ">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar pelicula"
                            aria-label="Search" aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={handleSearch} />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>

                    </div>
                </form>
            </nav>

        </>
    );
}

export default Navbar;