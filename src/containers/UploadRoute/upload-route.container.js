import React from "react";
import auth from "solid-auth-client";
import FC from 'solid-file-client';

const UploadRoute = (props) => {

    const handleSubmit = async (e) => {
        const fileReader = new FileReader();

        fileReader.onload = async (event) => {
            const fc   = new FC( auth );
            console.log(event.target.result);
            await fc.createFile("https://israelmnrg.solid.community/public/pruebaRutas.geojson", event.target.result, "application/geo+json", {});
            console.log("subido");
        };
        fileReader.readAsText(e.target.files[0]);
    }

    return (
        <div>
            <h1>Subir ruta</h1>
            <label>
                Upload file:
            <input type="file" name="files[]" id="file" onChange={handleSubmit} />
            </label>
        </div>

    );
}

export default UploadRoute;