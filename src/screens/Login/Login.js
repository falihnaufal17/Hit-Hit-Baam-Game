import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Header, Left, Body, Form, Item, Label, Input, Container, Button, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Login extends Component {
    render() {
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
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{ color: 'teal' }}>Password</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                    </Form>
                    <View style={styles.viewAction}>
                        <TouchableOpacity
                            style={styles.btnSignUp}
                            onPress={() => this.props.navigation.navigate('Register')}
                        >
                            <Text style={styles.txtSignUp}>Sign Up</Text>
                        </TouchableOpacity>
                        <Button rounded primary style={styles.btnSignIn}>
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

export default Login