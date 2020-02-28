import React from 'react';




const addRoute= ()=>{
    
    
    const handleSubmit=(event)=>{
        alert('A name was submitted: ');
    };
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label>Introduce el nombre:</label>
                <input type="text" />
            </div>
            <input type="submit" action="Submit"/>
        </form>
    );
}

export default addRoute;