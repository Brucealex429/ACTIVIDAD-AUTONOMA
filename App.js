import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import FormScreen from './screens/FormScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Bienvenido"
        screenOptions={{
          headerStyle: { backgroundColor: '#D3D3D3' },
          headerTintColor: '#000',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen name="Bienvenido" component={WelcomeScreen} />
        <Stack.Screen name="Formulario" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

