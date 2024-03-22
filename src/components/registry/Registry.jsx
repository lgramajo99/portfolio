import './registry.css';

function Registry({ data }) {
    if (!data) {
        return null;
    }

    const { title, description, date, achievements } = data;

    const renderAchievements = () => {
        if (!achievements || achievements.length === 0) {
            return <li>No hay logros</li>;
        }
        return achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
        ));
    }

    return (
        <main className="main">
            <p className="date">{date}</p>
            <h3 className="title">{title}</h3>
            <p className="description">{description}</p>
            <p className="achievement">Logros y Contribuciones :</p>
            <ul>
                {renderAchievements()}
            </ul>
            <hr />
        </main>
    )
}

export default Registry;
