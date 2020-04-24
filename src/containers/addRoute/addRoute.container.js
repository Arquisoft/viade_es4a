import React from "react";
import addRouteForm from './addRouteForm';



const addRoute= (props)=>{
    
    //let a=new addRouteForm(props);
    
    return(
        <div>
            <div>
                {addRouteForm(props)}
            </div>
        </div>

    );
};

export default addRoute;
