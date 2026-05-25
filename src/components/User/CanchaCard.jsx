import React from "react";
import { useNavigate } from "react-router-dom";

export default function CanchaCard({ imagen, nombre, complejo, ubicacion, telefono, precio, posicion, onReservar }) {

    const handleComoLlegar = () => {
        if(!posicion) {
            alert("No hay ubicación disponible");
            return;
        }
        if (!navigator.geolocation) {
            alert("Tu navegador no soporta geolocalización");
            return;
        }
        navigator.geolocation.getCurrentPosition(
            (position) => {
                // const lat = position.coords.latitude;
                // const lng = position.coords.longitude;

                // const destinoLat = cancha.posicion[0];
                // const destinoLng = cancha.posicion[1];

                // const url = `https://www.google.com/maps/dir/${lat},${lng}/${destinoLat},${destinoLng}`;

                const ubi = "https://maps.app.goo.gl/fxdjB3bzuYUEJxkA8";

                // window.open(url, "_blank");
                window.open(ubi, "_blank", "noopener,noreferrer");
            },
            () => {
                alert("Debes permitir el acceso a tu ubicación");
            }
        );
    };
    return (
        <div className="card shadow-lg mb-4">
            <div className="row g-0">
                <div className="col-md-4">
                    <img
                        src={imagen}
                        className="w-100 h-100 rounded-start object-fit-cover"
                        alt={nombre}
                    />
                </div>
                <div className="col-md-8">
                    <div className="card-body">

                        <h5 className="card-title text-success fw-bold">
                            {nombre}
                        </h5>

                        <p className="card-text">
                            <strong>Complejo:</strong> {complejo}
                        </p>

                        <p className="card-text">
                            <strong>Ubicación:</strong> {ubicacion}
                        </p>

                        <p className="card-text">
                            <strong>Teléfono:</strong> {telefono}
                        </p>

                        <p className="card-text">
                            <strong>Precio:</strong> ${precio} / hora
                        </p>

                        <div className="d-flex gap-3">

                            <button className="btn btn-success"
                                onClick={() => onReservar && onReservar({ nombre, imagen, precio })}
                            >
                                Reservar
                            </button>

                            <button className="btn btn-outline-secondary"
                                onClick={handleComoLlegar}>
                                Cómo llegar
                                
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}