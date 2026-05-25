import React, { useEffect } from "react";
import UserNavBar from "../../components/User/UserNavBar";
import CanchaCard from "../../components/User/CanchaCard";
import { useState } from "react";
import Calendario from "../../components/User/Calendario";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function ListaCanchas() {
    const location = useLocation();
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [canchaSeleccionada, setCanchaSeleccionada] = useState(null);

    const [fecha, setFecha] = useState(null);
    const [hora, setHora] = useState("");

    const abrirModal = (cancha) => {
        const usuario = localStorage.getItem("user");

        if (!usuario){
            alert("Debes iniciar sesión para reservar tu cancha⚽")
            navigate("/login");
            return;
        }

        setCanchaSeleccionada(cancha);
        setShowModal(true);
    }
    useEffect(() => {
        if (location.state?.canchaSeleccionada) {
            setCanchaSeleccionada(location.state.canchaSeleccionada);
            setShowModal(location.state.cancha);
        }
    }, [location.state]);

    const canchas = [
        {
            id: 1,
            nombre: "Cancha 1 - Fútbol 5",
            posicion: [2.4448, -76.6147],
            complejo: "FutZone",
            ubicacion: "Complejo Deportivo FutZone",
            telefono: "3106021273",
            precio: "70.000",
            imagen: "/img/cancha1.jpg"
        },

        {
            id: 2,
            nombre: "Cancha 2 - Fútbol 5",
            posicion: [2.4448, -76.6147],
            complejo: "FutZone",
            ubicacion: "Complejo Deportivo FutZone",
            telefono: "3106021273",
            precio: "65.000",
            imagen: "/img/cancha2.jpg"
        },

        {
            id: 3,
            nombre: "Cancha 3 - Fútbol 7",
            posicion: [2.4448, -76.6147],
            complejo: "FutZone",
            ubicacion: "Complejo Deportivo FutZone",
            telefono: "3106021273",
            precio: "80.000",
            imagen: "/img/cancha3.webp"
        },

        {
            id: 4,
            nombre: "Cancha 4 - Fútbol 5",
            posicion: [2.4448, -76.6147],
            complejo: "FutZone",
            ubicacion: "Complejo Deportivo FutZone",
            telefono: "3106021273",
            precio: "60.000",
            imagen: "/img/cancha4.webp"
        },

        {
            id: 5,
            nombre: "Cancha 5 - Fútbol 8",
            posicion: [2.4448, -76.6147],
            complejo: "FutZone",
            ubicacion: "Complejo Deportivo FutZone",
            telefono: "3106021273",
            precio: "90.000",
            imagen: "/img/cancha5.webp"
        }
    ];
    return (
        <div className="bg-light min-vh-100">
            <div className="container-fluid px-0 mt-0" style={{ maxWidth: "1200px" }}>
                <div className="text-center">
                    <h2 className="fw-bold text-success">
                        Canchas disponibles ⚽
                    </h2>

                    <p className="text-secondary">
                        Nuestro complejo deportivo cuenta con varias canchas sintéticas
                        de alta calidad para que disfrutes tus partidos con amigos.
                        Reserva fácil y rápido desde FutZone.
                    </p>

                </div>
                <div className="row">
                    {canchas.map((cancha) => (
                        <div className="col-md-6 mb-4" key={cancha.id}>
                            <CanchaCard
                                key={cancha.id}
                                imagen={cancha.imagen}
                                nombre={cancha.nombre}
                                posicion={cancha.posicion}
                                complejo={cancha.complejo}
                                ubicacion={cancha.ubicacion}
                                telefono={cancha.telefono}
                                precio={cancha.precio}
                                onReservar={() => abrirModal(cancha)}
                            />
                        </div>
                    ))
                    }
                </div>
                {showModal && (
                    <div className="modal fade show d-block" tabIndex="-1">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">

                                {/* HEADER */}
                                <div className="modal-header mb-0">
                                    <h5 className="modal-title text-success">
                                        Reservar {canchaSeleccionada?.nombre}
                                    </h5>
                                    <button
                                        className="btn-close"
                                        onClick={() => setShowModal(false)}
                                    ></button>
                                </div>

                                {/* BODY */}
                                <div className="modal-body px-0">

                                    {/* 📅 CALENDARIO */}
                                    <Calendario onSelect={(f) => setFecha(f)} />

                                    {/* 🕒 HORA */}
                                    <select
                                        className="form-control mt-2 bg-secondary text-white"
                                        value={hora}
                                        onChange={(e) => setHora(e.target.value)}
                                    >
                                        <option value="">Selecciona una hora</option>
                                        <option>6:00 PM</option>
                                        <option>7:00 PM</option>
                                        <option>8:00 PM</option>
                                        <option>9:00 PM</option>
                                    </select>

                                    {/* INFO */}
                                    {fecha && (
                                        <p className="mt-3">
                                            📅 Fecha: <strong>{fecha}</strong>
                                        </p>
                                    )}

                                </div>

                                {/* FOOTER */}
                                <div className="modal-footer">

                                    <button
                                        className="btn btn-secondary"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Cancelar
                                    </button>

                                    <button
                                        className="btn btn-success"
                                        onClick={() => {
                                            if (!fecha || !hora) {
                                                alert("Selecciona fecha y hora");
                                                return;
                                            }

                                            const nuevaReserva = {
                                                nombre: canchaSeleccionada.nombre,
                                                imagen: canchaSeleccionada.imagen,
                                                ubicacion: canchaSeleccionada.ubicacion,
                                                precio: canchaSeleccionada.precio,
                                                fecha,
                                                hora,
                                                estado: "Pendiente",
                                                rating: 0
                                            };

                                            const reservas = JSON.parse(localStorage.getItem("misReservas")) || [];
                                            reservas.push(nuevaReserva);
                                            localStorage.setItem("misReservas", JSON.stringify(reservas));

                                            setShowModal(false);

                                            alert("Reserva guardada correctamente ✅");
                                        }}
                                    >
                                        Confirmar
                                    </button>

                                </div>

                            </div>
                        </div>
                    </div>
                )}

            </div>
        </div>
    );
}