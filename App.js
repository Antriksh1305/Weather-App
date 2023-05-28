import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Main from './components/main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
        <Main />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080c1c',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});
