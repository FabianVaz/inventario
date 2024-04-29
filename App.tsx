import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/screens/Home';
import Login from './app/screens/Login';
import ProductDetails, {
  Params as ProductDetailsPrams,
} from './app/screens/ProductDetails';

const stack = createStackNavigator();

export type RootStackParamList = {
  Home: undefined;
  ProductDetails: ProductDetailsPrams;
};

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='Login'>
        <stack.Screen 
        name='Login' 
        component={Login}
        options={{
          headerShown: false,
          headerStyle: {backgroundColor: '#aff0040'},
        }} 
        />
        <stack.Screen name='Home' component={Home} />
        <stack.Screen name='ProductDetails' component={ProductDetails} />
      </stack.Navigator>
    </NavigationContainer>
  );
  
}

export default App;