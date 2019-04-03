import React from 'react'
import { Button, View, StyleSheet, Text } from 'react-native'
import t from 'tcomb-form-native'

export default class SensorsScreen extends React.Component {
    static navigationOptions = {
        title: 'New Device',
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
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center'
    }
})