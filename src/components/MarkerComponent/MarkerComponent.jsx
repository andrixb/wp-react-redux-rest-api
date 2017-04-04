import React from 'react';

/**
 * MarkerComponent
 */

const uluru = { lat: -25.363, lng: 131.044 };

 // eslint-disable-line react/prefer-stateless-function
export class MarkerComponent extends React.Component {
    componentDidMount() {
        this.marker = new google.maps.Marker({
            position: uluru,
            map: map,
        });
    }

    render() {
        return false;
    }
}


export default MarkerComponent;
