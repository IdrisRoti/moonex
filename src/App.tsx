import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom"

import Navbar from "./components/Navbar"
import Landing from "./pages/Landing"
import Footer from "./components/Footer"


function App() {
  const Layout = () => {
    return (
      <>
        <Navbar />
        <div>
          <Outlet />
        </div>
        <Footer />
      </>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Landing />
        }
      ]
    }
  ])
  return (
      <RouterProvider router={router} />
  )
}

export default App
