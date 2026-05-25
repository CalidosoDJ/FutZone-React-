import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MisReservas() {
  const navigate = useNavigate();

  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("misReservas")) || [];
    setReservas(data);
  }, []);

  // ❌ eliminar reserva
  const eliminarReserva = (index) => {
    const nuevas = reservas.filter((_, i) => i !== index);
    setReservas(nuevas);
    localStorage.setItem("misReservas", JSON.stringify(nuevas));
  };

  // ✏️ editar reserva
  const editarReserva = (index) => {
    const nuevaFecha = prompt("Nueva fecha (YYYY-MM-DD):");
    if (!nuevaFecha) return;

    const nuevas = [...reservas];
    nuevas[index].fecha = nuevaFecha;

    setReservas(nuevas);
    localStorage.setItem("misReservas", JSON.stringify(nuevas));
  };

  // ⭐ calificar reserva
  const calificar = (index, valor) => {
    const nuevas = [...reservas];
    nuevas[index].rating = valor;

    setReservas(nuevas);
    localStorage.setItem("misReservas", JSON.stringify(nuevas));
  };

  return (
    <div className="container-fluid mt-1">
      <h2 className="text-white mb-4">Mis Reservas⚽</h2>

      {reservas.length === 0 ? (
        <strong className="text-white">No tienes reservas aún!</strong>
      ) : (
        <div className="row">
          {reservas.map((r, index) => (
            <div className="col-md-6 mb-4" key={index}>

              <div className="card shadow-lg">

                <div className="row g-0">

                  {/* IMAGEN */}
                  <div className="col-md-4">
                    <img
                      src={r.imagen}
                      className="w-100 h-100 object-fit-cover"
                      alt={r.nombre}
                    />
                  </div>

                  {/* INFO */}
                  <div className="col-md-8">
                    <div className="card-body">

                      <h5 className="text-success fw-bold">
                        {r.nombre}
                      </h5>

                      <p>📅 {r.fecha}</p>
                      <p>🕒 {r.hora}</p>

                      <p>
                        Estado:{" "}
                        <strong className={r.estado === "pagado" ? "text-success" : "text-warning"}>
                          {r.estado}
                        </strong>
                      {/* seccion para calificar solo si la reserva está pagada  */}
                        {r.estado === "pagado" && (
                          <div className="mt-2">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <span
                                key={star}
                                style={{
                                  cursor: "pointer",
                                  color: star <= r.rating ? "#ffc107" : "#ccc",
                                  fontSize: "20px"
                                }}
                                onClick={() => calificar(index, star)}
                              >
                                ★
                              </span>
                            ))}
                          </div>
                        )}
                      </p>

                      <div className="d-flex gap-2">

                        {/* EDITAR */}
                        <button
                          className="btn btn-outline-primary"
                          onClick={() => editarReserva(index)}
                        >
                          Editar fecha
                        </button>

                        {/* DETALLE */}
                        <button
                          className="btn btn-outline-success"
                          onClick={() =>
                            navigate("/user/detalle-reserva", {
                              state: { reserva: r }
                            })
                          }
                        >
                          Ver detalle
                        </button>

                        {/* ELIMINAR */}
                        <button
                          className="btn btn-outline-danger"
                          onClick={() => eliminarReserva(index)}
                        >
                          Cancelar
                        </button>

                      </div>

                    </div>
                  </div>

                </div>

              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}