import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import Sound from "react-native-sound";

class Drum extends Component {
    snare1() {
        const requireAudio = require('../assets/sounds/HiHat(9).wav');
        const s = new Sound(requireAudio, (e) => {
            if (e) {
                console.log('Error in SOUND', e);
                return;
            }
            s.play(() => s.release());
        });
    }

    snare2() {
        const requireAudio = require('../assets/sounds/Snare(2).wav');
        const s = new Sound(requireAudio, (e) => {
            if (e) {
                console.log('Error in SOUND', e);
                return;
            }
            s.play(() => s.release());
        });
    }

    kick1() {
        const requireAudio = require('../assets/sounds/Kick(1).wav');
        const s = new Sound(requireAudio, (e) => {
            if (e) {
                console.log('Error in SOUND', e);
                return;
            }
            s.play(() => s.release());
        });
    }

    kick2() {
        const requireAudio = require('../assets/sounds/Kick(2).wav');
        const s = new Sound(requireAudio, (e) => {
            if (e) {
                console.log('Error in SOUND', e);
                return;
            }
            s.play(() => s.release());
        });
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={{ top: '5%' }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 50 }}>
                        <SmallDrum sound={this.snare1.bind(this)} />
                        <SmallDrum sound={this.snare2.bind(this)} />
                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '15%' }}>
                        <BigDrum sound={this.kick1.bind(this)} />
                        <BigDrum sound={this.kick2.bind(this)} />
                    </View>
                </View>
            </View>
        )
    }
}

export default Drum

class BigDrum extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                colo
                style={styles.bigDrum}
                onPress={this.props.sound}
            >
                <View style={styles.bigDrumOutter}>
                    <View style={styles.bigDrumInner} />
                </View>
            </TouchableOpacity>
        )
    }
}

class SmallDrum extends Component {
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.9}
                style={styles.smallDrum}
                onPress={this.props.sound}
            >
                <View style={styles.smallDrumOutter}>
                    <View style={styles.smallDrumInner} />
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    bigDrum: {
        width: '75%',
        height: 100,
        top: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigDrumOutter: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#EECECE',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    bigDrumInner: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#E3A6AE',
        position: 'absolute'
    },
    smallDrum: {
        width: '25%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallDrumOutter: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    smallDrumInner: {
        width: 40,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor: '#B7C8CB',
        position: 'absolute'
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})