import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CategoryScreen from '../screens/categoryScreen';

export default function Index() {
  return (
    <CategoryScreen />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
