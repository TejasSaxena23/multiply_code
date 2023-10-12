import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginPage from './component/Loginpage'; // Import your LoginPage component
import OfferPage from './component/Offerpage'; // Import your OfferPage component
import DiscountApprovalPage from './component/Discountpage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="User Login">
        <Stack.Screen name="User Login" component={LoginPage} />
        <Stack.Screen name="OfferPage" component={OfferPage} />
        <Stack.Screen name="DiscountApprovalPage" component={DiscountApprovalPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
