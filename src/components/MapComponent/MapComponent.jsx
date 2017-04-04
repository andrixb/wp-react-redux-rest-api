import React from 'react';


class MapComponent extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    componentDidMount() {
        this.map = new google.maps.Map(this.refs.map, {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
    }

    render() {
        return (
            <div className="map__container"
                 ref="map" />
        )
    }
}

export default MapComponent;
