import { CurrentRenderContext } from "@react-navigation/native";
import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

const stylesCamera = StyleSheet.create({
  container: {
    flex: 0,
    width: "100%",
    height: "100%",
  },
  cameraContainer: {
    flex: 1,
  },
  fixedRatio: {
    flex: 1,
    aspectRatio: 1,
  },
  button: {
    flex: 0.1,
    padding: 10,
    alignSelf: "flex-end",
    alignItems: "center",
  },
});

//new
const stylesSignIn = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#4b0082",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: "35%",
    alignItems: "center",
    marginLeft: 80,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
    marginLeft: 5,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 80,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "90%",
    maxWidth: 400,
  },
});

const stylesSignUp = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#e6e6fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    width: "40%",
    marginLeft: 75,
    backgroundColor: "#4b0082",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  error: {
    color: "red",
    marginBottom: 20,
  },
  footer: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "blue",
    marginLeft: 5,
  },
  card: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: {
      width: 80,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: "90%",
    maxWidth: 400,
  },
});

const stylesImageScreen = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "contain",
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#FFF", // White text color
    textAlign: "center",
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    color: "#FFF", // White text color
    textAlign: "center",
  },
  getStartedButton: {
    backgroundColor: "#FED922", // Green button color
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignSelf: "center",
    marginBottom: 10,
  },
  getStartedButtonText: {
    fontSize: 17,
    fontWeight: "bold",
    color: "black", // White text color
  },
  signOutButton: {
    backgroundColor: "#156A6B",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignSelf: "center",
  },
  signOutButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#FFF", // Dark text color
  },
});
const stylesQnA = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#e6e6fa",
  },
  input: {
    height: 40,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 3,
  },
  answerContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: "100%",
    marginTop: 11,
  },
  answerText: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: "center",
    color: "purple",
  },
  scoreText: {
    fontSize: 14,
    color: "black",
    textAlign: "center",
  },
  promptText: {
    marginTop: -50,
    fontSize: 16,

    marginBottom: 10,
    textAlign: "center",
    color: "black",
    marginBottom: 30,
  },
});

export {
  stylesHome,
  stylesCamera,
  stylesSignIn,
  stylesSignUp,
  stylesImageScreen,
  styles,
  stylesQnA,
};
