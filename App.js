import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Plotly from 'react-native-plotly';

export default function App() {
  const data = {
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 3, 4, 8],
    type: 'scatter'
  };
  const layout = { title: 'My cool chart!' };

  return (
    <View style={styles.container}>
      <Text>Plot is below here!</Text>
      <View style={styles.view}>
        <Plotly data={data} layout={layout} />
      </View>
      <Text>Plot is above here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  view: {
    flex: 1,
    backgroundColor: 'red',
    height: 300,
    width: 300
  }
});
