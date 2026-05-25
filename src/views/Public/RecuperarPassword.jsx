import { useState } from "react";

export default function RecuperarPassword() {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Ingresa tu correo");
      return;
    }

    // Simulación envío
    setEnviado(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
      
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        
        <h4 className="text-center text-success mb-3">
          Recuperar contraseña 🔐
        </h4>

        {!enviado ? (
          <form onSubmit={handleSubmit}>

            <input
              type="email"
              className="form-control mb-3"
              placeholder="Ingresa tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button className="btn btn-success w-100">
              Enviar enlace
            </button>

          </form>
        ) : (
          <p className="text-center text-success">
            📩 Se envió un enlace a tu correo
          </p>
        )}

      </div>

    </div>
  );
}