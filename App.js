import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Plotly from 'react-native-plotly';

export default function App() {
  const data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 3, 4, 8],
  }];
  const layout = { title: 'My cool chart!' };

  return (
    <View style={{ flex: 1 }}>
      <Plotly data={data} layout={layout} />
    </View>
  );
}
