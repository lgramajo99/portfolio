import './profile.css';

function Profile() {
    const src = "https://i.pinimg.com/736x/2b/52/58/2b5258e2a775c1dfef2c1e167a74ad7d.jpg"
    return (
        <section className='perfil'>
            <img src={src} alt="Foto de perfil" className='imgPerfil'/>
        </section>
    )
} 

export default Profile;