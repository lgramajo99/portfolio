import { useEffect, useState } from "react";
import Registry from "../components/registry/Registry";
import work from '../data/work.json';
import Loader from '../components/common/Loader'

function WorkExp() {
    const [workData, setWorkData] = useState({
        data: [],
        loading: true,
        error: null
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await work.workExperiences;
                setWorkData({
                    data: response,
                    loading: false,
                    error: null
                });
            } catch (error) {
                setWorkData({
                    data: null,
                    loading: false,
                    error: error
                });
            }
        };
        fetchData();
    }, []);

    return (
        <main>
            <h2>Experiencia Laboral</h2>
            {workData.loading && <Loader />}
            {workData.error && <p>Error al cargar los datos: {workData.error.message}</p>}
            {workData && workData.data?.map((experience, index) => (
                <Registry key={index} data={experience} />
            ))}
        </main>
    );
}

export default WorkExp;
