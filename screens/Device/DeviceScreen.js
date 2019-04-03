import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import t from 'tcomb-form-native'
import {AsyncStorage} from 'react-native';

const Form = t.form.Form;
const Device = t.struct({
    'Device Name': t.String,
    'Hostname': t.String,
    'Port': t.String,
    'Subscribe to':t.String,
    'Publish to':t.String,
  });

export default class DevicesScreen extends React.Component {
    static navigationOptions = {
        title: 'Manage Devices',
    };
    handleSubmit = () => {
        const formValue = this._form.getValue();
        console.log(formValue)
    }
    render(){
        return (
            <View style={styles.container}>
                <Form 
                    type={Device}
                    ref={c => this._form = c}
                    />
                <Button
                    title="Add New Device"
                    onPress={this.handleSubmit}
                    />
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