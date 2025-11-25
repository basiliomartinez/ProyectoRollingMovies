import { Container, Row, Col, Button } from "react-bootstrap";
import CardPelicula from "../services/CardPelicula";

const peliculasEjemplo = [
  { id: 1, titulo: "Dark", categoria: "Series" },
  { id: 2, titulo: "The Witcher", categoria: "Series" },
  { id: 3, titulo: "Dune", categoria: "Ciencia ficción" },
  { id: 4, titulo: "La La Land", categoria: "Romance" },
];

const Inicio = () => {
  return (
    <main className="container my-4">
      {/* Película destacada dentro del container */}
      <section className="bg-dark text-light rounded-4 p-4 mb-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-5 fw-bold">Dark</h1>
            <p className="lead">
              Una serie de misterio y viajes en el tiempo que entrelaza el
              destino de cuatro familias en un pueblo alemán.
            </p>
            <div className="d-flex gap-3">
              <Button variant="light">
                <i className="bi bi-play-fill me-1"></i> Reproducir
              </Button>
              <Button variant="outline-light">
                <i className="bi bi-info-circle me-1"></i> Más información
              </Button>
            </div>
          </Col>
          <Col md={6} className="d-none d-md-block">
            <div className="bg-secondary rounded" style={{ height: "260px" }}>
              {/* acá después podemos poner imagen/video */}
            </div>
          </Col>
        </Row>
      </section>

      {/* Listas por categoría, también dentro del mismo container */}
      <section className="mb-4">
        <h2 className="h5 mb-3">Categoría 1</h2>
        <Row xs={2} md={4} className="g-3">
          {peliculasEjemplo.map((pelicula) => (
            <CardPelicula
              key={pelicula.id}
              id={pelicula.id}
              titulo={pelicula.titulo}
              categoria={pelicula.categoria}
            />
          ))}
        </Row>
      </section>

      <section className="mb-4">
        <h2 className="h5 mb-3">Categoría 2</h2>
        <Row xs={2} md={4} className="g-3">
          {peliculasEjemplo.map((pelicula) => (
            <CardPelicula
              key={`c2-${pelicula.id}`}
              id={pelicula.id}
              titulo={pelicula.titulo}
              categoria={pelicula.categoria}
            />
          ))}
        </Row>
      </section>

      <section className="mb-4">
        <h2 className="h5 mb-3">Categoría 3</h2>
        <Row xs={2} md={4} className="g-3">
          {peliculasEjemplo.map((pelicula) => (
            <CardPelicula
              key={`c3-${pelicula.id}`}
              id={pelicula.id}
              titulo={pelicula.titulo}
              categoria={pelicula.categoria}
            />
          ))}
        </Row>
      </section>

      <section className="mb-4">
        <h2 className="h5 mb-3">Categoría 4</h2>
        <Row xs={2} md={4} className="g-3">
          {peliculasEjemplo.map((pelicula) => (
            <CardPelicula
              key={`c4-${pelicula.id}`}
              id={pelicula.id}
              titulo={pelicula.titulo}
              categoria={pelicula.categoria}
            />
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Inicio;
