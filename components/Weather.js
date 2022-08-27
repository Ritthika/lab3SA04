import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, View, Image } from "react-native";
import Forecast from "./Forecast";


export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
    }) 
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=6b525acb3d54e6c90fcc3fe300febe0b`)
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.weather[0].main,
                    description: json.weather[0].description,
                    temp: json.main.temp
                });
            })
        .catch((error) => {
            console.warn(error);
        });
        }
    }, [props.zipCode])
    

    return (
            <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>

               <View style={styles.backcover}>
                    <Text style={styles.text}>Zip Code is {props.zipCode}.</Text>
                    <Forecast {...forecastInfo} />
               </View>
               <Image source={require('../03.png')} style={styles.image} />
                
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
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '50%',
        backgroundColor: 'rgba(52, 52, 52, 0.5)' 
    },
    image: {
        width: '80%',
        height: '100%',
    },
});
