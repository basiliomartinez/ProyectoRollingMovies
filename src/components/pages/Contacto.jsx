import { Container, Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

// Iconos de contacto
import {
  BsEnvelopeFill,
  BsGeoAltFill,
  BsTelephoneFill,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
  BsTwitterX,
} from "react-icons/bs";

const Contacto = () => {
  // Estado del formulario
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // Submit del formulario
  const manejarSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    alert("Tu mensaje fue enviado. ¡Gracias por contactarnos!");
  };

  // Manejar cambios
  const manejarCambio = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="container my-4 pagina-contacto">
      <h1 className="text-center mb-4">Contacto</h1>

      <Row className="g-4 justify-content-center">

        {/* FORMULARIO */}
        <Col xs={12} md={6}>
          <Card className="shadow-sm p-3">
            <Card.Title className="text-center mb-3">
              Envíanos un mensaje
            </Card.Title>

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
                  placeholder="Motivo de tu consulta"
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

              <Button className="w-100" variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Card>
        </Col>

        {/* INFORMACIÓN DE CONTACTO */}
        <Col xs={12} md={4}>
          <Card className="shadow-sm p-3">
            <Card.Title className="text-center mb-3">
              Información de contacto
            </Card.Title>

            <p>
              <BsEnvelopeFill /> contactenos@rollingmovies.com
            </p>
            <p>
              <BsTelephoneFill /> +54 9 381 333-3333
            </p>
            <p>
              <BsWhatsapp /> WhatsApp: +54 9 381 222-2222
            </p>
            <p>
              <BsGeoAltFill /> Tucumán, Argentina
            </p>

            <hr />

            <h5 className="text-center">Redes Sociales</h5>
            <div className="d-flex justify-content-center gap-3 fs-3 mt-2">
              <BsInstagram />
              <BsFacebook />
              <BsTwitterX />
            </div>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default Contacto;
