import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import MainMenu from "./MainMenu";
import WishList from "./lab4/WishList";
import AddScreen from "./lab4/screens/AddScreen";
import WishScreen from "./lab4/screens/WishScreen";
import HelloWorld from "./lab1/HelloWorld";
import QuadraticEquation from "./lab2/QuadraticEquation";
import Calculator from "./lab3/Calculator";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name="React-Native" component={MainMenu}></Stack.Screen>
                <Stack.Screen name="QuadraticEquation" component={QuadraticEquation}></Stack.Screen>
                <Stack.Screen name="HelloWorld" component={HelloWorld}></Stack.Screen>
                <Stack.Screen name="WishList" component={WishList} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name="AddScreen" component={AddScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name="WishScreen" component={WishScreen} options={{headerShown:false}}></Stack.Screen>
                <Stack.Screen name="Calculator" component={Calculator}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}