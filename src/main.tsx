import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import './index.css'
import ErrorPage from './pages/ErrorPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import ProjectVersal from './pages/ProjectVersal.tsx'
import ProjectShtukatur from './pages/ProjectShtukatur.tsx'
import ProjectPhonebook from './pages/ProjectPhonebook.tsx'
import ProjectGame from './pages/ProjectGame.tsx'
import ProjectContacts from './pages/ProjectContacts.tsx'
import AboutPage from './pages/AboutPage.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/project",
        element: <ProjectPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "project/versal",
        element: <ProjectVersal/>
      },
      {
        path: "project/shtukatur",
        element: <ProjectShtukatur/>
      },
      {
        path: "project/phonebook",
        element: <ProjectPhonebook/>
      },
      {
        path: "project/game",
        element: <ProjectGame/>
      },
      {
        path: "project/contacts",
        element: <ProjectContacts/>
      }
      
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
