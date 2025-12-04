import { useState } from "react";
import { useNavigate } from "react-router";

const Registro = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  // Manejo de cambios en inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar Formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (!formData.nombre || !formData.email || !formData.password) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

     if (formData.password !== formData.confirmPassword) {
    setError("Las contraseñas NO coinciden.");
    return;
  }

    //Guardar usuario en localStorage
    const usuarioNuevo = {
      nombre: formData.nombre,
      email: formData.email,
      password: formData.password,
    };

    localStorage.setItem("usuarioRegistrado", JSON.stringify(usuarioNuevo));

    //Limpiar error
    setError("");

    //dirigir a login
    navigate("/login");
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

          {/*Nombre*/}
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              name="nombre"
              className="form-control"
              placeholder="Ejemplo: Juan Rodríguez"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>

          {/*Email*/}
          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Nombre@ejemplo.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/*Contraseña*/}
          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="******"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Repetir la contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              className="form-control"
              placeholder="******"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="mt-3 btn btn-registro w-100 py-2">
            Registrarme
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registro;
