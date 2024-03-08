import React from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import Placar from './src/components/Placar';

export default function App() {
  return <View style={styles.tela}>
    <StatusBar barStyle="light-content" backgroundColor="#03001C"/>

    <Placar titulo="Home"/>

    <Placar titulo="Guest"/>

  </View>
}

const styles = StyleSheet.create({
  tela: {
    backgroundColor: "#03001C",
    flex: 1,
  }
})