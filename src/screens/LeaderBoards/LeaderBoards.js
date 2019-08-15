import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList, AsyncStorage as storage } from 'react-native'
import { Thumbnail, List, ListItem, Right, Left, Body, Icon } from 'native-base'

import { connect } from 'react-redux'
import { getLeaderBoard } from '../../publics/redux/actions/leaderboard'

class LeaderBoards extends Component {
    constructor(props) {
        super(props)

        this.state = {
            leaderboards: [],
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

    componentDidMount = async () => {
        await this.props.dispatch(getLeaderBoard())
            .then(() => {
                this.setState({
                    leaderboards: this.props.leaderboard
                })
            })

    }

    _renderItem = ({ item, index }) => {
        return (
            <List>
                <ListItem>
                    <Left>
                        {
                            index + 1 === 1
                                ?
                                <Icon name="trophy" type="FontAwesome" style={{ color: '#FFD700', width: 20, fontSize: 20 }} />
                                :
                                <Text style={{ fontSize: 18, width: 20 }}>{index + 1}</Text>
                        }
                        <Thumbnail source={{ uri: item.image }} small rounded style={{ marginHorizontal: 20 }} /><Text style={{ textTransform: 'capitalize', fontSize: 14 }}>  {item.fullname}</Text>
                    </Left>
                    <Right>
                        <Text>{item.skor}</Text>
                    </Right>
                </ListItem>
            </List>
        )
    }

    render() {
        console.warn("data ", this.state.leaderboards)
        return (
            <>
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
                </View>
                <View>
                    <FlatList
                        data={this.state.leaderboards}
                        renderItem={this._renderItem}
                        keyExtractor={item => item.idskor}
                    />
                </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
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
        width: 300,
        height: 180,
        borderRadius: 10,
        backgroundColor: '#FBCC38',
        marginVertical: 30,
        elevation: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
    }
})

const mapStateToProps = state => {
    return {
        leaderboard: state.leaderboard.leaderboardList
    }
}

export default connect(mapStateToProps)(LeaderBoards)