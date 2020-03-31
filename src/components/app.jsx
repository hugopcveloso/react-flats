import React, { Component } from 'react';
import { flats } from '../data/flats';
import FlatList from './flat-list';
import GoogleMapReact from 'google-map-react';
import Marker from './marker'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    const picked = this.state;
    return {
      lat: picked.selectedFlat.lat,
      lng: picked.selectedFlat.lng
    };
  }


  render() {
    return (

      <div>

        <div className="flat-list">
          <FlatList
            flats={this.state.flats}
            selectedFlat={this.state.selectedFlat}
            selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <Marker lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}


export default App;
