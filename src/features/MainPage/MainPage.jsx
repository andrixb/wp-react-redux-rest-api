import React, {Component} from 'react';

import PageIndex from '../../components/PageIndex/PageIndex';
import MapComponent from '../../components/MapComponent/MapComponent';

class App extends Component {
    render() {
        return (
            <div className="main__container container">
                <MapComponent />
            </div>
        )
    }
}


export default App;
