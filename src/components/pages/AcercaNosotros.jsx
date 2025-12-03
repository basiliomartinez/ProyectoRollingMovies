import { Container, Row, Col, Card } from "react-bootstrap";
import "../../AcercaNosotros.css";

const integrantes = [
  { nombre: "Marcos Lautaro Molina", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." },
  { nombre: "Basilio Martinez", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." },
  { nombre: "Gonzalo Gaston Gomez", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." },
  { nombre: "Ezequiel Diaz", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." },
  { nombre: "Lizandro ", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." },
  { nombre: "Marcos Joaquin Gonzales", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." },
  { nombre: "Tomas Sobrino", rol: "Rol en el proyecto", descripcion: "Breve descripción sobre su participación." }
];

const AcercaNosotros = () => {
  return (
    <main className="container my-5 acerca-container">
      <h1 className="neon-title text-center mb-4">Acerca de Nosotros</h1>

      <p className="neon-subtext text-center mb-5">
        <strong className="neon-strong">RollingMovies</strong> es un proyecto creado por el equipo de la comisión 16,
        donde combinamos creatividad, aprendizaje y desarrollo para construir experiencias digitales.
      </p>

      <Row className="g-4 justify-content-center">
        {integrantes.map((persona, index) => (
          <Col md={4} sm={6} key={index}>
            <Card className="neon-card h-100">
              <div className="neon-border"></div>
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>
                <Card.Subtitle className="mb-3">{persona.rol}</Card.Subtitle>
                <Card.Text>{persona.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default AcercaNosotros;
