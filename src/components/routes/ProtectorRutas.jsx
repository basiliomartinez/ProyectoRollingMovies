// src/components/routes/ProtectorRutas.jsx

import { Navigate, Outlet } from "react-router";

// Componente para proteger rutas de administrador.
// Recibe un booleano usuarioLogueado.
// Si NO está logueado -> lo llevo a /login.
// Si está logueado -> renderizo las rutas hijas (Outlet).

const ProtectorRutas = ({ usuarioLogueado }) => {
  // Si no estoy logueado
  if (!usuarioLogueado) {
    return <Navigate to="/login" replace />;
  }

  // Si soy el admin (logueado), dejo pasar
  return <Outlet />;
};

export default ProtectorRutas;