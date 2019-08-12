import React, { Component } from 'react'
import { AsyncStorage as storage } from 'react-native'

import Splash from './src/screens/splash/Splash'
import MainNavigation from './src/publics/navigations/MainNavigation'

import { Provider } from 'react-redux'
import store from './src/publics/redux/store'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      iduser: '',
      token: '',
      view: <Splash />
    }

    storage.getItem('token', (error, result) => {
      if (result) {
        this.setState({
          token: result
        })
      }
    })

    storage.getItem('iduser', (error, result) => {
      if (result) {
        this.setState({
          iduser: result
        })
      }
    })

  }

  componentWillMount() {
    setTimeout(() => {
      this.setState({
        view: <MainNavigation />
      })
    }, 2000)
  }

  render() {

    axios.defaults.headers.common['authorization'] = 'application-game'
    axios.defaults.headers.common['x-access-token'] = 'bearer ' + this.state.token
    axios.defaults.headers.common['x-control-user'] = this.state.iduser

    return (
      <Provider store={store}>
        {this.state.view}
      </Provider>
    )
  }
}

export default App