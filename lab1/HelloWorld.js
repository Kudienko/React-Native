import {StyleSheet, Text, View} from 'react-native';
import {Button, SafeAreaView, TextInput} from "react-native-web";
import {useState} from "react";

export default function HelloWorld() {
    const [text, setText] = useState('')
    const [result, setResult] = useState('Hello World')

    const handlePress = () => {
        setResult(text)
    }

    return (
        <SafeAreaView>
            <View style={styles.pole}>
                <Text style={styles.txt}>{result}</Text>
            </View>
            <View style={styles.vod}>
                <TextInput
                    blurOnSubmit={true}
                    onChangeText={(text) => setText(text)}
                    keyboardAppearance='dark'
                    style={styles.input}/>
                <Button title="Отобразить" onPress={handlePress}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fafafa',
        width: '60%',
        padding: 10
    },
    pole: {
        marginTop: 100,
        flex: 1,
        alignItems: 'center',
    },
    vod: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 10,
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%'
    }
});