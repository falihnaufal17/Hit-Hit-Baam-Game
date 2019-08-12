import React, { Component } from 'react'
import { StyleSheet, AsyncStorage as storage } from 'react-native'
import { View, Thumbnail } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

class Avatar extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
            <View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.openDrawer()
                }}>
                    {
                        this.state.token
                            ?
                            <Thumbnail small rounded source={{ uri: this.state.image }} style={styles.avatar} />
                            :
                            <Thumbnail small rounded source={require('../assets/Apps-Google-Play-Games-icon.png')} style={styles.avatar} />
                    }
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    avatar: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    }
})

export default withNavigation(Avatar)