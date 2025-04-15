import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import MadhuriDialysis from "./components/MadhuriDialysis/MadhuriDialysis";
import ShreeNidhi from "./components/ShreeNidhi/ShreeNidhi";
import Gurukul from "./components/Gurukul/Gurukul";
import Achievements from "./components/Achievements/Achievements";
import ShradhaPublication from "./components/ShradhaPublication/ShradhaPublication";
import Founders from "./components/Founders/Founders";
import PhotoGallery from "./components/PhotoGallery/PhotoGallery";
import Contact from "./components/Contact/Contact";

function App() {


  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/activities" element={<MadhuriDialysis/>} />
       <Route path="/academy" element={<ShreeNidhi/>} />
       <Route path="/gurukul" element={<Gurukul/>} />
       <Route path="/achievements" element={<Achievements/>} />
       <Route path="/publication" element={<ShradhaPublication/>} />
       <Route path="/founders" element={<Founders/>} />
       <Route path="/photo-gallery" element={<PhotoGallery/>} />
       <Route path="/contact-us" element={<Contact/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  
    </>
  )
}

export default App
