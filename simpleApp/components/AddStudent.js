import { Button, Text, TextInput } from "react-native-paper";
import { View } from "react-native-web";
import { Image } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function AddStudent() {
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const newStudent = {
    name: name,
    age: 24,
    gender: "male",
  };
  // const [error, setError] = useState("");
  // const [student, setStudent] = useState({
  //   id: "",
  //   name: "",
  //   age: "",
  // });

  // function inputHandel(char, field) {
  //   setStudent((pre) => ({
  //     ...pre,
  //     [field]: char,
  //   }));
  // }
  // function newStudent() {
  //   if (student.id !== "" && student.name !== "" && student.age !== "") {
  //     navigation.navigate("home", { newStuArray: student });
  //     setStudent({
  //       name: "",
  //       age: "",
  //       gender: "",
  //     });
  //   } else {
  //     setError("Require all fields...");
  //   }
  // }
  return (
    <View>
      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={setName}
        // onChangeText={(char) => {
        //   inputHandel(char, "name");
        // }}
      />
      {/* <TextInput
        mode="outlined"
        label="Age"
        value={student.age}
        //onChangeText={setName}
        onChangeText={(char) => {
          inputHandel(char, "age");
        }}
      />
      <TextInput
        mode="outlined"
        label="Gender"
        value={student.gender}
        //onChangeText={setName}
        onChangeText={(char) => {
          inputHandel(char, "gender");
        }}
      /> */}
      <Button
        onPress={() => {
          navigation.popTo("StudentList", { newStudent });
        }}
      >
        ADD
      </Button>
    </View>
  );
}
