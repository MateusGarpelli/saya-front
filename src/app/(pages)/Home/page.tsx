"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import correrVerde from "../../../public/correrVerde.png";
import lerVerde from "../../../public/livrosVerde.png";
import treinarVerde from "../../../public/treinarVerde.png";
import logo from "../../../public/logo.png";
import mais from "../../../public/mais.png";

export default function Home() {
  const router = useRouter();

   const levelDefs = [
    { name: 'Desafiador', icon: '👑', min: 700 },
    { name: 'Grão Mestre', icon: '🚩', min: 600 },
    { name: 'Mestre', icon: '🎖️', min: 500 },
    { name: 'Diamante', icon: '💎', min: 400 },
    { name: 'Platina', icon: '🏆', min: 300 },
    { name: 'Ouro', icon: '🥇', min: 200 },
    { name: 'Prata', icon: '🥈', min: 100 },
    { name: 'Bronze', icon: '🥉', min: 0 },
  ];

  // Tarefas fixas
  const fixedTasks = [
    { key: 'beberAgua', img: correrVerde, titulo: 'Beber 300ml de água', desc: 'Um copo cheio com mais da metade de água' },
    { key: 'flexoes', img: treinarVerde, titulo: '+10 flexões', desc: 'Aos poucos você chega lá!' },
    { key: 'ler', img: lerVerde, titulo: '+5 páginas', desc: 'Leia 5 páginas de histórias atômicas. Falta pouco para terminar o 2° capítulo' },
    { key: 'agachamentos', img: treinarVerde, titulo: '+5 agachamentos', desc: 'Em duas semanas você vai alcançar sua meta semanal' },
  ];

  // Estados
  const [tasks, setTasks] = useState(
    fixedTasks.reduce((acc, t) => ({ ...acc, [t.key]: false }), {})
  );
  const [tarefasExtras, setTarefasExtras] = useState([]);
  const [extrasConcluidas, setExtrasConcluidas] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarPicker, setMostrarPicker] = useState(false);
  const [novaTarefa, setNovaTarefa] = useState({ titulo: "", descricao: "", icone: "" });
  const [pontos, setPontos] = useState(0);
  const [ofensiva, setOfensiva] = useState(0);
  const [level, setLevel] = useState(levelDefs[levelDefs.length - 1]);

  // Carregar dados
  useEffect(() => {
    const pts = parseInt(localStorage.getItem("pontos")) || 0;
    setPontos(pts);
    setOfensiva(parseInt(localStorage.getItem("ofensiva")) || 0);
    // calcula nível inicial
    updateLevel(pts);
  }, []);

  const updateLevel = (pts) => {
    const lvl = levelDefs.find(ld => pts >= ld.min);
    setLevel(lvl);
  };

  // Verifica se tudo concluído
  const todasConcluidas = (fixed, extras) => {
    const fixasOk = Object.values(fixed).every(Boolean);
    const extrasOk = extras.length ? extras.every(Boolean) : true;
    return fixasOk && extrasOk;
  };
  const [nivel, setNivel] = useState("Bronze");
useEffect(() => {
  if (pontos >= 200) setNivel("Ouro");
  else if (pontos >= 100) setNivel("Prata");
  else setNivel("Bronze");
}, [pontos]);
  // Incrementa ofensiva uma vez por dia
  const tryIncrementOffensiva = () => {
    const hoje = new Date().toDateString();
    const lastFull = localStorage.getItem("lastFullCompletion");
    if (hoje !== lastFull) {
      const novaOf = ofensiva + 1;
      setOfensiva(novaOf);
      localStorage.setItem("ofensiva", novaOf);
      localStorage.setItem("lastFullCompletion", hoje);
    }
  };
  

  // Progresso
  const totalCount = fixedTasks.length + tarefasExtras.length;
  const completedFixed = Object.values(tasks).filter(Boolean).length;
  const completedExtras = extrasConcluidas.filter(Boolean).length;
  const percent = totalCount > 0 ? Math.round(((completedFixed + completedExtras) / totalCount) * 100) : 0;

  // Handlers
  const handleTaskClick = (nome) => {
    const updated = { ...tasks, [nome]: !tasks[nome] };
    setTasks(updated);
    if (!tasks[nome]) {
      const novosPontos = pontos + 10;
      setPontos(novosPontos);
      localStorage.setItem("pontos", novosPontos);
    }
    if (todasConcluidas(updated, extrasConcluidas)) {
      tryIncrementOffensiva();
      router.push("/parabens");
    }
  };

  const handleExtraClick = (idx) => {
    const arr = [...extrasConcluidas];
    arr[idx] = !arr[idx];
    setExtrasConcluidas(arr);
    if (arr[idx]) {
      const novosPontos = pontos + 10;
      setPontos(novosPontos);
      localStorage.setItem("pontos", novosPontos);
    }
    if (todasConcluidas(tasks, arr)) {
      tryIncrementOffensiva();
      router.push("/parabens");
    }
  };

  const adicionarTarefa = () => {
    if (!novaTarefa.titulo) return;
    setTarefasExtras([...tarefasExtras, novaTarefa]);
    setExtrasConcluidas([...extrasConcluidas, false]);
    setNovaTarefa({ titulo: "", descricao: "", icone: "" });
    setMostrarModal(false);
    setMostrarPicker(false);
  };

  return (
    <div className="relative flex flex-col items-center bg-white h-screen p-4 overflow-auto">

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <Image src={logo} alt="Logo" width={48} height={48} />
          <h1 className="ml-10 text-2xl font-bold text-green-800">TAREFAS</h1>
      <div className=" text-green-700 font-semibold text-right">
        <p>🔥 Ofensiva: {ofensiva}</p>
        <p>🏆 Pontos: {pontos}</p>
        <p>{level.icon} Nível: {level.name}</p>
      </div>
          <span />
        </div>

        <div className="mb-6">
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div className="bg-green-600 h-4 rounded-full" style={{ width: `${percent}%` }} />
          </div>
          <p className="text-center text-sm text-green-700 mt-1">{percent}% concluído</p>
        </div>

        <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
          {fixedTasks.map((t) => (
            <div
              key={t.key}
              className={`flex items-center p-4 border-2 rounded-full shadow-md cursor-pointer ${
                tasks[t.key] ? 'bg-green-200 border-green-800' : 'bg-white'
              }`}
              onClick={() => handleTaskClick(t.key)}
            >
              <Image src={t.img} alt={t.titulo} width={24} height={24} />
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-green-800">{t.titulo}</h2>
                <p className="text-sm text-green-600">{t.desc}</p>
              </div>
            </div>
          ))}

          {tarefasExtras.map((t, i) => (
            <div
              key={i}
              className={`flex items-center p-4 border-2 rounded-full shadow-md cursor-pointer ${
                extrasConcluidas[i] ? 'bg-green-200 border-green-800' : 'bg-white'
              }`}
              onClick={() => handleExtraClick(i)}
            >
              <div className="text-2xl">{t.icone}</div>
              <div className="ml-4">
                <h2 className="text-lg font-semibold text-green-800">{t.titulo}</h2>
                <p className="text-sm text-green-600">{t.descricao}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Botão + */}
        <div className="flex justify-end mt-4">
          <Image src={mais} alt="Adicionar" width={56} height={56} className="cursor-pointer" onClick={() => setMostrarModal(true)} />
        </div>

        {/* Modal */}
        {mostrarModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
              <h2 className="text-lg font-bold mb-4 text-green-700">Adicionar Hábito</h2>
              <input
                type="text"
                placeholder="Título"
                value={novaTarefa.titulo}
                onChange={(e) => setNovaTarefa({ ...novaTarefa, titulo: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Descrição"
                value={novaTarefa.descricao}
                onChange={(e) => setNovaTarefa({ ...novaTarefa, descricao: e.target.value })}
                className="w-full mb-2 p-2 border rounded"
              />
              <div className="mb-2 relative">
                <button
                  type="button"
                  onClick={() => setMostrarPicker(!mostrarPicker)}
                  className="w-full flex justify-between items-center p-2 border rounded bg-gray-100"
                >
                  {novaTarefa.icone || 'Escolher emoji'}
                  <span>▼</span>
                </button>
                {mostrarPicker && (
                  <div className="grid grid-cols-6 gap-2 mt-2 max-h-40 overflow-y-auto absolute bg-white p-2 border rounded shadow-lg z-10">
                    {['💪','📖','🏃‍♂️','🧘','💧','☕','🛏️','📚','🎯','🚴‍♀️','🎵','🖋️'].map((emoji) => (
                      <button
                        key={emoji}
                        type="button"
                        className="text-2xl"
                        onClick={() => {
                          setNovaTarefa({ ...novaTarefa, icone: emoji });
                          setMostrarPicker(false);
                        }}
                      >
                        {emoji}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex justify-between">
                <button onClick={() => { setMostrarModal(false); setMostrarPicker(false); }} className="text-red-500 hover:underline">Cancelar</button>
                <button onClick={adicionarTarefa} className="bg-green-700 text-white px-4 py-1 rounded hover:bg-green-800">Adicionar</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
