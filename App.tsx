import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import Value from "./src/components/Value";
import RingProgress from "./src/components/RingProgress";

export default function App() {
 return (
  <View style={styles.container}>
   <RingProgress progress={0.3} radius={100} strokeWidth={50} />
   <View style={styles.values}>
    <Value label="Steps" value="120" />
    <Value label="Distance" value="0,75km" />
    <Value label="Flights Climbed" value="6" />
   </View>
   <StatusBar style="auto" />
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "black",
  justifyContent: "center",
  padding: 12,
 },
 values: {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 25,
 },
});
