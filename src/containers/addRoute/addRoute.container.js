import React from "react";
import addRouteForm from './addRouteForm';
import UploadRoute from '../UploadRoute/upload-route.container';
import { AddRouteWrapper, AddRouteContainer, AddRouteInsideContainer, Separator } from "./addRoute.style";



const addRoute= (props)=>{
    
    return(
        <AddRouteWrapper data-testid='addRoute-component'>
            <AddRouteContainer>
                <div>
                    <AddRouteInsideContainer>
                        <div>
                            {addRouteForm(props)}
                        </div>
                    </AddRouteInsideContainer>
                    <AddRouteInsideContainer>
                        <div>
                            {UploadRoute(props)}
                        </div>
                    </AddRouteInsideContainer>
                </div>
            </AddRouteContainer>
        </AddRouteWrapper>
    );
};

export default addRoute;
 