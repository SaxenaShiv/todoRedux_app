import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AddList from "./AddList";
import Delete from "./Delete";
import { connect } from "react-redux";
import { toggleTask, deleteAllTasks } from "../../Redux/actions/taskActions";

const TaskList = ({ tasks, toggleTask, deleteAllTasks }) => {
  const handleCheckboxPress = (taskId) => {
    toggleTask(taskId);
  };

  const handleDeleteAll = () => {
    deleteAllTasks();
  };

  const renderListItems = () => {
    return tasks.map((item) => (
      <TouchableOpacity
        key={item.id}
        onPress={() => handleCheckboxPress(item.id)}
      >
        <View style={styles.listItem}>
          <MyCheckbox checked={item.completed} />
          <Text style={{ marginLeft: 10 }}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  const MyCheckbox = ({ checked }) => {
    return (
      <View style={[styles.checkboxBase, checked && styles.checkboxChecked]}>
        {checked && <AntDesign name="check" size={24} color="white" />}
      </View>
    );
  };

  return (
    <View>
      <Delete onDeleteAll={handleDeleteAll} />
      <View style={styles.list}>{renderListItems()}</View>
      <AddList />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flexDirection: "column",
    justifyContent: "space-between",
  },
  listItem: {
    display: "flex",
    backgroundColor: "#F9F9FB",
    borderRadius: 15,
    padding: 25,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#7f57d7",
    backgroundColor: "#F9F9FB",
  },
  checkboxChecked: {
    backgroundColor: "#7f57d7",
  },
});

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};

const mapDispatchToProps = {
  toggleTask,
  deleteAllTasks,
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
