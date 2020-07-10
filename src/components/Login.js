import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Actions } from "react-native-router-flux";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import * as ReduxActions from "../actions"; //Import your actions

import LoginForm from "./LoginForm";


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <LoginForm/>
      </View>
    );
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
  //console.log("state",state);
  return {
    logindata: state.dataReducer.logindata
  };
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
function mapDispatchToProps(dispatch) {
  return bindActionCreators(ReduxActions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
