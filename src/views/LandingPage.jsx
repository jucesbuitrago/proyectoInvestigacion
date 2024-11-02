import { Link } from 'react-router-dom';
import logoName from '../assets/images/logo-black.png';
import burbujas from '../assets/images/Burbujas.png';

function LandingPage() {
  return (
    <div className="bg-gray-100 font-sans min-h-screen">
      {/* Encabezado */}
      <header className="flex justify-between items-center p-5 bg-white shadow-md">
        <div className="flex items-center"> 
          {/* <div className="w-10 h-10 bg-gray-300 rounded-md"></div> */}
          <img src={logoName} alt="Logotipo de Tickets"/>
        </div>
        {/* <div className="text-xl font-bold">Tickets</div> */}
        <div>
          <Link to="/proyectoInvestigacion/auth/login">
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Iniciar Sesión</button>
          </Link>
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="flex flex-col lg:flex-row items-center justify-between p-10">
        {/* Información de la Izquierda */}
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Create Engaging Landing Pages</h1>
          <p className="text-gray-800 mb-6">
            Build beautiful landing pages in record time with <a href="#" className="text-blue-600">Anima’s</a> Landing Page UI kit for Figma. No code required!
          </p>
          {/* <div className="flex justify-center lg:justify-start space-x-4">
            <Link to="/auth/login">
              <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700">Get Started</button>
            </Link>
            <button className="bg-white text-green-600 border border-green-600 px-6 py-2 rounded-full hover:bg-green-100">How it works</button>
          </div> */}
        </div>

        {/* Imagen a la Derecha */}
        <div className="mt-10 lg:mt-0">
          {/* <img src="https://placehold.co/400x350" alt="Mobile Upload" className="w-full max-w-md mx-auto" /> */}
          <img src={burbujas} alt="Mobile Upload" className="w-full max-w-md mx-auto" />

        </div>
      </main>
    </div>
  );
}

export default LandingPage;
