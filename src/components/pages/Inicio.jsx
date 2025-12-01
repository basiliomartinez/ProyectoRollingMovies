import { Button, Col } from "react-bootstrap";
import CardPelicula from "../services/CardPelicula";
import Row from "react-bootstrap/Row";

const peliculasAccion = [
  {
    id: 1,
    nombre: "John Wick",
    categoria: "Acción/Suspenso",
    descripcion:
      "Un exasesino regresa al mundo del crimen en busca de venganza tras perder a lo que más amaba.",
    imagen: "https://image.tmdb.org/t/p/w500/fZPSd91yGE9fCcCe6OoQr6E3Bev.jpg",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Superman",
    categoria: "Acción/Ciencia Ficción",
    descripcion:
      "El multimillonario tecnológico Lex Luthor aprovecha la oportunidad para quitarse de en medio definitivamente al Hombre de Acero. ¿Podrán la reportera Lois Lane y el compañero de cuatro patas de Superman, Krypto, ayudarle antes de que sea tarde?",
    imagen:
      "https://www.eluniverso.com/resizer/v2/4QORDSKIUFA6LKINNKMSR3FOVA.jpg?auth=220438b7fd2202af869edb6105bdb9d3a2a17d08fc702298c75ecb67debec36d&width=893&height=670&quality=75&smart=true",
    publicado: true,
  },
  {
    id: 3,
    nombre: "De vuelta a la acción",
    categoria: "Acción/Comedia",
    descripcion:
      "Los exagentes de la CIA, Emily y Matt, se ven arrastrados de nuevo al espionaje tras la publicación de sus identidades secretas.",
    imagen:
      "https://s1.ppllstatics.com/diariosur/www/multimedia/2025/01/17/serie-tv-4030-mini.jpg",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Capitán América: Un nuevo mundo",
    categoria: "Acción/Ciencia ficción",
    descripcion:
      "Tras reunirse con el presidente Thaddeus Ross, Sam se encuentra en medio de un incidente internacional y deberá descubrir los motivos detrás de una conspiración global.",
    imagen:
      "https://images.justwatch.com/poster/330043289/s718/capitan-america-nuevo-orden-mundial.jpg",
    publicado: true,
  },
  {
    id: 5,
    nombre: "Rescate implacable",
    categoria: "Acción/Suspenso",
    descripcion:
      "Levon dejó atrás un pasado marcado por la violencia para ser un buen ejemplo para su hija. Sin embargo, cuando la hija de su jefe desaparece, este antiguo militar de élite no se detendrá ante nada hasta acabar con los criminales responsables de ello.",
    imagen:
      "https://m.media-amazon.com/images/S/pv-target-images/807419b935124db3c3fab7302750ec268c98b1012e4f23b6cfe4fdf2d9b2ce4d.png",
    publicado: true,
  },
  {
    id: 6,
    nombre: "Nadie 2",
    categoria: "Acción/Suspenso",
    descripcion:
      "El asesino adicto a su trabajo, Hutch Mansell, se lleva a su familia a unas vacaciones a la pequeña ciudad turística de Plummerville. Sin embargo, pronto se ve en el punto de mira de varias personas peligrosas.",
    imagen:
      "https://www.universalpictures.com.ar/tl_files/content/movies/nobody_2/nobody-2_header-mobile.jpg",
    publicado: true,
  },
  {
    id: 7,
    nombre: "El amateur: Operación venganza",
    categoria: "Acción/Suspenso",
    descripcion:
      "Charlie Heller es un criptógrafo de la CIA que emprende un peligroso viaje en busca de los asesinos de su esposa.",
    imagen:
      "https://lachaqueta.news/wp-content/uploads/2025/04/%E2%80%98El-Amateur-Operacion-Venganza-%E2%80%94-El-thriller-de-espionaje-que-no-puedes-perderte-este-fin-de-semana.webp",
    publicado: true,
  },
  {
    id: 8,
    nombre: "El contador 2",
    categoria: "Acción/Suspenso",
    descripcion:
      "El contable forense Christian Wolff forma equipo con su hermano, distanciado pero muy letal, para seguir la pista de unos misteriosos asesinos.",
    imagen:
      "https://m.media-amazon.com/images/S/pv-target-images/a36cd4c5e42f47b147513735abfe0c35c27f5ffdb248bdef17705edfcb219fa0.jpg",
    publicado: true,
  },
];

