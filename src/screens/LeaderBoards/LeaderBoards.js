import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, AsyncStorage as storage } from 'react-native'
import { Thumbnail } from 'native-base'

class LeaderBoards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fullname: '',
            image: '',
            token: ''
        }

        storage.getItem('image', (err, result) => {
            if (result) {
                this.setState({
                    image: result
                })
            }
        })

        storage.getItem('fullname', (err, result) => {
            if (result) {
                this.setState({
                    fullname: result
                })
            }
        })

        storage.getItem('token', (err, result) => {
            if (result) {
                this.setState({
                    token: result
                })
            }
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rectProfile}>
                    <View style={styles.leftText}>
                        <Text style={styles.txtStyle}>Rank</Text>
                        <Text style={styles.txtStyle}>100</Text>
                    </View>
                    <View style={styles.avatarCenter}>
                        {this.state.token
                            ?
                            <Thumbnail large rounded source={{ uri: this.state.image }} />
                            :
                            <Thumbnail large rounded source={require('../../assets/Apps-Google-Play-Games-icon.png')} />
                        }
                    </View>
                    <View style={styles.rightText}>
                        <Text style={styles.txtStyle}>Score</Text>
                        <Text style={styles.txtStyle}>10000</Text>
                    </View>
                    <View style={styles.footerName}>
                        {
                            this.state.token
                                ?
                                <Text style={styles.txtfooterName}>{this.state.fullname}</Text>
                                :
                                <Text style={styles.txtfooterName}>You not logged in!</Text>
                        }
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
        color: 'white',
        textTransform: 'capitalize'
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