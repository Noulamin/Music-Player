import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/components/Home'

const {Navigator, Screen } = createNativeStackNavigator();


const App = () => {
  return(
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
      </Navigator>
    </NavigationContainer>
  )
}

export default App