import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import AppLayout from "./layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Loader from "./components/ui/Loader";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Projects = lazy(() => import("./pages/Projects"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Contact = lazy(() => import("./pages/Contact"));

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout/>,
      errorElement: <ErrorPage/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: "about",
          element: <About/>
        },
        {
          path: "projects",
          element: <Projects/>
        },
        {
          path: "testimonials",
          element: <Testimonials/>
        },
        {
          path: "contact",
          element: <Contact/>
        }
      ]
    }
  ])


const App = () =>{


  return (
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router}/>
    </Suspense>
  )
}

export default App;