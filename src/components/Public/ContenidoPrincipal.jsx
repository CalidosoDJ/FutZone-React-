import "../../styles/hero.css";
import { useNavigate } from "react-router-dom";

export default function ContentidoPrincipal() {
  const navigate = useNavigate();
  return (
    <div className="hero d-flex align-items-center text-center">
      <div className="container">
        <h1 className="display-4 fw-bold">
          Plataforma Inteligente para la Gestión de Canchas ⚽
        </h1>

        <p className="lead mt-3">
          Administra y reserva canchas sintéticas en segundos
        </p>

        <div className="mt-4">
          <button className="btn btn-success btn-lg me-3" onClick={() => navigate("/login")}>
            Reservar ahora
          </button>

          <button className="btn btn-outline-light btn-lg" onClick={() => navigate("/login")}>
            Ver plataforma
          </button>
        </div>
      </div>
    </div>
  );
}

