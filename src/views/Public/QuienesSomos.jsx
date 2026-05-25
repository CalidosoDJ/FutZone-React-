import "../../styles/quienes.css";

export default function QuienesSomos() {
  return (
    <div>

      {/* HERO */}
      <section className="hero-quienes text-white text-center d-flex align-items-center">
        <div className="container">
          <h1 className="fw-bold">Sobre FutZone ⚽</h1>
          <p className="lead">
            Innovando la forma de reservar canchas sintéticas en Popayán
          </p>
        </div>
      </section>

      {/* SOBRE NOSOTROS */}
      <section className="container py-3">
        <h2 className="text-white fw-bold mb-3">¿Quiénes somos?</h2>

        <p className="text-white">
          FutZone es una plataforma inteligente diseñada para facilitar la
          gestión y reserva de canchas sintéticas de fútbol. Nuestro objetivo
          es conectar jugadores con espacios deportivos de manera rápida,
          sencilla y eficiente.
        </p>

        <p className="text-white">
          Buscamos digitalizar el proceso de reservas, optimizando el tiempo
          tanto para los usuarios como para los administradores de las canchas.
        </p>
      </section>

      {/* MISIÓN Y VISIÓN */}
      <section className="bg-light py-5">
        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h4 className="text-success fw-bold">Misión</h4>
              <p>
                Brindar una solución tecnológica que facilite la reserva de
                canchas sintéticas, mejorando la experiencia de los usuarios.
              </p>
            </div>

            <div className="col-md-6">
              <h4 className="text-success fw-bold">Visión</h4>
              <p>
                Ser la plataforma líder en gestión de canchas deportivas en
                Colombia, ofreciendo innovación y calidad en cada servicio.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-5 bg-dark text-white">
        <h3 className="fw-bold">¿Listo para jugar? ⚽</h3>
        <p>Reserva tu cancha ahora y vive la experiencia FutZone</p>

        <a href="/login" className="btn btn-success px-4">
          Comenzar
        </a>
      </section>

    </div>
  );
}