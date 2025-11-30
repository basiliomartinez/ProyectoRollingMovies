import { Container, Form, Button } from "react-bootstrap";

const Contacto = () => {
  return (
    <main className="container my-4">
      <h1 className="mb-4">Contacto</h1>

      <Container className="col-12 col-md-8 col-lg-6">
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Tu nombre" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@correo.com" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control as="textarea" rows={4} />
          </Form.Group>

          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </Container>
    </main>
  );
};

export default Contacto;
