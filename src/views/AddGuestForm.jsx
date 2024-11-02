import { useNavigate } from "react-router-dom";

function AddGuestForm() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 flex flex-col h-screen">
      {/* Header */}
      <div className="bg-white shadow-md p-4 flex items-center">
        <button onClick={() => navigate(-1)} className="mr-4 text-lg">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
          </svg>
        </button>
        <div>
          <h1 className="font-semibold">Fiesta Halloween</h1>
          <p className="text-sm text-gray-600">Palo Alto</p>
        </div>
      </div>

      {/* Registration Form */}
      <div className="flex-grow p-4">
        <div className="flex justify-between mb-4">
          <div className="flex items-center space-x-2">
          <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.75 2.5C7.75 2.08579 7.41421 1.75 7 1.75C6.58579 1.75 6.25 2.08579 6.25 2.5V4.07926C4.81067 4.19451 3.86577 4.47737 3.17157 5.17157C2.47737 5.86577 2.19451 6.81067 2.07926 8.25H21.9207C21.8055 6.81067 21.5226 5.86577 20.8284 5.17157C20.1342 4.47737 19.1893 4.19451 17.75 4.07926V2.5C17.75 2.08579 17.4142 1.75 17 1.75C16.5858 1.75 16.25 2.08579 16.25 2.5V4.0129C15.5847 4 14.839 4 14 4H10C9.16097 4 8.41527 4 7.75 4.0129V2.5Z" fill="#DE0406"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.161 2 10.4153 2.0129 9.75H21.9871C22 10.4153 22 11.161 22 12V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V12ZM17 14C17.5523 14 18 13.5523 18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13C16 13.5523 16.4477 14 17 14ZM17 18C17.5523 18 18 17.5523 18 17C18 16.4477 17.5523 16 17 16C16.4477 16 16 16.4477 16 17C16 17.5523 16.4477 18 17 18ZM13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17ZM7 14C7.55228 14 8 13.5523 8 13C8 12.4477 7.55228 12 7 12C6.44772 12 6 12.4477 6 13C6 13.5523 6.44772 14 7 14ZM7 18C7.55228 18 8 17.5523 8 17C8 16.4477 7.55228 16 7 16C6.44772 16 6 16.4477 6 17C6 17.5523 6.44772 18 7 18Z" fill="#DE0406"></path> </g></svg>
            <span className="border border-red-600 text-red-600 rounded-md px-2 py-1">October, 31</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#DE0406"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.25C12.4142 7.25 12.75 7.58579 12.75 8V11.6893L15.0303 13.9697C15.3232 14.2626 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2626 15.3232 13.9697 15.0303L11.4697 12.5303C11.329 12.3897 11.25 12.1989 11.25 12V8C11.25 7.58579 11.5858 7.25 12 7.25Z" fill="white"></path> </g></svg>
            <span className="border border-red-600 text-red-600 rounded-md px-2 py-1">15:10</span>
          </div>
        </div>

        <h2 className="text-lg font-medium mb-4">Registro invitado #3</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Nombres</label>
            <input type="text" className="mt-1 block w-full border border-red-500 rounded-md p-2" placeholder="Paula Valentina" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Apellidos</label>
            <input type="text" className="mt-1 block w-full border border-red-500 rounded-md p-2" placeholder="Vargas Homez" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Identificación</label>
            <input type="text" className="mt-1 block w-full border border-red-500 rounded-md p-2" placeholder="C.C" />
          </div>
        </div>

        <button className="mt-4 w-full bg-black text-white py-2 rounded-md">Agregar</button>
      </div>

        {/* Footer */}
        <footer className="flex justify-around items-center bg-white p-4 shadow-md fixed bottom-0 w-full">
            <button className="text-3xl text-gray-400">🏠</button>
            <button className="text-3xl text-black">🔖</button>
            <button className="text-3xl text-black">👜</button>
            <button className="text-3xl text-black">🔔</button>
        </footer>
    </div>
  );
}

export default AddGuestForm;