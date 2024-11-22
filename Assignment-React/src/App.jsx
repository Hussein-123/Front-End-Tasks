import { createBrowserRouter, RouterProvider } from "react-router-dom"
import About from "./pages/About/About"
import Portfolio from "./pages/Portfolio/Portfolio"
import Contact from "./pages/Contact/Contact"
import Layout from "./components/Layout/Layout"
import Home from "./pages/Home/Home"
import Notfound from "./pages/Notfound/Notfound"

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "portfolio", element: <Portfolio /> },
        { path: "contact", element: <Contact /> },
        { path: "*", element: <Notfound /> }
      ],
    },
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
