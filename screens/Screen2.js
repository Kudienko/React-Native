import {StyleSheet, Text, View} from 'react-native';
import {useNavigation} from "@react-navigation/native";

export default function Screen2() {
    const navigation = useNavigation()
    navigation.navigate('Screen2');
    return (
        <View>
            <Text style={styles.text}>Screen2</Text>
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