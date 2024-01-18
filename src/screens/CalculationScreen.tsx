import React, {useState} from 'react';
import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {NumberButton} from '../components/NumberButton.tsx';
import {OperationButton} from '../components/OperationButton.tsx';
import {Operations} from '../interfaces.ts';
import {CleanButton} from '../components/CleanButton.tsx';

export const CalculationScreen: React.FC = ({ navigation }: any) => {
  const [result, setResult] = useState<number | undefined>();
  const [currentOperation, setCurrentOperation] = useState<Operations>();
  const [history, setHistory] = useState<string[]>([]);

  const clean = () => {
    setResult(undefined);
    setCurrentOperation(undefined);
  };

  const goToHistory = () => {
    navigation.push('History', {history});
  };

  const operation = (number: number) => {
    if (!result) {
      setResult(number);
      return;
    }

    switch (currentOperation) {
      case Operations.divide:
        setHistory(prev => [
          ...prev,
          `${result} / ${number} = ${result / number}`,
        ]);
        setResult(result / number);
        setCurrentOperation(undefined);
        break;
      case Operations.minus:
        setHistory(prev => [
          ...prev,
          `${result} - ${number} = ${result - number}`,
        ]);
        setResult(result - number);
        setCurrentOperation(undefined);
        break;
      case Operations.plus:
        setResult(result + number);
        setHistory(prev => [
          ...prev,
          `${result} + ${number} = ${result + number}`,
        ]);
        setCurrentOperation(undefined);
        break;
      case Operations.multiply:
        setHistory(prev => [
          ...prev,
          `${result} * ${number} = ${result * number}`,
        ]);
        setResult(result * number);
        setCurrentOperation(undefined);
        break;
      default:
        Alert.alert('Что-то пошло не так...');
        setCurrentOperation(undefined);
    }
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.resultRow}>{result}</Text>
      <View style={styles.buttonsContainer}>
        <NumberButton value={0} onPress={operation} />
        <NumberButton value={1} onPress={operation} />
        <NumberButton value={2} onPress={operation} />
        <NumberButton value={3} onPress={operation} />
        <OperationButton
          value={Operations.plus}
          onPress={setCurrentOperation}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <NumberButton value={4} onPress={operation} />
        <NumberButton value={5} onPress={operation} />
        <NumberButton value={6} onPress={operation} />
        <NumberButton value={7} onPress={operation} />
        <OperationButton
          value={Operations.minus}
          onPress={setCurrentOperation}
        />
      </View>
      <View style={styles.buttonsContainer}>
        <NumberButton value={8} onPress={operation} />
        <NumberButton value={9} onPress={operation} />
        <OperationButton
          value={Operations.multiply}
          onPress={setCurrentOperation}
        />
        <OperationButton
          value={Operations.divide}
          onPress={setCurrentOperation}
        />
        <CleanButton value="C" onPress={clean} />
      </View>
      <TouchableOpacity onPress={goToHistory}>
        <Text style={styles.historyButtonText}>Go to history</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 10,
  },
  resultRow: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  historyButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
