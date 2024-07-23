// Implementação do ReactModal
import React, { useState } from 'react';
import ReactModal from 'react-modal';

const Project = ({ title, details }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='text-center col-span-1 mb-1'>
      <button onClick={openModal} className='mx-2 md:mx-4 relative inline-flex items-center justify-center p-0.5 mb-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md cursor-pointer'>
        Mais detalhes
      </button>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Projeto"
        className="fixed inset-0 flex items-center justify-center p-4"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      >
        <div className="relative bg-white dark:bg-slate-800 rounded-lg shadow-lg max-w-full md:max-w-2xl w-full p-6">
          <button onClick={closeModal} className="absolute top-2 right-2 text-red-700">
            <i className="fa-solid fa-x transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150"></i>
          </button>
          <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
          <p>{details}</p>
        </div>
      </ReactModal>
    </div>
  );
};

export default Project;
