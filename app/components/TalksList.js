/**
 * Created by Elf on 15.08.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    ListView,
    StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import DimensionUtils from './../utils/dimentionUtils';

export default class TalksList extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.talks),
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.talks) {
            this.setState({
                dataSource: this.ds.cloneWithRows(newProps.talks),
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView style={styles.talks}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderTalkRow}
                          renderSeparator={this.renderSeparator}
                          enableEmptySections={true}/>
            </View>
        );
    }

    renderTalkRow(talk, rowId, index) {
        return (
            <Animatable.View style={styles.talk}
                             animation={(index % 2) ? 'fadeInRight' : 'fadeInLeft'}>
                <Text>{talk.text}</Text>
            </Animatable.View>
        );
    }

    renderSeparator(sectionID, rowId, adjacentRowHighlighted) {
        return (
            <View key={rowId}
                  style={styles.separator}></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        padding: 10,
        height: DimensionUtils.getHeightDimInPerc(88),
    },

    listContainer: {
        padding: 10,
    },

    talk: {
        backgroundColor: '#FFF',
        padding: 5,
        height: DimensionUtils.getHeightDimInPerc(10),
    },

    separator: {
        height: 1,
        backgroundColor: '#E6EAED',
    }
});

TalksList.propsTypes = {
    talks: React.PropTypes.array.isRequired,
};