const peliculasCienciaFicion = [
  {
    id: 1,
    nombre: "Lilo y Stitch",
    categoria: "Ciencia Ficción/Comedia",
    descripcion:
      "Una niña solitaria llamada Lilo adopta a Stitch, un revoltoso cachorro alienígena que ayuda a recomponer su familia. Eso sí, no sin antes sembrar el caos en las islas hawaianas con sus cómicas travesuras.",
    imagen:
      "https://cdn.avpasion.com/wp-content/uploads/2025/07/lilo-y-stitch-2025-ya-disponible-streaming-01.jpg",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Los 4 Fantásticos: primeros pasos",
    categoria: "Ciencia ficción/Acción",
    descripcion:
      "Mr. Fantástico, La Mujer Invisible, La Antorcha Humana y La Mole se enfrentan al desafío más abrumador hasta la fecha al defender la Tierra de Galactus y Silver Surfer.",
    imagen:
      "https://images.justwatch.com/poster/330025048/s718/los-4-fantasticos-2023.jpg",
    publicado: true,
  },
  {
    id: 3,
    nombre: "Frankenstein",
    categoria: "Ciencia ficción/Terror",
    descripcion:
      "Frankenstein es una película de ciencia ficción gótica estadounidense de 2025​ escrita y dirigida por Guillermo del Toro, basada en la novela homónima de Mary Shelley de 1818.",
    imagen:
      "https://static01.nyt.com/images/2025/10/17/espanol/16cul-frankenstein-cqfz-ES-copy1/16cul-frankenstein-cqfz-mediumSquareAt3X.jpg",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Cazadores del fin del mundo",
    categoria: "Ciencia ficción/Comedia",
    descripcion:
      "En un mundo arrasado por una llamarada solar, un cazador de tesoros viaja a Europa tras la Mona Lisa, pero pronto deberá tomar una difícil decisión.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BNjc0NzNhOGYtNWU3YS00NDZkLThmZDUtMGIxYmNiNDRmNDg1XkEyXkFqcGc@._V1_.jpg",
    publicado: true,
  },
  {
    id: 5,
    nombre: "Compañera perfecta",
    categoria: "Ciencia ficción/Suspenso",
    descripcion:
      "Un grupo de amigos va a pasar el fin de semana a la finca de un excéntrico millonario, novio de una de ellos. Allí una de las chicas asesina al dueño de la mansión para evitar que la viole, pero, entonces, descubre que nada es lo que parece.",
    imagen:
      "https://www.eldiario.net/portal/wp-content/uploads/2025/02/COMPANERA-PERFECTA-%E2%80%93-Suspenso-y-ciencia-ficcion.jpg",
    publicado: true,
  },
  {
    id: 6,
    nombre: "Estado eléctrico",
    categoria: "Ciencia ficción/Acción",
    descripcion:
      "Una adolescente huérfana se pone en camino con un misterioso robot para encontrar a su hermano perdido hace mucho tiempo, formando equipo con un contrabandista y su bromista compañero.",
    imagen:
      "https://www.mondosonoro.com/wp-content/uploads/2025/03/Estado-Electrico.jpg",
    publicado: true,
  },
  {
    id: 7,
    nombre: "El muro negro",
    categoria: "Ciencia ficción/Terror",
    descripcion:
      "Un misterioso muro rodea su edificio de la noche a la mañana, por lo que Tim y Olivia deben unirse a sus vecinos para escapar con vida.",
    imagen:
      "https://www.lascosasquenoshacenfelices.com/wp-content/uploads/2025/07/portada-1.jpg",
    publicado: true,
  },
  {
    id: 8,
    nombre: "M3GAN 2.0",
    categoria: "Ciencia ficción/Terror",
    descripcion:
      "Un arma robótica de grado militar conocida como Amelia se vuelve una amenaza y Gemma decide resucitar M3GAN para hacerle frente.",
    imagen:
      "https://waxworkrecords.com/cdn/shop/files/M3gan-2.0_Cover_740x.png?v=1750962257",
    publicado: true,
  },
];

