import React from "react";
import useStyles from "./style.js";
import { useMediaQuery } from "@material-ui/core";
import GoogleMapReact from "google-map-react";

const Map = ({
  coords,
  places,
  setCoords,
  setBounds,
  setChildClicked,
  weatherData,
}) => {
  // const matches = useMediaQuery("(min-width:600px)");
  const classes = useStyles();

  return (
    <div className={classes.mapContainer}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBcEkDnev3Y6q7njU8A5YEq2ieszZxr0Pc" }}
        defaultCenter={coords}
        center={coords}
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        // options={{
        //   disableDefaultUI: true,
        //   zoomControl: true,
        //   styles: mapStyles,
        // }}
        onChange={(e) => {
          setCoords({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
        }}
        // onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place) => (
          <div
            className={classes.markerContainer}
            lat={place.latitude}
            lng={place.longitude}
          ></div>
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
