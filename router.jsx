import { createBrowserRouter } from 'react-router-dom';
import Landing_Page from './Paginas/Landing_Page';
import LoginPage from './Paginas/LoginPage';
import RegisterPage from './Paginas/RegisterPage';
import HomePage from './Paginas/HomePage';


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
  }
]);
