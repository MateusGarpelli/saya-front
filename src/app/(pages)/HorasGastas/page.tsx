"use client"
import React, { useState } from "react";
import Image from "next/image"; 
import logo from "../../../public/logo.png"; 
import Link from "next/link";

const HorasGastas = () => {
  const [selectedTime, setSelectedTime] = useState("1h - 3h");

  const times = ["1h - 3h", "4h - 6h", "7h - 9h", "10h - 12h", "13h - 15h", "+16h"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {/* Simulação de modal */}
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="Logo" className="w-12 mb-5" />
          <h2 className="text-lg font-bold mb-5 text-green-600">
            Horas gastas diariamente no celular
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {times.map((time) => (
              <button
                key={time}
                className={`w-32 h-16 border-2 rounded-lg font-bold transition-colors duration-300 ${
                  selectedTime === time
                    ? "bg-green-800 text-white border-green-800 font-bold"
                    : "bg-white text-green-800 border-green-800 font-bold"
                }`}
                onClick={() => setSelectedTime(time)}
              >
                {time}
              </button>
            ))}
          </div>
          <button className="w-32 h-10 bg-green-800 text-white rounded-lg font-bold hover:bg-green-600">
            <Link href="./reducao">
              Continuar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorasGastas;
