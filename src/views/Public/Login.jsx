import "../../styles/login.css";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Aquí iría la lógica de autenticación (ej. llamada a API)
    // Por ahora, simplemente navegamos a la página de usuario
    if (!usuario || !password) {
      alert("Completa los campos");
      return;
    }
    localStorage.setItem("user", usuario); // Simula un inicio de sesión
    // Redirige al mapa del usuario después de iniciar sesión
    navigate("/user/canchas");
  }
  return (
    <>
      <div className="login-wrapper">

        <div className="col-md-6 d-flex align-items-center justify-content-center bg-light">
          <div className="w-75">

            <h1 className="text-success fw-bold mb-3">¡Bienvenidos!</h1>

            <p className="mb-4">
              Ingresa y vive la pasión del futbol ⚽
            </p>

            <form onSubmit={handleLogin}>
              {/* Usuario */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Nombre de usuario.
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Escribe tu usuario"
                  value={usuario}
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>

              {/* Contraseña */}
              <div className="mb-3">
                <label className="form-label fw-bold">
                  Ingrese su contraseña.
                </label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Escribe tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              {/* Recordar + Olvido */}
              <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                  <input type="checkbox" className="form-check-input me-2" />
                  <label className="form-check-label">
                    Recordar contraseña
                  </label>
                </div>

                <Link to="/Recuperar" className="text-success text-decoration-none">
                  ¿Has olvidado tu contraseña?
                </Link>
                
              </div>

              {/* Botón */}
              <button type="submit" className="btn btn-success w-100 py-2 mb-4">
                Iniciar sesión
              </button>
              
            </form>

            {/* Redes */}
            <p className="text-center mb-2">O continuar con:</p>

            <div className="d-flex justify-content-center gap-3">
              <button className="btn btn-light rounded-circle">
                <FaFacebookF />
              </button>

              <button className="btn btn-light rounded-circle">
                <FaApple />
              </button>

              <button className="btn btn-light rounded-circle">
                <FaGoogle />
              </button>
            </div>

          </div>
        </div>

        {/* LADO DERECHO (IMAGEN) */}
        <div className="login-right"></div>

      </div>
    </>
  );
}