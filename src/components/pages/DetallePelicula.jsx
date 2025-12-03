import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import {
  peliculasAccion,
  peliculasCienciaFiccion,
  peliculasTerror,
  peliculasComedia,
} from "./Inicio"

const DetallePelicula = () => {
  const { id } = useParams();
  const navigate = useNavigate();


  const idNumero = Number(id);


  const todasLasPeliculas = [
    ...peliculasAccion,
    ...peliculasCienciaFiccion,
    ...peliculasTerror,
    ...peliculasComedia,
  ];

  const pelicula = todasLasPeliculas.find((peli) => peli.id === idNumero);

  useEffect(() => {
 
    if (!pelicula) {
      navigate("/error404");
    }
  }, [pelicula, navigate]);

  if (!pelicula) {
    return null;
  }
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
            <h1 className="mb-3">{pelicula.nombre}</h1>
            <p className="text-secondary">
              {pelicula.descripcion}
            </p>
            <p>
              <strong>Categoría:</strong> Serie · Ciencia ficción · Thriller
            </p>
            <div className="d-flex gap-3 mt-3">
              <Button variant="dark" onClick={() => navigate("/error404")}>
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
