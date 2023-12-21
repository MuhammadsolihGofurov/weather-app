import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Weather from "./components/Weather";
import * as Location from "expo-location";
import axios from "axios";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [geoInfo, setGeoInfo] = useState(null);
  const ApiKey = `2457c85769a608532c20c3b5218bf55a`;

  const getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ApiKey}&units=metric`
    );
    if (data) {
      setGeoInfo(data);
      // setTimeout(() => {
      setLoading(false);
      // }, 2000);
    }
  };

  const setWeather = async (query) => {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${ApiKey}&units=metric`
    );
    if (data) {
      setGeoInfo(data);
    }
  };

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        console.log("denied");
        return;
      }

      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      if (latitude) {
        getWeather(latitude, longitude);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return loading ? (
    <View style={styles.container}>
      <Text style={styles.text}>Iltimos , biroz kuting...</Text>
      <StatusBar style="auto" />
    </View>
  ) : (
    <Weather
      name={geoInfo?.name}
      temp={Math.round(geoInfo?.main?.temp)}
      condition={geoInfo?.weather[0]?.main}
      setWeather={setWeather}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FF7F7F",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
