import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Card,
  Modal,
} from "react-bootstrap";
import { useState } from "react";

import "../../contacto.css";

// Iconos
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
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    asunto: "",
    mensaje: "",
  });

  // === Modal ===
  const [showModal, setShowModal] = useState(false);

  // Manejar cambio en inputs
  const manejarCambio = (e) => {
    const nuevo = {
      ...formData,
      [e.target.name]: e.target.value,
    };

    setFormData(nuevo);
  }; 

  // === Validación antes de enviar ===
  const validarFormulario = () => {
    if (!formData.nombre.trim()) return "Escribe tu nombre";
    if (!formData.email.includes("@")) return "El email no es válido";
    if (!formData.asunto.trim()) return "Escribe un asunto";
    if (formData.mensaje.trim().length < 5)
      return "El mensaje debe tener al menos 5 caracteres";

    return null; 
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    const error = validarFormulario();
    if (error) {
      alert(error);
      return;
    }

    console.log("Datos enviados:", formData);

    // Mostrar modal
    setShowModal(true);

    // Limpiar formulario
    setFormData({
      nombre: "",
      email: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <main className="container my-4 pagina-contacto">
      <h1 className="text-center mb-2">Contacto</h1>

      <h5 className="text-center mb-4 text-dark">
        Estamos para ayudarte. Completá el formulario o escribinos por nuestras
        redes. Respondemos dentro de las próximas 24 hs.
      </h5>

      <Row className="g-4 justify-content-center">
        {/* FORMULARIO */}
        <Col xs={12} md={6}>
          <Card className="shadow-sm p-3 card-formulario">
            <Card.Title className="text-center mb-3">
              Envíanos un mensaje
            </Card.Title>

            <Form onSubmit={manejarSubmit}>
              <Form.Group className="mb-3 grupo-contacto">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Tu nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={manejarCambio}
                />
              </Form.Group>

              <Form.Group className="mb-3 grupo-contacto">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="ejemplo@correo.com"
                  name="email"
                  value={formData.email}
                  onChange={manejarCambio}
                />
              </Form.Group>

              <Form.Group className="mb-3 grupo-contacto">
                <Form.Label>Asunto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Motivo de tu consulta"
                  name="asunto"
                  value={formData.asunto}
                  onChange={manejarCambio}
                />
              </Form.Group>

              <Form.Group className="mb-3 grupo-contacto">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Escribe tu consulta..."
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={manejarCambio}
                />
              </Form.Group>

              <Button
                className="w-100 btn-enviar"
                variant="primary"
                type="submit"
              >
                Enviar
              </Button>
            </Form>
          </Card>
        </Col>

        {/* INFO */}
        <Col xs={12} md={4}>
          <Card className="shadow-sm p-3 card-info">
            <Card.Title className="text-center mb-3">
              Información de contacto
            </Card.Title>

            <p className="dato-contacto">
              <BsEnvelopeFill /> contactenos@rollingmovies.com
            </p>
            <p className="dato-contacto">
              <BsTelephoneFill /> +54 9 381 333-3333
            </p>
            <p className="dato-contacto">
              <BsWhatsapp /> WhatsApp: +54 9 381 222-2222
            </p>
            <p className="dato-contacto">
              <BsGeoAltFill /> Tucumán, Argentina
            </p>

            <hr />

            <h5 className="text-center titulo-redes">Redes Sociales</h5>

            <div className="d-flex justify-content-center gap-3 fs-3 redes-contacto">
              <BsInstagram className="icono-red instagram" />
              <BsFacebook className="icono-red facebook" />
              <BsTwitterX className="icono-red twitter-x" />
            </div>
          </Card>
        </Col>

        {/* MAPA */}
        <Col xs={12}>
          <Card className="shadow-sm p-3 mt-4 card-mapa">
            <Card.Title className="text-center mb-3">
              Nuestra ubicación
            </Card.Title>

            <div className="contenedor-mapa">
              <iframe
                className="iframe-mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113927.13575171452!2d-65.22259365!3d-26.832858899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94223792d6c56903%3A0xf88d5b92b5c56527!2sSan%20Miguel%20de%20Tucum%C3%A1n%2C%20Tucum%C3%A1n!5e0!3m2!1ses-419!2sar!4v1764477051049!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Card>
        </Col>
      </Row>

      {/* MODAL */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Mensaje enviado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          ¡Gracias por contactarnos! Te responderemos a la brevedad.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </main>
  );
};

export default Contacto;
