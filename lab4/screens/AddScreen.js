import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { TextInput } from "react-native";
import {Formik} from "formik"
import AwesomeAlert from "react-native-awesome-alerts";
import {useState} from "react";
import Header from "../components/Header";

export default function AddScreen({route}) {
    const addHandler = route.params.addHandler

    const [showAlert, setAlert] = useState()

    const handleAlert = () => setAlert(true)

    const hideAlert = () => setAlert(false)


    return (
        <View>
            <Header el={"Добавление задачи"}></Header>
            <Formik initialValues={{text: '', discript: ''}} onSubmit={(values) =>{
                if (values.text === ''){
                    handleAlert()
                } else addHandler(values)
            }}>
                {(props) => (
                    <View>
                        <label style={styles.label}>Введите задачу...  &#8432;</label>
                        <TextInput value={props.values.text}
                                   variant="outlined"
                                   style={styles.input}
                                   onChangeText={props.handleChange('text')}/>
                        <label style={styles.label}>Введите крaткое описание...</label>
                        <TextInput value={props.values.discript}
                                   style={styles.input}
                                   multiline
                                   onChangeText={props.handleChange('discript')}/>
                        <TouchableOpacity onPress={props.handleSubmit}>
                            <View accessibility={true}  accessibilityRole='button' style={styles.button} accessible={true} >
                                <Text style={styles.txt}>Добавить</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
            <AwesomeAlert
                show={showAlert}
                message="Введите обязательные поля"
                showConfirmButton={true}
                closeOnTouchOutside={false}
                confirmText="Ок"
                confirmButtonColor="#20B2AA"
                onConfirmPressed={() => hideAlert()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    label: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 35,
        marginBottom: 0,
        fontSize: 25,
    },
    input: {
        margin: 16,
        padding: 15,
        marginTop: 15,
        marginBottom: 15,
        width: '80%',
        marginLeft: '10%',
        fontSize: 25,
        borderWidth:1,
        borderRadius:5,
        borderBottomColor:'black'
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
    }
});