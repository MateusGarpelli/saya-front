"use client";
import Link from "next/link";
import logo from "../public/logo.png"; 
import Image from "next/image"; 
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { loginUser } from "./../services/api";

export default function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser(username, password);
      console.log('Login bem-sucedido:', response.data);

      router.push("/interesses");
    } catch (error) {
      console.error('Erro ao fazer login:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="text-center text-2xl font-bold text-green-600 mb-6">
          Entrar
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mt-6">
            <button type="submit" className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              LOGIN
            </button>
          </div>
        </form>
        <div className="text-center mt-4">
          <Link href="/Register">
            <p className="text-green-600 hover:underline">Ou crie sua conta!</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
