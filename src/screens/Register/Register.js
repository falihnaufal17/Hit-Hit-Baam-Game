import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Header, Left, Body, Form, Item, Label, Input, Container, Button, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux'
import { register } from '../../publics/redux/actions/user'

class Register extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userList: [],
            fullname: '',
            image: '',
            username: '',
            password: '',
            idrole: 2
        }
    }

    _signUp = async () => {
        if (this.state.fullname === '' || this.state.username === '' || this.state.password === '') {
            alert('oops form empty!')
        } else {
            let formdata = new FormData()
            formdata.append('fullname', this.state.fullname)
            formdata.append('image', {
                name: 'Apps-Google-Play-Games-icon_qpkzwz.png',
                type: 'image/jpeg',
                uri: 'https://res.cloudinary.com/dnqtceffv/image/upload/v1565657919/Apps-Google-Play-Games-icon_qpkzwz.png'
            })
            formdata.append('username', this.state.username)
            formdata.append('password', this.state.password)
            formdata.append('idrole', this.state.idrole)
            await this.props.dispatch(register(formdata))
                .then(() => {
                    alert('Sign Up Successfully! :)')
                    this.setState({
                        users: this.props.users
                    })
                    this.props.navigation.navigate('Auth')
                })
                .catch(() => {
                    alert('username already used! :(')
                })

            console.warn("data: ", formdata)
        }
    }

    render() {
        return (
            <Container>
                <Header>
                    <Left style={styles.leftSide}>
                        <Text style={styles.txtRegister}>Register</Text>
                    </Left>
                    <Body>
                        <Text></Text>
                    </Body>
                </Header>
                <Image source={require('../../assets/output-onlinepngtools-(3).png')} style={styles.img} />
                <View style={{ marginTop: 100 }}>
                    <Form style={styles.container}>
                        <Item floatingLabel>
                            <Label style={{ color: 'teal' }}>Fullname</Label>
                            <Input onChangeText={fullname => this.setState({ fullname })} />
                        </Item>
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
                            style={styles.btnSignIn}
                            onPress={() => this.props.navigation.navigate('Auth')}
                        >
                            <Text style={styles.txtSignIn}>Sign In</Text>
                        </TouchableOpacity>
                        <Button rounded primary style={styles.btnSignUp} onPress={() => this._signUp()}>
                            <Icon name="arrow-right" type="FontAwesome" />
                        </Button>
                    </View>
                </View>
            </Container >
        )
    }
}

const styles = StyleSheet.create({
    img: {
        position: 'absolute',
        alignSelf: 'flex-end'
    },
    viewAction: {
        marginVertical: 60,
        marginHorizontal: 40
    },
    btnSignUp: {
        width: 50,
        height: 50,
        marginLeft: 'auto'
    },
    btnSignIn: {
        marginRight: 'auto',
    },
    txtSignIn: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 20
    },
    leftSide: {
        marginHorizontal: 20
    },
    txtRegister: {
        fontFamily: 'Open Sans',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
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

export default connect(mapStateToProps)(Register)
