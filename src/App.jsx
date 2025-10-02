import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./components/Home"
import Error from "./components/Error"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Education from "./components/Education"
import Skills from "./components/Skills"
import Contact from "./components/Contact";
import Stars from "./components/Stars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/education",
    element: <Education />,
  },
  {
    path: "*",
    element: <Error />,
  }
]);


function App() {
 

  return (
    <>
      <RouterProvider router={router} />;
    </>
  )
}

export default App
