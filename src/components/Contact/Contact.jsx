import React from "react";
import '../AOSAnimations/AOSAnimations';


const Contact = () => {

    return (
        <section id='CONTATO'className='mx-auto mt-16 bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 lg:p-8' data-aos="fade-up">
            <div className='mt-5 mx-10 my-10'>
              <h2 className='text-3xl font-bold my-5 text-slate-950 dark:text-slate-50'>Contato</h2>
              <p className=' my-5 text-slate-950 dark:text-slate-50'>Deseja discutir sobre algum projeto ou apenas dizer um olá? entre em contato!!</p>
              <p className=' my-5 text-slate-950 dark:text-slate-50'>São Paulo, Brasil</p>
              <a 
                href='https://www.linkedin.com/in/viniciusrofifaria/' 
                className='inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-zinc-950' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
              <a 
                href='https://github.com/ViniciusFaria-png' 
                className='ml-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-full text-white bg-gray-600 hover:bg-zinc-950' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <i class="fa-brands fa-github"></i>
              </a>
              <a 
                href='mailto:vinicius.f4ria@gmail.com' 
                className='ml-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-full text-white bg-red-600 hover:bg-zinc-950' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <i class="fa-solid fa-envelope"></i>
              </a>
              <a 
                href='https://stackoverflow.com/users/19990372/viga' 
                className='ml-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-full text-white bg-orange-600 hover:bg-zinc-950' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <i class="fa-brands fa-stack-overflow"></i>
              </a>
              <a 
                href='https://medium.com/@tioviga' 
                className='ml-1 inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-full text-white bg-zinc-600 hover:bg-zinc-950' 
                target='_blank' 
                rel='noopener noreferrer'
              >
                <i class="fa-brands fa-medium"></i>
              </a>
            </div>
            <div className='text-center'>
            </div>
          </section>
    )
}

export default Contact