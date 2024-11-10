import { StyleSheet, View, Text } from "react-native";
type ValueProps = {
 value?: string;
 label?: string;
};
const Value = ({ label, value }: ValueProps) => (
 <View>
  <Text style={styles.label}>{label}</Text>
  <Text style={styles.value}>{value}</Text>
 </View>
);

const styles = StyleSheet.create({
 label: {
  color: "white",
  fontSize: 20,
 },
 value: {
  fontSize: 45,
  color: "#AFB3BE",
  fontWeight: 500,
 },
});

export default Value;
