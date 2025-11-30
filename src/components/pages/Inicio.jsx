import { Card, Button, Col, Badge } from "react-bootstrap";
import CardPelicula from "../services/CardPelicula";
import Row from "react-bootstrap/Row";

const peliculasAccion = [
  {
    id: 1,
    nombre: "John Wick",
    categoria: "Acción",
    descripcion:
      "Un exasesino regresa al mundo del crimen en busca de venganza tras perder a lo que más amaba.",
    imagen: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Superman",
    categoria: "Acción",
    descripcion:
      "El multimillonario tecnológico Lex Luthor aprovecha la oportunidad para quitarse de en medio definitivamente al Hombre de Acero. ¿Podrán la reportera Lois Lane y el compañero de cuatro patas de Superman, Krypto, ayudarle antes de que sea tarde?",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMWFiZjUwZmEtMGVjYi00MjI0LTk5MzAtMjM0MjRkODcyNjI5XkEyXkFqcGc@._V1_.jpg",
    publicado: true,
  },
  {
    id: 3,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
];

const peliculasCienciaFicion = [
  {
    id: 1,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 3,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
];

const peliculasTerror = [
  {
    id: 1,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 3,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
];

const peliculasComedia = [
  {
    id: 1,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 3,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "lorem",
    imagen: "",
    publicado: true,
  },
];

const Inicio = () => {
  return (
    <main className="container my-4">
      {/* Película destacada dentro del container */}
      <section className="bg-dark text-light rounded-4 p-4 mb-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-5 fw-bold">(Titulo pelicula destacada)</h1>
            <p className="lead">
              <strong>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
                soluta obcaecati doloribus quis ipsam assumenda ea voluptates,
                accusantium molestiae doloremque blanditiis fugit veritatis amet
                quam!
              </strong>
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
            <div className="bg-secondary rounded" style={{ height: "335px" }}>
              <iframe
                class="link-de-youtube"
                src="https://www.youtube.com/embed/nb_fFj_0rq8?si=sXD7aY0vIZpYYCjS"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullscreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </section>

      {/* Listas por categoría, también dentro del mismo container */}
      <section className="mb-4">
        <h1 className="tituloCategoria mb-3">
          <ins>Acción</ins>
        </h1>
        <Row xs={2} md={4} className="g-3">
          {peliculasAccion.map((peli) => (
            <CardPelicula
              key={peli.id}
              codigo={peli.id}
              nombre={peli.nombre}
              categoria={peli.categoria}
              descripcion={peli.descripcion}
              imagen={peli.imagen}
              publicado={peli.publicado}
            />
          ))}
        </Row>
      </section>

      <section className="mb-4">
        <h1 className="tituloCategoria mb-3">
          <ins>Ciencia Ficción</ins>
        </h1>
        <Row xs={2} md={4} className="g-3">
          {peliculasCienciaFicion.map((peli) => (
            <CardPelicula
              key={`c2-${peli.id}`}
              codigo={`c2-${peli.id}`}
              nombre={peli.nombre}
              categoria={peli.categoria}
              descripcion={peli.descripcion}
              imagen={peli.imagen}
              publicado={peli.publicado}
            />
          ))}
        </Row>
      </section>
      <section className="mb-4">
        <h1 className="tituloCategoria mb-3">
          <ins>Terror</ins>
        </h1>
        <Row xs={2} md={4} className="g-3">
          {peliculasTerror.map((peli) => (
            <CardPelicula
              key={`c4-${peli.id}`}
              codigo={`c4-${peli.id}`}
              nombre={peli.nombre}
              categoria={peli.categoria}
              descripcion={peli.descripcion}
              imagen={peli.imagen}
              publicado={peli.publicado}
            />
          ))}
        </Row>
      </section>
      <section className="mb-4">
        <h1 className="tituloCategoria mb-3">
          <ins>Comedia</ins>
        </h1>
        <Row xs={2} md={4} className="g-3">
          {peliculasComedia.map((peli) => (
            <CardPelicula
              key={`c3-${peli.id}`}
              codigo={`c3-${peli.id}`}
              nombre={peli.nombre}
              categoria={peli.categoria}
              descripcion={peli.descripcion}
              imagen={peli.imagen}
              publicado={peli.publicado}
            />
          ))}
        </Row>
      </section>
    </main>
  );
};

export default Inicio;
