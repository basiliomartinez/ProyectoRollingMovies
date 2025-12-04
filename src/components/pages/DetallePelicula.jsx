// src/components/pages/DetallePelicula.jsx

import { useLocation, useParams, useNavigate } from "react-router";
import { Row, Col, Button, Badge } from "react-bootstrap";

const DetallePelicula = () => {
  const { id } = useParams(); // /detalle/:id
  const navigate = useNavigate();
  const location = useLocation();

  // Película que viene desde Inicio o desde CardPelicula
  const pelicula = location.state?.pelicula;

  const imagenFallback =
    "https://dummyimage.com/600x900/0a0a0a/ffffff&text=Sin+imagen";

  // Caso: entraron directo a /detalle/lo-que-sea sin pasar por un botón
  if (!pelicula) {
    return (
      <main className="container my-4">
        <h1 className="mb-3">Detalle de película</h1>
        <p className="mb-3">
          No se encontraron datos para la película con código{" "}
          <strong>{id}</strong>.
        </p>
        <Button variant="secondary" onClick={() => navigate(-1)}>
          Volver
        </Button>
      </main>
    );
  }

  const {
    codigo,
    nombre,
    categoria,
    descripcion,
    descripcionLarga,
    imagen,
    publicado,
  } = pelicula;

  return (
    <main className="container my-4">
      <Row className="g-4">
        {/* Poster grande */}
        <Col md={4}>
          <img
            src={imagen || imagenFallback}
            alt={nombre}
            className="img-fluid rounded shadow"
          />
        </Col>

        {/* Info de la película */}
        <Col md={8}>
          <h1 className="mb-3">{nombre}</h1>

          <p className="text-muted mb-1">
            Código: <strong>{codigo}</strong>
          </p>

          <p className="mb-2">
            Categoría: <Badge bg="secondary">{categoria}</Badge>
          </p>

          {publicado === false && (
            <p className="text-warning mb-2">
              Esta película aún no está publicada.
            </p>
          )}

          {/* Descripción larga si existe, si no la normal */}
          {(descripcionLarga || descripcion) && (
            <>
              <h4 className="mt-4 mb-2">Descripción</h4>
              <p>{descripcionLarga || descripcion}</p>
            </>
          )}

   <div className="mt-4 d-flex gap-2">
  <Button
    variant="primary"
    onClick={() => navigate("/Error404")} // 👈 manda a la página 404
  >
    <i className="bi bi-play-fill me-1"></i> Reproducir
  </Button>

  <Button variant="outline-light" onClick={() => navigate(-1)}>
    Volver
  </Button>
</div>

        </Col>
      </Row>
    </main>
  );
};

export default DetallePelicula;
