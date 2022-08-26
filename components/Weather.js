import React, { useEffect, useState } from "react";
import { Text, ImageBackground, StyleSheet, View } from "react-native";
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
