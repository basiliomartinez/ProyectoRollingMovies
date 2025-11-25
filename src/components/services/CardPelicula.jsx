import { Card, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router";

const CardPelicula = ({ titulo, categoria, imagen, id }) => {
  return (
    <Col>
      <Card className="h-100 bg-dark text-light">
        <Card.Img
          variant="top"
          src={
            imagen ||
            "https://images.pexels.com/photos/799137/pexels-photo-799137.jpeg"
          }
          alt={titulo}
        />
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Text className="text-secondary">{categoria}</Card.Text>
          <Button
            as={NavLink}
            to={`/detalle/${id || 1}`}
            variant="outline-light"
            size="sm"
          >
            Ver detalle
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardPelicula;
