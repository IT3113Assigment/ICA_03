import { Text } from "react-native-paper";
import { View } from "react-native-web";
import { Image } from "react-native";

export default function Profile({ route }) {
  const { student } = route.params;
  return (
    <View>
      <Text>Name:{student.name}</Text>
      <Text>Age:{student.age}</Text>
      <Text>Gender:{student.gender}</Text>
      <Text>Email:{student.email}</Text>
      <Image source={student.profile_pic} />
    </View>
  );
}
