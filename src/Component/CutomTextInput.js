import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../Helper/DeviceDimensions';

const CustomTextInput = ({ IconName, IconColor, IconSize, TextInputProps, showReverse, HideIcon }) => {
    const [isFocused, setIsFocused] = useState(false)


    return (
        <View style={[showReverse ? styles.ReverseContainer : styles.Container, isFocused ? { borderColor: '#FF2B8A' } : { borderColor: '#8C8C8C' }]}>
            { HideIcon ?
                null
                :
                <Icon name={IconName ? IconName : 'envelope-o'} color={IconColor ? IconColor : "#FF2B8A"} size={IconSize ? IconSize : 18} />
            }
            <TextInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={HideIcon ? { width: SCREEN_WIDTH * 0.8 } : { width: SCREEN_WIDTH * 0.7 }}
                {...TextInputProps}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    Container: {
        // flex: 1,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.9,
        marginLeft: SCREEN_WIDTH * 0.05,

        // fontFamily:'montserrat_medium',

    },
    ReverseContainer: {
        // flex: 1,
        borderRadius: 5,
        flexDirection: 'row-reverse',
        justifyContent: 'space-evenly',
        borderWidth: 1,
        alignItems: 'center',
        width: SCREEN_WIDTH * 0.9,
        marginLeft: SCREEN_WIDTH * 0.05,



    },

})
export { CustomTextInput };