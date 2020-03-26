import React from 'react';
import { Separator, TitleLabel, NormalLabel } from './viewRoute.style';


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
            <Separator>
                <div>
                    <p>
                    <TitleLabel>Nombre: </TitleLabel>
                    <NormalLabel>{this.routeJson[0].name}</NormalLabel>
                    </p>
                    <p>
                    <TitleLabel> Duracion: </TitleLabel>
                    <NormalLabel>{this.routeJson[0].duration}</NormalLabel>
                    </p>
                </div>
            </Separator>
        );

        let i=this.routeJson.length;
        let j=1;
        while(i>j){
            routes.push(
                <Separator>
                    <div>
                        <p>
                        <TitleLabel>Nombre:</TitleLabel>
                        <NormalLabel>{this.routeJson[j].name}</NormalLabel>
                        </p>
                        <p>                    
                        <TitleLabel>Duracion:</TitleLabel>
                        <NormalLabel>{this.routeJson[j].duration}</NormalLabel>
                        </p>
                    </div>
                </Separator>
            );
            j++;
        }
        return routes;
    }



}