import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import t from 'tcomb-form-native'

export default class NewSensorScreen extends React.Component {
    static navigationOptions = {
        title: 'Add Sensor',
    };

    render(){
        return (
            <View style={styles.container}>
                <Text>Nothing to be seen</Text>
            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    }
})