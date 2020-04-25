import React from "react";
import { Marker, GoogleMap, withScriptjs, withGoogleMap, Polyline } from 'react-google-maps';

class MapWithMarkers extends React.Component {
    state = {
        places: [],
        pathCoordinates: []


    }
    checkLines(e, newPlace) {
        console.log(e);
        const coordinates = {
            lat: newPlace.lat,
            lng: newPlace.lng
        };
        this.setState({
            pathCoordinates: [...this.state.pathCoordinates, coordinates]
        });

    }
    
    addMarker(e) {
        console.log(e);
        const newPlace = {
            id: this.state.places.length,
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        };
        this.setState({
            places: [...this.state.places, newPlace]
        });
        this.checkLines(e, newPlace);
    }
    
    

    render() {
        return (
            <GoogleMap
                onClick={this.addMarker.bind(this)}
                defaultZoom={this.props.zoom}
                defaultCenter={this.props.center}
            >
                {this.state.places.map(place => {
                    return (
                        <Marker
                            key={place.id}
                            position={{ lat: place.lat, lng: place.lng }}
                        />
                    );
                })}
                <Polyline
                    path={this.state.pathCoordinates}
                    geodesic={true}
                    options={{
                        strokeColor: "#ff2527",
                        strokeOpacity: 0.75,
                        strokeWeight: 2,
                        icons: [
                            {
                                icon: "lineSymbol",
                                offset: "0",
                                repeat: "20px"
                            }
                        ]
                    }}
                ></Polyline>

            </GoogleMap>

        )

    }
}
export default withScriptjs(withGoogleMap(MapWithMarkers));

