import { Link } from "react-router-dom";
import "../../styles/authbuttons.css";

export default function AuthButtons() {
  return (
    <>
      <Link to="/login" className="btn btn-outline-light me-2">
        Iniciar sesión
      </Link>
      <Link to="/register" className="btn btn-success me-2">
        Registrarse
      </Link>
    </>
  );
    
}

