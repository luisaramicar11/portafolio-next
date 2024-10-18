import React from 'react';
import Home from "../../../components/Home/Home";
import About from "../../../components/About";
import Services from "../../../components/Services";
import Projects from "../../../components/Portafolio";
import Contact from '../../../components/Contact/Contact';

export default function Portfolio() {
    return (
        <>
        <Home/>
        <About/>
        <Services/>
        <Projects/>
        <Contact/>
        </>
        
      );
}