import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

class LeaderBoards extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Leaderboards </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default LeaderBoards