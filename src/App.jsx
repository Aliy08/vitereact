import { useEffect } from "react";
import { iniJS } from "./otak";
import 'boxicons/css/boxicons.min.css';
import './App.css';

import Header from "./components/Header.jsx"
import Home from "./pages/Home.jsx";
import Service from "./components/Service.jsx";
import Skills from "./components/Skills";
import Certification from "./components/Certification.jsx";
import Timeline from "./components/Timeline.jsx";
import Contact from "./components/Contact.jsx";



function App() {
  useEffect(() => {
    iniJS();
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Service />
      <Skills />
      <Certification />
      <Timeline />
      <Contact />
    </>
  );
}

export default App;
