/**
 * Created by Elf on 15.08.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    ListView,
    StyleSheet } from 'react-native';

import DimensionUtils from './../utils/dimentionUtils';
import Talk from './Talk';

export default class TalksList extends Component {
    static propTypes = {
        talks: React.PropTypes.array.isRequired,
        categories: React.PropTypes.array.isRequired,
    };

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
                          renderRow={this.renderTalkRow.bind(this)}
                          renderSeparator={this.renderSeparator.bind(this)}
                          enableEmptySections={true}
                          showsVerticalScrollIndicator={false}/>
            </View>
        );
    }

    renderTalkRow(talk, rowId, index) {
        return (
            <Talk talk={talk}
                  index={parseInt(index)}
                  categoryFlagColor={this.getCategoryFlagColor(talk.category)}  />
        );
    }

    renderSeparator(sectionID, rowId, adjacentRowHighlighted) {
        return (
            <View key={rowId}
                  style={styles.separator} />
        );
    }

    getCategoryFlagColor(categoryName) {
        const category = this.props.categories.find((category) => {
            if(category.name === categoryName) {
                return true;
            } else {
                return false;
            }
        });

        return category.color;
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

    separator: {
        height: 1,
        backgroundColor: '#E6EAED',
    },
});
