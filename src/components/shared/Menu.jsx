import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";

const Menu = ({ usuarioLogueado, setUsuarioLogueado }) => {
  const navigate = useNavigate();

const handleLogout = () => {
  setUsuarioLogueado(false);
  localStorage.removeItem("usuarioLogueado"); // borra la sesión del almacenamiento local
  navigate('/');
};
  const handleLogin = () => {
    navigate('/login');
  };
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
               {usuarioLogueado ? (
              <>
                <span className="navbar-text text-white me-2">Administrador</span>
                <Button variant="outline-danger" size="sm" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button variant="outline-light" size="sm" onClick={handleLogin}>
                Login
              </Button>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
