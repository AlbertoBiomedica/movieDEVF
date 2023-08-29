import { Routes, Route } from 'react-router-dom'
import Movie from '../componens/movie'
import Home from '../pages/home'

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/movie/:id' element={<Movie/>} />
            {/* <Route path='/page/:id' element={</>} /> */}
        </Routes>
    )
}

export default RouterIndex