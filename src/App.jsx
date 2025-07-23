import StartPage from './pages/StartPage/StartPage.jsx'
import About from './pages/About/About.jsx'
import Portfolio from './pages/Portfolio/Portfolio.jsx'
import Contact from './pages/Contact/Contact.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout/Layout.jsx'

export default function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout/>, children: [
        { path: '/', element: <StartPage /> },
        { path: '/about', element: <About /> },
        { path: '/portfolio', element: <Portfolio /> },
        { path: '/contact', element: <Contact /> },
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
