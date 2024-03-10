import { createBrowserRouter } from 'react-router-dom';
import Landing_Page from './Paginas/Landing_Page';
import LoginPage from './Paginas/LoginPage';
import RegisterPage from './Paginas/RegisterPage';
import HomePage from './Paginas/HomePage';
import ClubDetails_Page from './Paginas/ClubDetails_Page';
import GamesDisplay_Page from './Paginas/GamesDisplay_Page';
import UserProfile_Page from './Paginas/UserProfile_Page';


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing_Page/>
  },
  {
    path: '/login',
    Component: LoginPage,
  },
  {
    path: '/register',
    Component: RegisterPage,
  },
  {
    path: '/home',
    Component: HomePage,
  },
  {
    path: '/club',           /* En esta va la info. específica de los clubes */
    Component: ClubDetails_Page,
  },
  {
    path: '/games',              /* En esta se muestra la lista de juegos registrados + buscador */
    Component: GamesDisplay_Page,
  },
  {
    path: '/profile',             /* Esta es la página de información de usuario */ 
    Component: UserProfile_Page,
  }
]);
