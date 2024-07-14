//Implementação da barra de navegação
import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import ToggleButton from '../ToggleButton/ToggleButton';

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);


  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
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
        <nav id='navbar' className={`bg-transparent-500 dark:bg-transparent-900 fixed w-full z-20 top-0 start-0 dark:border-transparent-600 transition-all duration-300 cursor-pointer ${show ? 'translate-y-0' : '-translate-y-full'}`}>
           <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="http://localhost:3000/" className="flex text-center sm:text-center space-x-3 rtl:space-x-reverse">
            </a>
            <div className="container mx-auto flex justify-around">
              <ul className="flex p-4 md:p-2 mt-2 font-medium bg-slate-50 border-2 border-purple-900 rounded-lg bg-transparent-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 dark:bg-slate-900">
                  {['SOBRE', 'FORMAÇÃO', 'SKILLS', 'PROJETOS', 'CONTATO'].map((section, index) => (
                  <li key={index}>
                      <ScrollLink
                      to={section}
                      smooth={true}
                      duration={500 + index * 100}
                      className="block py-2 px-3 text-black dark:text-slate-50 rounded hover:bg-zinc-500 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      >
                      {section}
                      </ScrollLink>
                  </li>
                  ))}
              </ul>
              <ToggleButton />
            </div>
        </div>
      </nav>
    )
}
export default Navbar