import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../assets/img/futzone logo.jpeg";
import { FaMapMarkedAlt, FaFutbol, FaCalendarAlt, FaBuilding } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function UserNavBar() {
    const navigate = useNavigate();

    const usuario = localStorage.getItem("user");

    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-lg px-2">

            {/* LOGO */}
            <Link
                className="navbar-brand d-flex align-items-center gap-2"
                to="/user/mapa"
            >
                <img
                    src={logo}
                    alt="FutZone"
                    style={{ width: "55px", height: "55px", objectFit: "contain", borderRadius: "50%" }}
                />

                <span className="fw-bolder text-white">FutZone</span>
            </Link>

            {/* BOTÓN MOBILE */}
            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarUser"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            {/* CONTENIDO */}
            <div className="collapse navbar-collapse" id="navbarUser">

                {/* LINKS IZQUIERDA */}
                <ul className="navbar-nav me-auto">

                    <li className="nav-item">
                        <NavLink to="/user/mapa" className={({ isActive }) =>
                            isActive ? "nav-link text-success fw-bold" : "nav-link text-light"
                        } >
                            <FaMapMarkedAlt className="icono-convenio" /> Mapa
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/user/canchas" className={({ isActive }) =>
                            isActive ? "nav-link text-success fw-bold" : "nav-link text-light"
                        } >
                            <FaFutbol className="icono-convenio" /> Canchas
                        </NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/user/misreservas" className={({ isActive }) =>
                            isActive ? "nav-link text-success fw-bold" : "nav-link text-light"
                        } >
                            <FaCalendarAlt className="icono-convenio" /> Mis Reservas
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/user/convenios" className={({ isActive }) =>
                            isActive ? "nav-link text-success fw-bold" : "nav-link text-light"
                        } >
                            <FaBuilding className="icono-convenio"/> Convenios
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <Link className="nav-link nav-hover" to="/user/calendario">
                            📅 Calendario
                        </Link>
                    </li> */}


                </ul>

                {/* DERECHA */}
                <div className="d-flex align-items-center gap-3">

                    {/* Usuario */}
                    {/* <h5 className="mb-0 text-white">
                        Bienvenido, {usuario.nombre || "Usuario"}
                    </h5> */}
                    <NavLink to="/user/perfil" className="nav-link text-light">
                        👤Perfil
                    </NavLink>

                    {/* Logout */}
                    <button
                        className="btn btn-outline-light btn-sm"
                        onClick={handleLogout}
                    >
                        Cerrar sesión
                    </button>

                </div>

            </div>
        </nav>
    );
}