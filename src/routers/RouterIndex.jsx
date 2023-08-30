import { Routes, Route } from 'react-router-dom'
import Movie from '../componens/movie'
import Home from '../pages/Home'
// import Sidebar from '../componens/Sidebar'

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:id' element={<Movie/>} />
            {/* <Route path='/movie/genero/:id' element={<Home/>} /> */}
            {/* <Route path='/page/:id' element={</>} /> */}
        </Routes>
    )
}

export default RouterIndex