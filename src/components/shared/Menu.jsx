import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router";

const Menu = () => {
  return (
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <i className="bi bi-film me-2"></i>
          <strong>RollingMovies</strong>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-rollingmovies" />
        <Navbar.Collapse id="navbar-rollingmovies">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Inicio
            </NavLink>
            <NavLink className="nav-link" to="/contacto">
              Contacto
            </NavLink>
            <NavLink className="nav-link" to="/acerca">
              Acerca de
            </NavLink>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
            <NavLink className="nav-link" to="/registro">
              Registro
            </NavLink>
            <NavLink className="nav-link" to="/administrador">
              Admin
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
