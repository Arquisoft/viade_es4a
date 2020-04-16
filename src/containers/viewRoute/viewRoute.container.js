import React from 'react';
import loadRoute from './loadRoute';



const viewRoute= ()=>{
    
    let a= new loadRoute();
    var prueba1=JSON.parse('{"name":"Ruta 1","duration":"45"}');
    var prueba2=JSON.parse('{"name":"Ruta 2","duration":"30"}');
    var prueba=[prueba1,prueba2];
    
    return(
        <div>
            {a.concatenar(prueba)}
        </div>
    );
};

export default viewRoute;