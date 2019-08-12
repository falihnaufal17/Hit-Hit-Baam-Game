import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'
import { Thumbnail } from 'native-base'

class LeaderBoards extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rectProfile}>
                    <View style={styles.leftText}>
                        <Text style={styles.txtStyle}>Rank</Text>
                        <Text style={styles.txtStyle}>100</Text>
                    </View>
                    <View style={styles.avatarCenter}>
                        <Thumbnail large rounded source={require('../../assets/image_20170412_112801_50-264x300.jpg')} />
                    </View>
                    <View style={styles.rightText}>
                        <Text style={styles.txtStyle}>Score</Text>
                        <Text style={styles.txtStyle}>10000</Text>
                    </View>
                    <View style={styles.footerName}>
                        <Text style={styles.txtfooterName}>Jill Valentine</Text>
                    </View>
                </View>
                <View style={styles.leaderBoardsList}>
                    <FlatList
                        data={[{ fullname: 'Falih Naufal' }, { fullname: 'Jill Valentine' }]}
                        renderItem={({ item }) => <Text style={{ padding: 5 }}>{item.fullname}</Text>}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    leaderBoardsList: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        marginHorizontal: 20
    },
    txtfooterName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    footerName: {
        flex: 1,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // top: 0,
        bottom: 15
    },
    txtStyle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    avatarCenter: {
        top: 35,
        position: 'absolute',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    leftText: {
        position: 'absolute',
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        alignSelf: 'flex-start',
        left: 30,
        top: 40,
    },
    rightText: {
        position: 'absolute',
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        right: 30,
        top: 40,
    },
    rectProfile: {
        width: '75%',
        height: '30%',
        borderRadius: 10,
        backgroundColor: '#FBCC38',
        marginVertical: 50,
        elevation: 10
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
    }
})

export default LeaderBoards