const peliculasTerror = [
  {
    id: 1,
    nombre: "Destino final: Lazos de sangre",
    categoria: "Terror/Misterio",
    descripcion:
      "Atormentada por una violenta pesadilla recurrente, una universitaria regresa a casa para buscar a la única persona que podría romper el ciclo de muerte y salvar a su familia del espantoso final que inevitablemente les espera.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BMTlmNDRiZjgtNmYxNi00NTc3LWFlNzEtNzE0ZGQ1ODdlMDQ5XkEyXkFqcGc@._V1_.jpg",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Haz que regrese",
    categoria: "Terror",
    descripcion:
      "Dos hermanos descubren un terrorífico secreto en la apartada casa de su nueva madre adoptiva.",
    imagen:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAUWVP0A7QFhcBvEy45o1XOa8zZs8PtehPnSzZUgStp22dzkxc",
    publicado: true,
  },
  {
    id: 3,
    nombre: "Exterminio: La evolución",
    categoria: "Terror/Suspenso",
    descripcion:
      "Décadas después del brote del virus, los sobrevivientes aún viven en aislamiento. Cuando uno de ellos abandona su santuario, descubre secretos inquietantes del virus y las personas.",
    imagen:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRDYwyTzfp5z2-iPgINfjYRQ8eckM_eElEyrzKxG52an8laXnG7",
    publicado: true,
  },
  {
    id: 4,
    nombre: "La hora de la desaparición",
    categoria: "Terror/Misterio",
    descripcion:
      "Todos los niños de la clase, excepto uno, desaparecen misteriosamente en la misma noche y exactamente a la misma hora. La comunidad se pregunta quién o qué está detrás de la desaparición.",
    imagen:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRleJ4tl_UZB-jqSZ1yMLu3wTDzyGUMZ4Va71-EEajatlpAw_ys",
    publicado: true,
  },
  {
    id: 5,
    nombre: "Exorcismo: El ritual",
    categoria: "Terror",
    descripcion:
      "En 1928, una mujer es atormentada por una fuerza maligna inexplicable. Cuando la ciencia falla, un sacerdote rural y un misterioso fraile exorcista enfrentan el mal cara a cara en un convento aislado.",
    imagen:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSt4USCFqbCHnfYkYzuWzxx8UUAEQP2-bVBTT0xK9d6f8FK8szW",
    publicado: true,
  },
  {
    id: 6,
    nombre: "Criatura Voraz",
    categoria: "Terror/Terror sobrenatural",
    descripcion:
      "Una terapeuta clarividente se enfrenta a sus propios demonios personales mientras intenta salvar a una joven que cree que una entidad malévola se está alimentando de ella.",
    imagen:
      "https://m.media-amazon.com/images/M/MV5BM2YwY2U1ZmYtNjI1Yy00MDY2LTk1MzMtYmVjMDU2OWQzOThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    publicado: true,
  },
  {
    id: 7,
    nombre: "Los extraños: Capítulo 2",
    categoria: "Terror/Suspenso",
    descripcion:
      "Tras descubrir que su víctima, Maya, sigue viva, tres maníacos enmascarados regresan para terminar el trabajo. Sin ningún lugar al que huir y sin nadie en quien confiar, Maya se ve envuelta en una lucha por la supervivencia contra unos psicópatas.",
    imagen:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQoCinwj0TkSMnyXZyyW0kX_CkTcICU8eQHnGKNrGjOFLi5eTjj",
    publicado: true,
  },
  {
    id: 8,
    nombre: "El conjuro 4: Los ultimos ritos",
    categoria: "Terror",
    descripcion:
      "En 1986, los investigadores paranormales Ed y Lorraine Warren viajan a Pensilvania para vencer a un demonio de la casa de una familia.",
    imagen:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTkqjKTT8NrZHqTOIfeO1VdEIdJLp3kF7B82XFIYHAdZ5YOG5lD",
    publicado: true,
  },
];

