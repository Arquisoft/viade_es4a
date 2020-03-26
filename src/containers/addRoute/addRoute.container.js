import React from "react";
import addRouteForm from './addRouteForm';
import UploadRoute from '../UploadRoute/upload-route.container';



const addRoute= (props)=>{
    
    //let a=new addRouteForm(props);
    
    return(
        <div>
            <div>
                {UploadRoute(props)}
            </div>
            <div>
                {addRouteForm(props)}
            </div>
        </div>

    );
};

export default addRoute;