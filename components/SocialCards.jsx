import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
        <ScrollView horizontal={true} style={styles.container}>
            <TouchableOpacity
             onPress={() => openWebsite('https://www.linkedin.com/in')}
             style={[styles.card, styles.cardElevated]}>
                <Text>LinkedInd</Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={() => openWebsite('https://www.instagram.com/')} 
             style={[styles.card, styles.cardElevated]}>
                <Text>Instagram</Text>
            </TouchableOpacity>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({

    container:{
        flex: 1,
        marginTop: 220,
        padding: 8,
    },
    card:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 87,
        height: 87,
        borderRadius: 100,
        margin: 8,
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