import React from 'react';
export default class addRouteForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          name: "prueba",
          duration: "2"
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    
    handleInputChange(event) {
        const target = event.target;
        console.log(target.name);
        if(target.name==="name"){
            this.state.name=target.value;
        }
        if(target.name==="duration"){
            this.state.duration=target.value;
        }
        console.log(this.state);
        console.log(JSON.parse('{"name":"'+ this.state.name +'","duration":"'+ this.state.duration +'"}'))
       
    }
    
    handleSubmit(event) {
        
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
                <input type="button" value="Añadir" onClick={this.handleSubmit}/>
            </form>
        );
    }
}
