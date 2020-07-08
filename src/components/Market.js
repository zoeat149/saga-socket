import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect, Provider } from "react-redux";

export default function Market() {
  return (
    <View style={styles.container}>
        <Text style={{color:'#fff', fontSize:20}}>Market screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: '#43488a',
    alignItems:'center', 
    justifyContent:'center'
  },
});
