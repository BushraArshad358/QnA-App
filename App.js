import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo
//import CameraScreen from "./components/cameraScreen";
import SignUpScreen from "./components/signUpScreen";
import SignInScreen from "./components/signInScreen";

import QnAScreen from "./components/objectDetectionScreen";
import HomeScreen from "./components/SplashScreen";
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#4b0082", // Set the active icon color to purple
          tabBarStyle: { display: "flex" }, // Ensure tab bar is displayed
        }}
      >
        <Tab.Screen
          name="SignUp"
          component={SignUpScreen}
          options={{
            title: "Sign Up",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-add" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="SignIn"
          component={SignInScreen}
          options={{
            title: "Sign In",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="log-in" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: "Home",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home" size={size} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name="QnAScreen"
          component={QnAScreen}
          options={{
            title: "QnA",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search" size={size} color={color} />
            ),
          }}
        />
        {/* <Tab.Screen
          name="CameraScreen"
          component={CameraScreen}
          options={{
            title: "Camera",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="camera" size={size} color={color} />
            ),
          }}
        /> */}

        {/* <Tab.Screen
          name="ImageScreen"
          component={ImageScreen}
          options={{
            title: "Image",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="image" size={size} color={color} />
            ),
          }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
