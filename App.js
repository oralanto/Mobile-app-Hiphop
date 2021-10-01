import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import HomePage from "./screens/HomePage";
import LessonList from "./screens/LessonList";

export default function App() {
  return (
    <View style={styles.container}>
      <HomePage />
      {/* <LessonList /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
