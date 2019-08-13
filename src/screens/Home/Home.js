import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Home extends Component {
    render() {
        return (
            <>
                <Image source={require('../../assets/undraw_walk_in_the_city_1ma6.png')} style={styles.backgroundTopRight} />
                <View style={styles.container}>
                    <Text style={styles.txtScore}>
                        Score
                </Text>
                    <Text style={styles.txtNumber}>0</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Main')}
                    >
                        <Image source={require('../../assets/button-play.png')} style={styles.btnPlay} />
                    </TouchableOpacity>
                </View>
                <Image source={require('../../assets/undraw_compose_music_ovo2.png')} style={styles.backgroundBottomLeft} />
            </>
        )
    }
}

const styles = StyleSheet.create({
    backgroundTopRight: {
        opacity: 0.5,
        position: 'absolute',
        width: 200,
        height: 150,
        top: 10,
        alignSelf: 'flex-end'
    },
    backgroundBottomLeft: {
        opacity: 0.5,
        width: 200,
        height: 180,
        marginRight: 'auto'
    },
    txtScore: {
        fontFamily: 'Comic Sans MS',
        fontSize: 50,
        color: '#3F51B5',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 150
    },
    txtNumber: {
        fontFamily: 'Comic Sans MS',
        fontSize: 40,
        color: '#3F51B5',
        fontWeight: 'bold',
        marginBottom: 20
    },
    btnPlay: {
        width: 200,
        height: 80
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Home