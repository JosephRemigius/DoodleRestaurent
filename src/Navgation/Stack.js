import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Screens/Home';
import MyCart from '../Screens/MyCart';

const StackScreen = createNativeStackNavigator()
class AppStack extends React.Component {
    render() {
        return (<NavigationContainer>
            <StackScreen.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}>
                <StackScreen.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'HOME' }}
                />
                <StackScreen.Screen
                    name="MyCart"
                    component={MyCart}
                    options={{
                        title: 'My Cart',
                        headerTitleStyle: { color: 'white' },
                        headerTintColor: 'white',
                        headerShown: true,
                        headerStyle: {
                            backgroundColor: '#091E2E',
                            elevation:0
                        }
                    }}

                />
            </StackScreen.Navigator>
        </NavigationContainer>
        )
    }

}


export default AppStack;