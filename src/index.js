import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect, Provider } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { Router, Scene } from "react-native-router-flux";

import Home from './components/Home';
import QuoteDetail from "./components/QuoteDetail";

export default function Main(){
    return(
        <Router>
            <Scene key='root'>
                <Scene key='home'
                    component={Home}
                    hideNavBar
                    initial={true}
                />
                <Scene
                    key='quote_detail'
                    component={QuoteDetail}
                    hideNavBar
                />
            </Scene>
        </Router>
    )
}
