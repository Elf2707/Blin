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
        category: React.PropTypes.object.isRequired,
    };

    render() {
        return (
            <Animatable.View style={styles.container}
                             animation={(this.props.index % 2) ? 'fadeInRight' : 'fadeInLeft'}
                             duration={400}>
                <View style={[styles.talkHeader, {backgroundColor: this.props.category.color, opacity: 1}]}>
                </View>

                <View style={styles.talkContentContainer}>
                    <Text style={styles.talkText}
                          ellipsizeMode={'tail'}
                          numberOfLines={4}>{this.props.talk.text}</Text>
                </View>
            </Animatable.View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        height: DimensionUtils.getHeightDimInPerc(12),
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        borderBottomLeftRadius: DimensionUtils.getHeightDimInPerc(2),
        borderBottomRightRadius: DimensionUtils.getHeightDimInPerc(2),
        borderTopLeftRadius: DimensionUtils.getHeightDimInPerc(1),
        borderTopRightRadius: DimensionUtils.getHeightDimInPerc(1),
        padding: 0,
    },

    talkHeader: {
        borderRadius: DimensionUtils.getHeightDimInPerc(2),
        height: DimensionUtils.getHeightDimInPerc(1),
        alignItems: 'center',
        justifyContent: 'center',
    },

    talkHeaderText: {
        fontSize: DimensionUtils.getHeightDimInPerc(1.8),
        color: '#FFF',
    },

    talkContentContainer: {
        paddingLeft: 15,
        paddingTop: 8,
    },

    talkText: {
        fontFamily: 'roboto_reg',
        fontSize: DimensionUtils.getHeightDimInPerc(2.5),
        color: '#707070',
    },
});
