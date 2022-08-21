import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    //request
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          "X-RapidAPI-Key":
            "3773588159msh9a82fa6caf6bb6ep12313cjsnc9abea4daaa7",
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getWeatherData = async (lat, lng) => {
  try {
    if (lat && lng) {
      const { data } = await axios.get(
        `https://open-weather13.p.rapidapi.com/city/landon`,
        {
          params: { lat, lon: lng },
          headers: {
            "X-RapidAPI-Key":
              "3773588159msh9a82fa6caf6bb6ep12313cjsnc9abea4daaa7",
            "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
          },
        }
      );

      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
