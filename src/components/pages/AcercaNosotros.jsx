import { Container, Row, Col, Card } from "react-bootstrap";
import "../../AcercaNosotros.css";

const integrantes = [
  { nombre: "Marcos Lautaro Molina", rol: "Frontend", descripcion: "Encargado de hacer el maquetado y la logica del Login y el Sobre Nosotros." },
  { nombre: "Basilio Martinez", rol: "Frontend", descripcion: "Encargado de el maquetado y logica de las Cards Peliculas y Proctector de Rutas ." },
  { nombre: "Gonzalo Gaston Gomez", rol: "Frontend", descripcion: "Encargado del maquetado y logica del Registro y de la pagina de Inicio." },
  { nombre: "Ezequiel Diaz", rol: "Frontend", descripcion: "Encargado de hacer el maquetado y logica del Error404 y el Contacto." },
  { nombre: "Lisandro Araoz ", rol: "Frontend", descripcion: "Encargado de hacer el maquetado y la logica del Admin Peliculas." },
  { nombre: "Marcos Joaquin Gonzales", rol: "Frontend", descripcion: "Encargado de hacer el maquetado y la logica del Menu(Navbar) y Detalle Pelicula." },
  { nombre: "Tomas Sobrino", rol: "Frontend", descripcion: "Encargado de hacer el maquetado del Footer." }
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
