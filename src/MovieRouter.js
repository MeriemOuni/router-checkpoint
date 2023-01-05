import React from 'react'
import ContactUs from './Pages/ContactUs';
import Error from './Pages/Error';
import AboutUs from'./Pages/AboutUs';
import Home from './Pages/Home';
import {Routes , Route} from 'react-router-dom';
import NavBar from'./Components/NavBar';
import App from './App'
import Trailer from './Pages/Trailer'
import Description from './Pages/Description';
const MovieRouter = () => {
  return (
    <div>
        <NavBar />
    <Routes>
    <Route exact path="/" element = {<App/>}/>
    <Route exact path="/Home" element={<Home/>}/>
    <Route path="/Contact-Us" element={<ContactUs/>}/>
    <Route path="/*" element={<Error/>} />
    <Route path="/About-Us" element={<AboutUs/>} />
    <Route path="/Trailer/:id" element={<Trailer/>} />
    <Route path='/Description/:id' element={<Description/>}/>
    </Routes>
    </div>
  )
}

export default MovieRouter