import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useNavigate, useLocation } from "react-router-dom";


export default function MapaUser() {
  const location = useLocation();
  const canchaSeleccionada = location.state?.canchaSeleccionada;
  const navigate = useNavigate();

  const canchas = [
    {
      id: 1,
      nombre: "Cancha FutZone Norte",
      posicion: [2.4448, -76.6147],
    },
    {
      id: 2,
      nombre: "Cancha Elite Sur",
      posicion: [2.4410, -76.6060],
    },
  ];

  return (
    <div style={{ height: "90vh" }}>
      <MapContainer
        center={[canchaSeleccionada?.posicion || 2.4448, -76.6147]}
        zoom={14}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {canchas.map((cancha) => (
          <Marker key={cancha.id} position={cancha.posicion}>
            <Popup>
              <strong>{cancha.nombre}</strong>
              <br />

              <button
                className="btn btn-success mt-2"
                onClick={() => navigate("/user/canchas", { state: { canchaSeleccionada: cancha } })}
              >
                Reservar
              </button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}