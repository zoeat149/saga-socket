import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect, Provider } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { Router, Scene } from "react-native-router-flux";

import Home from './components/Home';
import QuoteDetail from './components/QuoteDetail';
import Login from './components/Login';
import AccountInfo from './components/AccountInfo';
import Menu from './components/Menu';
import Setting from './components/Setting';
import Market from "./components/Market";
export default function Main(){
    return(
        <Router>
            <Scene key='root'>
                <Scene key='login'
                    component={Login}
                    hideNavBar
                    gesturesEnabled={false}
                />
                <Scene
                    key='menu'
                    component={Menu}
                    hideNavBar
                />
                <Scene
                    key='setting'
                    component={Setting}
                    hideNavBar
                />
                <Scene
                    key='tabbar'
                    tabs
                    hideNavBar
                    tabBarStyle={{
                        backgroundColor: "#424451",
                        color: "#7691f8",
                        height: 50,
                        paddingBottom:60
                      }}
                      initial={true}

                >
                    <Scene 
                        key='home'
                        component={Home}
                        hideNavBar
                    />

                    <Scene
                        key='market'
                        component={Market}
                        hideNavBar
                    />

                    <Scene 
                        key='accountdetail'
                        component={AccountInfo}
                        hideNavBar
                    />
                </Scene>
                <Scene
                    key='quote_detail'
                    component={QuoteDetail}
                    hideNavBar
                />

            </Scene>
        </Router>
    )
}
