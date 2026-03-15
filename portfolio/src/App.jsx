import React from "react";
import Modals from "./components/Modals";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";


function App() {
  return (
    <> 
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/servicios" element={<Services />}/>
      <Route path="/acerca" element={<About />}/>
      <Route path="/contacto" element={<Contact />}/>
    </Routes>
      <Modals />      
    </BrowserRouter>      
       
    </>
  );
}

export default App;