import { useState } from "react";
const FuncComponent = () => {

    //Importo el estado, lo desestructuro en dos, le asigno el estado y lo invoco. Tengo que invocarlo porque es una función.
    const [estudiante, setEstudiante] = useState({
        name: 'Laura',
        pais: 'Argentina'
    });

    const changeName = ()=> {
        if (estudiante.name === 'Laura') setEstudiante({...estudiante, name: 'Juan'})
        else setEstudiante ({...estudiante, name: 'Laura'})
    }


return (
    <div>
        <h2>{estudiante.name}</h2>
        <button onClick={changeName}>Cambiar Nombre</button>
    </div>
    )
};

export default FuncComponent;