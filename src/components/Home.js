import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { connect, Provider } from "react-redux";
import { Col, Row, Grid } from "react-native-easy-grid";
import { SwipeListView, SwipeRow } from "react-native-swipe-list-view";
import { Actions } from "react-native-router-flux";

export default function Home(){
    const [listData, setListData] = useState(
        [
            {
                key:'HNX',
                price:189.3
            },
            {
                key:'BID',
                price:247.2
            }
        ]
    );

    const renderItem = data => (
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
                        <Text style={{color:'#fff'}}>undentified</Text>
                    </Col>
                    <Col style={styles.cow}>
                        <Text style={{color:'#fff'}}>undentified</Text>
                    </Col>
                    </Row>
                </Grid>
            </View>
        </TouchableHighlight>
    );

    return (
        <View style={styles.container}>
            <SwipeListView
                data={listData}
                ListHeaderComponent={renderHeader}
                renderItem={renderItem}
                              
            />
        </View>
    );
    

    
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

// export function renderItem({key,text}){
//     return (
//         <TouchableHighlight>
//           <View>
//             <Text>I am {data.item.text} in a SwipeListView</Text>
//         </View>
//         </TouchableHighlight>
//       )
// }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43488a',
        paddingHorizontal:20,
        paddingVertical: 60
        // alignItems: 'center',
        // justifyContent: 'center',
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
    }
});