const peliculasComedia = [
  {
    id: 1,
    nombre: "En sueños",
    categoria: "Comedia/Aventura",
    descripcion:
      "Traducción del inglés-In Your Dreams es una película estadounidense de animación, comedia y aventuras de 2025 dirigida por Alex Woo y codirigida por Erik Benson, con guion de Woo y Benson, y una historia de Woo, Benson y Stanley Moore.",
    imagen: "https://images.justwatch.com/poster/338681160/s718/en-suenos.jpg",
    publicado: true,
  },
  {
    id: 2,
    nombre: "Y dónde está el policía",
    categoria: "Comedia/Acción",
    descripcion:
      "Siguiendo los pasos de su torpe padre, el detective Frank Drebin Jr. debe resolver un caso de asesinato para evitar que el departamento de policía sea cerrado.",
    imagen:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQBtcv1yaX5PJZ_avJxQKubpjYrx6l41PLa2GpRKCUNFZklW5fR",
    publicado: true,
  },
  {
    id: 3,
    nombre: "El último encargo",
    categoria: "Comedia/Crimen",
    descripcion:
      "Una colecta de efectivo rutinaria da un giro inesperado cuando dos conductores de un camión blindado son emboscados por unos delincuentes.",
    imagen:
      "https://es.web.img3.acsta.net/img/7c/b1/7cb1637aa0300d9b5b0a210691202508.jpg",
    publicado: true,
  },
  {
    id: 4,
    nombre: "Nonnas",
    categoria: "Comedia/Drama",
    descripcion:
      "Un hombre en duelo descubre la receta para sanar: comprar un restaurante italiano y contratar como chefs a cuatro abuelas con mucho sabor.",
    imagen:
      "https://static.excelenciasgourmet.com/cdn/ff/0wIZexaRkfzGfFXOHCAgh7MkhlnWK7rWsWtlEVVD9Lo/1749137307/public/inline-images/nonnas-netflix-italia.jpg",
    publicado: true,
  },
  {
    id: 5,
    nombre: "Los tipos malos 2",
    categoria: "Comedia/Infantil",
    descripcion:
      "Los Bad Guys son secuestrados para participar en un atraco a escala mundial ideado por un nuevo equipo de delincuentes: Las Bad Girls.",
    imagen:
      "https://dx35vtwkllhj9.cloudfront.net/universalstudios/the-bad-guys-2/images/regions/us/updates2/onesheet.jpg",
    publicado: true,
  },
  {
    id: 6,
    nombre: "Pitufos",
    categoria: "Comedia/Infantil",
    descripcion:
      "Pitufina lidera una audaz misión de rescate en el mundo real para salvar a Papá Pitufo después de ser secuestrado por los malvados magos Razamel y Gargamel. Durante esta aventura épica, los Pitufos se unen a nuevos amigos.",
    imagen:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi7VwF6vIdn7XsQF02IoQr2l37_onsPIPN-ypWt5QRhjukK7JL",
    publicado: true,
  },
  {
    id: 7,
    nombre: "Casi familia",
    categoria: "Comedia",
    descripcion:
      "Durante un viaje que se convierte en una comedia de orgullo y rivalidad, un papá brasileño encuentra la horma de su zapato cuando le presentan a los suegros argentinos de su hija.",
    imagen:
      "https://marieclaire.com.mx/wp-content/uploads/2025/07/casi-familia-pelicula-1.jpg",
    publicado: true,
  },
  {
    id: 8,
    nombre: "La otra boda",
    categoria: "Comedia",
    descripcion:
      "Una mujer que planea la boda ideal de su hermana y el padre de una futura novia descubren que sus bodas están reservadas al mismo tiempo. Cuando ambas partes deciden compartir el pequeño lugar, sobreviene el caos y aguarda el desastre.",
    imagen:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTww3Vf9Vma3Uns9ltNgocShfEGJrURJcVqyeIeJZLOz8gK2tRp",
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
            <h1 className="display-5 fw-bold">F1 LA PELÍCULA</h1>
            <p className="lead">
              <strong>
                Sonny Hayes era el fenómeno más prometedor de la Formula 1 en
                los años 90 hasta que sufrió un accidente en la pista. Treinta
                años después, su excompañero, Ruben Cervantes, lo convence de
                volver para correr junto al talentoso novato Joshua Pearce.
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
            <div className="ratio ratio-16x9 rounded overflow-hidden">
              <iframe
                className="link-de-youtube"
                src="https://www.youtube.com/embed/aw8YyC4B1EA?si=eosB4so4D_UYfitp"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </Col>
        </Row>
      </section>

      {/* Listas por categoría, también dentro del mismo container */}
      <section className="mb-4">
        <h1 className="tituloCategoria mb-3 text-center">
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
        <h1 className="tituloCategoria mb-3 text-center">
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
        <h1 className="tituloCategoria mb-3 text-center">
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
        <h1 className="tituloCategoria mb-3 text-center">
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
