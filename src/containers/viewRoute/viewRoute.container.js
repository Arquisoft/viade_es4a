import React from 'react';
import loadRoute from './loadRoute';
import { ViewRouteWrapper, ViewRouteContainer, ViewRouteh1, WebId } from './viewRoute.style';



const viewRoute= ()=>{
    
    let a= new loadRoute();
    var prueba1=JSON.parse('{"name":"Ruta 1","duration":"45"}');
    var prueba2=JSON.parse('{"name":"Ruta 2","duration":"30"}');
    var prueba=[prueba1,prueba2];
    
    return(
        <ViewRouteWrapper>
            <ViewRouteContainer>
                <div>
                    <ViewRouteh1>Rutas</ViewRouteh1>
                </div>
                <div>
                    {a.concatenar(prueba)}
                </div>
            </ViewRouteContainer>
        </ViewRouteWrapper>
    );
};

export default viewRoute;