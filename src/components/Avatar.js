import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { View, Thumbnail } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { withNavigation } from 'react-navigation'

class Avatar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.openDrawer()
                }}>
                    <Thumbnail small rounded source={require('../assets/image_20170412_112801_50-264x300.jpg')} style={styles.avatar} />
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