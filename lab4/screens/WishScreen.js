import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Header from "../components/Header";
import {useState} from "react";
import AwesomeAlert from "react-native-awesome-alerts";

export default function WishScreen({route}) {
    const myObj = route.params.el
    const deleteHandler = route.params.deleteHandler
    const [showAlert, setAlert] = useState()

    const handleAlert = () => setAlert(true)

    const hideAlert = () => setAlert(false)

    return (
        <View>
            <Header el={"Подробнее"}></Header>
            <Text style={styles.text}>
               <View style={styles.label}><Text><b>Название  &#8432;</b></Text></View>{'\n'}
                <View  style={styles.back}><Text>{myObj.text}{'\n'}</Text></View>
                { myObj.discript && <View style={styles.label}><Text><b>Краткое описание</b></Text></View> }
                {'\n'}
                { myObj.discript && <View style={styles.back}><Text>{myObj.discript}</Text></View> }
            </Text>
            <TouchableOpacity onPress={handleAlert}>
            <View accessibility={true}  accessibilityRole='button' style={styles.button} accessible={true} >
                <Text style={styles.txt}>Выполнить</Text>
            </View>
            </TouchableOpacity>
            <AwesomeAlert
                show={showAlert}
                message="Поздравляем. Задача выполнена."
                showConfirmButton={true}
                showCancelButton={true}
                closeOnTouchOutside={false}
                confirmText="Отмена"
                cancelText="Ок"
                cancelButtonColor="#20B2AA"
                confirmButtonColor="#DD6B55"
                onConfirmPressed={() => hideAlert()}
                onCancelPressed={() => deleteHandler(myObj.key)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 25,
        paddingBottom: 30,
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 1,
        marginTop: 20,
        width: '80%',
        marginLeft: '10%',
    },
    button: {
        backgroundColor: '#32CD32',
        marginLeft: '10%',
        width: '80%',
        padding: 5,
        marginTop: 30,
        borderRadius: 5,
        borderWidth: 1,
        height: 45,
        marginBottom: 20
    },
    txt: {
        textAlign: "center",
        fontSize: 25,
    },
    back: {
        padding:10,
        backgroundColor: '#FF7F50',
        borderRadius: 5,
        width: '60%'
    },
    label: {
        margin: 20,
    }
});