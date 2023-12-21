import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOptions = {
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Ajoyib Ob-Havo",
    description: "Tashqariga chiqing, Toza havoda piyoda yuring !",
  },
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Uyda o'tiring",
    description: "Ko'chada nima bo'layotganini bilasizmi ?",
  },
  Drizzle: {
    iconName: "weather-rainly",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Soyabonni olishni unutmang",
    description: "Yomg'ir tezlashib ketishi mumkin!",
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1cb5e0"],
    title: "Tashqarida yomg'ir",
    description: "Yomg'irli kun , Soyabonni unutmang!",
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Tashqarida Qor",
    description: "Issiq kiyimlarni kiying va qor bobo yasashni unutmang!",
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#b79891", "#94716B"],
    title: "Chang Havo",
    description: "Imkon qadar tashqariga chiqmang!",
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56ccf2", "#2f80ed"],
    title: "Tashqari Tutun",
    description: "Imkon qadar tashqariga chiqmang!",
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3e5151", "#decba4"],
    title: "Tashqari Tutun",
    description: "Imkon qadar tashqariga chiqmang!",
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Tashqarida tuman",
    description: "Hech nimani ko'ra olmaysiz. Extiyot bo'ling",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#d7dde8", "#757f9a"],
    title: "Bulutli",
    description: "Tashqariga chiqing, Toza havoda piyoda yuring !",
  },
};

export default function Weather({ name, temp, condition , setWeather }) {
  const [query, setQuery] = useState("");
  return (
    <LinearGradient
      colors={weatherOptions[condition]?.gradient}
      style={styles.container}>
      <View style={styles.icon}>
        <MaterialCommunityIcons
          name={weatherOptions[condition]?.iconName}
          size={96}
          color={"white"}
        />
        <View style={styles.flex}>
          <Text style={styles.temp}>{temp}°</Text>
          <Text style={styles.temp}>| {name}</Text>
        </View>
      </View>
      <View style={{ ...styles.icon, ...styles.text }}>
        <Text style={styles.title}>{weatherOptions[condition]?.title}</Text>
        <Text style={styles.description}>
          {weatherOptions[condition]?.description}
        </Text>
        <View style={styles.search}>
          <TextInput
            placeholder="Shahar Nomi..."
            style={styles.input}
            value={query}
            onChangeText={(text) => setQuery(text)}
          />
          <Button title="Izlash..." style={styles.button} onPress={() => setWeather(query)}/>
        </View>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 28,
    color: "#fff",
  },
  flex: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  text: {
    flex: 1,
    alignItems: "flex-start",
    paddingHorizontal: 16,
    width: "100%",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    paddingVertical: 4,
    fontWeight: "500",
  },
  description: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "400",
  },
  search: {
    backgroundColor: "#fff",
    width: "100%",
    marginTop: 32,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 12,
  },
  input: {
    padding: 12,
  },
});
