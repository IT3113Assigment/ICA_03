import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { students } from "./StudentDb";
import { useNavigation } from "@react-navigation/native";
export default function StudentList() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile", { student: item })}
          >
            <Text styles={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
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
