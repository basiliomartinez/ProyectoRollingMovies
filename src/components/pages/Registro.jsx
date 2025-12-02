import { Container, Form, Button } from "react-bootstrap";

const Registro = () => {
  const manejarSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <main className="container my-4">
      <h1 className="mb-4">Registro</h1>
      <Container className="col-12 col-md-8 col-lg-6">
        <Form onSubmit={manejarSubmit}>
          <Form.Group className="mb-3" controlId="regNombre">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control type="text" placeholder="Nombre y apellido" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="regEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@correo.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="regPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="regRePassword">
            <Form.Label>Repetir contraseña</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>

          <Button variant="primary" type="submit">
            Crear cuenta
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Registro;
