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
import BadgeRating from './BadgeRating';

export default class Talk extends Component {
    static propTypes = {
        talk: React.PropTypes.object.isRequired,
        index: React.PropTypes.number.isRequired,
    };

    render() {
        let flagColor = this.getTalkFlagStyle();
        return (
            <Animatable.View style={[styles.talk, flagColor]}
                             animation={(this.props.index % 2) ? 'fadeInRight' : 'fadeInLeft'}
                             duration={400}>
                <Text style={styles.talkText}
                      ellipsizeMode={'tail'}
                      numberOfLines={4}>{this.props.talk.text}</Text>

                <BadgeRating rating={this.props.talk.rating} />

            </Animatable.View>
        );
    }

    getTalkFlagStyle() {
        switch (this.props.talk.category) {
            case 'casual':
                var flagColor = '#4AABF7';
                break;

            case 'happy':
                flagColor = '#FF2752';
                break;

            case 'sad':
                flagColor = '#673AB7';
                break;

            case 'funny':
                flagColor = '#FF4081';
                break;

            case 'ad':
                flagColor = '#CDDC39';
                break;

            default:
                var flagColor = '#4AABF7';
                break;
        }

        return ({
            borderLeftWidth: 5,
            borderLeftColor: flagColor,
        });
    }
}

const styles = StyleSheet.create({
    talk: {
        backgroundColor: '#FFF',
        height: DimensionUtils.getHeightDimInPerc(12),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    talkText: {
        color: 'orange',
    },
});
