import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Operations} from '../interfaces.ts';

interface IOperationButton {
  value: Operations;
  onPress: (operation: Operations) => void;
}

export const OperationButton: React.FC<IOperationButton> = ({
  value,
  onPress,
}) => {
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
