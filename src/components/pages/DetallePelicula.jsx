import { Container, Row, Col, Button } from "react-bootstrap";

const DetallePelicula = () => {
  return (
    <main className="container my-4">
      <Container className="px-0">
        <Row className="align-items-center">
          <Col md={5}>
            <div className="bg-secondary rounded mb-3" style={{ height: "320px" }}>
              {/* póster o video */}
            </div>
          </Col>
          <Col md={7}>
            <h1 className="mb-3">Dark</h1>
            <p className="text-secondary">
              En Winden, una pequeña ciudad alemana, la desaparición de dos
              niños expone las relaciones fracturadas, las vidas dobles y el
              pasado oscuro de cuatro familias.
            </p>
            <p>
              <strong>Categoría:</strong> Serie · Ciencia ficción · Thriller
            </p>
            <div className="d-flex gap-3 mt-3">
              <Button variant="dark">
                <i className="bi bi-play-fill me-1"></i> Reproducir
              </Button>
              <Button variant="outline-dark">
                <i className="bi bi-arrow-left me-1"></i> Volver
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default DetallePelicula;
