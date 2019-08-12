import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, AsyncStorage as storage } from 'react-native'
import { Header, Left, Body, Form, Item, Label, Input, Container, Button, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { login } from '../../publics/redux/actions/user'

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            users: [],
            username: '',
            password: ''
        }
    }

    _signInAsync = async (data) => {
        await this.props.dispatch(login(data))
            .then(() => {
                alert('Login successfully!')
                this.setState({
                    users: this.props.users,
                    username: '',
                    password: ''
                })
                storage.setItem('token')
                this.props.navigation.navigate('App')
            })
            .catch(() => {
                alert('username atau password salah!')
            })
    }

    render() {
        const { username, password } = this.state
        const data = {
            username: username,
            password: password
        }
        return (
            <Container>
                <Header>
                    <Left style={styles.leftSide}>
                        <Text style={styles.txtLogin}>Login</Text>
                    </Left>
                    <Body>
                        <Text></Text>
                    </Body>
                </Header>
                <Image source={require('../../assets/output-onlinepngtools-(3).png')} style={styles.img} />
                <View style={{ marginTop: 100 }}>
                    <Form style={styles.container}>
                        <Item floatingLabel>
                            <Label style={{ color: 'teal' }}>Username</Label>
                            <Input onChangeText={username => this.setState({ username })} />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{ color: 'teal' }}>Password</Label>
                            <Input secureTextEntry={true} onChangeText={password => this.setState({ password })} />
                        </Item>
                    </Form>
                    <View style={styles.viewAction}>
                        <TouchableOpacity
                            style={styles.btnSignUp}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text style={styles.txtSignUp}>Sign Up</Text>
                        </TouchableOpacity>
                        <Button
                            rounded
                            primary
                            style={styles.btnSignIn}
                            onPress={() => this._signInAsync(data)}
                        >
                            <Icon name="arrow-right" type="FontAwesome" />
                        </Button>
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.btnSkip}
                    onPress={() => {
                        this.props.navigation.navigate('Home')
                    }}
                >
                    <Text style={styles.txtBtnSkip}>SKIP >></Text>
                </TouchableOpacity>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    txtBtnSkip: {
        color: 'blue',
        textDecorationLine: 'underline'
    },
    btnSkip: {
        alignSelf: 'center',
        margin: 0,
        bottom: 0
    },
    img: {
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    viewAction: {
        marginVertical: 60,
        marginHorizontal: 40
    },
    btnSignIn: {
        width: 50,
        height: 50,
        marginLeft: 'auto'
    },
    btnSignUp: {
        marginRight: 'auto',
    },
    txtSignUp: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    leftSide: {
        marginHorizontal: 20
    },
    txtLogin: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 25
    },
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginHorizontal: 30
    }
})

const mapStateToProps = state => {
    return {
        users: state.user.userList
    }
}

export default connect(mapStateToProps)(Login)