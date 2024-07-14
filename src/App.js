import './App.css';
import React, { useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactModal from 'react-modal';
import Navbar from './components/Navigation/Navigation';
import Education from './components/Education/Education';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';
import AOS from 'aos';
import 'aos/dist/aos.css';


ReactModal.setAppElement('#root');





function App() {
  const ArrowDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
    </svg>
  )

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  
  return (
    <body id='Home' className='bg-slate-50 dark:bg-slate-900'>
      
      <div className="relative h-screen overflow-hidden">
        <img
          src="bg.jpg"
          alt="img-pc"
          className="absolute inset-0 object-cover w-full h-full"
        />

        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col items-center sm:text-center justify-center text-white p-4 sm:p-8">
          <h1 className="text-5xl font-bold mb-4 sm:mb-8">More human than human</h1>
          <h2 className="text-3xl font-bold mb-4 sm:mb-8">Bem-Vindo ao Meu Portfolio</h2>
          <ScrollLink to="SOBRE" smooth={true} duration={500} className="animate-bounce w-12 h-12 cursor-pointer">
            <ArrowDownIcon />
          </ScrollLink>


        </div>
      </div> 
      <Navbar/>
      <main>
        <About/>
        <Education/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </body>   
  );
};
export default App;
