/*jshint esversion: 6 */
import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';






const Mapa = () => {



    const WrappedMap = withScriptjs(withGoogleMap(props => <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
    ></GoogleMap>));

    return (<div style={{ width: "100vw", hegiht: "100vh" }}> <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}

    ></WrappedMap>
    </div>
    );
};
export default Mapa;