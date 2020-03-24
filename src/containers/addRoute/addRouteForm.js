import React, {useState} from 'react';
import auth from "solid-auth-client";
import FC from 'solid-file-client';
import Parser from "./Parser";

import {RouteAddDiv,RouteAddTitle} from './addRoute.style';

const addRouteForm=(props)=>{
    const [name,setName]=useState();
    const [description,setDescription]=useState();



    const onSubmit= async (e)=>{
        console.log(name);
        //const file='{"name":'+name+',"description":'+description+'}'
        var file=Parser(name,description,null);
        console.log(new Date());
        const {webId} = props;
        console.log(webId);
        //const fileName=name.replace(/\s+/g,'');

        const url=webId.split("profile/card#me")[0]+"public/"+new Date()+".json";
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
                    <label>Intoduce la descripcion de la ruta:</label>
                    <input type="text" name="description"  value={description} onChange={e=>setDescription(e.target.value)}/>
                </div>
                <input type="button" value="Añadir" onClick={onSubmit}/>
            </form>
        </RouteAddDiv>


    );
}
export default addRouteForm;

