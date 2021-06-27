import React from 'react';
import { Text } from 'react-native';

export default function Match(props) {
  let result
  if(props.score1 === props.score2) {
    result = "Egalité"
  } else if(props.score1 > props.score2) {
    result = "Victoire " + props.team1
  } else {
    result = "Victoire " + props.team2
  }
  return (
    <>
      <Text>{props.team1} {props.score1} - {props.score2} {props.team2}</Text>
      <Text>{result}</Text>
    </>
  )
}