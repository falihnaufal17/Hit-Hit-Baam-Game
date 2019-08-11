import React, { Component } from 'react'
import { View } from 'react-native'

import Splash from './src/screens/splash/Splash'
import MainNavigation from './src/publics/navigations/MainNavigation'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      view: <Splash />
    }
  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        view: <MainNavigation />
      })
    }, 2000)
  }

  render() {
    return (
      <>
        {this.state.view}
      </>
    )
  }
}

export default App