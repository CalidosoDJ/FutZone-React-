import Calendario from "../../components/User/Calendario";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CalendarioView() {
  const location = useLocation();
  const navigate = useNavigate();

  const cancha = location.state?.cancha;

  const [fechaSeleccionada, setFechaSeleccionada] = useState("");
  const [hora, setHora] = useState("");

  if (!cancha) {
    return <h4 className="text-center mt-5">No seleccionaste cancha ❌</h4>;
  }
  const handleReservar = () => {
    const usuario = localStorage.getItem("usuario");

    if (!usuario) {
      navigate("/login");
      return;
    }

    if (!fechaSeleccionada || !hora) {
      alert("Selecciona fecha y hora ❌");
      return;
    }

    const nuevaReserva = {
      cancha: cancha.nombre,
      imagen: cancha.imagen,
      fecha: fechaSeleccionada,
      hora,
    };

    const reservas = JSON.parse(localStorage.getItem("reservas")) || [];
    reservas.push(nuevaReserva);

    localStorage.setItem("reservas", JSON.stringify(reservas));

    alert("Reserva guardada ✅");

    navigate("/user/reservas");
  };

  return (
    <div className="container mt-2 ">

      <h4 className="text-white">Calendario de reservas 📅</h4>

      <div className="card p-1 shadow">
        <Calendario />
      </div>

    </div>
  );
}