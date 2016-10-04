/**
 * Created by Elf on 06.09.2016.
 */
import React, { Component } from 'react';
import { View,
    Text,
    TouchableHighlight,
    ListView,
    StyleSheet,
    Image,
    Platform } from 'react-native';

import DimensionUtils from './../utils/dimentionUtils';
import PropsConfig from './../config/propsConfig';

export default class LocationsList extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

        this.state = {
            dataSource: this.ds.cloneWithRows(this.props.locations)
        }
    }

    render() {
        return (
            <ListView style={[styles.container, this.props.style]}
                      contentContainerStyle={styles.locationsListInsideCont}
                      dataSource={this.state.dataSource}
                      showsVerticalScrollIndicator={false}
                      enableEmptySections={true}
                      renderRow={this.renderLocationItem.bind(this)}
                      renderSeparator={this.renderSeparator.bind(this)}
                      pageSize={PropsConfig.maxLocationsPerPage}/>

        );
    }

    renderLocationItem(location, sectionId, rowId) {
        // Convert rowId from string to number
        const rowIndex = +rowId;
        return (
            <TouchableHighlight key={rowIndex}
                                onPress={this._handleRowTap.bind(this, location)}
                                underlayColor={'rgba(255, 255, 255, 0.4)'}>
                {this.renderRowDetailFullInfo(location, rowIndex)}
            </TouchableHighlight>
        );
    }

    renderSeparator(sectionID, rowID) {
        return (
            <View key={rowID}
                  style={styles.horTranspDevider}/>
        );
    }

    renderRowDetailFullInfo(location, locationIndx) {
        if (this.props.detailInfo) {
            return (
                <View style={styles.rowContainer}>
                    <View style={styles.infoSubCont}>
                        <Text style={styles.text3per}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}>{location.name}</Text>
                        <Text style={styles.text2per}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}>population: {location.population}</Text>
                    </View>
                    <View style={[styles.infoSubCont]}>
                        <Text style={styles.text2per}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}>{location.adminName1}</Text>
                        <Text style={styles.text2per}
                              ellipsizeMode={'tail'}
                              numberOfLines={1}>{location.countryName}</Text>
                    </View>
                    {this.renderDelBtn(locationIndx)}
                </View>
            )
        } else {
            return (
                <View style={[styles.rowContainer, styles.rowShortInfoStyle]}>
                    <Text style={styles.textShortInfoStyle}
                          ellipsizeMode={'tail'}
                          numberOfLines={1}>{location.name}</Text>
                    {this.renderDelBtn(locationIndx)}
                </View>
            )
        }
    }

    renderDelBtn(locationIndx) {
        if (this.props.isShowRowDelBtns) {
            return (
                <TouchableHighlight onPress={this._handleDelBtnTap.bind(this, locationIndx)}
                                    underlayColor={'rgba(255, 255, 255, 0.4)'}
                                    style={styles.deleteBtn}>
                    <Image source={require('RottaWeather/app/assets/icons/delete.png')}
                           style={styles.deleteBtnIcon}
                           resizeMode={'contain'}/>
                </TouchableHighlight>
            )
        }

        return null;
    }

    componentWillReceiveProps(newProps) {
        //Get new photo array update state
        this.setState({
            dataSource: this.ds.cloneWithRows(newProps.locations)
        });
    }

    _handleRowTap(location) {
        // Detect if we have callback passed for row tap call it
        if (this.props.onRowTap) {
            this.props.onRowTap(location);
        }
    }

    _handleDelBtnTap(locationIndx) {
        // Detect if we have callback passed for row tap call it
        if (this.props.onDelBtnTap) {
            this.props.onDelBtnTap(locationIndx);
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    locationsListInsideCont: {
        alignItems: 'stretch',
        justifyContent: 'flex-start'
    },

    rowContainer: {
        height: DimensionUtils.getHeightDimInPerc(10),
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'stretch',
        flex: 1,
    },

    infoSubCont: {
        marginLeft: 30,
        flex: 0.5,
        padding: 5,
        justifyContent: 'space-around',
        alignItems: 'flex-start',
    },

    padding7: {
        padding: 5,
    },

    rowShortInfoStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    text3per: {
        fontSize: DimensionUtils.getHeightDimInPerc(3.2),
        color: '#FFF',
        fontWeight: '400',
        fontFamily: (Platform.OS === 'ios') ? 'Roboto' : 'roboto_light'
    },

    text2per: {
        fontSize: DimensionUtils.getHeightDimInPerc(2),
        color: '#FFF',
        fontWeight: '400',
        fontFamily: (Platform.OS === 'ios') ? 'Roboto' : 'roboto_reg'
    },

    textShortInfoStyle: {
        fontSize: DimensionUtils.getHeightDimInPerc(4),
        color: '#FFF',
        fontWeight: '100',
        fontFamily: (Platform.OS === 'ios') ? 'Roboto' : 'roboto_thin'
    },

    deleteBtn: {
        position: 'absolute',
        top: 0,
        left: DimensionUtils.getWidthDimInPerc(92),
        width: DimensionUtils.getWidthDimInPerc(6),
        height: DimensionUtils.getHeightDimInPerc(4),
    },

    deleteBtnIcon: {
        width: DimensionUtils.getWidthDimInPerc(6),
        height: DimensionUtils.getHeightDimInPerc(4),
    },

    horTranspDevider: {
        height: 2,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
});

LocationsList.props = {
    locations: React.PropTypes.array.isRequired,
    isShowRowDelBtns: React.PropTypes.bool.isRequired,
    detailInfo: React.PropTypes.bool.isRequired,
    onRowTap: React.PropTypes.func,
    onDelBtnTap: React.PropTypes.func,
};
