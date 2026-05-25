import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../styles/calendario.css";

export default function Calendario({ onSelect = () => {} }) {
    const [value, setValue] = useState(new Date());

    const handleChange = (date) => {
        setValue(date);

        const fechaFormateada = date.toLocaleDateString("en-CA");

        onSelect(fechaFormateada);
    };

    return (
        <div className="d-flex justify-content-center">
            <Calendar
                onChange={handleChange}
                value={value}
            />
        </div>
    );
}