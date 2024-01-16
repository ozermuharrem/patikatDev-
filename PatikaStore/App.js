import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  FlatList,
  SafeAreaView,
} from "react-native";
import data from "./data.json";
import Card from "./component/Card";
export default function App() {
  const renderData = ({ item }) => <Card data={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <TextInput style={styles.searc} placeholder="Ara ..." />
      <FlatList 
        keyExtractor={(item, index) => item.id.toString()}
        data={data}
        renderItem={renderData}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,

  },
  header: {
    fontWeight: "bold",
    paddingLeft: 15,
    fontSize: 25,
    marginTop: 10,
    color: "#800080",
  },
  searc: {
    backgroundColor: "#ECEFF1",
    marginTop: 15,
    marginLeft: 15,
    height: 45,
    width: Dimensions.get("window").width / 1 - 60,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    paddingLeft: 15,
  },
});
