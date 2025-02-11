import React from "react";
import '../AOSAnimations/AOSAnimations';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Skills = () => {
    return (
        <section id='SKILLS'className='container mx-auto mt-16 bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 lg:p-8'>
            <div className='text-center my-7'>
              <h2 data-aos="fade-up" className='text-3xl font-bold my-5 text-slate-950 dark:text-slate-50'>Skills</h2>
              <p data-aos="fade-up" className='my-5 text-slate-950 dark:text-slate-50'>Algumas habilidades que desenvolvi durante meus estudos</p>
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div data-aos="fade-right" className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 shadow-lg shadow-purple-900/50 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2 text-slate-950 dark:text-slate-50'>Linguas</h3>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Português</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '100%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Inglês</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '80%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Espanhol</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '40%'}}></div>
                  </div>
                </div>

                <div data-aos="fade-right" className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 shadow-lg shadow-purple-900/50 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2 text-slate-950 dark:text-slate-50'>Front end</h3>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">HTML|CSS</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '100%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">JavaScript</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '70%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Tailwind</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '70%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">React</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '60%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">TypeScript</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '50%'}}></div>
                  </div>
                </div>
                

                <div data-aos="fade-left" className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 shadow-lg shadow-purple-900/50 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2 text-slate-950 dark:text-slate-50'>Back end</h3>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Python</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '90%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">SQL</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '80%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">MySQL</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '60%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">C#</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '60%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Java</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '50%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Django</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '50%'}}></div>
                  </div>
                </div>

                <div data-aos="fade-left" className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 shadow-lg shadow-purple-900/50 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2 text-slate-950 dark:text-slate-50'>Ferramentas</h3>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Git|Github</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '100%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Figma</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '100%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Visual Studio | VS Code</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '70%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Scrum</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '70%'}}></div>
                  </div>
                  <div className="mb-1 text-base font-medium text-purple-700 dark:text-purple-500">Photoshop</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-purple-600 h-2.5 rounded-full dark:bg-purple-500" style={{width: '50%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Skills