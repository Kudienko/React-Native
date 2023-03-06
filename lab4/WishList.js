import {StatusBar} from 'expo-status-bar';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Header from "./components/Header";
import {useState} from "react";
import ListItem from "./components/ListItem";
import {useNavigation} from "@react-navigation/native";


export default function WishList({navigation: {goBack}}) {
    const navigation = useNavigation()

    const [listOfItems, setListOfItems] = useState([])

    const addHandler = (task) => {
        setListOfItems((list) => {
            task.key = Math.random().toString(36).substring(7)
            return [
                task,
                ...list
            ]
        })

        goBack()
    }

    const deleteHandler = (key) => {
        setListOfItems((list) => {
            return list.filter(listOfItems => listOfItems.key !== key)
        })
        navigation.navigate('WishList')
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header addHandler={addHandler} el={"Список дел"}/>
            {(listOfItems.length === 0) ? <View style={styles.warning}><Text style={styles.warningTxt}>Нет запланированного дела</Text></View> :
                <View>
                    <FlatList data={listOfItems} renderItem={({item}) => (
                        <ListItem deleteHandler={deleteHandler} el={item}/>
                    )}/>
                </View>
            }
            <StatusBar style="auto"/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    warning: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    warningTxt: {
        fontSize: 25
    }
});

