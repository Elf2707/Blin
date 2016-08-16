/**
 * Created by Elf on 26.07.2016.
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class DrawerPanel extends Component {
    constructor(props, ctx) {
        super(props, ctx);

        this.drawer = ctx.drawer;
    }

    render() {
        return (
            <View style={[styles.container, this.props.sceneStyle ]}>
                <TouchableHighlight onPress={this.handleMenuItemClick.bind(this)}><Text>Item 1</Text></TouchableHighlight>
                <TouchableHighlight onPress={Actions.pop}><Text>Item 2</Text></TouchableHighlight>
            </View>
        );
    }

    handleMenuItemClick() {
        Actions.addBlin();
        this.drawer.close();
    }
}

DrawerPanel.contextTypes = {
    drawer: React.PropTypes.object,
};

DrawerPanel.propTypes = {
    name: React.PropTypes.string,
    sceneStyle: View.propTypes.style,
    title: React.PropTypes.string,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        borderWidth: 2,
        borderColor: 'red',
    },
});
