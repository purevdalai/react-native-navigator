import React, { Component } from 'react'
import { View, Text } from 'react-native';

class Dashboard extends Component {

    constructor(props) {
        super(props)
    }
    
    static navigationOptions = {
        header: null
    }
    
    render() {
        return (
            <View>
                <Text>Dashboard</Text>
            </View>
        );
    }
}

export default Dashboard;