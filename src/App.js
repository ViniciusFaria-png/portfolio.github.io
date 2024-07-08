import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'postcss';



function App() {
  // Utilizando DOM Anchor Object para download do curriculo em pdf
  const downloadButton = () =>{
    //Atribui o caminho do arquivo
    const pdfPath = 'Curriculo.pdf';
    //Cria um novo elemento ancora<a> e vincula na constante link
    const link = document.createElement("a");
    //Atribui ao href do elemento ancora<a> com o path
    link.href = pdfPath;
    //Define o download do <a>(o nome do arquivo que vai ser baixado)
    link.download = "curriculo.pdf";
    //Adiciona o elemento ancora<a> no documento
    document.body.appendChild(link);
    //Simula o clique, acionando o download do elemento no href
    link.click();
    //Remove o elemento ancora<a> do documento
    document.body.removeChild(link);
  }
  return (
    <body className='bg-white-400'> 
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:3000/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="Logo.png" width="30" height="30" className="d-inline-block align-top" alt="vigaLogo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Vinícius Faria</span>
        </a>
        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#Sobre" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-purple-500" aria-current="page">Sobre</a>
            </li>
            <li>
              <a href="#Formacao" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Formação</a>
            </li>
            <li>
              <a href="#Skills" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Skills</a>
            </li>
            <li>
              <a href="#Projetos" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Projetos</a>
            </li>
            <li>
              <a href="#Contato" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-700 md:p-0 md:dark:hover:text-purple-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contato</a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
      <main className='pt-20' >

        <section id='Home'>
          <p>
            oi
          </p>

        </section>

        <section id='Sobre'  className='w-full mx-auto mt-16 bg-violet-100'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='flex justify-center'>
              <img className="rounded-full w-96 h-96" src="Eu.jpeg" alt="me"></img>
            </div>
            <div className='space-y-4 justify-center'>
              <p className='font-bold mb-3 text-lg text-black-700 md:text-xl dark:text-black-400'>Desenvolvedor Full Stack, Bacharel em Ciência da Computação pelo Mackenzie, com amplo conhecimento em Python, Django, Java, C#, JavaScript, TypeScript, HTML, CSS, Angular, Vue, Git e bancos de dados</p>
              <p className='text-black-700 dark:text-black-400'>Tenho experiência prática em diversas tecnologias e ferramentas, como C, C++, SQL, Web Services, Node.js e microsserviços. Durante minha graduação, desenvolvi projetos utilizando metodologias ágeis, como SCRUM, o que me proporcionou habilidades em gerenciamento de projetos e trabalho em equipe.
              Disponho meu tempo para aprender novas tecnologias e aplicar esse conhecimento em projetos pessoais, sempre buscando aprimorar minhas habilidades e acompanhar as tendências do mercado.</p>
              <div className='text-center'>
                {/* <button onClick={downloadButton} className='relative inline-block px-4 py-2 border-2 border-purple-900 text-purple-500 rounded-lg overflow-hidden transition duration-300 ease-in-out hover:text-white hover:bg-purple-500 hover:border-purlpe-900 active:bg-violet-700 shadow-md'>
                  Baixar CV 
                  <FontAwesomeIcon icon={faDownload} className="ml-2" />
                </button> */}
                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                Baixar CV 
                <FontAwesomeIcon icon={faDownload} className="ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section id='Formacao' className='mx-auto mt-16'>
            <div className='text-center'>
              <h2 className='text-3x1 font-bold'>Formação</h2>
              <p className='text-gray-600'>Minha formação</p>
            </div>
          </section>

          <section id='Skills'className='mx-auto mt-16 bg-violet-100'>
            <div className='text-center'>
              <h2 className='text-3x1 font-bold'>Skills</h2>
              <p className='text-gray-600'>Skills</p>
              <div className='grid grid-cols-4 gap-4'>
                <div className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2'>Linguas</h3>
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

                <div className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2'>Front end</h3>
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

                <div className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2'>Back end</h3>
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

                <div className='col-span-1 mb-1 text-base font-medium text-black-700 dark:text-black-500 border-2 border-purple-900 rounded-lg px-4 py-2'>
                  <h3 className='font-bold mb-2'>Ferramentas</h3>
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

          <section id='Projetos'className='mx-auto mt-16'>
            <div className='text-center'>
              <h2 className='text-3x1 font-bold'>Projetos</h2>
              <p className='text-gray-600'>Projetos</p>

              <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-80 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
              Baixar CV 
              <FontAwesomeIcon icon={faDownload} className="ml-2" />
              </button>
            </div>
          </section>

          <section id='Contato'className='mx-auto mt-16 bg-violet-100'>
            <div className='text-center'>
              <h2 className='text-3x1 font-bold'>Contato</h2>
              <p className='text-gray-600'>Entre em Contato</p>
              <button></button>
            </div>
          </section>
      </main>
    </body>   
  );
};

export default App;
