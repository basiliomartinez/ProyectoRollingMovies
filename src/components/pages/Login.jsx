import { Container, Form, Button } from "react-bootstrap";

const Login = () => {
  const manejarSubmit = (e) => {
    e.preventDefault(); // solo para que no recargue la página en el maquetado
  };

  return (
    <main className="container my-4">
      <h1 className="mb-4">Login</h1>
      <Container className="col-12 col-md-6">
        <Form onSubmit={manejarSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email o usuario</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@correo.com" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>

          <div className="mb-3">
            <Button variant="link" className="p-0">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>

          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Login;
