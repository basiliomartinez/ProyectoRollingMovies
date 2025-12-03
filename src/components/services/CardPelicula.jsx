// src/components/services/CardPelicula.jsx

import { Card, Button, Col, Badge } from "react-bootstrap";
import { NavLink } from "react-router";

const CardPelicula = ({
  codigo,
  nombre,
  categoria,
  descripcion,
  imagen,
  publicado = true,
}) => {
  const descripcionCorta =
    descripcion && descripcion.length > 120
      ? descripcion.slice(0, 120) + "..."
      : descripcion;

  return (
    <Col>
      <Card className="h-100 card-pelicula">
        <div className="card-pelicula-img-wrapper">
          <Card.Img
            variant="top"
        src={
  imagen ||
  "https://dummyimage.com/500x750/0a0a0a/ffffff&text=Sin+Imagen"
}

            alt={nombre}
            className="card-pelicula-img"
          />
        </div>
        <Card.Body className="card-pelicula-body">
          <div className="d-flex justify-content-between align-items-start mb-1">
            <Card.Title className="mb-0 card-pelicula-title">
              {nombre}
            </Card.Title>
            {!publicado && (
              <Badge bg="secondary" className="ms-2">
                No publicada
              </Badge>
            )}
          </div>

          <Card.Text className="card-pelicula-category mb-1">
            {categoria}
          </Card.Text>

          {descripcion && (
            <Card.Text className="card-pelicula-description mb-3">
              {descripcionCorta}
            </Card.Text>
          )}

          <Button
            as={NavLink}
            to={`/detalle/${codigo}`}
            variant="outline-light"
            size="sm"
            className="card-pelicula-button"
          >
            Ver detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardPelicula;
