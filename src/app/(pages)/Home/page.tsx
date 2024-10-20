"use client"
import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import bikeVerde from "../../../public/bikeVerde.png";
import correrVerde from "../../../public/correrVerde.png";
import lerVerde from "../../../public/livrosVerde.png";
import treinarVerde from "../../../public/treinarVerde.png";

const Home = () => {
  const router = useRouter();

  const [tasks, setTasks] = useState({
    beberAgua: false,
    ler: false,
    agachamentos: false,
    flexoes: false,
  });

  const handleTaskClick = (taskName) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks, [taskName]: !prevTasks[taskName] };

      const allTasksCompleted = Object.values(updatedTasks).every(Boolean);
      if (allTasksCompleted) {
        router.push("/parabens");
      }

      return updatedTasks;
    });
  };

  return (
    <div className="flex flex-col justify-center m-auto max-w-sm items-center bg-white h-screen p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <div className="w-full flex justify-between items-center mb-6">
          <button className="text-green-800 text-3xl">&#9776;</button>
          <h1 className="text-3xl font-bold text-green-800">TAREFAS</h1>
          <span></span>
        </div>

        <div className="mt-4 w-full space-y-4">
          <div
            className={`flex items-center p-4 border-2 rounded-full shadow-md ${
              tasks.beberAgua ? "bg-green-200 border-green-800" : "bg-white"
            }`}
            onClick={() => handleTaskClick("beberAgua")}
          >
            <Image
              src={correrVerde}
              alt="Correr"
              width={24}
              height={24}
              className="w-8 h-8"
            />
            <div className="ml-4 text-left">
              <h2 className="text-lg font-semibold text-green-800">
                Beber 300ml de água
              </h2>
              <p className="text-sm text-green-600">
                Um copo cheio com mais da metade de água
              </p>
            </div>
          </div>

          <div
            className={`flex items-center p-4 border-2 rounded-full shadow-md ${
              tasks.ler ? "bg-green-200 border-green-800" : "bg-white"
            }`}
            onClick={() => handleTaskClick("ler")}
          >
            <Image
              src={lerVerde}
              alt="Ler"
              width={24}
              height={24}
              className="w-8 h-8"
            />
            <div className="ml-4 text-left">
              <h2 className="text-lg font-semibold text-green-800">+5 páginas</h2>
              <p className="text-sm text-green-600">
                Leia 5 páginas de histórias atômicas. Falta pouco para terminar o
                2° capítulo
              </p>
            </div>
          </div>

          <div
            className={`flex items-center p-4 border-2 rounded-full shadow-md ${
              tasks.agachamentos ? "bg-green-200 border-green-800" : "bg-white"
            }`}
            onClick={() => handleTaskClick("agachamentos")}
          >
            <Image
              src={treinarVerde}
              alt="Agachamentos"
              width={24}
              height={24}
              className="w-8 h-8"
            />
            <div className="ml-4 text-left">
              <h2 className="text-lg font-semibold text-green-800">+5 agachamentos</h2>
              <p className="text-sm text-green-600">
                Em duas semanas você vai alcançar sua meta semanal
              </p>
            </div>
          </div>

          <div
            className={`flex items-center p-4 border-2 rounded-full shadow-md ${
              tasks.flexoes ? "bg-green-200 border-green-800" : "bg-white"
            }`}
            onClick={() => handleTaskClick("flexoes")}
          >
            <Image
              src={bikeVerde}
              alt="Flexões"
              width={24}
              height={24}
              className="w-8 h-8"
            />
            <div className="ml-4 text-left">
              <h2 className="text-lg font-semibold text-green-800">+10 flexões</h2>
              <p className="text-sm text-green-600">Aos poucos você chega lá!</p>
            </div>
          </div>
        </div>

        <button className="bg-green-800 mt-6 text-white text-4xl w-16 h-16 rounded-full shadow-lg flex items-center justify-center">
          +
        </button>
      </div>
    </div>
  );
};

export default Home;
