import { useState, useEffect } from "react";
import "../../styles/perfil.css";
export default function Perfil() {
  const [usuario, setUsuario] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    foto: ""
  });

  const [editando, setEditando] = useState(false);

  // cargar datos
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("usuario"));
    if (data) setUsuario(data);
  }, []);

  // convertir imagen a base64
  const handleFoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setUsuario({ ...usuario, foto: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const guardar = () => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
    setEditando(false);
    alert("Perfil actualizado ✅");
  };

  return (
    <div className="container-fluid mt-0 d-flex justify-content-center">

      <div className="card perfil-card shadow-lg">

        {/* HEADER */}
        <div className="perfil-header text-center">

          <img
            src={usuario.foto || "https://i.pravatar.cc/150"}
            alt="avatar"
            className="perfil-avatar"
          />

          {editando && (
            <input
              type="file"
              className="form-control mt-1"
              onChange={handleFoto}
            />
          )}

          <h4 className="mt-1">{usuario.nombre || "Usuario"}</h4>
          <p className="text-light small">{usuario.correo}</p>
        </div>

        {/* BODY */}
        <div className="card-body">

          {/* NOMBRE */}
          <div className="mb-3">
            <label>Nombre</label>
            <input
              type="text"
              className="form-control"
              value={usuario.nombre}
              disabled={!editando}
              onChange={(e) =>
                setUsuario({ ...usuario, nombre: e.target.value })
              }
            />
          </div>

          {/* CORREO */}
          <div className="mb-3">
            <label>Correo</label>
            <input
              type="email"
              className="form-control"
              value={usuario.correo}
              disabled={!editando}
              onChange={(e) =>
                setUsuario({ ...usuario, correo: e.target.value })
              }
            />
          </div>

          {/* TELÉFONO */}
          <div className="mb-3">
            <label>Teléfono</label>
            <input
              type="text"
              className="form-control"
              value={usuario.telefono}
              disabled={!editando}
              onChange={(e) =>
                setUsuario({ ...usuario, telefono: e.target.value })
              }
            />
          </div>

          {/* BOTONES */}
          <div className="d-flex justify-content-end gap-2">

            {!editando ? (
              <button
                className="btn btn-success"
                onClick={() => setEditando(true)}
              >
                Editar perfil
              </button>
            ) : (
              <>
                <button className="btn btn-success" onClick={guardar}>
                  Guardar
                </button>

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => setEditando(false)}
                >
                  Cancelar
                </button>
              </>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}