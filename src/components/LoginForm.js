import React, {Component} from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Alert,
    TouchableOpacity,
    AsyncStorage
} from "react-native";
import {Actions} from "react-native-router-flux";

import {bindActionCreators} from "redux";
import {connect} from "react-redux";
// import gstyles from "../styles/gstyles";
import * as ReduxActions from "../actions"; //Import your actions
// import { KeyboardAwareScrollView } from
// "react-native-keyboard-aware-scroll-view"; import Toast, { DURATION } from
// "react-native-easy-toast"; import Icon from
// "react-native-vector-icons/FontAwesome"; import { Input } from
// "react-native-elements";

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            ok: false
        };

        this.signin = this
            .signin
            .bind(this);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.type === "CHECK_LOGIN") {
            if (nextProps.logindata.result == 1) {
                Actions.tabbar();
            } else {
                Alert.alert("Thông báo", "Sai thông tin đăng nhập");
            }
        }
    }

    signin() {
        if (this.state.username == "") {
            Alert.alert("Thông báo", "Tên đăng nhập không được để trống");
            return;
        }
        if (this.state.password == "") {
            Alert.alert("Thông báo", "Mật khẩu không được để trống");
            return;
        }
        AsyncStorage.setItem("username", this.state.username);
        AsyncStorage.setItem("password", this.state.password);
        this.props.login(this.state.username, this.state.password);
    }

    // componentWillReceiveProps(nextProps){   if(nextProps.type == "CHECK_LOGIN"){
    // Actions.home();   } }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder={"Username"}
                    placeholderTextColor="#ffffff"
                    selectionColor="#fff"
                    onChangeText={text => this.setState({username: text})}
                    ref={input => (this.username = input)}
                    value={this.state.username}
                    keyboardType="email-address"
                    onSubmitEditing={() => this.password.focus()}/>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid="rgba(0,0,0,0)"
                    placeholder={"Password"}
                    secureTextEntry={true}
                    onChangeText={text => this.setState({password: text})}
                    value={this.state.password}
                    placeholderTextColor="#ffffff"
                    ref={input => (this.password = input)}/>
                <TouchableOpacity style={styles.button} onPress={() => this.signin()}>
                    <Text style={styles.buttonText}>
                        {'Login'}
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

// The function takes data from the app current state, and insert/links it into
// the props of our component. This function makes Redux know that this
// component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    //console.log("state",state);
    return {logindata: state.dataReducer.logindata};
}

// Doing this merges our actions into the component’s props, while wrapping them
// in dispatch() so that they immediately dispatch an Action. Just by doing
// this, we will have access to the actions defined in out actions file
// (action/home.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputBox: {
        width: 300,
        height: 50,
        backgroundColor: "#4c4d5f",
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
        fontSize: 16,
        color: "#ffffff",
        marginVertical: 13
    },
    button: {
        height: 50,
        fontSize: 12,
        width: 300,
        backgroundColor: "#6980f4",
        borderRadius: 10,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 14,
        fontWeight: "500",
        color: "#ffffff",
        textAlign: "center"
    }
});
