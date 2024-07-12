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
      <button onClick={openModal} className='relative inline-flex items-center justify-center p-0.5 mb-2 px-4 py-2 border-2 border-purple-900 font-medium text-purple-500 rounded-lg overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 hover:text-white hover:bg-purple-500 duration-300 active:bg-violet-700 shadow-md cursor-pointer'>
        Mais detalhes
      </button>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Projeto"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            borderRadius: '10px',
            maxWidth: '500px',
            width: '100%'
          }
        }}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
        <button onClick={closeModal} className="absolute top-0 right-0 mt-2 mr-2 text-red-700">
            <i className="fa-solid fa-x transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150"></i>
        </button>
        <p>{details}</p>
      </ReactModal>
    </div>
  );
};

export default Project;
