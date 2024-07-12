import React, {useState} from 'react';
import Project from '../Modal/Project';

const Education = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {
      setModalOpen(true);
    };

    return (
        <section id='Formacao' className='container mx-auto mt-16 bg-slate-50'>
            <div>
              <h2 className='text-3xl font-bold'>Formação Acadêmica</h2>
            </div>
            <div className='mt-2 grid grid-cols-2 gap-4'>
              <div className='col-span-1 mb1'>
                <img className="rounded-full w-24 h-24" src="mackenzie.png" alt="me"></img>
                <p className='font-bold'>Universidade Prebiteriana Mackenzie(UPM)</p>
                <p className='font-bold'>Bacharelado em Ciência da Computação</p>
                <p>Janeiro de 2020 - Julho de 2024</p>
                <button onClick={openModal} className='mt-5'>
                    <Project title={'Contéudo'} details={<p>Durante minha graduação, estudei disciplinas essenciais como Algoritmos e Programação, Circuitos Eletrônicos, e Fundamentos de Ciência da Computação. 
                      Avancei para áreas como Álgebra Booleana, Estruturas de Dados, Modelagem Matemática, e Organização de Computadores. 
                      Explorei também Engenharia de Software, Computação Paralela, Redes de Computadores, e Linguagens Formais. 
                      Além disso, estudei Inteligência Artificial, Ciência de Dados, e interação humano-computador. 
                      Essas disciplinas me proporcionaram uma base sólida em diversas áreas da computação, preparando-me tanto para desafios técnicos quanto para inovação e empreendedorismo na tecnologia da informação.
                      </p>}>
                      </Project>
                </button>
              </div>
              <div className='col-span-1'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-1 mb1'>
                    <img className="rounded-full w-24 h-24 border-4 border-purple-500 object-contain" src="cambridge.png" alt="me"></img>
                    <p className='font-bold text-sm'>B2 First(First Certificate in English)</p>
                    <p className='text-xs'>Julho de 2018</p>
                  </div>
                  <div className='col-span-1'>
                    <img className="rounded-full w-24 h-24 border-4 border-purple-500 object-contain" src="google.jpg" alt="me"></img>
                    <p className='font-bold text-sm'>Google Cloud Computing Fundamentals</p>
                    <p className='text-xs'>Novembro de 2022</p>
                  </div>
                  <div className='col-span-1'>
                    <img className="rounded-full w-24 h-24 border-4 border-purple-500 object-contain" src="udemy.png" alt="me"></img>
                    <p className='font-bold text-sm'>C# Completo POO + Projetos</p>
                    <p className='text-xs'>Novembro de 2022</p>
                  </div>
                  <div className='col-span-1'>
                    <img className="rounded-full w-24 h-24 border-4 border-purple-500 object-contain" src="dio.jpg" alt="me"></img>
                    <p className='font-bold text-sm'>Santander Bootcamp 2023 - Fullstack Java + Angular</p>
                    <p className='text-xs'>Outubro de 2023</p>
                  </div>
                </div>              
              </div>
            </div>
          </section>
    )
}

export default Education
