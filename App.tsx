// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './pages/Home';
import Message from './pages/Message';
import Testing from './pages/Testing';
import Loader from './pages/Loader';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="loader" component={Loader} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Message" component={Message} />
        <Stack.Screen name="Testing" component={Testing} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
