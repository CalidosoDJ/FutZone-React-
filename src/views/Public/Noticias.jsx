import "../../styles/noticias.css";

const [showModal, setShowModal] = useState(false);
const [novedadSeleccionada, setNovedadSeleccionada] = useState(null);

export default function Noticias() {
  const abrirModal = (novedad) => {
   setNovedadSeleccionada(novedad);
   setShowModal(true);
}
  const noticias = [
    {
      id: 1,
      titulo: "Nuevo torneo en Popayán ⚽",
      descripcion: "Inscripciones abiertas para el torneo 5vs5 este mes.",
      imagen: "/src/assets/img/canchas-sintéticas img.jpg",
      fecha: "05 Abril 2026",

      torneo: {
      premio: "$1.000.000",
      equipos: 16,
      valor: "$80.000",
      reglas: "5 jugadores + 2 cambios",
      hora: "7:00 PM"
    }
    },

    {
      id: 2,
      titulo: "Promo especial 🎉",
      descripcion: "Descuento del 20% en reservas nocturnas.",
      imagen: "/src/assets/img/promocion.webp",
      fecha: "02 Abril 2026"
    },
    {
      id: 3,
      titulo: "Nueva cancha disponible 🏟️",
      descripcion: "Se agregó una nueva cancha sintética en el norte.",
      imagen: "/src/assets/img/novedades.webp",
      fecha: "01 Abril 2026"
    }
  ];

  return (
    <div className="container py-1">

      <h2 className="text-center text-white fw-bold mb-3">
        📰 Novedades FutZone
      </h2>

      <div className="row">

        {noticias.map((item) => (
          <div key={item.id} className="col-md-4 mb-4">

            <div className="card card-noticia h-100">

              <img src={item.imagen} className="card-img-top" />

              <div className="card-body">
                <h5 className="fw-bold">{item.titulo}</h5>

                <p className="text-muted small">{item.fecha}</p>

                <p>{item.descripcion}</p>

                <button className="btn btn-success btn-sm" onClick={() => abrirModal(n)}>
                  Ver más
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}