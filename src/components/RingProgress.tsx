import { View } from "react-native";
import SVG, { Circle, CircleProps } from "react-native-svg";
import Animated, {
 useAnimatedProps,
 useSharedValue,
 withTiming,
 withSpring,
} from "react-native-reanimated";
import React, { useEffect } from "react";

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

type RingProggressProps = {
 radius?: number;
 strokeWidth?: number;
 progress: number; // Adicionando uma prop de progresso
};

const color = "#EE0F55";

const RingProgress = ({ radius = 100, strokeWidth = 35, progress }: RingProggressProps) => {
 const innerRadius = radius - strokeWidth / 2; // raio interno do círculo
 const circumference = Math.PI * 2 * innerRadius; // circunferência do círculo
 const fill = useSharedValue(0);
 useEffect(() => {
  fill.value = withTiming(progress, { duration: 1500 });
 }, [progress]);
 const animatedProps = useAnimatedProps(() => ({
  strokeDasharray: [circumference * fill.value, circumference],
 }));

 const circleDefaultProps: CircleProps = {
  cx: radius,
  cy: radius,
  r: innerRadius,
  strokeWidth: strokeWidth,
  stroke: color,
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
     stroke={color}
    />

    {/* Círculo de progresso */}
    <AnimatedCircle
     animatedProps={animatedProps}
     rotation="-90"
     origin={radius}
     {...circleDefaultProps}
     strokeDashoffset={0}
     strokeLinecap="round"
     fill="none"
    />
   </SVG>
  </View>
 );
};

export default RingProgress;
