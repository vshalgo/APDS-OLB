import { GoogleMap } from "@react-google-maps/api";
import React, {useMemo} from "react";
import { withGoogleMap, withScriptjs } from "react-google-maps";

const Delivery = () => {
  //   const { isLoading } = useLoadScript({
  //     googleMapsApiKey: process.env.NEXT_PUBLIC_REACT_APP_GOOGLE_KEY,
  //     libraries: ["places"],
  //   });
  //   if (!isLoading) {
  //     return <div>Loading...</div>;
  //   }

  function Map() {
    const center = useMemo(() => ({ lat: -1.292066, lng: 36.821945 }));
    return <GoogleMap defaultZoom={10} defaultCenter={center} />;
  }
    const WrappedMap = withScriptjs(withGoogleMap(Map));
    
  return (
    <div className="container-ref">
      <div className="controls">
        <h4>Places</h4>
      </div>
      <div className="maps">
        {/* rendering the map without any functionality */}
        <WrappedMap
          googleMapURL={
            "https://maps.googleapis.com/maps/api/js?key=AIzaSyCLwD9gycFHop6mLnuJ54giYPmYRcL2CbQ&callback=initMap"
          }
          loadingElement={<div style={{ width: `100%`, height: `100%` }} />}
          containerElement={<div style={{ width: `100%`, height: `100%` }} />}
          mapElement={<div style={{ width: `100%`, height: `100%` }} />}
        />
      </div>
    </div>
  );
};

export default Delivery;
