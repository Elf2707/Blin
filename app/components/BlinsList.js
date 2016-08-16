/**
 * Created by Elf on 15.08.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    ListView,
    StyleSheet } from 'react-native';

export default class BlinsList extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.blins),
        };
    }

    componentWillReceiveProps(newProps) {
        if (newProps.blins) {
            this.setState({
                dataSource: this.ds.cloneWithRows(newProps.blins),
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView style={styles.blin}
                          dataSource={this.state.dataSource}
                          renderRow={this.renderBlinRow}
                          enableEmptySections={true} />
            </View>
        );
    }

    renderBlinRow(blin) {
        return (
            <View style={styles.blin}>
                <Text>{blin.text}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 5,
        borderColor: 'red',
        borderStyle: 'solid',
        padding: 10,
    },
    blin: {
        borderWidth: 5,
        borderColor: 'blue',
        borderStyle: 'solid',
        marginBottom: 10,
        padding: 10,
    },
});

BlinsList.propsTypes = {
    blins: React.PropTypes.array.isRequired,
};
