import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from "react-redux";

export default function QuoteDetail() {
  return (
    <View style={styles.container}>
        <Text>Quote Detail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 80,
    paddingTop: 80
  },
});
