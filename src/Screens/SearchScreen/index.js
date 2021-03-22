import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text} from "react-native"
import { CustomTextInput } from '../../Component/CutomTextInput';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';

export function SearchScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.ImageContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.Imagestyle}
                        source={require('../../Assets/Images/BackImage/BackImage.png')}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.BackTextStyle}>Back</Text>
            </View>
            <View style={styles.TextInputContainer}>
                <CustomTextInput
                    showReverse
                    TextInputProps={{
                        placeholder: "Search"
                    }}
                  
                    IconName="search"
                    IconColor="#000000"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignSelf : 'center'
    },
    ImageContainer: {
        backgroundColor: '#FBF0EF',
        flexDirection: 'row',
        // marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.025,
        padding: 10
    },
    Imagestyle: {
        // width: SCREEN_WIDTH * 0.15,
        // height: SCREEN_HEIGHT * 0.022
        // marginTop: SCREEN_HEIGHT * 0.008,
        width: SCREEN_WIDTH * 0.053,
        height: SCREEN_HEIGHT * 0.022,
        // marginLeft: SCREEN_WIDTH * 0.01

    },
  
        BackTextStyle: {
            fontFamily:'montserrat_medium',
            fontSize: 16,
            // fontWeight: '400',
            marginLeft: SCREEN_WIDTH * 0.01
    
      
    },
    TextInputContainer: {
        marginTop: SCREEN_HEIGHT * 0.03,
        marginLeft: SCREEN_WIDTH * 0.05,
    },
});









































