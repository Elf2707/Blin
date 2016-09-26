/**
 * Created by Elf on 26.09.2016.
 */
import React, { Component } from 'react';
import { View, Text, DrawerLayoutAndroid } from 'react-native';

export default class DrawerMenu extends Component {
    render() {
        return (
            <DrawerLayoutAndroid
                drawerWidth={300}
                drawerPosition={DrawerLayoutAndroid.positions.Left}
                renderNavigationView={this.renderContent.bind(this)}
                ref={(drawer) => {
                    this.drawer = drawer;
                }}>
                <Text>Hello World</Text>
            </DrawerLayoutAndroid>
        );
    }

    renderContent() {
        return (
            <View>
                <Text>Item 1</Text>
                <Text>Item 2</Text>
            </View>
        );
    }
}

