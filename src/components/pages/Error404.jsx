import { Container, Button } from "react-bootstrap";
import { NavLink } from "react-router";

const Error404 = () => {
  return (
    <main className="bg-dark text-light py-5">
      <Container className="text-center">
        <h1 className="display-4 mb-3">404</h1>
        <p className="mb-4">
          La página que estás buscando no existe o fue movida.
        </p>
        <Button as={NavLink} to="/" variant="light">
          Volver al inicio
        </Button>
      </Container>
    </main>
  );
};

export default Error404;
