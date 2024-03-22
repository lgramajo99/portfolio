import { useEffect, useState } from "react";
import Archive from "../components/archive/Archive";
import education from '../data/education.json';

function AcademicTraining() {
    const [educationData, setEducationData] = useState({
        education: [],
        additional: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resEdu = await education
                setEducationData({
                    education: resEdu.education,
                    additional: resEdu.additional,
                    loading: false,
                    error: null,
                })

            } catch (error) {
                setWorkData({
                    education: null,
                    additional: null,
                    loading: false,
                    error: error,
                })
            }
        };

        fetchData();
    }, []);

    return (
        <section>
            <h2>Formacion academica</h2>
            {/* Renderiza los componentes Archive utilizando los datos cargados */}
            {educationData.loading && <p>Cargando datos...</p>}
            {educationData.error && <p>Error al cargar los datos: {educationData.error.message}</p>}
            {educationData.education && educationData.education.map((item, index) => (
                <Archive key={index} data={item} />
            ))}
            <h2>Otros cursos y formaciones</h2>
            {educationData.additional && educationData.additional.map((item, index) => (
                <Archive key={index} data={item} />
            ))}
        </section>
    )
}

export default AcademicTraining;
