"use client"
import React, { useState } from "react";
import Image from "next/image"; 
import logo from "../../../public/logo.png"; 
import Link from "next/link";

const Reducao = () => {
  const [selectedReduction, setSelectedReduction] = useState("20%");

  const percentages = ["20%", "40%", "60%", "80%", "90%", "100%"];

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="flex flex-col items-center">
          <Image src={logo} alt="Logo" className="w-12 mb-5" />
          <h2 className="text-lg font-bold mb-5 text-green-600">
            Quanto busca reduzir?
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-5">
            {percentages.map((percentage) => (
              <button
                key={percentage}
                className={`w-32 h-16 border-2 rounded-lg font-bold transition-colors duration-300 ${
                  selectedReduction === percentage
                    ? "bg-green-800 text-white border-green-800 font-bold"
                    : "bg-white text-green-800 border-green-800 font-bold"
                }`}
                onClick={() => setSelectedReduction(percentage)}
              >
                {percentage}
              </button>
            ))}
          </div>
          <button className="w-32 h-10 bg-green-800 text-white rounded-lg font-bold hover:bg-green-600">
            <Link href="./Home">
            Terminar
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reducao;
