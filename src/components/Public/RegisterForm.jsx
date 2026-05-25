import "../../styles/register.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";



export default function RegisterForm() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acepta, setAcepta] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();

    // Validaciones de campos 
    if (!nombre || !email || !password || !confirmPassword) {
      alert("Completa todos los campos ❌");
      return;
    }

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    if (!acepta) {
      alert("Debes aceptar los términos ❌");
      return;
    }

    const nuevoUsuario = {
      nombre,
      email,
      password,
    };

    const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    const existe = usuarios.find((u) => u.email === email);

    if (existe) {
      alert("Este correo ya está registrado ❌");
      return;
    }

    usuarios.push(nuevoUsuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Usuario registrado correctamente ✅");

    navigate("/login");
  };

  return (

    <div className="container-fluid vh-100" >
      <div className="row h-100">

        {/* IZQUIERDA - FORMULARIO */}
        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div className="w-75">

            <h3 className="text-success fw-bold mb-1">
              ¡Regístrate con FutZone!
            </h3>

            <p className="mb-4">
              Completa los campos para crear tu cuenta
            </p>

            <form onSubmit={handleRegister}>

              <input className="form-control mb-3"
                placeholder="Nombre de usuario"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)} />

              <input className="form-control mb-3"
                placeholder="Correo electrónico"
                value={email} onChange={(e) => setEmail(e.target.value)} />

              <input type="password"
                className="form-control mb-3"
                placeholder="Contraseña"
                value={password} onChange={(e) => setPassword(e.target.value)} />
              <input type="password" className="form-control mb-3"
                placeholder="Confirmar contraseña"
                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

              {/* Checkbox */}
              <div className="form-check mb-3">
                <input className="form-check-input" 
                type="checkbox" 
                checked={acepta} onChange={(e) => setAcepta(e.target.checked)}/>

                <label className="form-check-label">
                  Acepto los términos
                </label>
              </div>

              {/* Botón */}
              <button className="btn btn-success w-100 py-2 mb-4">
                Registrarse
              </button>

            </form>

            {/* Redes */}
            <p className="text-center mb-2">O registrarse con:</p>

            <div className="d-flex justify-content-center gap-3 mb-3">
              <button className="btn btn-light rounded-circle icon-btn">
                <FaFacebookF />
              </button>

              <button className="btn btn-light rounded-circle icon-btn">
                <FaApple />
              </button>

              <button className="btn btn-light rounded-circle icon-btn">
                <FaGoogle />
              </button>
            </div>

            {/* Link login */}
            <p className="text-center">
              ¿Ya tienes cuenta?{" "}
              <a href="/login" className="text-primary">
                Iniciar sesión
              </a>
            </p>

          </div>
        </div>

        {/* DERECHA - IMAGEN */}
        <div className="col-md-6 d-none d-md-block p-0">
          <div className="img-register"></div>
        </div>

      </div>
    </div>
  );
}
