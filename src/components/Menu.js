import React, { Component } from "react";
import Home from "./Home";
import AcountInfo from "./AccountInfo";
import { Actions } from "react-native-router-flux";

import { DrawerNavigator } from "react-navigation";
import { AppRegistry, Image, StatusBar, Dimensions, StyleSheet } from "react-native";
import { Container, Content, Text, List, ListItem, View } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";

export class Menu extends Component {
    render() {
      return (

        <View style={styles.container}>
            <Image
              source={{
                uri: "../../assets/images/drawer-cover.png"
              }}
              style={{
                height: 120,
                width: 240,
                alignSelf: "stretch",
                justifyContent: "center",
                alignItems: "center"
              }}>
            </Image>
            <TouchableOpacity
                onPress={() => Actions.home()}
            >
                <Text>Home</Text>
            </TouchableOpacity>
        </View>
        // <Container>
        //   <Content>
        //     <Image
        //       source={{
        //         uri: "../../assets/images/drawer-cover.png"
        //       }}
        //       style={{
        //         height: 120,
        //         width: 240,
        //         alignSelf: "stretch",
        //         justifyContent: "center",
        //         alignItems: "center"
        //       }}>
        //     </Image>
        //     <List
        //       dataArray={routes}
        //       renderRow={data => {
        //         return (
        //           <ListItem
        //             button
        //             onPress={() => this.props.navigation.navigate(data)}>
        //             <Text>{data}</Text>
        //           </ListItem>
        //         );
        //       }}
        //     />
        //   </Content>
        // </Container>
      );
    }
  }
export default Menu;

const styles = StyleSheet.create({
    container : {
        width: 240,
        height: Dimensions.get('window').height
    }
})