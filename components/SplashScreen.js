import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { signOut } from "firebase/auth";
import { auth } from "../firebase"; // Assuming you have imported the Firebase auth instance
import { styles } from "./style";

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "SignIn" }],
        });
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const handleGetStarted = () => {
    navigation.navigate("QnAScreen");
  };

  return (
    <ImageBackground
      source={require("../assets/Ques1.jpg")}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to QnA App!</Text>
        <Text style={styles.description}>
          Get instant answers to your questions with our AI-powered QnA
          platform. Simply provide a passage and question, and let our
          intelligent model generate accurate responses for you.
        </Text>
        <Text style={styles.description}>
          Explore the world of knowledge effortlessly and dive into fascinating
          topics. Start discovering now!
        </Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={handleGetStarted}
        >
          <Text style={styles.getStartedButtonText}>Get Started</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
          <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
