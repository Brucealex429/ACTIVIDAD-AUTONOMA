import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={{ uri: 'https://media.istockphoto.com/id/1187873593/es/vector/matem%C3%A1ticas-fondo-de-geometr%C3%ADa-f%C3%B3rmulas-formas-y-gr%C3%A1ficos-gran-conjunto-vectorial-de-objetos.jpg?s=612x612&w=0&k=20&c=_uuh8gOSI3YTTxb0Hjv7IsB3WbcxSNCtQMV25L5ucX8=' }} 
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>BIENVENIDO A LA APLICACIÓN DE DIVISIONES</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Formulario')}
        >
          <Text style={styles.buttonText}>Acceder</Text>
        </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
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

export default WelcomeScreen;
