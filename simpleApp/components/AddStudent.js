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
  return (
    <View>
      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={setName}
      />
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
