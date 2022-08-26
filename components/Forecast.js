import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function Forecast(props) {
        return (
                <View style={styles.underText}>
                        <Text style={styles.textMain}>{props.main}</Text>
                        <Text style={styles.textDescription}>{props.description}</Text>
                        <Text style={styles.textCelsius}>{props.temp}
                                <Text style={styles.textDescripCelsius}> °C</Text>
                        </Text>
                </View>
            )
 }
 const styles = StyleSheet.create({
        textMain: {
            fontSize: 40,
            color: 'white',
            textAlign: 'center'
        },
        textDescription: {
            fontSize: 20,
            color: 'white',
            textAlign: 'center'
        },
        textCelsius: {
            fontSize: 50,
            color: 'white',
            textAlign: 'center'
        },
        textDescripCelsius: {
            fontSize: 30,
            color: 'white',
            textAlign: 'center'
        },
        underText: {
           flexDirection: 'column',
           justifyContent: 'space-between'
        }
    })