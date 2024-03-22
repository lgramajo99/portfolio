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
        <main>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{description}</p>
            <h4>Logros y Contribuciones</h4>
            <ul>
                {renderAchievements()}
            </ul>
            <hr />
        </main>
    )
}

export default Registry;
