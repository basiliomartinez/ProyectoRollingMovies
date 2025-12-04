import React, { useState, useEffect } from "react";
import {
  Container,
  Button,
  Table,
  Badge,
  Card,
  InputGroup,
  Form,
} from "react-bootstrap";
import {
  Trash2,
  Edit2,
  Star,
  Plus,
  Search,
  Film,
  MonitorPlay,
} from "lucide-react";
import Swal from "sweetalert2";

import MovieFormModal from "./MovieFormModal";

import "../../admin.css";


const STORAGE_KEY = "admin_movies_data";

const DEFAULT_MOVIES = [
  {
    nombre: "John Wick",
    categoria: "Acción",
    descripcion:
      "Un exasesino imparable busca venganza desatando una oleada de violencia estilizada.",
  },
  {
    nombre: "Superman",
    categoria: "Acción",
    descripcion:
      "El icónico héroe de DC lucha por proteger la Tierra con fuerza, moral y esperanza.",
  },
  {
    nombre: "De vuelta a la acción",
    categoria: "Acción",
    descripcion:
      "Un agente retirado vuelve al peligro cuando su familia cae en una conspiración.",
  },
  {
    nombre: "Capitán América: Un nuevo mundo",
    categoria: "Acción",
    descripcion:
      "Sam Wilson enfrenta una amenaza global mientras toma el legado del Capitán América.",
  },
  {
    nombre: "Rescate Implacable",
    categoria: "Acción",
    descripcion:
      "Un operativo de élite debe salvar a un rehén en una misión casi suicida.",
  },
  {
    nombre: "Nadie 2",
    categoria: "Acción",
    descripcion:
      "Hutch vuelve con más caos, humor negro y violencia desmedida.",
  },
  {
    nombre: "El amateur: Operación venganza",
    categoria: "Acción",
    descripcion:
      "Un analista de la CIA sin experiencia se involucra en una peligrosa misión personal.",
  },
  {
    nombre: "El contador 2",
    categoria: "Acción",
    descripcion:
      "El misterioso contador/asesino regresa con nuevas amenazas y más precisión mortal.",
  },

  {
    nombre: "Lilo y Stitch",
    categoria: "Ciencia Ficción",
    descripcion:
      "Una niña hawaiana adopta una criatura alienígena extremadamente poderosa y adorable.",
  },
  {
    nombre: "Los 4 Fantásticos: primeros pasos",
    categoria: "Ciencia Ficción",
    descripcion:
      "Los héroes de Marvel descubren sus poderes tras un accidente espacial.",
  },
  {
    nombre: "Frankenstein",
    categoria: "Ciencia Ficción",
    descripcion:
      "Una nueva interpretación del clásico monstruo creado por ciencia prohibida.",
  },
  {
    nombre: "Cazadores del fin del mundo",
    categoria: "Ciencia Ficción",
    descripcion:
      "Guerreros sobrevivientes luchan contra criaturas y máquinas en un mundo postapocalíptico.",
  },
  {
    nombre: "Compañera perfecta",
    categoria: "Ciencia Ficción",
    descripcion:
      "Una inteligencia artificial avanza demasiado en su obsesión por su creador.",
  },
  {
    nombre: "Estado eléctrico",
    categoria: "Ciencia Ficción",
    descripcion:
      "Una joven viaja con un misterioso robot en un futuro donde la tecnología domina todo.",
  },
  {
    nombre: "El muro negro",
    categoria: "Ciencia Ficción",
    descripcion:
      "Una estructura imposible aparece en el planeta y cambia las reglas de la realidad.",
  },
  {
    nombre: "M3GAN 2.0",
    categoria: "Ciencia Ficción",
    descripcion:
      "La muñeca androide regresa con más inteligencia, más autonomía y más terror.",
  },


  {
    nombre: "Destino final: Lazos de sangre",
    categoria: "Terror",
    descripcion:
      "Una nueva premonición desata la cadena inevitable de la muerte.",
  },
  {
    nombre: "Haz que regrese",
    categoria: "Terror",
    descripcion:
      "Un ritual mal ejecutado trae de vuelta algo que nunca debió volver.",
  },
  {
    nombre: "Exterminio: La evolución",
    categoria: "Terror",
    descripcion:
      "Una variante más letal del virus desata el caos en una lucha por la supervivencia.",
  },
  {
    nombre: "La hora de la desaparición",
    categoria: "Terror",
    descripcion:
      "Pueblos enteros comienzan a desaparecer a la misma hora cada noche.",
  },
  {
    nombre: "Exorcismo: El ritual",
    categoria: "Terror",
    descripcion:
      "Un sacerdote enfrenta una posesión que desafía todas las reglas conocidas.",
  },
  {
    nombre: "Criatura Voraz",
    categoria: "Terror",
    descripcion:
      "Una entidad desconocida acecha un bosque donde nadie vuelve con vida.",
  },
  {
    nombre: "Los extraños: Capítulo 2",
    categoria: "Terror",
    descripcion:
      "Los enmascarados regresan con ataques más crueles y psicológicos.",
  },
  {
    nombre: "El conjuro 4: Los últimos ritos",
    categoria: "Terror",
    descripcion:
      "Los Warren enfrentan uno de los casos más oscuros de su carrera.",
  },


  {
    nombre: "En sueños",
    categoria: "Comedia",
    descripcion:
      "Una mujer comienza a vivir sueños absurdos que se mezclan con su vida real.",
  },
  {
    nombre: "Y dónde está el policía",
    categoria: "Comedia",
    descripcion:
      "El clásico humor absurdo regresa con una nueva dosis de caos policial.",
  },
  {
    nombre: "El último encargo",
    categoria: "Comedia",
    descripcion:
      "Un mensajero recibe un trabajo ridículo que se complica de formas inesperadas.",
  },
  {
    nombre: "Nonnas",
    categoria: "Comedia",
    descripcion:
      "Una abuela rebelde arrastra a su familia a una cadena de enredos.",
  },
  {
    nombre: "Los tipos malos 2",
    categoria: "Comedia",
    descripcion:
      "El grupo de villanos reformados vuelve con nuevas misiones y líos divertidos.",
  },
  {
    nombre: "Pitufos",
    categoria: "Comedia",
    descripcion:
      "Los pequeños seres azules viven nuevas aventuras en un bosque mágico.",
  },
  {
    nombre: "Casi familia",
    categoria: "Comedia",
    descripcion:
      "Una familia disfuncional enfrenta situaciones ridículas mientras intentan unirse.",
  },
  {
    nombre: "La otra boda",
    categoria: "Comedia",
    descripcion:
      "Una boda se descontrola por secretos inesperados y malos entendidos.",
  },
];

