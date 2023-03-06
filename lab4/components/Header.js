import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from "react-native-web";
import {useNavigation} from "@react-navigation/native";

export default function Header({addHandler, el}) {
    const navigation = useNavigation()
    return (
        <View style={styles.head}>
            <Text style={styles.text}>{el}</Text>
            {(el === "Список дел") &&
                <TouchableOpacity onPress={() => navigation.navigate('AddScreen', {addHandler: addHandler})}>
                <Image style={styles.add} source={require('../assets/add.png')} />
                </TouchableOpacity> }
        </View>

    );
}

const styles = StyleSheet.create({
    head: {
        flexDirection:"row",
        height: 50,
        backgroundColor: 'silver',
        alignItems:"center"
    },
    text: {
        flex:1,
        fontSize: 25,
        textAlign: "center",
    },
    add: {
        top:5,
        right: 20,
        height: 30,
        width: 30
    }
});