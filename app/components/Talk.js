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
        let categoryFlag = {
            borderLeftWidth: 5,
            borderLeftColor: this.props.categoryFlagColor,
        };

        return (
            <Animatable.View style={[styles.container, categoryFlag]}
                             animation={(this.props.index % 2) ? 'fadeInRight' : 'fadeInLeft'}
                             duration={400}>
                <Text style={styles.talkText}
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
        padding: 8,
    },

    talkText: {
        fontFamily: 'roboto_reg',
        color: '#555555',
    },
});
