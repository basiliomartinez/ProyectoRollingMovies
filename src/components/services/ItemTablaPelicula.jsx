import { Button } from "react-bootstrap";

const ItemTablaPelicula = ({ pelicula, fila }) => {
  return (
    <tr>
      <td>{pelicula.codigo}</td>
      <td>{pelicula.nombre}</td>
      <td>{pelicula.categoria}</td>
      <td>{pelicula.descripcion}</td>
      <td className="text-center">
        {pelicula.publicado ? <i className="bi bi-check-square"></i> : <i className="bi bi-square"></i>}
      </td>
      <td className="text-center">
        <Button
          variant="outline-secondary"
          size="sm"
          className="me-2"
          title="Editar"
        >
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button
          variant="outline-danger"
          size="sm"
          className="me-2"
          title="Borrar"
        >
          <i className="bi bi-trash3"></i>
        </Button>
        <Button
          variant="outline-warning"
          size="sm"
          title="Destacar"
        >
          <i className="bi bi-star-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTablaPelicula;
