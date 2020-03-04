import addRouteForm from './addRouteForm';


const addRoute= ()=>{
    
    let a=new addRouteForm();
    return(
        a.render()
    );
};

export default addRoute;