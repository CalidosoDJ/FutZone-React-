import { Link } from 'react-router-dom';
import AuthButtons from './AuthButtons.jsx';
import "../../styles/Nav.css"

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success px-4 shadow">
      <div className="navbar-nav">
        <Link className="nav-link" to="/Mapa">Mapa</Link>
        <Link className="nav-link" to="/ListaCanchas">Lista de Canchas</Link>
        <Link className="nav-link" to="/quienes-somos">¿Quienes Somos?</Link>
        <Link className="nav-link" to="/noticias">Novedades</Link>
      </div>

      <div className="ms-auto">
          <AuthButtons />
      </div>
    </nav>
  );
}
