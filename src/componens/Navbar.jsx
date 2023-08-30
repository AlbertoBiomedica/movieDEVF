import { useEffect, useState } from "react"
import { useQuery } from "../hooks/useQuery";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
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
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                {/* <!-- Sidebar Toggle (Topbar) --> */}
                <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                    <i className="fa fa-bars"></i>
                </button>

                {/* <!-- Topbar Search --> */}
                <form onSubmit={handleSubmit}
                    className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                    <div className="input-group">
                        <input type="text" className="form-control bg-light border-0 small" placeholder="Buscar pelicula"
                            aria-label="Search" aria-describedby="basic-addon2"
                            value={searchText}
                            onChange={handleSearch}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                                <i className="fas fa-search fa-sm"></i>
                            </button>
                        </div>

                    </div>
                </form>

                {/* <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">

                    {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="fas fa-search fa-fw"></i>
                        </a>
                        {/* <!-- Dropdown - Messages --> */}
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small"
                                        placeholder="Search for..." aria-label="Search"
                                        aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    {/* <div className="topbar-divider d-none d-sm-block"></div> */}

                </ul>

            </nav>

        </>
    )
}

export default Navbar;