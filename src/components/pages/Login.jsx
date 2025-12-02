import { Container, Form, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (data) => {
    const { email, password } = data;

    // simulacion de autenticacion
    if (email === "" && password === "") {
      setUsuarioLogueado(true);
      Swal.fire({
        icon: "success",
        title: "Bienvenido!",
        text: "Inicio de sesión exitoso.",
        timer: 2000,
        showConfirmButton: false,
      });
      // guardamos sesion en el localStorage
      localStorage.setItem("usuarioLogueado", "true");
      // redireccionamos al inicio
      navegacion("/");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };

  const manejarSubmit = (e) => {
    e.preventDefault(); // solo para que no recargue la página en el maquetado
  };

  return (
    <main className="container my-4">
      <h1 className="mb-4">Login</h1>
      <Container className="col-12 col-md-6">
        <Form onSubmit={handleSubmit(onSubmit) || manejarSubmit}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="ejemplo@correo.com" {...register("email",{
              required: "El email es un dato obligatorio",
              pattern: {
                value:
                  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                message:
                  "El email debe cumplir con el siguiente formato correo@dominio.extension",
              }
            })}/>
            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="********" {...register("password", {
              required: "La contraseña es un dato obligatorio",
              minLength: {
                value: 6,
                message: "La contraseña debe tener al menos 6 caracteres",
              },
            })}/>
            <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
          </Form.Group>

          <div className="mb-3">
            <Button variant="link" className="p-0">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>

          <Button variant="primary" type="submit">
            Ingresar
          </Button>
        </Form>
      </Container>
    </main>
  );
};

export default Login;