export default function AdminPanel() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const [showModal, setShowModal] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const getMoviesFromStorage = () => {
    try {
      const json = localStorage.getItem(STORAGE_KEY);
      return json ? JSON.parse(json) : [];
    } catch {
      return [];
    }
  };

  const saveMoviesToStorage = (moviesData) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(moviesData));
    } catch {}
  };

  useEffect(() => {
    const stored = getMoviesFromStorage();

    if (stored.length === 0) {
      const enriched = DEFAULT_MOVIES.map((movie) => ({
        ...movie,
        id: crypto.randomUUID(),
        codigo: Math.floor(Math.random() * 90000) + 10000,
        publicado: true,
        destacada: false,
      }));

      saveMoviesToStorage(enriched);
      setMovies(enriched);
      setLoading(false);
      return;
    }

    stored.sort((a, b) =>
      a.destacada === b.destacada ? 0 : a.destacada ? -1 : 1
    );

    setMovies(stored);
    setLoading(false);
  }, []);

  const generateId = () => crypto.randomUUID();
  const generateCode = () => Math.floor(Math.random() * 90000) + 10000;

  const handleSave = (id, data) => {
    setMovies((prev) => {
      let updated;

      if (id) {
        updated = prev.map((m) => (m.id === id ? { ...m, ...data } : m));

        Swal.fire({
          icon: "success",
          title: "Cambios guardados",
          text: "El contenido se actualizó correctamente.",
          timer: 1800,
          showConfirmButton: false,
        });
      } else {
        updated = [
          {
            ...data,
            id: generateId(),
            codigo: generateCode(),
            destacada: false,
          },
          ...prev,
        ];

        Swal.fire({
          icon: "success",
          title: "Contenido creado",
          text: "Se agregó un nuevo elemento al catálogo.",
          timer: 1800,
          showConfirmButton: false,
        });
      }

      saveMoviesToStorage(updated);
      return updated;
    });
  };

  const handleDelete = (movie) => {
    Swal.fire({
      title: "¿Eliminar contenido?",
      text: `"${movie.nombre}" será eliminado permanentemente.`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        setMovies((prev) => {
          const updated = prev.filter((m) => m.id !== movie.id);
          saveMoviesToStorage(updated);
          return updated;
        });

        Swal.fire({
          icon: "success",
          title: "Eliminado",
          text: "El contenido fue eliminado con éxito.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };

  const handleToggleFeatured = (id) => {
    setMovies((prev) => {
      const updated = prev.map((m) => ({
        ...m,
        destacada: m.id === id ? !m.destacada : m.destacada,
      }));

      const movie = updated.find((m) => m.id === id);

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: movie.destacada ? "success" : "info",
        title: movie.destacada
          ? "Añadido a destacados"
          : "Quitado de destacados",
        showConfirmButton: false,
        timer: 1200,
      });

      saveMoviesToStorage(updated);
      return updated;
    });
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      movie.categoria.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>

      <div className="admin-header mt-2">
        <Container>
          <h1 className="fw-bold p-5">Panel de Administración</h1>
        </Container>
      </div>

      <Container style={{ marginTop: "-3rem" }}>
        <Card className="admin-card mb-5">
          <Card.Body className="p-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
              <InputGroup className="w-auto" style={{ minWidth: "300px" }}>
                <InputGroup.Text className="bg-white border-end-0">
                  <Search size={18} className="text-muted" />
                </InputGroup.Text>
                <Form.Control
                  placeholder="Buscar por título o categoría..."
                  className="border-start-0 ps-0"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>

              <Button
                variant="primary"
                className="px-4 py-2 fw-bold d-flex align-items-center shadow-sm rounded-pill"
                onClick={() => {
                  setCurrentMovie(null);
                  setShowModal(true);
                }}
              >
                <Plus size={20} className="me-2" /> Agregar Contenido
              </Button>
            </div>

            {loading ? (
              <div className="text-center py-5">Cargando...</div>
            ) : (
              <div className="table-responsive">
                <Table hover className="align-middle mb-0">
                  <thead className="bg-light text-muted text-uppercase small fw-bold">
                    <tr>
                      <th className="ps-4">Contenido</th>
                      <th>Categoría</th>
                      <th>Código</th>
                      <th>Estado</th>
                      <th className="text-end pe-4">Acciones</th>
                    </tr>
                  </thead>

                  <tbody className="border-top-0">
                    {filteredMovies.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="text-center py-5 text-muted">
                          No se encontraron resultados.
                        </td>
                      </tr>
                    ) : (
                      filteredMovies.map((movie) => (
                        <tr
                          key={movie.id}
                          className={movie.destacada ? "featured-row" : ""}
                        >
                          <td className="ps-4">
                            <div className="d-flex align-items-center">
                              <div
                                className={`rounded-circle p-2 me-3 ${
                                  movie.destacada
                                    ? "bg-warning text-dark"
                                    : "bg-light text-primary"
                                }`}
                              >
                                {movie.categoria === "Documental" ? (
                                  <MonitorPlay size={20} />
                                ) : (
                                  <Film size={20} />
                                )}
                              </div>
                              <div>
                                <div className="fw-bold text-dark">
                                  {movie.nombre}
                                </div>
                                <div
                                  className="small text-muted text-truncate"
                                  style={{ maxWidth: "200px" }}
                                >
                                  {movie.descripcion}
                                </div>
                              </div>
                            </div>
                          </td>

                          <td>
                            <Badge
                              bg="light"
                              text="dark"
                              className="border px-2 py-1 fw-normal"
                            >
                              {movie.categoria}
                            </Badge>
                          </td>

                          <td className="text-muted small font-monospace">
                            #{movie.codigo}
                          </td>

                          <td>
                            {movie.publicado ? (
                              <Badge
                                bg="success"
                                className="status-badge rounded-pill bg-opacity-25 text-success"
                              >
                                <span
                                  className="d-inline-block rounded-circle bg-success me-1"
                                  style={{ width: "6px", height: "6px" }}
                                ></span>
                                Publicado
                              </Badge>
                            ) : (
                              <Badge
                                bg="secondary"
                                className="status-badge rounded-pill bg-opacity-25 text-secondary"
                              >
                                Borrador
                              </Badge>
                            )}
                          </td>

                          <td className="text-end pe-4">
                            <Button
                              variant="link"
                              className={`action-btn p-1 ${
                                movie.destacada
                                  ? "text-warning"
                                  : "text-muted hover-warning"
                              }`}
                              onClick={() => handleToggleFeatured(movie.id)}
                            >
                              <Star
                                size={18}
                                fill={movie.destacada ? "currentColor" : "none"}
                              />
                            </Button>

                            <Button
                              variant="link"
                              className="action-btn text-primary p-1 ms-2"
                              onClick={() => {
                                setCurrentMovie(movie);
                                setShowModal(true);
                              }}
                            >
                              <Edit2 size={18} />
                            </Button>

                            <Button
                              variant="link"
                              className="action-btn text-danger p-1 ms-2"
                              onClick={() => handleDelete(movie)}
                            >
                              <Trash2 size={18} />
                            </Button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </Table>
              </div>
            )}
          </Card.Body>
        </Card>
      </Container>
      <MovieFormModal
        show={showModal}
        movie={currentMovie}
        onClose={() => setShowModal(false)}
        onSave={handleSave}
      />
    </>
  );
}