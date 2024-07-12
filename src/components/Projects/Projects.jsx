import React from "react";

const Projects = () => {
    return (
        <section id='Projetos'className='container mx-auto mt-16 bg-slate-50'>
            <div className='text-center my-7'>
              <h2 className='text-3xl font-bold my-5'>Projetos</h2>
              <p className='text-gray-600'>Alguns projetos que ja desenvolvi para o fortalecimento das minhas habilidades</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              <div className='text-center col-span-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative group'>
                <div className='flex justify-center'>
                  <img className="rounded-lg object-contain  group-hover:opacity-75 transition duration-300" src="BerserkApp.png" alt="me"></img>
                </div>
                <div className='text-center'>
                  <div className='font-bold'>Berserk App</div>
                  <div>JavaScrip, HTML, CSS, Flask, Vue</div>
                  <a href='https://github.com/ViniciusFaria-png/berserkApp' target='_blank'> 
                    <button className='my-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                      Code
                      <i class="fa-solid fa-code ml-2"></i>
                    </button>
                  </a>
                </div>
              </div>
              

              <div className='text-center col-span-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative group'>
                <div className='flex justify-center'>
                  <img className=" rounded-lg object-contain  group-hover:opacity-75 transition duration-300" src="GameRental.png" alt="me"></img>
                </div>
                <div className=''>
                  <div className='font-bold'>Game Rental Store</div>
                  <div>JavaScript, HTML, CSS, Django, Python</div>
                  <a href='https://github.com/ViniciusFaria-png/game-rental-store-django' target='_blank'> 
                    <button className='my-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                      Code
                      <i class="fa-solid fa-code ml-2"></i>
                    </button>
                  </a>
                </div>
              </div>

              <div className='text-center col-span-1 mb-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 relative group'>
                <div className='flex justify-center'>
                  <img className="rounded-lg object-contain  group-hover:opacity-75 transition duration-300" src="SalesMVC.png" alt="me"></img>
                </div>
                <div className=''>
                  <div className='font-bold' >MVC System Project</div>
                  <div>JavaScript, HTML, CSSC #</div>
                  <a href='https://github.com/ViniciusFaria-png/WebMvcSystem' target='_blank'> 
                    <button className='my-5 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                      Code
                      <i class="fa-solid fa-code ml-2"></i>
                    </button>
                  </a>
                  
                </div>
              </div>
            </div>
            <div className='text-center mt-5'>
              <a href='https://github.com/ViniciusFaria-png' target='_blank'>
                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                  Mais Projetos 
                </button>
              </a>
            </div>
          </section>
    )
}

export default Projects