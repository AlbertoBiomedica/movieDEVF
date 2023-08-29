import { Link } from 'react-router-dom'

const Sidebar = () => {
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
                <hr className="sidebar-divider"/>

                    {/* <!-- Heading --> */}
                    <div className="sidebar-heading">
                        Interface
                    </div>

                    {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                    <li className="nav-item">
                        <a id="btnInscribirA" className="nav-link collapsed" href="inscribirse.html">
                            <span>Acción</span>
                        </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="calificacionA.html">
                            <span>Terror</span>
                        </a>
                    </li>

                    {/* <!-- Divider --> */}
                    <hr className="sidebar-divider"/>

                    {/* <!-- Sidebar Toggler (Sidebar) --> */}
                    <div className="text-center d-none d-md-inline">
                        <button className="rounded-circle border-0" id="sidebarToggle"></button>
                    </div>
            </ul>
        </>
    )
}

export default Sidebar;

