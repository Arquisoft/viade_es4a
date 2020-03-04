import React from 'react';
import readJSON from './parser';



const addRoute= ()=>{
    let name='';
    /*var fs = require('fs');
    fs.readFile('./prueba.json',(err,data)=>{
        if(err) throw err;
        let prueba=JSON.parse(data);
        console.log(prueba.name);
    });*/


    let ruta="Ruta";
    const handleSubmit=(event)=>{
        //let json="{'name':'"+event.name+"'}";
        alert('A name was submitted: '+name);
    };
    
    const handleChange=(event)=> {
        name=event.target.value;
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Introduce el nombre:</label>
                <input type="text" id="name" value={name} onChange={handleChange}/>
            </div>
            <div>
                <label>Intoduce la duracion de la ruta:</label>
                <input type="text" />
            </div>
            <input type="submit" action="Submit"/>
        </form>
    );
};

export default addRoute;