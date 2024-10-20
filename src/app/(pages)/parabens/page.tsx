import React from 'react';
import Image from 'next/image';
import trofeu from '../../../public/trofeu.png'; 
import logo from '../../../public/logo.png'; 

const Parabens = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-72 h-96 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center p-6">
        <div className="mb-6">
          <Image
            src={logo}
            alt="Logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-6">Muito bem!</h1>
          <div className="flex justify-center mb-6">
            <Image src={trofeu} alt="Troféu" width={100} height={100} className="object-contain" />
          </div>
          <p className="text-lg text-gray-700 mb-6">Suas metas e tarefas foram cumpridas</p>
          <p className="text-xl font-bold text-gray-800">Volte amanhã :)</p>
        </div>
      </div>
    </div>
  );
};

export default Parabens;
