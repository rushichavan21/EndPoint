import React from 'react'
import "./App.css";
import Navbar from './components/Navbar/Navbar'
import WelcomeText from './components/WelcomeText/WelcomeText';
import CenterText from './components/CenterText/CenterText';
import AnimateOne from './components/AnimateOne';
import Achievements from './components/Achievements/Achievements';
import Accordian from './components/Accordian/Accordian';
import Animatetwo from './components/Animatetwo';
import PreFooter from './components/PreFooter/PreFooter';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <>
    <Navbar/>
    <WelcomeText/>
    <AnimateOne/>
    <CenterText/>
    <Achievements/>
    <Accordian/>
    <Animatetwo/>
    <PreFooter/>
    <Footer/>
    </>
  )
}

export default App