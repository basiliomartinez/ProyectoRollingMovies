import { Form, Button, Card } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import "../../login.css";

const Login = ({ setUsuarioLogueado }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navegacion = useNavigate();

  const onSubmit = (data) => {
    console.log(data);

    // simulacion de autenticacion
    if (
      import.meta.env.VITE_EMAIL === data.email &&
      import.meta.env.VITE_PASSWORD === data.password
    ) {
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
      // redireccionamos al administrador
      navegacion("/administrador");
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Usuario o contraseña incorrectos",
      });
    }
  };

  return (
    <main className="d-flex justify-content-center align-items-center login-bg">
      <Card className="login-card p-4">
        <h2 className="text-center mb-4 fw-bold">Iniciar Sesión</h2>

        <Form onSubmit={handleSubmit(onSubmit)}>
          {/* EMAIL */}
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label className="fw-semibold">Email o usuario</Form.Label>
            <Form.Control
              type="email"
              placeholder="ejemplo@correo.com"
              className="input-estilizado"
              {...register("email", {
                required: "El email es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Formato de email inválido",
                },
              })}
            />
            {errors.email && (
              <small className="text-danger">{errors.email.message}</small>
            )}
          </Form.Group>

          {/* PASSWORD */}
          <Form.Group className="mb-3" controlId="loginPassword">
            <Form.Label className="fw-semibold">Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="****"
              className="input-estilizado"
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 4,
                  message: "Debe tener al menos 4 caracteres",
                },
              })}
            />
            {errors.password && (
              <small className="text-danger">{errors.password.message}</small>
            )}
          </Form.Group>

          <div className="mb-3 text-end">
            <Button variant="link" className="p-0 link-olvide">
              ¿Olvidaste tu contraseña?
            </Button>
          </div>

          <Button className="btn-login w-100 mt-2" type="submit">
            Ingresar
          </Button>
        </Form>
      </Card>
    </main>
  );
};

export default Login;
