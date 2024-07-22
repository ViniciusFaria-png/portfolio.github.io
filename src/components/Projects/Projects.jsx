import React from "react";
import '../AOSAnimations/AOSAnimations';

const Projects = () => {
    return (
        <section id='PROJETOS'className='container mx-auto mt-16 bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 lg:p-8' data-aos="fade-up">
            <div className='text-center my-7'>
              <h2 className='text-3xl font-bold my-5 dark:text-slate-50'>Projetos</h2>
              <p className='text-gray-600 dark:text-slate-50'>Alguns projetos que ja desenvolvi para o fortalecimento das minhas habilidades</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center col-span-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative group'>
                <div className='flex justify-center'>
                  <img className="rounded-lg object-contain  group-hover:opacity-75 transition duration-300" src={require('../../assets/img/BerserkApp.png')} alt="me"></img>
                </div>
                <div className='text-center'>
                  <p className='font-bold text-slate-950 dark:text-slate-50'>Berserk App</p>
                  <p className="text-slate-950 dark:text-slate-50 ">JavaScrip, HTML, CSS, Flask, Vue</p>
                  <a href='https://github.com/ViniciusFaria-png/berserkApp' target='_blank' rel="noreferrer"> 
                    <button className='my-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                      Code
                      <i class="fa-solid fa-code ml-2"></i>
                    </button>
                  </a>
                </div>
              </div>
              

              <div className='text-center col-span-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative group'>
                <div className='flex justify-center'>
                  <img className=" rounded-lg object-contain  group-hover:opacity-75 transition duration-300" src={require('../../assets/img/GameRental.png')} alt="me"></img>
                </div>
                <div className=''>
                  <p className='font-bold text-slate-950 dark:text-slate-50'>Game Rental Store</p>
                  <p className="text-slate-950 dark:text-slate-50">JavaScript, HTML, CSS, Django, Python</p>
                  <a href='https://github.com/ViniciusFaria-png/game-rental-store-django' target='_blank' rel="noreferrer"> 
                    <button className='my-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                      Code
                      <i class="fa-solid fa-code ml-2"></i>
                    </button>
                  </a>
                </div>
              </div>

              <div className='text-center col-span-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative group'>
                <div className='flex justify-center'>
                  <img className="rounded-lg object-contain  group-hover:opacity-75 transition duration-300" src={require('../../assets/img/SalesMVC.png')}alt="me"></img>
                </div>
                <div className=''>
                  <p className='font-bold text-slate-950 dark:text-slate-50' >MVC System Project</p>
                  <p className="text-slate-950 dark:text-slate-50">JavaScript, HTML, CSSC #</p>
                  <a href='https://github.com/ViniciusFaria-png/WebMvcSystem' target='_blank' rel="noreferrer"> 
                    <button className='my-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                      Code
                      <i class="fa-solid fa-code ml-2"></i>
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <a href='https://github.com/ViniciusFaria-png' target='_blank' rel="noreferrer">
                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                  Mais Projetos 
                </button>
              </a>
            </div>
          </section>
    )
}

export default Projects