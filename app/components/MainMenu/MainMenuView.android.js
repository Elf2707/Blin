/**
 * Created by Elf on 26.07.2016.
 */
import React from 'react';
import { View,
    Text,
    DrawerLayoutAndroid,
    TouchableHighlight } from 'react-native';

import NavigationDrawer from './android/NavigationDrawer';

export default function render() {
    const handleOnNavigate = () => {
        console.log('ssssssssssssssssssssssssssssssssss');
    }

    return (
        <NavigationDrawer onNavigate={handleOnNavigate.bind(this)} />
    );
}

