// src/views/Login.jsx
import { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axiosClient";
import { useStateContext } from "../contexts/contextprovider";
import logo from '../assets/images/Tickets.png';

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { setUser, setToken } = useStateContext();
  

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    axiosClient.post("/login", payload).then(({ data }) => {
      setUser(data.user);
      setToken(data.token);
    }).catch(err => {
      const response = err.response;
      if (response && response.status === 422) {
        console.log(response.data.errors);
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Left Side */}
      <div className="w-1/3 bg-gradient-to-t from-red-900 via-red-800 to-black flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-3xl font-bold mb-2">TICKETS</h1>
        {/* <p className="text-lg mb-4">GRADUADOS</p> */}
        <img src={logo} alt="Logotipo de Tickets" className="mb-6" />
        {/* <p className="text-center">Universidad del Tolima</p> */}
      </div>

      {/* Right Side */}
      <div className="w-2/3 bg-white flex flex-col justify-between p-12">
        {/* Back Button */}
        <div className="flex justify-end">
          <Link to="/proyectoInvestigacion" className="text-gray-400">Salir</Link>
        </div>

        {/* Welcome Message */}
        <div className="my-8">
          <h2 className="text-2xl font-bold mb-2">BIENVENIDO</h2>
          <p className="text-lg text-gray-600">INICIA SESIÓN PARA CONTINUAR</p>
        </div>

        {/* Login Form */}
        <form className="flex flex-col space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="flex items-center border border-gray-400 rounded p-2">
              <svg width="20px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#9E9E9E"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M21 8L17.4392 9.97822C15.454 11.0811 14.4614 11.6326 13.4102 11.8488C12.4798 12.0401 11.5202 12.0401 10.5898 11.8488C9.53864 11.6326 8.54603 11.0811 6.5608 9.97822L3 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></g>
              </svg>
              <input ref={emailRef} type="email" placeholder="example@gmail.com" className="flex-1 bg-transparent outline-none" required />
            </label>
          </div>
          <div>
            <label className="flex items-center border border-gray-400 rounded p-2">

              <svg width="20px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.1819 10.7027H6.00008C5.44781 10.7027 5.0001 11.1485 5.00009 11.7008C5.00005 13.3483 5 16.6772 5.00011 18.9189C5.00023 21.4317 8.88618 22 12 22C15.1139 22 19 21.4317 19 18.9189C19 16.6773 19 13.3483 19 11.7008C19 11.1485 18.5523 10.7027 18 10.7027H15.8182M8.1819 10.7027C8.1819 10.7027 8.18193 8.13514 8.1819 6.59459C8.18186 4.74571 9.70887 3 12 3C14.2912 3 15.8182 4.74571 15.8182 6.59459C15.8182 8.13514 15.8182 10.7027 15.8182 10.7027M8.1819 10.7027H15.8182" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M13 16.6181V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V16.6181C10.6931 16.3434 10.5 15.9442 10.5 15.5C10.5 14.6716 11.1716 14 12 14C12.8284 14 13.5 14.6716 13.5 15.5C13.5 15.9442 13.3069 16.3434 13 16.6181Z" fill="#9E9E9E"></path> </g></svg>

              <input ref={passwordRef} type="password" placeholder="********" className="flex-1 bg-transparent outline-none" required />
            </label>
          </div>
          <button type="submit" className="bg-black text-white py-2 rounded flex justify-center items-center">
            Proceder a mi cuenta
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-6 text-center">
          <Link to="/forgot-password" className="text-gray-600">¿Tiene problemas con su contraseña?</Link>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center text-gray-400 text-sm mt-8">
          <p>Copyright 2004 - 2025 Tickets. All rights Reserved</p>
          <Link to="#" className="flex items-center">
            <svg width="20px" height="16px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Warning / Help"> <path id="Vector" d="M8.19531 8.76498C8.42304 8.06326 8.84053 7.43829 9.40137 6.95899C9.96221 6.47968 10.6444 6.16501 11.373 6.0494C12.1017 5.9338 12.8486 6.02202 13.5303 6.3042C14.2119 6.58637 14.8016 7.05166 15.2354 7.64844C15.6691 8.24521 15.9295 8.95008 15.9875 9.68554C16.0455 10.421 15.8985 11.1581 15.5636 11.8154C15.2287 12.4728 14.7192 13.0251 14.0901 13.4106C13.4611 13.7961 12.7377 14.0002 12 14.0002V14.9998M12.0498 19V19.1L11.9502 19.1002V19H12.0498Z" stroke="#9E9E9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>
            ¿Necesitar ayuda?
          </Link>
        </div>
      </div>
    </div>
  );
}
