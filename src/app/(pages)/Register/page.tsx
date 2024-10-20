
import Link from "next/link";
import logo from "../../../public/logo.png";
import Image from "next/image"; 

export const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-md">
        <div className="flex justify-center mb-6">
          <Image src={logo} alt="Logo" width={50} height={50} />
        </div>
        <div className="text-center text-2xl font-bold text-green-600 mb-6">
          Cadastre-se
        </div>
        <div className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Senha"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmar senha"
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
        </div>
        <div className="mt-6">
          <button className="w-full p-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            <Link href="./interesses">
            CADASTRAR
            </Link>
          </button>
        </div>
        <div className="text-center mt-4">
          <Link href="./" className="text-green-600 hover:underline">
            Voltar para o Login!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
