import { useState } from "react";

export default function Convenios() {

  const [form, setForm] = useState({
    empresa: "",
    nombre: "",
    correo: "",
    telefono: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const solicitudes = JSON.parse(localStorage.getItem("convenios")) || [];
    solicitudes.push(form);

    localStorage.setItem("convenios", JSON.stringify(solicitudes));

    alert("Solicitud enviada ✅");
    
    setForm({
      empresa: "",
      nombre: "",
      correo: "",
      telefono: ""
    });
  };

  return (
    <div className="container h-0 mt-0 d-flex justify-content-center">

      <div className="card shadow p-3 text-center" style={{ maxWidth: "790px", width: "100%", maxHeight: "455px" }}>

        <h2 className="text-success mb-2 mt-0">
          🎯 ¿Quieres descuentos en nuestras canchas?
        </h2>

        <p className="text-muted mb-0">
          Afíliate con tu empresa o club deportivo y obtén beneficios exclusivos en FutZone.
        </p>

        <hr />

        <h5 className="mb-1">Solicitar convenio</h5>

        <input
          type="text"
          name="empresa"
          placeholder="Nombre de la empresa"
          className="form-control mb-3"
          value={form.empresa}
          onChange={handleChange}
        />

        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          className="form-control mb-3"
          value={form.nombre}
          onChange={handleChange}
        />

        <input
          type="email"
          name="correo"
          placeholder="Correo"
          className="form-control mb-3"
          value={form.correo}
          onChange={handleChange}
        />

        <input
          type="text"
          name="telefono"
          placeholder="Teléfono"
          className="form-control mb-3"
          value={form.telefono}
          onChange={handleChange}
        />

        <button className="btn btn-success" onClick={handleSubmit}>
          Enviar solicitud
        </button>

      </div>

    </div>
  );
}