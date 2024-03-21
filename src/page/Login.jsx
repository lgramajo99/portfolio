import { useState } from 'react';
import './pages.css';
import { validationLogin } from '../utils/validations';

function Login() {
    const [formData, setFormData] = useState({
        user: '',
        password: '',
        remember: false,
    })

    const [errors, setErrors] = useState({
        user: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value, checked } = event.target;


        setFormData({
            ...formData,
            [name]: name === 'remember' ? checked : value,
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const { valid, errors: validationErrors } = validationLogin(formData);
        setErrors(validationErrors);

        if (valid) {
            console.log(formData);
            alert('Sesión iniciada.');
            setFormData(prevState => ({ ...prevState, user: '', password: '', remember: false }));
        }
    }



    return (
        <main>
            <h2>Iniciar sesión.</h2>

            <form className='formulario' onSubmit={handleSubmit} action="#">
                <label htmlFor="user">Usuario</label>
                <input className={`intupC ${errors.user ? 'intupC' : ''}`}
                    onChange={handleChange}
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Usuario123" />
                {errors.user && <span className="msjAlert">{errors.user}</span>}


                <label htmlFor="password">Contraseña</label>
                <input className={`intupC ${errors.password ? 'intupC' : ''}`}
                    onChange={handleChange}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="**********" />
                {errors.password && <span className="msjAlert">{errors.password}</span>}

                <section >
                    <input type="checkbox"
                        checked={formData.remember}
                        onChange={handleChange}
                        name="remember"
                        id="remember" />
                    <label htmlFor="remember">Mantener sesión iniciada</label>
                </section>

                <button className='btnCV' type="submit" >Ingresar</button>
            </form>
        </main>
    )
}

export default Login;