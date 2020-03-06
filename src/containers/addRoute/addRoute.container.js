import addRouteForm from './addRouteForm';
import UploadRoute from "../UploadRoute/upload-route.container";

const addRoute= (props)=>{
    
    let a=new addRouteForm(props);
    
    return(
        a.render()
    );
};

export default addRoute;