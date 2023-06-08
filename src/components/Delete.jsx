import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, TouchableOpacity } from "react-native";
//
import { connect } from "react-redux";
import { deleteAllTasks } from "../../Redux/actions/taskActions";

const Delete = ({ deleteAllTasks }) => {
  const handleDeleteAll = () => {
    deleteAllTasks();
  };

  return (
    <View
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
    </View>
  );
};

const mapDispatchToProps = {
  deleteAllTasks,
};

export default connect(null, mapDispatchToProps)(Delete);
