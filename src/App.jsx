// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router";
import { useState } from "react";

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
import ProtectorRutas from "./components/routes/ProtectorRutas";

const App = () => {
  // Estado global simple para la sesión del usuario
  // Por defecto: NO está logueado
  const [usuarioLogueado, setUsuarioLogueado] = useState(false);

  return (
    <BrowserRouter>
      {/* CONTENEDOR GENERAL DEL LAYOUT */}
      <div className="app-wrapper">
        {/* NAV */}
        <Menu
          usuarioLogueado={usuarioLogueado}
          setUsuarioLogueado={setUsuarioLogueado}
        />

        {/* ESTE main ES EL QUE SE ESTIRA Y EMPUJA EL FOOTER HACIA ABAJO */}
        <main className="app-main container my-4">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/detalle/:id" element={<DetallePelicula />} />

            {/* Login recibe el setter para poder marcar al usuario como logueado */}
            <Route
              path="/login"
              element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
            />

            <Route path="/registro" element={<Registro />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca" element={<AcercaNosotros />} />

            {/* RUTA PROTEGIDA */}
            <Route
              path="/administrador"
              element={
                <ProtectorRutas usuarioLogueado={usuarioLogueado} />
              }
            >
              {/* Ruta hija: solo se ve si ProtectorRutas deja pasar */}
              <Route index element={<AdminPeliculas />} />
            </Route>

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
