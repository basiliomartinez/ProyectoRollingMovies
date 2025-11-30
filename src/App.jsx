// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router";
import Inicio from "./components/pages/Inicio";
import DetallePelicula from "./components/pages/DetallePelicula";
import Login from "./components/pages/Login";
import Registro from "./components/pages/Registro";
import Contacto from "./components/pages/Contacto";
import AcercaNosotros from "./components/pages/AcercaNosotros";
import AdminPeliculas from "./components/pages/AdminPeliculas";
import Error404 from "./components/pages/Error404";
import Menu from "./components/shared/Menu";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <BrowserRouter>
      {/* CONTENEDOR GENERAL DEL LAYOUT */}
      <div className="app-wrapper">
        
        {/* NAV */}
        <Menu />

        {/* ESTE main ES EL QUE SE ESTIRA Y EMPUJA EL FOOTER HACIA ABAJO */}
        <main className="app-main container my-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/detalle/:id" element={<DetallePelicula />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<AcercaNosotros />} />
            <Route path="/administrador" element={<AdminPeliculas />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>

        {/* FOOTER */}
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
