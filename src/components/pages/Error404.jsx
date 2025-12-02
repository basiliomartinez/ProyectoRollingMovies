import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router";
import "../../error404.css";

const Error404 = () => {
  return (
    <main className="pagina-404 d-flex justify-content-center align-items-center">
      <Container className="text-center">
        <h1 className="titulo-404">404</h1>
        <p className="descripcion-404">
          Ups... la página que buscás no fue encontrada.
        </p>

        <Button as={NavLink} to="/" className="btn-404">
          Volver al inicio
        </Button>
      </Container>
    </main>
  );
};

export default Error404;
