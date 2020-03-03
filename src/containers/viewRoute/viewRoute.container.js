import React from 'react';




const viewRoute= ()=>{
    
    let ruta="Ruta1";
    const handleSubmit=(event)=>{
        alert('A name was submitted: ');
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Introduce el nombre:</label>
                <input type="text" />
                <label>{ruta}</label>
            </div>
            <input type="submit" action="Submit"/>
        </form>
    );
};

export default viewRoute;