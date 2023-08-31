/* eslint-disable react/prop-types */
import { Routes, Route } from 'react-router-dom'
import Movie from '../componens/movie'
import Home from '../pages/Home'
import { useQuery } from "../hooks/useQuery";
import { useEffect, useState } from "react"
// import Sidebar from '../componens/Sidebar'

const RouterIndex = ({sidebar}) => {

    // Constantes para manejar la busqueda mediante la url
    const query = useQuery();
    const search = query.get("search");
    const genero = query.get("genero");
    const inicio = query.get("inicio");

    const [state, setState] = useState(0);

    function detectarEstado(){

        if(search !== null){
            setState((prevPage) => prevPage + 1)
        }
        if(genero !== null){
            setState((prevPage) => prevPage + 1)
        }
        if(inicio !== null){
            setState((prevPage) => prevPage + 1)
        }
    }

    useEffect(() => {
        detectarEstado();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [genero, search])


    return (
        <Routes>
            <Route path='/' element={<Home key={state} sidebar={sidebar}/>} />
            <Route path='/movie/:id' element={<Movie sidebar={sidebar}/>} />
        </Routes>
    )
}

export default RouterIndex