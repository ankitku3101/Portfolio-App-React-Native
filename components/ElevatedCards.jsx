import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View >
        <ScrollView horizontal={true} style={styles.container}>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>ExpressJS</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>ReactJS</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>React Native</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>MongoDB</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>JavaScript</Text>
            </View>
            <View style={[styles.card, styles.cardElevated]}>
                <Text>C/C++</Text>
            </View>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        padding: 8,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 87,
        height: 87,
        borderRadius: 100,
        margin: 8
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 1,
            height: 1
        },
        shadowColor: '#333333',
        shadowOpacity: 0.4,
        shadowRadius: 2
    }
})