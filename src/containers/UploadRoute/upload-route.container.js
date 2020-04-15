import React from "react";
import auth from "solid-auth-client";
import FC from 'solid-file-client';
import {RouteAddDiv} from '../addRoute/addRoute.style';
import Parser from "../addRoute/Parser";

const UploadRoute = (props) => {

    const handleSubmit = async (e) => {
        const fileReader = new FileReader();
        fileReader.fileName=e.target.files[0].name;
        const {webId} = props;
        fileReader.onload = async (event) => {
            const fc   = new FC( auth );
            //const nombre=event.target.fileName;
            var json = JSON.parse(event.target.result);
            json=Parser(json.name,json.description);
            const url=webId.split("profile/card#me")[0]+"public/"+new Date()+".json";
            console.log(url);
            await fc.createFile(url, json, "application/geo+json", {});
            console.log("subido");
        };
        fileReader.readAsText(e.target.files[0]);
    }

    return (
        <RouteAddDiv>
            <h1>Subir ruta</h1>
            <br/>
            <label>
                Upload file:
            <input type="file" name="files[]" id="file" onChange={handleSubmit} />
            </label>
        </RouteAddDiv>

    );
}

export default UploadRoute;