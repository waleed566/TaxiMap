import React, { Component } from "react";
import MapGL, { Marker } from "react-map-gl";
import Pin from "./Pin";

export default class Map extends Component {
  constructor(props) {
    super(props);

    this.state = {
      api_url: "https://qa-interview-test.qa.splytech.io/api/drivers?",
      viewport: {
        width: 1200,
        height: 600,
        zoom: 10,
        latitude: 51.5049375,
        longitude: -0.0964509
      },
      coords: [
        { latitude: 51.5649375, longitude: -0.0964509 },
        { latitude: 52.5049375, longitude: -0.0964509 },
        { latitude: 59.5149375, longitude: -0.0964509 },
        { latitude: 58.5049375, longitude: -0.0964509 }
      ],
      data: null
    };
  }

  componentDidMount() {
    const { data, api_url } = this.state;

    if (!data) {
      fetch(api_url, { method: "GET" })
        .then(response => response.json())
        .then(response => this.setState({ data: response }));
    }
  }

  render() {
    const { coords } = this.state;
    return (
      <MapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        {...this.state.viewport}
        onViewportChange={viewport => this.setState({ viewport })}
      >
        {coords.map((coord, i) => (
          <Marker
            key={`Marker-${(i = Math.random() * 200 + 1)}`}
            latitude={coord.latitude}
            longitude={coord.longitude}
          >
            <Pin />
          </Marker>
        ))}
      </MapGL>
    );
  }
}
