import React, {useState} from 'react';
import auth from "solid-auth-client";
import FC from 'solid-file-client';

const addRouteForm=(props)=>{
    const [name,setName]=useState();
    const [duration,setDuration]=useState();



    const onSubmit= async (e)=>{
        console.log(name);
        const file='{"name":'+name+',"duration":'+duration+'}'

        const {webId} = props;
        console.log(webId);
        const url=webId.split("profile/card#me")[0]+"public/prueba12.json";
        const fc   = new FC( auth );
        await fc.createFile(url, file, "application/geo+json", {});
        console.log("subido");
    }

    return(
        <form onSubmit={onSubmit}>
            <div>
                <label>Introduce el nombre:</label>
                <input type="text" name="name"  value={name} onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
                <label>Intoduce la duracion de la ruta:</label>
                <input type="text" name="duration"  value={duration} onChange={e=>setDuration(e.target.value)}/>
            </div>
            <input type="button" value="Añadir" onClick={onSubmit}/>
        </form>
    );
}
export default addRouteForm;

