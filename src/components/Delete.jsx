import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { connect } from "react-redux";
import { deleteAllTasks } from "../../Redux/actions/taskActions";

const Delete = ({ deleteAllTasks }) => {
  const handleDeleteAll = () => {
    deleteAllTasks();
  };

  return (
    <SafeAreaView
      style={{
        padding: 10,
        paddingTop: 40,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ color: "grey" }}>Task List</Text>
      <TouchableOpacity onPress={handleDeleteAll}>
        <FontAwesome5 name="trash-alt" size={24} color="red" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const mapDispatchToProps = {
  deleteAllTasks,
};

export default connect(null, mapDispatchToProps)(Delete);
