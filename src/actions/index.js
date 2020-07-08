export const CHECK_LOGIN="CHECK_LOGIN";

import { ActionConst, Actions } from 'react-native-router-flux';
import { put, takeEvery } from 'redux-saga/effects'
import io from 'socket.io-client';
import {eventChannel, delay} from 'redux-saga';
import {take, call, fork, race, cancelled} from 'redux-saga/effects';
import {createSelector} from 'reselect';

import user from '../data/login.js';
import { AsyncStorage } from 'react-native';


export function login(username, password){
    return dispatch => {
        Promise(check_login(username, password)).then(res => {
            AsyncStorage.setItem("userinfo", "true", () =>{ 
                dispatch({type:"CHECK_LOGIN", result: res})
                if(res.ok==true){
                    Actions.home()
                }
            }
        )})
    }
}

export function* check_login(username, password){
    if(username===user.username && password===user.password){
        
        return {
            user:'hat212',
            ok:true
        };
    }
    else return {
        user:'',
        ok:false
    };
}

let socket;
const connect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('connect', () => {
      resolve(socket);
    });
  });
};

const disconnect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('disconnect', () => {
      resolve(socket);
    });
  });
};

const reconnect = () => {
  socket = io(socketServerURL);
  return new Promise((resolve) => {
    socket.on('reconnect', () => {
      resolve(socket);
    });
  });
};
