import React from 'react';
import readJSON from './parser';



const addRoute= ()=>{
    
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