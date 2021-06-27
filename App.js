import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Match from './Match.js'


export default function App() {
  let matches = [
    {team1: "Belgique", team2: "France", score1: 4, score2: 2},
    {team1: "Espagne", team2: "Belgique", score1: 1, score2: 2},
    {team1: "Allemagne", team2: "Estonie", score1: 2, score2: 2}
  ]

  return (
    <View style={styles.container}>
      {matches.map((m) => <Match {...m} />)}
      <StatusBar style="auto" />
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
