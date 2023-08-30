import './App.css'
import Sidebar from './componens/Sidebar'
import RouterIndex from './routers/RouterIndex'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './componens/Navbar'


function App() {
  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          <Sidebar />
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Navbar />
              <RouterIndex/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
