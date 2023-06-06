import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import Header from "./src/components/Header";
import Title from "./src/components/Title";
import Description from "./src/components/Description";
import Avatars from "./src/components/Avatars";
import TaskList from "./src/components/TaskList";
import { Provider } from "react-redux";
import store from "./Redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <ScrollView contentContainerStyle={styles.container}>
        <Header />
        <Title />
        <Description />
        <Avatars />
        <TaskList />
        <StatusBar style="auto" />
      </ScrollView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#ffff",
    paddingVertical: 20,
  },
});
