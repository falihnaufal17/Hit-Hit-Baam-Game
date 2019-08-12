import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Header, Left, Body, Form, Item, Label, Input, Container, Button, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

class Register extends Component {
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
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label style={{ color: 'teal' }}>Email</Label>
                            <Input />
                        </Item>
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
                            style={styles.btnSignIn}
                            onPress={() => this.props.navigation.navigate('Login')}
                        >
                            <Text style={styles.txtSignIn}>Sign In</Text>
                        </TouchableOpacity>
                        <Button rounded primary style={styles.btnSignUp}>
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

export default Register
