import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import location from "@/../../public/assets/Group.png";
import locationIcon from "@/../../public/assets/Frame 51236.png";
import useTranslation from "../hooks/useTranslation";
import GoogleMap from "google-map-react";

const Getintouch = ({ coordinates, setCoordinates }) => {
  const { t } = useTranslation();
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
      draggable: false,
    });

      geocoder.geocode(
        { location: { lat:  25.2048, lng:72.8311 } },
        (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              setCoordinates(location);
              // formik.setFieldValue("address", results[0].formatted_address);
            } else {
              console.log("No results found");
            }
          } else {
            console.log("Geocoder failed due to:", status);
          }
        }
      );

    setMarker(newMarker);
  };

  return (
    <>
      <Box my="10" w="full">
        <Image mx="auto" src={location.src} />
        <Text
          fontWeight={500}
          my="5"
          fontSize={"1.5rem"}
          color={"blackAlpha.800"}
          textAlign={"center"}
        >
          {t("get")}
        </Text>
        <HStack w="full" justifyContent={"center"}>
          <Image src={locationIcon.src} />
          <Text>Dubai</Text>
        </HStack>
        <div style={{ height: "400px", width: "100%",marginBlock:"20px" }}>
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
      </Box>
    </>
  );
};

export default Getintouch;
