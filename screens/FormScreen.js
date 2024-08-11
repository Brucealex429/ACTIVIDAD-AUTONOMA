import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ImageBackground, StyleSheet } from 'react-native';

const FormScreen = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState(null);

  const divideNumbers = () => {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    if (isNaN(num1) || isNaN(num2)) {
      Alert.alert('Error', 'Por favor, ingrese números válidos.');
      return;
    }

    if (num1 === 0) {
      Alert.alert('ERROR', 'INDETERMINACIÓN');
      setResult(null);
    } else if (num2 === 0) {
      Alert.alert('ERROR', 'NO EXISTE DIVISIÓN PARA CERO');
      setResult(null);
    } else {
      const division = num1 / num2;
      setResult(`El Resultado de la División es: ${division.toFixed(2)}`);
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1187873593/es/vector/matem%C3%A1ticas-fondo-de-geometr%C3%ADa-f%C3%B3rmulas-formas-y-gr%C3%A1ficos-gran-conjunto-vectorial-de-objetos.jpg?s=612x612&w=0&k=20&c=_uuh8gOSI3YTTxb0Hjv7IsB3WbcxSNCtQMV25L5ucX8=' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.label}>Número 1</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el primer número"
          keyboardType="numeric"
          value={number1}
          onChangeText={setNumber1}
        />
        <Text style={styles.label}>Número 2</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresa el segundo número"
          keyboardType="numeric"
          value={number2}
          onChangeText={setNumber2}
        />
        <TouchableOpacity style={styles.button} onPress={divideNumbers}>
          <Text style={styles.buttonText}>Dividir</Text>
        </TouchableOpacity>
        {result && <Text style={styles.result}>{result}</Text>}
        <View style={styles.footerContainer}>
          <Text style={styles.footer}>Bruce Alexander Villa Cuenca - Desarrollo de Software - Aplicaciones Móviles</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.7)', 
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333', 
    marginBottom: 10,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#32CD32',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#32CD32', 
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333', 
    marginTop: 20,
  },
  footerContainer: {
    backgroundColor: '#D3D3D3', 
    padding: 10,
    borderRadius: 10,
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
  },
  footer: {
    color: '#333333', 
    fontSize: 14,
    textAlign: 'center',
  },
});

export default FormScreen;
