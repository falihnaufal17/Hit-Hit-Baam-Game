import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/assets/logo-hithitbaam/logo.png')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default App