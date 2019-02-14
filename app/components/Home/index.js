import React, { Component } from 'react'
import {
    View,
    Text,
    TextInput,
    Button, 
    Alert
} from 'react-native'
import styles from './styles'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = { username: '', password: '' }
    }

    static navigationOptions = {
        header: null
    }

    checkLogin() {
        const { username, password } = this.state
        if ( username == 'a' && password == username ) {
            this.props.navigation.navigate('dashboard')
        } else {
            Alert.alert('Error', 'Username or Password is wrong', [{
                text: 'Okay'
            }])
        }
    }

    render() {
        const { heading, input, parent } = styles
        return (
            <View style={parent}>
                <Text style={heading}>Login into the application</Text>
                <TextInput style={input} placeholder='Username' onChangeText={text => this.setState({ username: text })} />
                <TextInput style={input} placeholder='Password' onChangeText={text => this.setState({ password: text })} secureTextEntry={true} />

                <Button
                    onPress={_ => this.checkLogin()} 
                    title={'Login'} />
            </View>
        );
    }
}

export default Home;