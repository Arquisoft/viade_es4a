import React from 'react';
import readJSON from './parser';



const addRoute= ()=>{
    
    var fs = require('fs');
    fs.readFile('./prueba.json',(err,data)=>{
        if(err) throw err;
        let prueba=JSON.parse(data);
        console.log(prueba.name);
    });


    let ruta="Ruta";
    const handleSubmit=(event)=>{
        alert('A name was submitted: ');
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Introduce el nombre:</label>
                <input type="text" />
                <label>{readJSON}{ruta}</label>
            </div>
            <input type="submit" action="Submit"/>
        </form>
    );
};

export default addRoute;