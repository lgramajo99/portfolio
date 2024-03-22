import './archive.css';

function Archive({ data }) {
    if (!data) {
        return null;
    }
    const { institution, courses, description } = data;
    const { title, period } = courses;

    return (
        <main className='main'>
            <h3 className="institution">{institution}</h3>
            <ul className="courses">
                {courses.map((course, index) => (
                    <li className='degree' key={index}>
                        <p className='titles'>{course.title}</p>
                        <p className='period'>{course.period}</p>
                    </li>
                ))}
            </ul>
            <p className="description">{description}</p>
            <hr />
        </main>
    )
}

export default Archive;