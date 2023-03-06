import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-web";


export default function MainMenu() {

    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('HelloWorld')}>
                <Text style={styles.text}>Lab-1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('QuadraticEquation')}>
                <Text style={styles.text}>Lab-2</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Screen2')}>
                <Text style={styles.text}>Lab-3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WishList')}>
                <Text style={styles.text}>Lab-4</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        padding: 20,
        textAlign: 'center',
        borderRadius: 5,
        backgroundColor: '#fafafa',
        borderWidth: 1,
        marginTop: 20,
        width: '60%',
        marginLeft: '20%'
    }
});