import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, ScrollView } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "./src/components/Header.jsx";
import Title from "./src/components/Title.jsx";
import Description from "./src/components/Description.jsx";
import Avatars from "./src/components/Avatars.jsx";
import TaskList from "./src/components/TaskList.jsx";
import { Provider } from "react-redux";
import store from "./Redux/store";
import DummyComp from "./src/components/DummyComp.jsx";

export default function App() {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <ScrollView contentInsetAdjustmentBehavior="automatic">
            <Header />
            <Title />
            <Description />
            <Avatars />
            <TaskList />
            <DummyComp />
          </ScrollView>
        </SafeAreaView>
        <StatusBar style="auto" />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  scrollContainer: {
    flexGrow: 1,
    paddingVertical: 20,
  },
});
