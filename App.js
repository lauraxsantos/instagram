import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Main from './src/components/main/main';
import TabBar from './src/components/tab-bar/tab-bar';


export default function App() {
  return (
    <View style={styles.container}>
      <Main></Main>
      <TabBar></TabBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
