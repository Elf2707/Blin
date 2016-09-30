/**
 * Created by Elf on 30.09.2016.
 */
import React, { Component } from 'react';
import { View,
         TouchableHighlight,
         StyleSheet } from 'react-native';
import Badge from 'react-native-smart-badge';
import Icon from 'react-native-vector-icons/MaterialIcons';

import DimensionUtils from './../utils/dimentionUtils';

export default class BadgeRating extends Component {
    static propTypes = {
        rating: React.PropTypes.number.isRequired,
    }

    render() {
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableHighlight style={[styles.badgeBtn, styles.bottomLeftRadius, styles.topAlign]}>
                    <Icon style={styles.badgeBtnIcon}
                          name={'add'}
                          color={'#FFF'}
                          size={DimensionUtils.getWidthDimInPerc(4)} />
                </TouchableHighlight>

                <Badge style={styles.badge}
                       textStyle={{fontSize: DimensionUtils.getHeightDimInPerc(1.9)}}>
                    {this.props.rating}
                </Badge>

                <TouchableHighlight style={[styles.badgeBtn, styles.topLeftRadius, styles.bottomAlign]}>
                    <Icon style={styles.badgeBtnIcon}
                          name={'remove'}
                          color={'#FFF'}
                          size={DimensionUtils.getWidthDimInPerc(4)} />
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
    },

    badge: {
        backgroundColor: '#4AABF7',
        marginRight: 5,
    },

    badgeBtn: {
        backgroundColor: '#CCC',
        alignItems: 'flex-end',
        padding: DimensionUtils.getWidthDimInPerc(0.5),
        width: DimensionUtils.getWidthDimInPerc(4.9),
        height: DimensionUtils.getHeightDimInPerc(3.4),
    },

    badgeBtnIcon: {
        fontWeight: '400',
    },

    topAlign: {
        justifyContent: 'flex-start',
    },

    bottomAlign: {
        justifyContent: 'flex-end',
    },

    bottomLeftRadius: {
        borderBottomLeftRadius: DimensionUtils.getHeightDimInPerc(4),
    },

    topLeftRadius: {
        borderTopLeftRadius: DimensionUtils.getHeightDimInPerc(4),
    },
});