import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import Error from "./components/Error"
import About from "./components/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Education from "./components/Education"
import Skills from "./components/Skills"



function App() {
 


  const router = createBrowserRouter(
    [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "*",
        element: <Error />
      }
    ]
  )


  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
