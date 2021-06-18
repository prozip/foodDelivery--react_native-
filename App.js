import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tabs from './navigation/tab';

import { StatusBar } from 'react-native'
import { useEffect } from 'react';
import { COLORS } from './constants';
import { Restaurant } from './screens';
import OrderDelivery from './screens/OrderDelivery'

const Stack = createStackNavigator();

const App = () => {

    useEffect(() => {
        StatusBar.setBackgroundColor(COLORS.lightGray11);
        return () => {
        }
    }, [])

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}
                initialRouteName={'Home'}>
                <Stack.Screen name="Home" component={Tabs}></Stack.Screen>
                <Stack.Screen name="Restaurant" component={Restaurant}></Stack.Screen>
                <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default App;