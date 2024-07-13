import React from "react";
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {

    const ArrowUpIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-15" style={{transform: "rotate(180deg)"}}>
          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      )

    return(
        <footer className='bg-slate-100 dark:bg-slate-950 text-white py-4 text-center relative'>
            <div className='container mx-auto'>
              <ScrollLink to="Home" smooth={true} duration={800} className="animate-bounce w-12 h-12 cursor-pointer inline-block">
                  <ArrowUpIcon />
              </ScrollLink>
              <p className='mt-4 text-slate-950 dark:text-slate-50'>Todos os direitos reservados</p>
            </div>
          </footer>
    )
}

export default Footer