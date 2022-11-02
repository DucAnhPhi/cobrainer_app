import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { Text } from "react-native";

export const CircularProgress = () => {
  return (
    <AnimatedCircularProgress
      size={200}
      width={20}
      fill={60}
      tintColor="#00e0ff"
      backgroundColor="#3d5875"
      duration={2000}
    >
      {(fill) => <Text>{Math.trunc(fill).toString()}</Text>}
    </AnimatedCircularProgress>
  );
};
