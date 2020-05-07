import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

  class SimpleMap extends Component {
    static defaultProps = {
      center: {
        lat: 52.229675,
        lng: 21.012230
      },
      zoom: 12
    };
   
    render() {
      return (
      
        <div style={{ height: '500px', width: '500px' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyC_jd5kb7Cu60IXpBh2XqjLSk6EmVKb2-g"}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={52}
              lng={21}
              text="You are here"
            />
          </GoogleMapReact>
        </div>
      );
    }
  }

export {
    SimpleMap
}