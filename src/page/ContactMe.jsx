import { useState } from "react";

function ContactMe() {
    const [alert, setAlert] = useState(true)

    return (<main>
        <h2>Contactame.</h2>
        <form className="formulario" action="#" method="post" >

            <label htmlFor="nombre">Nombre | Empresa (requerido)</label>
            <input className={`intupC ${alert || 'alertInput'}`}
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Nombre | Empresa" />
            <span className="msjAlert"
                hidden={alert}>
                Introduce un nombre valido
            </span>

            <label className="labels"
                htmlFor="correo">
                Correo electrónico. (requerido)
            </label>
            <input className={`intupC ${alert || 'alertInput'}`}
                type="email"
                id="correo"
                name="correo"
                required
                placeholder="example@xyz.com" />
            <span className="msjAlert"
                hidden={alert}>
                Debe introducir un correo valido.
            </span>

            <label htmlFor="nombre">Asunto (requerido)</label>
            <input className={`intupC ${alert || 'alertInput'}`}
                type="text"
                id="Asunto"
                name="Asunto"
                required
                placeholder="Asunto" />
            <span className="msjAlert"
                hidden={alert}>
                Este campo no debe estar vacio.
            </span>

            <label className="labels"
                htmlFor="texto">
                Mensaje
            </label>
            <textarea className={`intupC ${alert || 'alertInput'}`}
                id="texto"
                name="texto"
                rows="5"
                cols="20"
                minLength={5}
                placeholder="Introduce un texto..." />
            <input type="file" name="archivo" id="archivo" />

            <span className="msjAlert" hidden={alert}>
                Este campo no debe estar vacio, y debe contener mas de 5 caracteres para ser valido o puede enviar un archivo adjunto.
            </span>

            <div className="consentimiento">
                <input type="checkbox"
                    id="consentimiento"
                    name="consentimiento"
                    required />
                <label htmlFor="consentimiento">
                    Acepto la <a href="politica-privacidad">política de privacidad</a> y doy mi consentimiento para el procesamiento de mis datos personales.
                </label>
            </div>
            <span className="msjAlert" hidden={alert}>Debe aceptar el consentimiento.</span>

            <button className="btnCV" type="submit">Enviar</button>
        </form>
    </main>)
}

export default ContactMe;