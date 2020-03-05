import React from 'react';


export default class loadRoute extends React.Component{
    
    /*
    constructor(props){
        super(props);
        
    }
    */

    concatenar(a){
        this.routeJson=a;
        console.log(a.length);
        let routes= [];
        routes.push(
            <div>
                <p>
                <label>Nombre: </label>
                <label>{this.routeJson[0].name}</label>
                </p>
                <p>
                <label>Duracion: </label>
                <label>{this.routeJson[0].duration}</label>
                </p>
            </div>
        );

        let i=this.routeJson.length;
        let j=1;
        while(i>j){
            routes.push(
                <div>
                    <p>
                    <label>Nombre:</label>
                    <label>{this.routeJson[j].name}</label>
                    </p>
                    <p>
                    <label>Duracion:</label>
                    <label>{this.routeJson[j].duration}</label>
                    </p>
                </div>
            );
            j++;
        }
        return routes;
    }



}