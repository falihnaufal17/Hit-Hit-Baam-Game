import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../assets/logo-hithitbaam/logo.png')} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Splash