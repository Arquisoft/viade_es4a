import React from 'react';
import auth from "solid-auth-client";
import FC from 'solid-file-client';


export default class addRouteForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "",
          duration: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        console.log(target.name);
        if(target.name==="name"){
            this.setState({name: target.name});
        }
        if(target.name==="duration"){
            this.setState({name: target.duration});
        }
        console.log(this.state);
        console.log(JSON.parse('{"name":"'+ this.state.name +'","duration":"'+ this.state.duration +'"}'))
       
    }
    
    async handleSubmit(event) {
        const fc   = new FC( auth );
        await fc.createFile(this.props.webID, this.state, "state", {});
        console.log("subido");
        
        
        
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Introduce el nombre:</label>
                    <input type="text" name="name" checked={this.state.name} onChange={this.handleInputChange}/>
                </div>
                <div>
                    <label>Intoduce la duracion de la ruta:</label>
                    <input type="text" name="duration" checked={this.state.duration} onChange={this.handleInputChange}/>
                </div>
                <input type="submit" value="Añadir" onChange={this.handleSubmit}/>
            </form>
        );
    }
}
