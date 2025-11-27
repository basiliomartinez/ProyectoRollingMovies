import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-cine">
      <Container>
        <Row className="text-center text-md-start align-items-center">
          <Col md={4}>
            <h5>Rolling Movies</h5>
            <p className="footer-copy">
              © 2025 Rolling Movies. Todos los derechos reservados.
            </p>
          </Col>

          <Col md={4} className="text-center">
            <Link to="/acerca">Acerca de nosotros</Link> |{" "}
            <Link to="/contacto">Contacto</Link>
          </Col>

          <Col md={4} className="text-center social-icons">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-youtube"></i>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
