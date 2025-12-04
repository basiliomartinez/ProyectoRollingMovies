import { useState } from "react";
import { useNavigate } from "react-router";
import emailjs from "@emailjs/browser";

const Registro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // validaciones generales
    if (
      !formData.nombre ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (formData.nombre.length < 3) {
      setError("El nombre debe tener al menos 3 caracteres.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("El email no es válido.");
      return;
    }

    // validaciones de contraseñas
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(formData.password)) {
      setError(
        "La contraseña debe tener al menos 6 caracteres, incluyendo letras y números."
      );
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // envía nombre y email al administrador
      const response = await emailjs.send(
        "service_jr95iwe", //id del servicio
        "template_ckazent", //id del template
        {
          name: formData.nombre,
          email: formData.email,
        },
        "Kv8HqoB7gefisX4tp" //key public de la página para autenticar el envío
      );

      console.log("Email enviado:", response);

      setSuccess("Registro enviado correctamente al administrador.");

      // guardar usuario en localStorage 
      const usuarioSeguro = {
        nombre: formData.nombre,
        email: formData.email,
      };

      const usuariosGuardados =
        JSON.parse(localStorage.getItem("usuarios")) || [];
      usuariosGuardados.push(usuarioSeguro);
      localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));

      // Limpiar formulario
      setFormData({
        nombre: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // redirigir a login
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error("Error al enviar EmailJS:", err);
      setError("Hubo un error al enviar el formulario. Intente nuevamente.");
    }

    setLoading(false);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center py-5">
      <div className="w-100" style={{ maxWidth: "550px" }}>
        <h2 className="text-center mb-4 tituloRegistro">Crear Cuenta</h2>

        <form
          onSubmit={handleSubmit}
          className="bg-dark card p-4 shadow-sm border-0"
        >
          {error && <p className="alert alert-danger">{error}</p>}
          {success && <p className="alert alert-success">{success}</p>}

          {/* nombre */}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Ejemplo: Juan Rodríguez"
              required
            />
          </div>

          {/* correo */}
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
              placeholder="nombre@ejemplo.com"
              required
            />
          </div>

          {/* contraseña */}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-control"
              placeholder="******"
              required
            />
          </div>

          {/* confirmar contraseña */}
          <div className="mb-3">
            <label className="form-label">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="form-control"
              placeholder="******"
              required
            />
          </div>

          <button
            type="submit"
            className="mt-3 btn btn-primary w-100 py-2"
            disabled={loading}
          >
            {loading ? "Enviando..." : "Registrarme"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
