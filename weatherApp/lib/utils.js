import axios from "axios";

export const geocoder = (address, callback) => {
  axios
    .get(
      `https://api.mapbox.com/search/geocode/v6/forward?q=${encodeURIComponent(
        address
      )}&access_token=pk.eyJ1IjoidGluaXRhcyIsImEiOiJja3I1M2JoNmEzMThhMnpxYXNoMnJ4c3dzIn0.IzaW7j4EZTLatjnW08yKww&limit=1`
    )
    .then(({ data }) => {
      if (data.features.length === 0) {
        callback(
          "Error! Unable to find location. Please try again with a different search term.",
          undefined
        );
        return;
      }

      callback(undefined, {
        latitude: data.features[0].properties.coordinates.latitude,
        longitude: data.features[0].properties.coordinates.longitude,
        location: data.features[0].properties.full_address,
      });
    })
    .catch((error) => {
      callback(
        `Error! Unable to connect. Please try again later. (${error.message})`,
        undefined
      );
    });
};

export const forecast = (latitude, longitude, callback) => {
  axios
    .get(
      `https://api.weatherstack.com/current?access_key=24e29f710adf5bac98fbff04620b6f07&query=${latitude},${longitude}`
    )
    .then(({ data }) => {
      if (data.error) {
        callback(
          "Error! Unable to find location. Please try again.",
          undefined
        );
        return;
      }

      const dataRes = `${data.current.weather_descriptions[0]}. It is currently ${data.current.temperature} degrees out and it feels like ${data.current.feelslike} degrees.`;
      callback(undefined, dataRes);
    })
    .catch((error) => {
      callback(
        `Error! Unable to connect. Please try again later. (${error.message})`,
        undefined
      );
    });
};
