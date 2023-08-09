import React from 'react';
import {StyleSheet, View} from 'react-native';
import 'react-native-url-polyfill/auto';
import { StatusBar } from 'expo-status-bar';
import OpenAiForm from "./App/components/openAiForm/OpenAiForm";

export default function App() {
  return (
    <View style={styles.container}>
      <OpenAiForm />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",

    width: "100vw",
    height: "100vh",
  },
  container__button:{
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "50%",
  }
});
