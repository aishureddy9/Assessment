import "./styles.css";
import axios from "axios";
import Map, {
  Marker,
  NavigationControl,
  ScaleControl,
  Popup,
  FullscreenControl,
  GeolocateControl
} from "react-map-gl";
import React, { useEffect, useState } from "react";
import Pin from "./Pin";

// const token = process.env.REACT_APP_MAPBOX_TOKEN;


const MapComponent = () => {
  const api_url = "http://localhost:5000/api/data";

  const [popupInfo, setPopupInfo] = useState(null);
  const [data, setData] = useState(null);

  const callApiData = async () => {

   await axios.get(api_url)
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
    
  };

  useEffect(() => {
    callApiData();
  }, []);
  return (
    <div
      style={{ width: "200vh", height: "200vh", zIndex: 9999 }}
      className="map-component"
    >
      <Map
        initialViewState={{
          latitude: 40,
          longitude: -100,
          zoom: 0,
          bearing: 0,
          pitch: 0
        }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        // accessToken={token}
        mapboxAccessToken="pk.eyJ1IjoiYWlzaHVyZWRkeTkiLCJhIjoiY2xsOXloNGh0MTR3ajNrdGprYnZlNDJteCJ9.u-cNsghm6-FizkXKdWbnCg"
      >

        {data?.Points.map(function (val, index) {
          return (
            <Marker
              key={`marker-${index}`}
              longitude={val.Lon}
              latitude={val.Lat}
              anchor="bottom"
              onClick={(e) => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                setPopupInfo(val);
              }}
            >
              <Pin type = {val.Type} size = {20}/>
            </Marker>
          )
        })
        }
        {popupInfo && (
          <Popup
            anchor="top"
            longitude={popupInfo.Lon}
            latitude={popupInfo.Lat}
            onClose={() => setPopupInfo(null)}
          >
            <div>{popupInfo.Type}</div>
            <div>{popupInfo.Timestamp_str}</div>
          </Popup>
        )}
        <NavigationControl />
        <ScaleControl />
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
      </Map>
    </div>
  );
};

export default MapComponent;
