import React from "react";
import {Link} from "react-router-dom";
import {} from "react-router-dom";
import auth from "solid-auth-client";
import FC from "solid-file-client";



class MyRoutesComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
          routes: []
        };
    }

    //This method creates the Components
    getRoutes() {
        return this.state.routes.map(obj => (<div className="text-center"><Link key={obj.name} to="/showRoute/"><h3>{obj.name}</h3></Link></div>));
    }

    async componentDidMount(){
        const fc = new FC(auth) //With fc we can manage files

        //Get the current session
        let session = (await auth.currentSession()).webId;
        let sessionString = session.split("profile")[0] + "public"

        //Get the folder where are the files 
        let folder = await fc.readFolder(sessionString)
        let array = folder.files
        this.setState({routes : array})
    }

    render() {
        return (
            <div>
                <p>.</p>
                <p>.</p>
                <div className="container center-block vlsection1">
                    <h1 className="text-center">Rutas</h1>
                    {this.getRoutes()}
                </div>
            </div>
        );
    }    
    }  


export default MyRoutesComponent;

