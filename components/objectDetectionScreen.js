import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  Platform,
  StyleSheet,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as jpeg from "jpeg-js";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-react-native";
import { stylesQnA } from "./style";

//Made changes in screen to work for QnA Model
import * as qna from "@tensorflow-models/qna"; // Import Q&A model

const QnAScreen = () => {
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState("");
  const [passage, setPassage] = useState("");

  useEffect(() => {
    // Request camera roll permissions
    (async () => {
      if (Platform.OS !== "web") {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
      await tf.ready(); // Initialize TensorFlow.js
      await tf.setBackend("rn-webgl");
    })();
  }, []);

  const findAnswers = async () => {
    try {
      console.log("Loading");

      const model = await qna.load();
      console.log("Model loaded successfully");

      const rawAnswers = await model.findAnswers(question, passage);

      // Sort answers by score
      const sortedAnswers = rawAnswers.sort((a, b) => b.score - a.score);

      // Take top two answers
      const topTwoAnswers = sortedAnswers.slice(0, 2);

      setAnswers(topTwoAnswers);
      console.log("Answers:", topTwoAnswers);
    } catch (error) {
      console.error("Error finding answers:", error);
    }
  };

  return (
    <View style={stylesQnA.container}>
      <Text style={stylesQnA.promptText}>
        Think of a question and provide some context in the passage, then tap
        "Find Answers"!
      </Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: "gray",
          borderWidth: 1.3,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        onChangeText={setQuestion}
        value={question}
        placeholder=" Enter your question"
      />
      <TextInput
        style={{
          height: 100,
          width: 300,
          borderColor: "gray",
          borderWidth: 1.3,
          marginBottom: 10,
          paddingLeft: 10,
        }}
        onChangeText={setPassage}
        value={passage}
        placeholder=" Enter your passage"
        multiline
      />
      <Button title="Find Answers" onPress={findAnswers} color="#4b0082" />

      {answers.map((answer, index) => (
        <View key={index} style={stylesQnA.answerContainer}>
          <Text style={stylesQnA.answerText}>{answer.text}</Text>
          <Text style={stylesQnA.scoreText}>
            Score: {answer.score.toFixed(3)}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default QnAScreen;
