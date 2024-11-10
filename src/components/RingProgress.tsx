import { View, Text } from "react-native";
import SVG, { Circle, Rect } from "react-native-svg";
import React from "react";
type RingProggressProps = {
 radius?: number;
 strokeWidth?: number;
};
const color = "#EE0F55";
const RingProgress = ({ radius = 100, strokeWidth = 20 }: RingProggressProps) => {
 const innerRadius = radius - strokeWidth;
 2;
 return (
  <View
   style={{
    width: radius * 2,
    height: radius * 2,
    alignSelf: "center",
    marginVertical: 20,
   }}
  >
   <SVG>
    <Circle cx={radius} cy={radius} r={innerRadius} strokeWidth={strokeWidth} stroke={color} />
   </SVG>
  </View>
 );
};

export default RingProgress;
