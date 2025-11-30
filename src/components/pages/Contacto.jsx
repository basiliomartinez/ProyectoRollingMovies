import { Container, Form, Button } from "react-bootstrap";
import { useState } from "react";

const Contacto = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  const manejarSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Tu mensaje fue enviado. ¡Gracias por contactarnos!");
  };

  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="container my-4">
      <h1 className="mb-4">Contacto</h1>

      <Container className="col-12 col-md-8 col-lg-6">
        <Form onSubmit={manejarSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              placeholder="Tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={manejarCambio}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@correo.com"
              name="email"
              value={formData.email}
              onChange={manejarCambio}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Asunto</Form.Label>
            <Form.Control
              type="text"
              placeholder="Motivo del mensaje"
              name="asunto"
              value={formData.asunto}
              onChange={manejarCambio}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              name="mensaje"
              value={formData.mensaje}
              onChange={manejarCambio}
              placeholder="Escribe tu consulta..."
            />
          </Form.Group>

          <Button variant="primary" type="submit">Enviar</Button>
        </Form>
      </Container>
    </main>
  );
};

export default Contacto;
