import React, { useState } from "react";
import { validationsContact } from "../utils/validations";

function ContactMe() {
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        asunto: '',
        texto: '',
        archivo: null,
        consentimiento: false,
    });
    const [errors, setErrors] = useState({
        nombre: '',
        correo: '',
        asunto: '',
        texto: '',
        archivo: '',
        consentimiento: '',
    });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (event) => {
        const { name, value, checked, files } = event.target;
        const newValue = name === 'consentimiento' ? checked : name === 'archivo' ? (files.length > 0 ? files[0] : null) : value;
        setFormData({
            ...formData,
            [name]: newValue
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setSubmitting(true);

        const validation = validationsContact(formData);
        if (!validation.valid) {
            setErrors(validation.errors);
        } else {
            console.log(formData);
            alert('Mensaje enviado.');
            setFormData({
                nombre: '',
                correo: '',
                asunto: '',
                texto: '',
                archivo: null,
                consentimiento: false,
            })
        }

        setSubmitting(false);
    };

    const isFormValid = () => {
        return Object.values(errors).every(error => error === '') && !submitting;
    };

    return (
        <main>
            <h2>Contactame.</h2>
            <form className="formulario" onSubmit={handleSubmit} action="#" method="post">
                <label htmlFor="nombre">Nombre | Empresa (requerido)</label>
                <input className={`intupC ${errors.nombre ? 'alertInput' : ''}`}
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    placeholder="Nombre | Empresa" />
                {errors.nombre && <span className="msjAlert">{errors.nombre}</span>}

                <label className="labels" htmlFor="correo">Correo electrónico (requerido)</label>
                <input className={`intupC ${errors.correo ? 'alertInput' : ''}`}
                    type="email"
                    id="correo"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    placeholder="example@xyz.com" />
                {errors.correo && <span className="msjAlert">{errors.correo}</span>}

                <label htmlFor="asunto">Asunto (requerido)</label>
                <input className={`intupC ${errors.asunto ? 'alertInput' : ''}`}
                    type="text"
                    id="asunto"
                    name="asunto"
                    value={formData.asunto}
                    onChange={handleChange}
                    placeholder="Asunto" />
                {errors.asunto && <span className="msjAlert">{errors.asunto}</span>}

                <label className="labels" htmlFor="texto">Mensaje</label>
                <textarea className={`intupC ${errors.texto ? 'alertInput' : ''}`}
                    id="texto"
                    name="texto"
                    value={formData.texto}
                    onChange={handleChange}
                    rows="5"
                    cols="20"
                    placeholder="Introduce un texto..."></textarea>
                {errors.texto && <span className="msjAlert">{errors.texto}</span>}

                <input type="file"
                    name="archivo"
                    id="archivo"
                    onChange={handleChange} />
                {errors.archivo && <span className="msjAlert">{errors.archivo}</span>}

                <div className="consentimiento">
                    <input
                        type="checkbox"
                        id="consentimiento"
                        name="consentimiento"
                        checked={formData.consentimiento}
                        onChange={handleChange} />
                    <label htmlFor="consentimiento">Acepto la <a href="politica-privacidad">política de privacidad</a> y doy mi consentimiento para el procesamiento de mis datos personales.</label>
                </div>
                {errors.consentimiento && <span className="msjAlert">{errors.consentimiento}</span>}
                <button className="btnCV" type="submit" disabled={!isFormValid()}>Enviar</button>
            </form>
        </main>
    );
}

export default ContactMe;
