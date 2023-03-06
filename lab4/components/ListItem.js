import {StyleSheet, Text} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {TouchableOpacity} from "react-native-web";

export default function ListItem({el, deleteHandler}) {
    const navigation = useNavigation()
    const str1 = el.text
    const str2 = el.discript
    let strName
    let discriptName
    if (str1.length > 15)  {strName = str1.substring(0,15) + '...'} else strName = str1
    if (str2.length > 70)  {discriptName = str2.substring(0,71) + '...'} else discriptName = str2
    return (
        <TouchableOpacity onPress={() => navigation.navigate('WishScreen', { el:el, deleteHandler:deleteHandler})}>
            <Text style={styles.text}><b>{strName}</b>{"\n"}{discriptName}</Text>
        </TouchableOpacity>
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
        marginLeft: '20%',
        marginBottom: 15,
    }
});