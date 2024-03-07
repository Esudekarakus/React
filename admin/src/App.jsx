import Logo from "./components/Logo"
import { Nav } from "./components/Nav"
import About from "./pages/About"
import Login from "./pages/Login"
import Products from "./pages/Products"
import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from "./pages/ProtectedRoute";
import { AuthContextProvider } from "./contexts/AuthContext"
import { BtnLogout } from "./components/BtnLogout"

function App() {


  return (
    <AuthContextProvider>
      <header>
        <Logo />

        <Nav />


        <BtnLogout />
      </header>
      <main>
        <Routes>

          { /* Protection */}
          <Route path="/" element={<ProtectedRoute />}>

            <Route path="" element={<About />} />
            <Route path="ürünler" element={<Products />} />

          </Route>



          <Route path="/giriş" element={<Login />} />

          <Route path="*" element={<h2>Bu sayfa bulunamadı</h2>} />
        </Routes>







      </main>
      <footer>
        <h1>Boost-kd-18</h1>
        <p>Coding is fun?</p>
      </footer>
    </AuthContextProvider>
  )
}

export default App