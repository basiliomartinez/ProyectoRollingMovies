import { Container, Table, Button } from "react-bootstrap";
import ItemTablaPelicula from "../services/ItemTablaPelicula";

const peliculasEjemplo = [
  {
    codigo: 123,
    nombre: "Dark",
    categoria: "Series",
    descripcion: "Descripción breve",
    publicado: true,
  },
  {
    codigo: 124,
    nombre: "Mandalorian",
    categoria: "Series",
    descripcion: "Descripción breve",
    publicado: true,
  },
  {
    codigo: 125,
    nombre: "Sonic",
    categoria: "Aventura",
    descripcion: "Descripción breve",
    publicado: true,
  },
];

const AdminPeliculas = () => {
  return (
    <main className="container my-4">
      <Container>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h1>Administrar películas</h1>
          <Button variant="primary">Nueva película</Button>
        </div>

        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Categoría</th>
              <th>Descripción</th>
              <th>Publicado</th>
              <th>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {peliculasEjemplo.map((pelicula, index) => (
              <ItemTablaPelicula
                key={pelicula.codigo}
                pelicula={pelicula}
                fila={index + 1}
              />
            ))}
          </tbody>
        </Table>
      </Container>
    </main>
  );
};

export default AdminPeliculas;
