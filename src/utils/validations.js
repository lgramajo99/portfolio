export function validationsContact(formData) {
    const { nombre, correo, asunto, texto, consentimiento, archivo } = formData;
    const errors = {};

    if (!nombre) errors.nombre = 'Este campo es obligatorio';
    if (!correo || !isValidEmail(correo)) errors.correo = 'Por favor, ingresa un correo electrónico válido.';
    if (!asunto) errors.asunto = 'Este campo es obligatorio';
    if (!consentimiento) errors.consentimiento = 'Debes aceptar la política de privacidad y dar tu consentimiento para el procesamiento de tus datos.';
    if (!texto && !archivo) errors.texto = 'Debes proporcionar un mensaje o un archivo adjunto.';
    if (texto.trim().length < 5 && !archivo) errors.texto = 'El mensaje debe tener al menos 5 caracteres o puedes enviar un archivo adjunto.';

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}

export function validationLogin(formData) {
    const { user, password } = formData;
    const errors = {};
    const validate = { user: 'lucianogramajo00', password: 's$1mpl3' }

    if (!user) errors.user = 'Este campo es obligatorio';
    if (!password) errors.password = 'Este campo es obligatorio';
    if (user !== validate.user) errors.user = 'El usuario proporcionado no es compatible.';
    if (password !== validate.password) errors.password = 'Contraseña incorrecta.'

    return {
        valid: Object.keys(errors).length === 0,
        errors
    };
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}