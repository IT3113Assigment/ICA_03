import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { students } from "./StudentDb";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

export default function StudentList({ route }) {
  const navigation = useNavigation();
  const [mystudents, setStudents] = useState(students);
  const [rerender, setRerender] = useState(false);

  React.useEffect(() => {
    if (route.params?.newStudent) {
      const { newStudent } = route.params;
      setStudents((prev) => [...prev, { ...newStudent }]);
      setRerender(!rerender);
    }
  }, [route.params?.newStudent]);

  return (
    <View style={styles.container}>
      <FlatList
        data={mystudents}
        keyExtractor={(item) => item.id}
        extraData={rerender}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { student: item })}
          >
            <Text styles={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button onPress={() => navigation.navigate("Add")}>
        Add New Student
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
