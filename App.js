import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/Screens/SplashScreen';
import HomeScreen from './src/Screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    // screenOptions={{ headerShown: false }}  
    // options={{ headerShown: false }}
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Spalsh" screenOptions={{ headerShown: false }} >
      <Stack.Screen name="Spalsh" component={SplashScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;