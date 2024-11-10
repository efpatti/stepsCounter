import { View } from "react-native";
import SVG, { Circle } from "react-native-svg";
import React from "react";

type RingProggressProps = {
 radius?: number;
 strokeWidth?: number;
 progress: number; // Adicionando uma prop de progresso
};

const color = "#EE0F55";

const RingProgress = ({ radius = 100, strokeWidth = 35, progress }: RingProggressProps) => {
 const innerRadius = radius - strokeWidth / 2; // raio interno do círculo
 const circumference = Math.PI * 2 * innerRadius; // circunferência do círculo

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
     cx={radius}
     cy={radius}
     r={innerRadius}
     strokeWidth={strokeWidth}
     opacity={0.2} // Opacidade reduzida para o círculo de fundo
     stroke={color}
    />

    {/* Círculo de progresso */}
    <Circle
     cx={radius}
     cy={radius}
     r={innerRadius}
     strokeWidth={strokeWidth}
     stroke={color}
     strokeDasharray={[circumference * progress, circumference]} // Progresso baseado na prop 'progress'
     strokeDashoffset={0} //
     strokeLinecap="round"
     fill="none"
     rotation="-90"
     origin={radius}
    />
   </SVG>
  </View>
 );
};

export default RingProgress;
