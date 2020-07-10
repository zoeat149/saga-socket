import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {connect, Provider} from "react-redux";
import {SearchBar} from 'react-native-elements';

class Market extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        };
    }

    updateSearch = (input) => {
        this.setState({input});
    };

    render() {
        const {input} = this.state
        return (
            <View style={styles.container}>
                <SearchBar
                    placeholder="Tim kiem"
                    onChangeText={this.updateSearch}
                    value={input}
                    showCancel={true}
                    cancelButtonTitle={'Cancel'}/>
                <Text
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: 30
                    }}>Market Screen</Text>
            </View>
        );
    };
}

export default Market;

const styles = StyleSheet.create({
    container: {
        flex: 6,
        backgroundColor: '#43488a'
    },
    SearchBar: {
        paddingTop: 60,
        height: 50,
        width: Dimensions
            .get('window')
            .width
    }
});
