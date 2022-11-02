import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { AccountScreen, DashboardScreen, LearningScreen } from "./src/views";
import React from "react";
import { SafeAreaView } from "react-native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}

const Tab = createMaterialBottomTabNavigator();

function MyTabs() {
  return (
    <PaperProvider theme={DefaultTheme}>
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Tab.Navigator barStyle={{ backgroundColor: "black" }}>
          <Tab.Screen
            name="Dashboard"
            component={DashboardScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="dashboard" size={24} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="My learning"
            component={LearningScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons
                  name="play-circle-outline"
                  size={24}
                  color={color}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Account"
            component={AccountScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="account-circle" size={24} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </PaperProvider>
  );
}
