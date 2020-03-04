/*jshint esversion: 6 */
import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap, Marker, Polyline } from 'react-google-maps';

const Mapa = () => {


    const markersArray = [];
    const pathCoordinates = [
        { lat: -34.397, lng: 150.644 },
        { lat: -35, lng: 150 }
    ];

    var WrappedMap = withScriptjs(withGoogleMap(props => <GoogleMap
        defaultZoom={7}
        defaultCenter={{ lat: -34.397, lng: 150.644 }}
        onClick={handleClick}
    >
        <Marker position={{ lat: -34.397, lng: 150.644 }}></Marker>
        <Marker position={{ lat: -35, lng: 150 }}></Marker>
        <Polyline
            path={pathCoordinates}
            geodesic={true}
            options={{
                strokeColor: "#ff2527",
                strokeOpacity: 0.75,
                strokeWeight: 2,
            }}
        />


    </GoogleMap>));


    function handleClick(e) {
        addMarker(e.latLng);

    }
    function addMarker(latLng) {
        let marker = <Marker
            position={{ lat: latLng.lat(), lng: latLng.lng() }}
        >

        </Marker>
        markersArray.push(marker);
    }


    return (<div style={{ width: "100vw", hegiht: "100vh" }}> <WrappedMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${
            process.env.REACT_APP_API_KEY}`}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}


    ></WrappedMap>
    </div>
    );
}
export default Mapa;