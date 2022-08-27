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
        <View style ={styles.zipItem}>
            <Text>{place}</Text>
            <Text>{code}</Text>
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
        width: '80%',
        height: '80%',
    },
    view: {
        height: '800%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    columnEvenly: {
        height: '100%',
        width: '100%',
    },
    bg: {
        width: '100%',
        height: '115%'
    },
})