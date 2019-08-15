import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, AsyncStorage as storage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { getScoreId } from '../../publics/redux/actions/leaderboard'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            token: '',
            userData: []
        }

        storage.getItem('token', (error, result) => {
            if (result) {
                this.setState({
                    token: result
                })
            }
        })
    }

    componentDidMount = async () => {
        await storage.getItem('iduser', (error, result) => {
            if (result) {
                this.setState({
                    id: result
                })
            }
        })

        console.log(this.state.id)

        await this.props.dispatch(getScoreId(this.state.id))
        this.setState({
            userData: this.props.userid
        })
    }

    render() {
        console.log('userdata: ', this.state.userData)
        return (
            <>
                <Image source={require('../../assets/undraw_walk_in_the_city_1ma6.png')} style={styles.backgroundTopRight} />
                <View style={styles.container}>
                    <Text style={styles.txtScore}>
                        Score
                </Text>
                    <Text style={styles.txtNumber}>{this.state.token ? this.state.userData.skor : 0}</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Main', {
                            data: this.state.userData
                        })}
                    >
                        <Image source={require('../../assets/button-play.png')} style={styles.btnPlay} />
                    </TouchableOpacity>
                </View>
                <Image source={require('../../assets/undraw_compose_music_ovo2.png')} style={styles.backgroundBottomLeft} />
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        userid: state.leaderboard.usersList
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

export default connect(mapStateToProps)(Home)