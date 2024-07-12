import React, {useState} from "react";
import ReactModal from 'react-modal';
import Project from "../Modal/Project";
import '@fortawesome/fontawesome-free/css/all.min.css';
import downloadButton from "../DownloadButton/DownloadButton";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'postcss';
import { Link as ScrollLink } from 'react-scroll';


const About = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
    setModalOpen(true);
    };

    return (
        <section id='Sobre'  className='w-full mx-auto bg-slate-50'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='flex justify-center'>
              <img className="rounded-full w-96 h-96 mt-5 mb-5" src="Eu.jpeg" alt="me"></img>
            </div>
            <div className='space-y-4 '>
              <p className='font-bold mb-3 text-lg text-black-700 md:text-xl dark:text-black-400'>Desenvolvedor Full Stack, Bacharel em Ciência da Computação pelo Mackenzie, com amplo conhecimento em Python, Django, Java, C#, JavaScript, TypeScript, HTML, CSS, Angular, Vue, Git e bancos de dados</p>
              <p className='text-black-700 dark:text-black-400'>Tenho experiência prática em diversas tecnologias e ferramentas, como C, C++, SQL, Web Services, Node.js e microsserviços. Durante minha graduação, desenvolvi projetos utilizando metodologias ágeis, como SCRUM, o que me proporcionou habilidades em gerenciamento de projetos e trabalho em equipe.
              Disponho meu tempo para aprender novas tecnologias e aplicar esse conhecimento em projetos pessoais, sempre buscando aprimorar minhas habilidades e acompanhar as tendências do mercado.</p>
              <div className='text-center'>
                <button onClick={downloadButton} className='mx-10 relative inline-flex items-center justify-center p-0.5 mb-2 me-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md'>
                Baixar CV 
                <FontAwesomeIcon icon={faDownload} className="ml-2" />
                </button>
                <ScrollLink to="Contato" smooth={true} duration={800} className='mx-10 relative inline-flex items-center justify-center p-0.5 mb-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md cursor-pointer'>
                  Contate-me
                </ScrollLink>

                <button onClick={openModal}>
                  <Project title={'Mais detalhes sobre mim'} details={<p>Sou apaixonado por tecnologia desde que ganhei meu primeiro computador, quando tinha cerca de 7 anos. Sempre tive muita curiosidade sobre esse mundo, 
                    sobre como era feito um computador e como as coisas funcionavam. Devido a isso, decidi seguir a carreira de tecnologia.
                    Alguns hobbies que eu tenho, além da programação, são jogar videogames – jogo desde meus 5/6 anos e sempre amei todo esse universo. 
                    Além disso, gosto muito de cinema e definitivamente sou o maior fã de Godzilla da minha cidade.
                  </p>}>
                  </Project>
                </button>
              </div>
            </div>
          </div>
        </section>
    )
}

export default About