import { useLocation, useNavigate } from "react-router-dom";

export default function DetalleReserva() {
  const location = useLocation();
  const navigate = useNavigate();

  const reserva = location.state?.reserva;

  if (!reserva) {
    return <p>No hay información de la reserva</p>;
  }

  const handlePagar = () => {
    const reservas = JSON.parse(localStorage.getItem("misReservas")) || [];

    const index = reservas.findIndex(
      (r) => 
        r.nombre === reserva.nombre &&
        r.fecha === reserva.fecha &&
        r.hora === reserva.hora
    );
    if (index !== -1) {
      reservas[index].estado = "pagado";

      localStorage.setItem("misReservas", JSON.stringify(reservas));
    }
    alert("Pago realizado correctamente 💳✅");
    navigate("/user/misreservas");
  };

  return (
    <div className="container mt-2">

      <h2 className="text-success mb-4">
        Detalle de Reserva ⚽
      </h2>

      <div className="card shadow-lg">

        <div className="row g-0">

          {/* IMAGEN */}
          <div className="col-md-5">
            <img
              src={reserva.imagen}
              className="w-100 h-100 object-fit-cover"
              alt={reserva.nombre}
            />
          </div>

          {/* INFO */}
          <div className="col-md-7">
            <div className="card-body">

              <h4 className="text-success fw-bold">
                {reserva.nombre}
              </h4>

              <p><strong>📍 Ubicación:</strong> {reserva.ubicacion}</p>
              <p><strong>📅 Fecha:</strong> {reserva.fecha}</p>
              <p><strong>🕒 Hora:</strong> {reserva.hora}</p>
              <p><strong>💰 Precio:</strong> ${reserva.precio}</p>

              <div className="d-flex gap-2 mt-3">

                <button
                  className="btn btn-success"
                  onClick={handlePagar}
                >
                  Pagar 💳
                </button>

                <button
                  className="btn btn-secondary"
                  onClick={() => navigate("/user/misreservas")}
                >
                  Volver
                </button>

              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}