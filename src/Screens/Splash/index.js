// Splash
import * as React from 'react';
import { useEffect } from 'react';
import { View, Text, ImageBackground } from "react-native"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';

export function Splash({ navigation }) {
    useEffect(() => {
        setTimeout(() => {
            navigation.push('IntroScreen')
        }, 4000);
    })
    return (
        <ImageBackground style={{ flex: 1, height: SCREEN_HEIGHT, width: SCREEN_WIDTH }} source={require('../../Assets/Images/Splash/splash.png')}>

        </ImageBackground>
    )
}