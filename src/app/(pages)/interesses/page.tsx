"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import logo from "../../../public/logo.png";
import bikeBranco from "../../../public/bikeBranco.png";
import correrBranco from "../../../public/correrBranco.png";
import lerBranco from "../../../public/lerBranco.png";
import treinarBranco from "../../../public/treinarBranco.png";
import bikeVerde from "../../../public/bikeVerde.png";
import correrVerde from "../../../public/correrVerde.png";
import lerVerde from "../../../public/livrosVerde.png";
import treinarVerde from "../../../public/treinarVerde.png";
import Link from 'next/link';

const Interesses = () => {
  const [selectedInterests, setSelectedInterests] = useState({
    treinar: false,
    ler: false,
    correr: false,
    bike: false,
  });

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) => ({
      ...prev,
      [interest]: !prev[interest],
    }));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 ">
      <div className='max-w-sm w-full bg-white p-6 rounded-lg shadow-md'>
        <div>
            <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" className="w-12 h-12" />
        </div>
        <h2 className="text-2xl text-green-600 mb-6 font-bold text-center">Quais são seus interesses?</h2>
        <div className="grid grid-cols-2 gap-3 mb-6 justify-center ">
          <div
            onClick={() => toggleInterest('treinar')}
            className={`w-20 h-20 ml-16 flex items-center justify-center border-4 rounded-lg cursor-pointer transition-colors duration-300 ${selectedInterests.treinar ? 'bg-green-800 border-green-800' : 'border-green-800 bg-white'}`}
          >
            <Image src={selectedInterests.treinar ? treinarBranco : treinarVerde} alt="Treinar" className="w-12 h-12" />
          </div>
          <div
            onClick={() => toggleInterest('ler')}
            className={`w-20 h-20 ml-4 flex items-center justify-center border-4 rounded-lg cursor-pointer transition-colors duration-300 ${selectedInterests.ler ? 'bg-green-800 border-green-800' : 'border-green-800 bg-white'}`}
          >
            <Image src={selectedInterests.ler ? lerBranco : lerVerde} alt="Ler" className="w-12 h-12" />
          </div>
          <div
            onClick={() => toggleInterest('correr')}
            className={`w-20 h-20 flex ml-16 items-center justify-center border-4 rounded-lg cursor-pointer transition-colors duration-300 ${selectedInterests.correr ? 'bg-green-800 border-green-800' : 'border-green-800 bg-white'}`}
          >
            <Image src={selectedInterests.correr ? correrBranco : correrVerde} alt="Correr" className="w-12 h-12" />
          </div>
          <div
            onClick={() => toggleInterest('bike')}
            className={`w-20 h-20 ml-4  flex items-center justify-center border-4 rounded-lg cursor-pointer transition-colors duration-300 ${selectedInterests.bike ? 'bg-green-800 border-green-800' : 'border-green-800 bg-white'}`}
          >
            <Image src={selectedInterests.bike ? bikeBranco : bikeVerde} alt="Bicicleta" className="w-12 h-12" />
          </div>
        </div>
        <div className="flex justify-center">
          <Link href="./HorasGastas" className="bg-green-800 text-white py-2 px-6 rounded-md hover:bg-green-600 font-bold">
            Continuar
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Interesses;
