import React from "react";
import { Text, View, StyleSheet } from "react-native";
import CategoryScreen from '../screens/categoryScreen';
import {StatusBar} from "expo-status-bar";

export default function Index() {
  return (
    <>
    <StatusBar style="light" />
    <CategoryScreen />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
