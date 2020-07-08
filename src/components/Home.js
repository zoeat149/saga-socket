import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import {
    StyleSheet, 
    Text, 
    View, 
    TouchableHighlight, 
    Image, 
    Dimensions,
    ImageBackground,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect, Provider } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { Actions } from "react-native-router-flux";
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Card, CardItem } from "native-base";

import { ScrollView, Platform, Animated } from "react-native";

//header animated
const getRandomInt = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === "ios" ? 40 : 53;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            listData:[
                {
                    key:'HNX',
                    price:189.3
                },
                {
                    key:'BID',
                    price:247.2
                },
                {
                    key:'NVL',
                    price:38.5
                },
                {
                    key:'PNJ',
                    price:76.7
                },
                
            ]
        };
    }
    
    nativeScrollY = new Animated.Value(
        Platform.OS === "ios" ? -HEADER_MAX_HEIGHT : 0
    );
    
    
    // change(){
    //     setInterval(() => {
    //         listData.forEach(element => {
    //             this.setState(
    //                 element.price = element.price + Math.round(Math.random()*4-2)
    //             )
    //         });
    //     }, 5000);
    // }

    render() {
        let nativeScrollY = Animated.add(
            this.nativeScrollY,
            Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0
        );

        return (
            <View style={styles.container}>
                
                    <ImageBackground style={{width:Dimensions.get("window").width, height:300}} 
                    source={require('../../assets/images/banner.jpg')}
                    >
                     
                        {/* <TouchableOpacity
                            onPress={() => Actions.menu()}
                        >
                            <Image 
                                source={require('../../assets/images/menu.png')}
                                style={{width:40, height:40, marginLeft:5, tintColor:"#ffffff"}}
                            />
                        </TouchableOpacity> */}
                        <Row style={{flexDirection:'row-reverse'}}>
                            <TouchableOpacity
                                onPress={() => Actions.setting()}
                                style={{marginTop:50, width:40, height:40, marginRight:5}}
                            >
                                <Image 
                                    source={require('../../assets/images/setting.png')}
                                    style={{width:40, height:40, marginRight:5, tintColor:"#828395"}}
                                />

                            </TouchableOpacity>
                        </Row>
                    </ImageBackground>
                    <Text style={{color:'#fff', fontSize:24, marginLeft:10, paddingTop: 20}}>Danh Mục</Text>
                    <SwipeListView
                        
                        style={styles.listview}
                        data={this.state.listData}
                        ListHeaderComponent={renderHeader}
                        renderItem={renderItem}
                                    
                    />
                
            </View>
        )
    }
    

    
}
export function renderHeader(){
    return(
        <Grid>
            <Row style={styles.row}>
                <Col style={styles.col}>
                    <Text style={{color:'#828395'}}>Sym</Text>
                </Col>
                <Col style={styles.col}>
                    <Text style={{color:'#828395'}}>Price</Text>
                </Col>
                <Col style={styles.col}>
                    <Text style={{color:'#828395'}}>Low</Text>
                </Col>
                <Col style={styles.col}>
                    <Text style={{color:'#828395'}}>High</Text>
                </Col>
            </Row>
            <Row style={{height:5}}></Row>
        </Grid>
    )
}

export function renderItem(data){
    return(
        <TouchableHighlight
            onPress={() => {
                console.log('You touched me');

                Actions.quote_detail();
            }}
            style={{borderRadius:5,marginBottom:3}}
            underlayColor={'#fff'}
        >
            <View>
                <Grid>
                    <Row style={styles.row}>
                    <Col style={styles.col}>
                        <Text style={{color:'#fff'}}>{data.item.key}</Text>
                    </Col>
                    <Col style={styles.cow}>
                        <Text style={{color:'#fff'}}>{data.item.price}</Text>
                    </Col>
                    <Col style={styles.cow}>
                        <Text style={{color:'#fff'}}>{data.item.low}</Text>
                    </Col>
                    <Col style={styles.cow}>
                        <Text style={{color:'#fff'}}>undentified</Text>
                    </Col>
                    </Row>
                </Grid>
            </View>
        </TouchableHighlight>
    )
}



// export function renderItem({key,text}){
//     return (
//         <TouchableHighlight>
//           <View>
//             <Text>I am {data.item.text} in a SwipeListView</Text>
//         </View>
//         </TouchableHighlight>
//       )
// }

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43488a',
        
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    listview:{
        paddingHorizontal:10,
        paddingVertical: 10
    },
    row: {
        borderRadius:4,
        borderWidth:1,
        borderColor:'#828395',
        height:40,
        justifyContent:'space-around',
        alignItems:'center',
        //backgroundColor: '#828395'
    },
    col:{
        //width:50,
        paddingLeft:10,
        alignItems:'stretch',
        justifyContent:'space-around'
    },
    rowcell: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    menubutton: {
    width: 30,
    height: 30
    },
});
