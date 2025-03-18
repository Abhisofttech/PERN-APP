import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./pages/Home"
import About from "./pages/About"
import AboutId from "./pages/AboutId"
import AboutMe from "./pages/AboutMe"


function App() {
  return (
    <div >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />}>
            <Route path='AboutMe' element={<AboutMe />} />
          </Route>
          <Route path='/contact/:Id' element={<AboutId />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
