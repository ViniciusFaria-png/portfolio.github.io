import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ToggleButton from '../ToggleButton/ToggleButton';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  

  const toggleMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  }

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
        setMobileMenuOpen(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav id='navbar' 
      className={`bg-transparent-500 dark:bg-transparent-900 fixed w-full z-20 top-0 start-0 dark:border-transparent-600 transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex flex-wrap items-center justify-between w-full p-4">
        <a href="https://viniciusfaria-png.github.io/portfolio.github.io/" className="flex text-center sm:text-center space-x-3 rtl:space-x-reverse">
        </a>
        <div className={`lg:hidden absolute top-0 left-0 m-2 transition-transform duration-500 ${show ? 'translate-y-0' : '-translate-y-full'}`}>
          <button className="relative group" onClick={toggleMenu}>
            <div className={`relative flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-900 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md ${isMobileMenuOpen ? 'animate' : ''}`}>
              <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                <div className="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6"></div>
                <div className="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-75"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-100"></div>
              </div>
            </div>
          </button>
        </div>
        <div className="hidden md:flex w-full justify-around">
          <ul className="flex text-sm md:text-base p-1 md:p-2 mt-2 font-medium bg-slate-50 border-2 border-purple-900 rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-slate-900">
            {['SOBRE', 'FORMAÇÃO', 'SKILLS', 'PROJETOS', 'CONTATO'].map((section, index) => (
              <li key={index}>
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500 + index * 100}
                  className="cursor-pointer block py-2 px-2 md:px-3 text-black dark:text-slate-50 rounded hover:bg-zinc-500 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <ToggleButton />
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className={`fixed top-0 left-0 rounded-r-lg bg-slate-900 text-white z-40 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'top-[calc(4rem+2px)] h-auto opacity-100' : 'top-[-100%] h-0 opacity-0'} overflow-hidden`} style={{ top: '4rem' }}>
          <ul className="flex flex-col items-center mt-2">
            {['SOBRE', 'FORMAÇÃO', 'SKILLS', 'PROJETOS', 'CONTATO'].map((section, index) => (
              <li key={index} className="py-4">
                <ScrollLink
                  to={section}
                  smooth={true}
                  duration={500 + index * 100}
                  className="text-lg cursor-pointer font-bold text-white hover:bg-slate-700 hover:text-purple-800 px-4 py-2 rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section}
                </ScrollLink>
              </li>
            ))}
            <ToggleButton className={`transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'}`} />
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
