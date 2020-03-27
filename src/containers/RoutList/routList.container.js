import React from "react";
import auth from "solid-auth-cli";
import FC from "solid-file-client";
//import { useWebId } from "@inrupt/solid-react-components";
import {Space} from "../../components";

export const RoutesListComponent = (props) => {

    const {webId} = props;
    console.log(webId);
    const url=webId.split("profile/card#me")[0]+"public";
    console.log(url);
    // I will use: https://github.com/jeff-zucker/solid-file-client
    const fc   = new FC( auth ) //With fc we can manage files
    async function run(){

        var publicFolder = await fc.readFolder(url) //Get an item which has the url with the files(routes)

        for(var i=0; i < publicFolder.files.length; i++){ //Iterate over the files 
            // var file =  await fc.readHead(publicFolder.files[i].url) //Get the file's content
            if(publicFolder.files[i].name.includes(".json")){
                //console.log(publicFolder.files[i].name)
                var file=await fc.readFile(publicFolder.files[i].url);

                try{
                    file=JSON.parse(file);
                    //console.log(file)
                    console.log(publicFolder.files[i].name)
                    if(file.name!=null)
                        console.log(file.name)
                    if(file.description!=null)
                        console.log(file.description)
                }catch (e) {
                    
                }

            }
        }
    }
    run()

    return (
        <div>
            <Space/>
            <h1>Rutas del usuario</h1>
            <div>
                Prueba
            </div>
        </div>
    );
};