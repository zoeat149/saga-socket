import {StatusBar} from 'expo-status-bar';
import React, {useState, Component} from 'react';
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
import {connect, Provider} from "react-redux";
import {Col, Row, Grid} from "react-native-easy-grid";
import {SwipeListView, SwipeRow} from "react-native-swipe-list-view";
import {Actions} from "react-native-router-flux";
import {
    Container,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Button,
    Body,
    Content,
    Card,
    CardItem
} from "native-base";


import Cell from "./Cell";
import {ScrollView, Platform, Animated} from "react-native";
import {Extrapolate} from 'react-native-reanimated';

//header animated
const getRandomInt = (max, min) => {
    return Math.floor(Math.random() * (max - min) + min);
};
const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 100;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ok: true,
            refreshing: false,
            isVisible: false,
            sym: "",
            listStock: "VND,SSI,FLC,VIC",
            settingdata: this.props.settingdata
        };

        this.renderHeader = this.renderHeader.bind(this);
        this.renderItem = this.renderItem.bind(this);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    // showOptions(quote) {
    //     ActionSheetIOS.showActionSheetWithOptions({
    //         options: BUTTONS,
    //         cancelButtonIndex: CANCEL_INDEX,
    //         destructiveButtonIndex: 1
    //     }, buttonIndex => {
    //         switch (buttonIndex) {
    //             case 0:
    //                 {
    //                     Actions.Order({order: Order, edit: true, title: "Sửa Quote"});
    //                 }
    //                 break;
    //             case 1:
    //                 {
    //                     this.props.deleteQuote(quote.id);
    //                 }
    //                 break;
    //             case 2:
    //                 {
    //                     //Alert.alert('Thông báo','Quay lại');
    //                 }
    //                 break;
    //             default:
    //                 break;
    //         }
    //     });
    // }

    // _onRefresh() {
    //     this.setState({refreshing: true});
    //     this.props.fetchQuotes(this.state.listStock);
    //     this.props.realtimeQuotes(this.state.listStock);
    //     this.setState({refreshing: false});
    // }


    // nativeScrollY = new Animated.Value(     Platform.OS === "ios"         ?
    // -HEADER_MAX_HEIGHT         : 0 ); change(){     setInterval(() => {
    // listData.forEach(element => { this.setState(                 element.price =
    // element.price + Math.round(Math.random()*4-2)             )         });
    // }, 5000); }

    render() {
        // let nativeScrollY = Animated.add(     this.nativeScrollY,     Platform.OS ===
        // "ios"         ? HEADER_MAX_HEIGHT         : 0 ); const headerImageHeight =
        // this     .state     .scrollY     .interpolate({         inputRange: [
        // 0, HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT         ],         outputRange: [
        // HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT         ],         extrapolate: 'clamp'
        // })

        return (
            <View style={styles.container}>
                <ScrollView>
                    <Animated.View
                        style={{
                            height: headerImageHeight,
                            width: headerImageHeight,
                            //overflow: 'hidden'
                        }}>
                        <ImageBackground
                            style={{
                                width: Dimensions
                                    .get("window")
                                    .width,
                                height: 300
                            }}
                            source={require('../../assets/images/banner.jpg')}>

                            {/* <TouchableOpacity
                                onPress={() => Actions.menu()}
                            >
                                <Image
                                    source={require('../../assets/images/menu.png')}
                                    style={{width:40, height:40, marginLeft:5, tintColor:"#ffffff"}}
                                />
                            </TouchableOpacity> */
                            }
                            <Row
                                style={{
                                    flexDirection: 'row-reverse'
                                }}>
                                <TouchableOpacity
                                    onPress={() => Actions.setting()}
                                    style={{
                                        marginTop: 50,
                                        width: 40,
                                        height: 40,
                                        marginRight: 5
                                    }}>
                                    <Image
                                        source={require('../../assets/images/setting.png')}
                                        style={{
                                            width: 40,
                                            height: 40,
                                            marginRight: 5,
                                            tintColor: "#828395"
                                        }}/>

                                </TouchableOpacity>
                            </Row>
                        </ImageBackground>

                    </Animated.View>
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 24,
                            marginLeft: 10,
                            paddingTop: 20
                        }}>Danh Mục</Text>
                    <FlatList
                        style={styles.listview}
                        data={this.state.listData}
                        ListHeaderComponent={renderHeader}
                        renderItem={renderItem}/>
                </ScrollView>
            </View>
        )
    }

}
export function renderHeader() {
    return (
        <Grid>
            <Row style={styles.row}>
                <Col style={styles.col}>
                    <Text
                        style={{
                            color: '#828395'
                        }}>Sym</Text>
                </Col>
                <Col style={styles.col}>
                    <Text
                        style={{
                            color: '#828395'
                        }}>LastPrice</Text>
                </Col>
                <Col style={styles.col}>
                    <Text
                        style={{
                            color: '#828395'
                        }}>Change</Text>
                </Col>
                <Col style={styles.col}>
                    <Text
                        style={{
                            color: '#828395'
                        }}>Lot</Text>
                </Col>
            </Row>
            <Row style={{
                    height: 5
                }}></Row>
        </Grid>
    )
}

export function renderItem(data) {
    return (
        <TouchableHighlight
            onPress={() => {
                console.log('You touched me');

                Actions.quote_detail();
            }}
            style={{
                borderRadius: 5,
                marginBottom: 3
            }}
            underlayColor={'#fff'}>
            <View>
                <Grid>
                    <Row style={styles.row}>
                        <Col style={styles.col}>
                            <Text
                                style={{
                                    color: '#fff'
                                }}>{this.props.data.sym}</Text>
                        </Col>
                        <Col style={styles.cow}>
                            <Text
                                style={{
                                    color: '#fff'
                                }}>{this.props.data.lastPrice}</Text>
                        </Col>
                        <Col style={styles.cow}>
                            <Text
                                style={{
                                    color: '#fff'
                                }}>{this.props.data.change}</Text>
                        </Col>
                        <Col style={styles.cow}>
                            <Text
                                style={{
                                    color: '#fff'
                                }}>{this.props.data.lot}</Text>
                        </Col>
                    </Row>
                </Grid>
            </View>
        </TouchableHighlight>
    )
}

// export function renderItem({key,text}){     return ( <TouchableHighlight>
// <View>             <Text>I am {data.item.text} in a SwipeListView</Text>
// </View>         </TouchableHighlight> ) }

function mapStateToProps(state, props) {
    //console.log("settingdataxxxxxxxxxxxxxxxx", state.quoteReducer.settingdata);
    return {
      quotes: state.dataReducer.quotes,
    };
  }
  
  // Doing this merges our actions into the component’s props,
  // while wrapping them in dispatch() so that they immediately dispatch an Action.
  // Just by doing this, we will have access to the actions defined in out actions file (action/home.js)
  function mapDispatchToProps(dispatch) {
    return bindActionCreators(ReduxActions, dispatch);
  }
  
  //Connect everything
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#43488a',

        // alignItems: 'center', justifyContent: 'center',
    },
    listview: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    row: {
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#828395',
        height: 40,
        justifyContent: 'space-around',
        alignItems: 'center',
        //backgroundColor: '#828395'
    },
    col: {
        //width:50,
        paddingLeft: 10,
        alignItems: 'stretch',
        justifyContent: 'space-around'
    },
    rowcell: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    menubutton: {
        width: 30,
        height: 30
    }
});
