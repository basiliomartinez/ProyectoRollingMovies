// src/components/shared/Menu.jsx
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();

  const manejarLogout = () => {
    // apago sesión en el estado global
    setUsuarioLogueado(false);
    // limpio localStorage si lo usan
    localStorage.removeItem("usuarioLogueado");
    // vuelvo al inicio
    navigate("/");
  };

  return (
    <Navbar
      expand="lg"
      className="navbar navbar-dark"
      data-bs-theme="dark"
    >
      <Container>
        {/* BRAND */}
        <Navbar.Brand as={NavLink} to="/">
          <i className="bi bi-film me-2"></i>
          <span className="fw-bold">RollingMovies</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="ms-auto">
            {/* LINKS PÚBLICOS */}
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/contacto">
              Contacto
            </NavLink>
            <NavLink className="nav-link" to="/acerca">
              Acerca de
            </NavLink>

            {/* ZONA DERECHA: según login */}
            {usuarioLogueado ? (
              <>
                <NavLink className="nav-link" to="/administrador">
                  Admin
                </NavLink>
                <Button
                  variant="outline-light"
                  size="sm"
                  className="ms-2"
                  onClick={manejarLogout}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/registro">
                  Registro
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
