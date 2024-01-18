import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface INumberButton {
  value: number;
  onPress: (number: number) => void;
}

export const NumberButton: React.FC<INumberButton> = ({value, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => onPress(value)}>
      <Text style={styles.text}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
