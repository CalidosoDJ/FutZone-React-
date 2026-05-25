import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import "leaflet/dist/leaflet.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './views/Public/HomePage.jsx'
import Login from './views/Public/Login.jsx'
import Register from './views/Public/Register.jsx'
import Mapa from './views/Public/Mapa.jsx';
import UserLayout from "./views/User/UserLayout";
import MapaUser from "./views/User/MapaUser";
import QuienesSomos from './views/Public/QuienesSomos.jsx';
import Noticias from './views/Public/Noticias.jsx';
import ListaCanchas from './views/User/ListaCanchas.jsx';
import RecuperarPassword from './views/Public/RecuperarPassword.jsx';
import MisReservas from './views/User/MisReservas.jsx';
import CalendarioView from './views/User/CalendarioView.jsx';
import DetalleReserva from './views/User/DetalleReserva.jsx';
import Perfil from './views/User/Perfil.jsx';
import Convenios from './views/User/Convenios.jsx';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* PUBLICO */}
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/quienes-somos" element={<QuienesSomos />} />
                <Route path="/mapa" element={<Mapa />} />
                <Route path="/ListaCanchas" element={<ListaCanchas />} />
                <Route path="/noticias" element={<Noticias />} />
                <Route path="/recuperar" element={<RecuperarPassword />} />

                {/* USUARIO */}
                <Route path="/user" element={<UserLayout />}>
                    <Route path="mapa" element={<MapaUser />} />
                    <Route path="canchas" element={<ListaCanchas />} />
                    <Route path="misreservas" element={<MisReservas />} />
                    <Route path="/user/calendario" element={<CalendarioView />} />
                    <Route path="detalle-reserva" element={<DetalleReserva />} />
                    <Route path="perfil" element={<Perfil />} />
                    <Route path="convenios" element={<Convenios />} />
                    <Route path="user/canchas" element={<ListaCanchas />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
export default App
