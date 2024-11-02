import { createBrowserRouter } from 'react-router-dom';
import Login from './views/Login.jsx';
import Register from './views/Register.jsx';
import DefaultLayout from './Components/DefaultLayout.jsx';
import GuestLayout from './Components/GuestLayout.jsx';
import Users from './views/Users.jsx';
import UserForm from './views/UserForm.jsx';
import LandingPage from './views/LandingPage.jsx';
import AddGuestForm from './views/AddGuestForm.jsx';

const router = createBrowserRouter([
    {
        path: '/proyectoInvestigacion',
        element: <LandingPage />, // Define la landing page en la ruta raíz
    },
    {
        path: '/proyectoInvestigacion/app', // Cambia las rutas protegidas para que estén bajo /app
        element: <DefaultLayout />,
        children: [
            {
                path: 'users',
                element: <Users />,
            },
            {
                path: 'users/new',
                element: <UserForm key="userCreate" />
            },
            {
                path: 'users/:id',
                element: <UserForm key="userUpdate" />
            },
        ],
    },
    {
        path: '/proyectoInvestigacion/app/add-guest', // Ruta individual para el formulario de invitado
        element: <AddGuestForm />,
    },
    {
        path: '/proyectoInvestigacion/auth',
        element: <GuestLayout />,
        children: [
            {
                path: 'login',
                element: <Login />,
            },
            {
                path: 'register',
                element: <Register />,
            },
        ],
    },
]);

export default router;
