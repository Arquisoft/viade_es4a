import React, {useState} from 'react';
import auth from "solid-auth-client";
import FC from 'solid-file-client';
import {RouteAddDiv,RouteAddTitle} from './addRoute.style';

const addRouteForm=(props)=>{
    const [name,setName]=useState();
    const [duration,setDuration]=useState();



    const onSubmit= async (e)=>{
        console.log(name);
        const file='{"name":'+name+',"duration":'+duration+'}'

        const {webId} = props;
        console.log(webId);
        const fileName=name.replace(/\s+/g,'');

        const url=webId.split("profile/card#me")[0]+"public/"+fileName;
        const fc   = new FC( auth );
        await fc.createFile(url, file, "application/geo+json", {});
        console.log("subido");
    }

    return(
        <RouteAddDiv>
            <form onSubmit={onSubmit}>
                <RouteAddTitle>Add Route</RouteAddTitle>
                <div>
                    <label>Introduce el nombre:</label>
                    <input type="text" name="name"  value={name} onChange={e=>setName(e.target.value)}/>
                </div>
                <div>
                    <label>Intoduce la duracion de la ruta:</label>
                    <input type="text" name="duration"  value={duration} onChange={e=>setDuration(e.target.value)}/>
                </div>
                <input type="submit" value="Añadir" onChange={onSubmit}/>
            </form>
        </RouteAddDiv>
    );
}
export default addRouteForm;

