import React, {useState} from 'react';
import auth from "solid-auth-client";
import FC from 'solid-file-client';
import Parser from "./Parser";

import {RouteAddDiv,RouteAddTitle} from './addRoute.style';
import MyMapComponent from "../Mapa";

const addRouteForm=(props)=>{
    const [name,setName]=useState();
    const [description,setDescription]=useState();
    var geoCoordinates1=[];
    geoCoordinates1[0]=-5.8512792;
    geoCoordinates1[1]=43.3551061;
    var geoCoordinates2=[];
    geoCoordinates2[0]=-5.8507937;
    geoCoordinates2[1]=43.3547082;
    var geoCoordinates=[geoCoordinates1,geoCoordinates2];


    const onSubmit= async (e)=>{
        console.log(name);
        //const file='{"name":'+name+',"description":'+description+'}'
        var file=Parser(name,description,geoCoordinates);
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
            <div>
                {MyMapComponent()}
            </div>
        </RouteAddDiv>
    );
}
export default addRouteForm;

