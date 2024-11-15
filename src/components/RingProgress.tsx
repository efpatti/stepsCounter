import { View } from "react-native";
import SVG, { Circle, CircleProps } from "react-native-svg";
import AntDesign from "@expo/vector-icons/AntDesign";
import Animated, {
 useAnimatedProps,
 useSharedValue,
 withTiming,
 withSpring,
} from "react-native-reanimated";
import React, { useEffect } from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProggressProps = {
 radius: number;
 strokeWidth: number;
 progress: number; // Adicionando uma prop de progresso
};

const color = "#EE0F55";

const RingProgress = ({ radius, strokeWidth, progress }: RingProggressProps) => {
 const innerRadius = radius - strokeWidth / 2; // raio interno do círculo
 const circumference = Math.PI * 2 * innerRadius; // circunferência do círculo
 const fill = useSharedValue(0);
 useEffect(() => {
  fill.value = withTiming(progress, { duration: 1500 });
 }, [progress]);
 const animatedProps = useAnimatedProps(() => ({
  strokeDasharray: [circumference * fill.value, circumference],
  strokeDashoffset: 0,
 }));

 const circleDefaultProps: CircleProps = {
  cx: radius,
  cy: radius,
  r: innerRadius,
  strokeWidth: strokeWidth,
  stroke: color,
  fill: "none",
  rotation: "-90",
  origin: radius,
  strokeLinecap: "round",
 };

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
    {/* Círculo de fundo com opacidade ajustada */}
    <Circle
     {...circleDefaultProps}
     opacity={0.2} // Opacidade reduzida para o círculo de fundo
    />

    {/* Círculo de progresso */}
    <AnimatedCircle animatedProps={animatedProps} {...circleDefaultProps} />
   </SVG>
   <AntDesign
    name="arrowright"
    size={strokeWidth * 0.8}
    color="black"
    style={{
     fontWeight: "bold",
     position: "absolute",
     top: 0,
     alignSelf: "center",
    }}
   />
  </View>
 );
};

export default RingProgress;
