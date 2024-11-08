import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage.jsx';
import { About } from './pages/About/About.jsx';
import { Contacts } from './pages/Contacts/Contacts.jsx';
import { Blog } from './pages/Blog/Blog.jsx';
import { CaseStudies } from './pages/CaseStudies/CaseStudies.jsx';
import { Services } from './pages/Services/Services.jsx';
import { Service } from './pages/Service/Service.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/aboutus',
    element: <About />,
  },
  {
    path: '/contacts',
    element: <Contacts />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/casestudies',
    element: <CaseStudies />,
  },
  {
    path: '/services',
    element: <Services />,
  },
  {
    path: '/service',
    element: <Service />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
