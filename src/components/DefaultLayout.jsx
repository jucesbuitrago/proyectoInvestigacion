import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import entrada from "../assets/images/entrada.png";
import { Outlet } from 'react-router-dom';

export default function DefaultLayout() {
  const { user, token, setUser, setToken } = useStateContext();
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  if (!token) {
    return <Navigate to="/proyectoInvestigacion/auth/login" />;
  }

  const onLogout = (ev) => {
    ev.preventDefault();
    axiosClient.get("/logout").then(() => {
      setUser(null);
      setToken(null);
      navigate("/proyectoInvestigacion/auth/login"); // Redirige después del logout
    });
  };

  useEffect(() => {
    axiosClient.get("/user").then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div className="bg-gray-50 font-sans min-h-screen">
      {/* Encabezado */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">
        <div className="flex items-center">
          <button className="text-2xl">☰</button>
        </div>
        <div className="flex items-center">
          <span className="mr-2">Hola {user?.name || "Usuario"}</span>
          <img
            src="https://unavatar.io/s0yValen"
            alt="User Image"
            className="w-10 h-10 rounded-full"
          />
        </div>
      </header>

      {/* Contenido Principal */}
      <main className="pb-20 overflow-auto">
        {/* Banner */}
        <div className="mb-4">
          <img
            src={entrada}
            alt="Fiesta Halloween"
            className="w-full rounded-lg shadow-md"
          />
        </div>

        {/* Notificación de Tickets */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4 border">
          <p className="font-bold">Aún tienes disponible algunos tickets</p>
          <p className="text-gray-600">Puedes agregar a un máximo de 3 personas.</p>
        </div>

        {/* Lista de Invitados */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex items-center">
          <div className="bg-gray-200 rounded-full mr-4">
            <img
              src="https://unavatar.io/hellboy"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">Sara Vargas</p>
            <p className="text-gray-600">C.C 65.750.323</p>
            <p className="text-gray-600">Silla K11</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow-sm mb-4 flex items-center">
          <div className="bg-gray-200 rounded-full mr-4">
            <img
              src="https://unavatar.io/goku"
              alt="User Avatar"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div>
            <p className="font-bold">Samalito Vargas</p>
            <p className="text-gray-600">C.C 1005.750.323</p>
            <p className="text-gray-600">Silla K12</p>
          </div>
        </div>

        {/* Botón para agregar más invitados */}
        <div className="flex justify-center fixed bottom-20 w-full">
          <button
            onClick={() => navigate("/proyectoInvestigacion/app/add-guest")}     // Navega a la ruta /app/add-guest
            className="bg-white p-4 rounded-full shadow-md border border-red-500 text-red-500"
          >
            +
          </button>
        </div>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="flex justify-around items-center bg-white p-4 shadow-md fixed bottom-0 w-full">
        <button className="text-3xl text-gray-400 btn-logout" onClick={onLogout}>🏠</button>
        <button className="text-3xl text-black">🔖</button>
        <button className="text-3xl text-black">👜</button>
        <button className="text-3xl text-black">🔔</button>
      </footer>
    </div>
  );
}
