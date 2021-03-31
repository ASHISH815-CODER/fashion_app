import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigate } from '../../RootNavigation';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimensions';

export const UserWallComponent = ({ onSubmitPress, disabled, HederTextStyle, HederText, HederContainer,
    onIconPress, IconComponent, TextComponent, currentObject, BackTextName, ImageComponent ,onImagepress}) => {
    return (
        <View style={styles.container}>
          <TouchableOpacity onPress={onIconPress}>
                {IconComponent}
            </TouchableOpacity>
            {TextComponent}
            <TouchableOpacity onPress={onImagepress}>
                {ImageComponent}
            </TouchableOpacity>
           

           

            {/* <TouchableOpacity
                style={styles.HederContainer}
                onPress={disabled ? () => null : onSubmitPress}>
                <Text style={HederTextStyle ? HederTextStyle : styles.HederText}>{HederText}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity>
                        
                    </TouchableOpacity>
                    <Text>Back</Text>
                </View>

            </TouchableOpacity> */}
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        height: SCREEN_HEIGHT * 0.08,
        alignContent: 'center',
        backgroundColor: "rgba(252, 234, 232, 0.85)",
        width: SCREEN_WIDTH,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignSelf: 'center',
        paddingHorizontal: SCREEN_WIDTH * 0.04
    },
    backButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: SCREEN_HEIGHT * 0.01
    },
    BackText: {
        marginHorizontal: SCREEN_WIDTH * 0.02,
        fontFamily: "montserrat_medium",
    },
    HederContainer: {


        // height: 80,
        // alignItems:'center'
        // alignContent:'center'
    },
    HederText: {
        color: "#383838", fontSize: 16, fontFamily: 'montserrat_bold', textAlign: 'center',

    },
});