import React, { useState } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
import Forecast from "./Forecast";


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    }) 

    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
               <View style={styles.backcover}>
                    <Text style={styles.text}>Zip Code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo} />
               </View>
                
            
            </ImageBackground>      
    );
}
const styles = StyleSheet.create({
    text:{
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    backdrop: {
        alignItems: "center",
        width: '100%',
        height: '200%',
    },
    backcover:{
        width: '100%',
        height: '50%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)' 
    }
});
