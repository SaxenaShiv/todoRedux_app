import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { connect } from "react-redux";
import { addTask } from "../../Redux/actions/taskActions";
// import { SafeAreaView } from "react-native-safe-area-context";
const AddList = ({ addTask }) => {
  const [text, setText] = useState("");

  const handleAddItem = () => {
    if (text.trim() !== "") {
      addTask(text.trim());
      setText("");
    }
  };

  return (
    <SafeAreaView style={styles.listItem}>
      <TouchableOpacity onPress={handleAddItem}>
        <AntDesign name="plus" size={24} color="green" />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Add List"
        value={text}
        onChangeText={setText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  listItem: {
    display: "flex",
    backgroundColor: "#F9F9FB",
    borderRadius: 15,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
});

const mapDispatchToProps = {
  addTask,
};

export default connect(null, mapDispatchToProps)(AddList);
