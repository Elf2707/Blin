/**
 * Created by Elf on 29.09.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    TouchableHighlight,
    StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import DimensionUtils from './../utils/dimentionUtils';

export default class Talk extends Component {
    static propTypes = {
        talk: React.PropTypes.object.isRequired,
        index: React.PropTypes.number.isRequired,
        categoryFlagColor: React.PropTypes.string.isRequired,
    };

    render() {
        return (
            <Animatable.View style={styles.container}
                             animation={(this.props.index % 2) ? 'fadeInRight' : 'fadeInLeft'}
                             duration={400}>
                <Text style={[styles.talkText, {color: this.props.categoryFlagColor}]}
                      ellipsizeMode={'tail'}
                      numberOfLines={4}>{this.props.talk.text}</Text>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: DimensionUtils.getHeightDimInPerc(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
    },

    talkText: {
        fontFamily: 'roboto_reg',
        fontSize: DimensionUtils.getHeightDimInPerc(3),
        color: '#555555',
    },
});
