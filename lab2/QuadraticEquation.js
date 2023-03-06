import {StyleSheet, Text, View} from 'react-native';
import {Button, SafeAreaView, TextInput} from "react-native-web";
import {useState} from "react";
import {Formik} from "formik"
import AwesomeAlert from "react-native-awesome-alerts";

export default function HelloWorld() {
    let [a, setA] = useState('')
    let [b, setB] = useState('')
    let [c, setC] = useState('')
    const [showAlert, setAlert] = useState()
    const hideAlert = () => setAlert(false)
    let [txt, setTxt] = useState()
    let error;

    const handlePress = () => {
        if (a !== '' && b !== '' && c !== '') {
            setAlert(true)
            setTxt(quadraticEquation(a, b, c))
        } else error = 'Заполните поля'

    }


    let quadraticEquation = (a, b, c) => {
        // if (a === 0)
        //     return false;
        let disText = ''
        let res = '';

        let D = b * b - 4 * a * c;
        console.log('D = ' + D);

        if (D < 0) {
            disText = 'Дискриминант меньше нуля: \nОтвет: Корней нет'
        }
        if (D === 0) {
            let x;
            x = (-b + Math.sqrt(D)) / (2 * a);
            disText = `Дискриминант равен нулю: \n x\u2081 = x\u2082 = -b / 2a = ${b * -1} / 2 * ${a}\nОтвет: x\u2081 = x\u2081 = ${x}`
        } else if (D > 0) {
            let x1;
            let x2;
            x1 = ((-b + Math.sqrt(D)) / (2 * a));
            x2 = ((-b - Math.sqrt(D)) / (2 * a));
            disText = `Дискриминант больше нуля:\nx\u2081 = (-b -\u221AD) / 2a = (${b * -1} - ${D / 2}) / 2 * ${a} = ${x1}\nx\u2082 = (-b -\u221AD) / 2a = (${b * -1} + ${D / 2}) / 2 * ${a} = ${x2}\nОтвет: x\u2081 = ${x1}, x\u2082 = ${x2}`
        }
        res = `D = \u221A(b\u00B2-4ac) = \u221A(${b * -1}\u00B2 - 4 * ${a}*${c} ) = \u221A${D} = ${D / 2}\n${disText}`
        if ( a === 0 && b === 0 && c === 0){
            res = 'При любых x уравнение является верным'
        }
        return res
    }

    return (
        <SafeAreaView>
            <View style={styles.pole}>
                <Text style={styles.txt}>Решение квадратных уравнений</Text>
            </View>
            <View style={styles.vod}>
                <Text>{error}</Text>
                <Formik initialValues={{text: '', discript: ''}} onSubmit={(values) => {
                    if (values.text !== '') {
                        handlePress(values)
                    } else error = 'Заполните поля'
                }}>
                    {(props) => (
                        <View style={styles.container}>
                            <TextInput
                                placeholder="Коэффицент а"
                                placeholderTextColor="gray"
                                blurOnSubmit={true}
                                onChangeText={(text) => setA(text)}
                                keyboardAppearance='dark'
                                style={styles.input}/>
                            <TextInput
                                placeholder="Коэффицент b"
                                placeholderTextColor="gray"
                                blurOnSubmit={true}
                                onChangeText={(text) => setB(text)}
                                keyboardAppearance='dark'
                                style={styles.input}/>
                            <TextInput
                                placeholder="Коэффицент c"
                                placeholderTextColor="gray"
                                blurOnSubmit={true}
                                onChangeText={(text) => setC(text)}
                                keyboardAppearance='dark'
                                style={styles.input}/>
                            <Button title="Вычислить" onPress={handlePress}/>
                        </View>
                    )}
                </Formik>
                <AwesomeAlert
                    title='Детализация решения'
                    show={showAlert}
                    message={txt}
                    showConfirmButton={true}
                    closeOnTouchOutside={false}
                    confirmText="Ок"
                    confirmButtonColor="#20B2AA"
                    onConfirmPressed={() => hideAlert()}
                />
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    txt: {
        textAlign: 'center',
        width: '80%',
        padding: 10,
        fontSize: 25
    },
    pole: {
        marginTop: 10,
        flex: 1,
        alignItems: 'center',
    },
    vod: {
        flex: 1,
        marginTop: -25,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        marginBottom: 25,
        marginLeft: 60,
        borderBottomWidth: 1,
        borderColor: '#000',
        padding: 3,
        marginVertical: 10,
        width: '50%'
    },
    container: {
        flex: 1,
    }
});