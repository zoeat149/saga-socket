export const CHECK_LOGIN="CHECK_LOGIN";

import { ActionConst, Actions } from 'react-native-router-flux';
import { put, takeEvery } from 'redux-saga/effects'
import io from 'socket.io-client';
import {eventChannel, delay} from 'redux-saga';
import {take, call, fork, race, cancelled} from 'redux-saga/effects';
import {createSelector} from 'reselect';
import AsyncStorage from '@react-native-community/async-storage';


import user from '../data/login.js';
import config from '../../app.config';


export function login(username, password){
    return dispatch => {
			fetch(config.hostname, {
				method:"POST",
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
          group: "L",
          user: username,
          session: "",
          data: {
            type: "string",
            cmd: "Web.sCheckLogin",
            p1: username,
            p2: password,
            p3: "",
            p4: ""
          }
        })
			})
			.then(response => response.json())
			.then(json => {
        AsyncStorage.setItem("userinfo", JSON.stringify(json.data), () =>{
          dispatch({type:"CHECK_LOGIN", result: json});
          if(json.result==1){
            fetch(config.hostname + "/getlistallstock")
            .then(response1 => response1.json())
            .then(json1 => {
              dispatch({
                type:"GET_ALL_STOCK",
                result: json1
              })
            })
            global.socket = initSocket()
          }
        })
			})
			.catch(error => {
				console.log(error)
			})
    }
}

function initSocket() {
  const connectionOptions = {
    secure: true,
    timeout: 5000,
    connect_timeout: 5000,
    jsonp: true,
    forceNew: true,
    transports: ["websocket"],
    allowUpgrades: true,
    agent: false
  };

  const socket = io(config.api.hostnamelbsocket, connectionOptions);

  //socket.connect();
  socket.on("connect", () => {
    console.log("connect", socket.id);
    
  });
  socket.on("connected", () => {
    console.log("connected", socket.connected);
  });
  socket.on("reconnect_failed", () => {
    console.log(socket.connected);
  });
  socket.on("disconnect", reason => {
    console.log("disconnect", reason);
    if (reason === "io server disconnect") {
      // the disconnection was initiated by the server, you need to reconnect manually
      socket.connect();
    }
    // else the socket will automatically try to reconnect
  });
  socket.on("disconnecting", reason => {
    console.log("disconnecting", reason);
  });
  //console.log(this.socket);
  socket.on("error", error => {
    console.log("error", error);
  });
  socket.on("connect_error", error => {
    console.log("connect_error", error);
  });
  socket.on("connect_timeout", timeout => {
    console.log("connect_timeout", timeout);
  });
  socket.on("reconnecting", attemptNumber => {
    console.log("reconnecting", attemptNumber);
  });
  socket.open();
  return socket;
}

export function realtimeQuotes(pList) {
  return dispatch => {
    console.log("Connect datafeed:", global.socket.connected);

    //socket.connect();
    if (global.socket.connected) {
      console.log("connect", socket.id);

      const msg = {
        action: "join",
        //list: pList
        data: pList
      };
      global.socket.emit("regs", JSON.stringify(msg));

      // Listens to channel2 and display the data recieved
      global.socket.on("public", vData => {
        //console.log("board from datafeed", vData);
        setTimeout(() => {
          dispatch({
            type: "UPDATE_QUOTE",
            quote: vData.data
          });
        }, 0);
      });
      global.socket.on("reconnect", attemptNumber => {
        console.log("reconnect", attemptNumber);
        fetchQuotes(pList);
      });
    }
  };
}

export function fetchQuotes(pList) {
  //console.log("load lai data", pList);
  if (pList != "") {
    return dispatch => {
      fetch(config.api.hostnamelb + "/getliststockdata/" + pList)
        .then(res => res.json())
        .then(data => dispatch({ type: "GET_ALL_QUOTE", quote: data }));
    };
  } else {
    return dispatch => {
      //dispatch(setGames([]));
      dispatch({ type: "GET_ALL_QUOTE", quote: [] });
    };
  }
}