import { Container, Row, Col, Card } from "react-bootstrap";

const AcercaNosotros = () => {
  return (
    <main className="container my-4">
      <h1 className="mb-4">Acerca de nosotros</h1>
      <p className="mb-4">
        RollingMovies es un proyecto desarrollado por el equipo de la comisión 16.
        Aquí podríamos contar la historia del equipo, el objetivo del proyecto y
        las tecnologías utilizadas.
      </p>
      <Row className="g-3">
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Integrante 1</Card.Title>
              <Card.Text>Rol en el proyecto, breve descripción.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Integrante 2</Card.Title>
              <Card.Text>Rol en el proyecto, breve descripción.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Integrante 3</Card.Title>
              <Card.Text>Rol en el proyecto, breve descripción.</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </main>
  );
};

export default AcercaNosotros;
