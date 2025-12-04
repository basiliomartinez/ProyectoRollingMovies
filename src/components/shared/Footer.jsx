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
            <Link to="/Error404" className="me-3 footer-social-link">
              <i className="bi bi-facebook"></i>
            </Link>
            <Link to="/Error404" className="me-3 footer-social-link">
              <i className="bi bi-instagram"></i>
            </Link>
            <Link to="/Error404" className="footer-social-link">
              <i className="bi bi-youtube"></i>
            </Link>
          </Col>

          <button
            className="btn-top"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑ Volver arriba
          </button>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
