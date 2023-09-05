import React, { useEffect, useRef, useState } from "react";
import GoogleMap from "google-map-react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
} from "react-google-places-autocomplete";
import { Box,Image, Text } from "@chakra-ui/react";
import useTranslation from "../hooks/useTranslation";
import img from '@/../../public/assets/Group.png'





const GoogleMapReact = (props) => {
  const {
    setCoordinates,
    coordinates,
    setAddress,
    address,
  } = props;

  const [marker, setMarker] = useState(null);
  const mapRef = useRef(null);

  const loadMap = (map, maps) => {
    const geocoder = new maps.Geocoder();
    mapRef.current = map;

    if (marker) {
      marker.setMap(null);
    }

    const newMarker = new maps.Marker({
      position: coordinates,
      map,
      draggable: true,
    });

    newMarker.addListener("dragend", (e) => {
      const { lat, lng } = e.latLng;
      geocoder.geocode(
        { location: { lat: lat(), lng: lng() } },
        (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              setAddress(results[0].formatted_address);
              setCoordinates({
                lat: lat(),
                lng: lng(),
              });
              // formik.setFieldValue("address", results[0].formatted_address);
            } else {
              console.log("No results found");
            }
          } else {
            console.log("Geocoder failed due to:", status);
          }
        }
      );
    });

    setMarker(newMarker);
  };

  useEffect(() => {
    if (mapRef.current && marker) {
      mapRef.current.setCenter(coordinates);
      marker.setPosition(coordinates);
    }
  }, [coordinates]);

  const handlePlaceSelected = (place) => {
    geocodeByAddress(place.value.description)
      .then((results) =>
        setCoordinates({
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng(),
        })
      )
      .catch((error) => console.error(error));

    // formik.setFieldValue("address", place.value.description);
    setAddress(place.value.description);
  };

  const { t } = useTranslation();

  // const formattedAddressObject = {
  //   description: address,
  //   geometry: { location: { lat: () => lat, lng: () => lng } },
  // };
  return (
    <>
      <Box >
        <Image mx={'auto'} src={img.src}/>
        <Text
        fontWeight={500}
          textAlign={"center"}
          my="5"
          fontSize={"1.5rem"}
          color={"blackAlpha.800"}
          children={t("near")}
        />
      
        <GooglePlacesAutocomplete
          apiKey="AIzaSyBNcTmnS323hh7tSQzFdwlnB4EozA3lwcA"
          selectProps={{
            value: address,
            onChange: (place) => {
              setAddress(place.value.description);
              handlePlaceSelected(place);
            },
            styles: {
              input: (provided) => ({
                ...provided,
                paddingBlock: "10px",
                color: "black",
              }),
              container:(provided) => ({
                ...provided,
                marginBlock:"20px"
              })
            },
            placeholder: address?address:t("user.address"),
          }}
        />
        {/* {formik.touched.address && formik.errors.address && (
          <FormHelperText sx={{ color: "#FF4C51" }}>
            {formik.errors.address}
          </FormHelperText>
        )} */}
      </Box >
      <div style={{ height: "440px", width: "100%",marginBlock:"20px" }}>
        <GoogleMap
          bootstrapURLKeys={{
            key: "AIzaSyBNcTmnS323hh7tSQzFdwlnB4EozA3lwcA",
            libraries: "places",
          }}
          defaultCenter={coordinates}
          center={coordinates}
          defaultZoom={10}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => loadMap(map, maps)}
        />
      </div>
    </>
  );
};

export default GoogleMapReact;
