import { Styles } from "@expo/config-plugins/build/android";
import React from "react";
import { FlatList,Text, ImageBackground, StyleSheet, View, TouchableHighlight, Image } from "react-native";
import { useNavigation } from "@react-navigation/core";

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]
   

const ZipItem = ({place, code, navigation}) =>(
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather',{zipCode: code})
    }>
        <View style ={styles.card}>
            <View style ={styles.zipItem}>
                <Text style ={styles.text}>{place}</Text>
                <Text Text style ={styles.text}>{code}</Text>
            </View>
        </View>
        
    </TouchableHighlight>
)

export default function zipCodeScreen(){
    const navigation = useNavigation()
    return(
        <ImageBackground source={require('../02.gif')} style={styles.bg}> 
            <View> 
                <View style={styles.view} >
                        <Image source={require('../01.webp')} style={styles.image} />
                </View>
                <View style={styles.columnEvenly}>
                    <FlatList
                        data = {availableZipItems}
                        keyExtractor ={item => item.code}
                        renderItem = {({item}) => <ZipItem {...item} navigation={navigation}/>}
                    />
                </View>
                
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create ({
    zipItem:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace:{
        flex: 1,
        color: 'white',
        fontSize: 20,
    },
    zipCode:{
        flex: 1,
        color: 'white',
        fontSize: 30,
    },
    image: {
        width: '50%',
        height: '90%',
    },
    view: {
        height: '200%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnEvenly: {
        height: '100%',
        width: '100%',
    },
    bg: {
        width: '100%',
        height: '100%'
    },
    card: {
        backgroundColor: 'rgba(0, 52, 52, 0.7)',
        shadowColor: "#ffffff",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    text:{
        fontStyle: 'italic',
        fontSize: 30,
    }

})