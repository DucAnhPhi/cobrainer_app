import React from "react";
import { View, ScrollView } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryPie,
  VictoryTheme,
} from "victory-native";
import { CircularProgress } from "../components";
import { Title, Text } from "react-native-paper";

const data = [
  { quarter: 1, earnings: 13000 },
  { quarter: 2, earnings: 16500 },
  { quarter: 3, earnings: 14250 },
  { quarter: 4, earnings: 19000 },
];

export function DashboardScreen() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Title style={{ marginTop: 40 }}>Cobrainer metrics</Title>
        <VictoryChart width={350} theme={VictoryTheme.material}>
          <VictoryBar data={data} x="quarter" y="earnings" />
        </VictoryChart>
        <Title style={{ marginTop: 40, marginBottom: 20 }}>Your Progress</Title>
        <CircularProgress />
        <Title style={{ marginTop: 40 }}>Techstack demand</Title>
        <VictoryPie
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
          data={[
            { x: "Serverless", y: 8 },
            { x: "React", y: 14 },
            { x: "AWS", y: 24 },
            { x: "DevOps", y: 26 },
            { x: "Typescript", y: 30 },
          ]}
        />
      </View>
    </ScrollView>
  );
}
