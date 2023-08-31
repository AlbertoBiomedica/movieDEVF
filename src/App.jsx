import './App.css'
import Sidebar from './componens/Sidebar'
import RouterIndex from './routers/RouterIndex'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './componens/Navbar'
import {useEffect,useState } from "react"

// 


function App() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  console.log(sidebar)

  useEffect(() => {

    showSidebar
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[sidebar])
  

  return (
    <>
      <BrowserRouter>
        <div id="wrapper">
          {sidebar ? "" : <Sidebar key={sidebar} showSidebar={showSidebar}/>}
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
            <Navbar showSidebar={showSidebar} />
              <RouterIndex sidebar={sidebar}/>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
