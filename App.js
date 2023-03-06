import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import {StatusBar} from "expo-status-bar";
import MainMenu from "./MainMenu";
import Screen2 from "./screens/Screen2";
import lab1 from "./lab1/HelloWorld";
import WishList from "./lab4/WishList";
import AddScreen from "./lab4/screens/AddScreen";
import WishScreen from "./lab4/screens/WishScreen";
import HelloWorld from "./lab1/HelloWorld";
import QuadraticEquation from "./lab2/QuadraticEquation";

export default function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <StatusBar style="auto"/>
            <Stack.Navigator initialRouteName="App">
                <Stack.Screen name="React-Native" component={MainMenu}></Stack.Screen>
                <Stack.Screen name="QuadraticEquation" component={QuadraticEquation}></Stack.Screen>
                <Stack.Screen name="HelloWorld" component={HelloWorld}></Stack.Screen>
                <Stack.Screen name="WishList" component={WishList}></Stack.Screen>
                <Stack.Screen name="AddScreen" component={AddScreen}></Stack.Screen>
                <Stack.Screen name="WishScreen" component={WishScreen}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}