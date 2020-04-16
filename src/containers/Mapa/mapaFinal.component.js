/*jshint esversion: 6 */
import React from "react";
import Map from "./mapa.component";



var MyMapComponent = () => {
    return (
        <div style={{ width: "100%", height: "100%", position: "absolute" }}>
            <Map
                googleMapURL="https://maps.googleapis.com/maps/api/js?key="
                loadingElement={<div style={{ height: "100%", width: "100%" }} />}
                containerElement={<div style={{ height: "100%", width: "100%" }} />}
                mapElement={<div style={{ height: "100%", width: "100%" }} />}
                center={{ lat: 43.360259, lng:-5.844758 }}
                zoom={9}
            />
        </div >
    );
};

export default MyMapComponent;