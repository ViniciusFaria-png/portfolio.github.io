import React, {useState} from 'react';
import Project from '../Modal/Project';
import '../AOSAnimations/AOSAnimations';





const Education = () => {


    return (
        <section id='FORMAÇÃO' className='container mx-auto mt-16 bg-slate-50 dark:bg-slate-900 p-4 sm:p-6 lg:p-8'>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div className='col-span-1 mb5' data-aos="fade-right">
                <h2 
                className=' mb-5 text-3xl font-bold text-slate-950 dark:text-slate-50'>
                  Formação Acadêmica</h2>
                <img className="rounded-full w-24 h-24" src={require('../../assets/img/mackenzie.png')} alt="me"></img>
                <p className='font-bold text-slate-950 dark:text-slate-50'>Universidade Prebiteriana Mackenzie(UPM)</p>
                <p className='font-bold text-slate-950 dark:text-slate-50'>Bacharelado em Ciência da Computação</p>
                <p className='text-slate-950 dark:text-slate-50'>Janeiro de 2020 - Julho de 2024</p>
                <button onClick={() => {}} className='mt-5'>
                    <Project title={'Contéudo'} details={<p>Durante minha graduação, estudei disciplinas essenciais como Algoritmos e Programação, Circuitos Eletrônicos, e Fundamentos de Ciência da Computação. 
                      Avancei para áreas como Álgebra Booleana, Estruturas de Dados, Modelagem Matemática, e Organização de Computadores. 
                      Explorei também Engenharia de Software, Computação Paralela, Redes de Computadores, e Linguagens Formais. 
                      Além disso, estudei Inteligência Artificial, Ciência de Dados, e interação humano-computador. 
                      Essas disciplinas me proporcionaram uma base sólida em diversas áreas da computação, preparando-me tanto para desafios técnicos quanto para inovação e empreendedorismo na tecnologia da informação.
                      </p>}>
                      </Project>
                </button>
              </div>
              <div className='col-span-1 mb-1' data-aos="fade-left">
                <h2 data-aos="fade-up " 
                  className='mb-5 text-3xl font-bold text-slate-950 dark:text-slate-50'>
                    Certificações
                </h2>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='col-span-1 mb-1'>
                    <img className="rounded-full w-24 h-24 border-2 border-purple-900 shadow-lg shadow-purple-900/50 object-contain" src={require('../../assets/img/cambridge.png')} alt="me"></img>
                    <p className='font-bold text-sm text-slate-950 dark:text-slate-50'>B2 First(First Certificate in English)</p>
                    <p className='text-xs text-slate-950 dark:text-slate-50'>Julho de 2018</p>
                  </div>
                  <div className='col-span-1'>
                    <img className="rounded-full w-24 h-24 border-2 border-purple-900 shadow-lg shadow-purple-900/50 object-contain" src={require('../../assets/img/google.jpg')} alt="me"></img>
                    <p className='font-bold text-sm text-slate-950 dark:text-slate-50'>Google Cloud Computing Fundamentals</p>
                    <p className='text-xs text-slate-950 dark:text-slate-50'>Novembro de 2022</p>
                  </div>
                  <div className='col-span-1'>
                    <img className="rounded-full w-24 h-24 border-2 dark:bg-white border-purple-900 shadow-lg shadow-purple-900/50 object-contain" src={require('../../assets/img/udemy.png')} alt="me"></img>
                    <p className='font-bold text-sm text-slate-950 dark:text-slate-50'>C# Completo POO + Projetos</p>
                    <p className='text-xs text-slate-950 dark:text-slate-50'>Novembro de 2022</p>
                  </div>
                  <div className='col-span-1'>
                    <img className="rounded-full w-24 h-24 border-2 border-purple-900 shadow-lg shadow-purple-900/50 object-contain" src={require('../../assets/img/dio.jpg')} alt="me"></img>
                    <p className='font-bold text-sm text-slate-950 dark:text-slate-50'>Santander Bootcamp 2023 - Fullstack Java + Angular</p>
                    <p className='text-xs text-slate-950 dark:text-slate-50'>Outubro de 2023</p>
                  </div>
                </div>              
              </div>
            </div>
          </section>
    )
}

export default Education
