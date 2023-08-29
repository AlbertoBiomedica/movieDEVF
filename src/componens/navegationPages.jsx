import { Link } from 'react-router-dom'

const NavPages = () => {

    function pre() {
        // if (offset != 1) {
        //     offset -= 2;
        //     pokemon.removeChildNodes(contenedorPokemons);
        //     pokemon.grupoPokemons(offset, limit);
        // }

    }

    function next() {

    }

    return (

        <>
            <nav id="btnNavegacion" className="pagination p-3">
                <ul className="pagination">
                    <li className="page-item" id="previous">
                        <Link className="page-link" >
                            <button className='btn btn-warning' type="button"
                                onClick={pre}>Anterior</button>
                        </Link>
                    </li>
                    <li className="page-item" id="next">
                        <Link className="page-link" >
                            <button className='btn btn-warning' type="button" onClick={next}>Siguiente</button>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavPages