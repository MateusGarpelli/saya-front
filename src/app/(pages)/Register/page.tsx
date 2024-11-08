"use client";
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { registerUser } from "./../../../services/api";

export const Register = () => {
  const router = useRouter(); 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    try {
      const response = await registerUser(email, email.split('@')[0], password); 
      console.log('Registro bem-sucedido:', response.data);
      
      router.push("/interesses"); 

    } catch (error) {
      console.error('Erro ao registrar:', error);
      setError("Erro ao registrar. Tente novamente.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="text-center text-2xl font-bold text-green-600 mb-6">
          Cadastre-se
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              CADASTRAR
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link href="/" className="text-green-600 hover:underline">
            Voltar para o Login!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
