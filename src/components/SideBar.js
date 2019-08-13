import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, AsyncStorage as storage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon, Thumbnail } from 'native-base';

import { connect } from 'react-redux'
import { logout } from '../publics/redux/actions/user'

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            iduser: '',
            fullname: '',
            username: '',
            image: '',
            token: '',
        }

        storage.getItem('iduser', (err, result) => {
            if (result) {
                this.setState({
                    iduser: result
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

        storage.getItem('username', (err, result) => {
            if (result) {
                this.setState({
                    username: result
                })
            }
        })

        storage.getItem('image', (err, result) => {
            if (result) {
                this.setState({
                    image: result
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

        this._signOutAsync = this._signOutAsync.bind(this)

    }

    _signOutAsync = async () => {
        await this.props.dispatch(logout(this.state.iduser))
            .then(() => {
                alert('Logout successfully!')
                this.setState({
                    iduser: ''
                })
                storage.clear()
                this.props.navigation.navigate('Auth')
            })
            .catch(() => {
                storage.clear()
                alert('Logout failed!')
            })
    }

    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.imageBackground} />

                {
                    this.state.token
                        ?
                        <Thumbnail small rounded source={{ uri: this.state.image }} style={styles.profileImage} />
                        :
                        <Thumbnail small rounded source={require('../assets/Apps-Google-Play-Games-icon.png')} style={styles.profileImage} />
                }

                <View style={styles.viewProfileData}>
                    <Text style={[styles.profileData, styles.capitalize]}>{this.state.fullname}</Text>
                    <Text style={styles.profileData}>{this.state.username}</Text>
                    <Text style={styles.profileData}>Score: 521</Text>
                </View>

                <View style={styles.flhome}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('LeaderBoards')}>
                        <Text style={styles.drawer}>
                            <Icon name="trophy" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Leaderboards
                            </Text>
                    </TouchableOpacity>
                    {
                        this.state.token ?
                            <TouchableOpacity
                                onPress={() => this._signOutAsync()}>
                                <Text style={styles.drawer}>
                                    <Icon name="sign-out" type="FontAwesome" style={[styles.signOutColor, styles.icon]} /> Sign Out
                        </Text>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Auth')}>
                                <Text style={styles.drawer}>
                                    <Icon name="sign-in" type="FontAwesome" style={[styles.signInColor, styles.icon]} /> Sign In
                        </Text>
                            </TouchableOpacity>
                    }

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    signInColor: {
        color: 'blue'
    },
    signOutColor: {
        color: 'red'
    },
    capitalize: {
        textTransform: 'capitalize'
    },
    imageBackground: {
        backgroundColor: '#3F51B5',
        width: 'auto',
        height: 180
    },
    profileImage: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'blue',
        alignSelf: 'flex-start',
        left: 20,
        top: 10,
        width: 80,
        height: 80,
        borderRadius: 150
    },
    viewProfileData: {
        position: 'absolute',
        top: 100,
        marginHorizontal: 20
    },
    profileData: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 1
    },
    flhome: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    drawer: {
        margin: 15,
        fontWeight: "600",
        color: "#000",
        fontSize: 15,
    },
    icon: {
        fontSize: 18
    },
    leaderBoardColor: {
        color: '#FFD700'
    }
})

const mapStateToProps = state => {
    return {
        users: state.user.userList
    }
}

export default connect(mapStateToProps)(SideBar)