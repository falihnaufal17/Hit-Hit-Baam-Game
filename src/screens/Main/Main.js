import React, { Component } from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'
import Drum from '../../components/Drum';

class Main extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/undraw_walk_in_the_city_1ma6.png')} style={styles.backgroundTopRight} />
                <Text style={styles.txtScore}>
                    Score
                </Text>
                <Text style={styles.txtNumber}>0</Text>
                <Drum />

                <Image source={require('../../assets/undraw_compose_music_ovo2.png')} style={styles.backgroundBottomLeft} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundTopRight: {
        position: 'absolute',
        width: 200,
        height: 150,
        alignSelf: 'flex-end'
    },
    backgroundBottomLeft: {
        width: 200,
        height: 150,
        marginRight: 'auto'
    },
    txtScore: {
        fontFamily: 'Comic Sans MS',
        fontSize: 50,
        color: '#3F51B5',
        fontWeight: 'bold',
    },
    txtNumber: {
        fontFamily: 'Comic Sans MS',
        fontSize: 40,
        color: '#3F51B5',
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Main
