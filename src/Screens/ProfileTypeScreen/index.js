// Splash
import React, { useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native";
// import { Icon } from 'react-native-vector-icons/icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import { Radio } from 'native-base';
import { Header } from '../../Component/Header';
// import { useState } from 'react/cjs/react.development';



export function ProfileTypeScreen({ navigation }) {

    const [ProfileType,SetProfileType] = useState('Private');


    return (
        <View style={styles.container}>
   <View >
                <Header
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Profile Type</Text>
                    }

                />

            </View>
            <View style={styles.RadioContainer}>
                <View style={styles.PrivateContainer}>
                    <Radio selected={ProfileType == 'Private' ? true : false} onPress={() => SetProfileType('Private')} color="#FFFFFF" selectedColor='#FF2B8A'  />
                    <Text style={styles.PrivateTextContainer}>Private</Text>
                </View>
                <View style={styles.PublicContainer}>
                    <Radio selected={ProfileType == 'Public' ? true:false} onPress={()=>SetProfileType('Public')} color="#FFFFFF" selectedColor='#FF2B8A' />
                    <Text style={styles.PublicTextContainer}>Public</Text>
                </View>

            </View>
            <View style={{ position: "absolute", alignSelf: 'center', bottom: 20 }}>
                <LoginButton
                    // onSubmitPress={() => navigation.navigate('TabNavigationScreen')}
                    ButtonTextStyle={{
                        color: "#fff", fontSize: 16, fontFamily: 'montserrat_bold',
                    }}
                    ButtonStyle={{
                        backgroundColor: "#FF2B8A",
                        width: SCREEN_WIDTH * 0.9,
                        height: SCREEN_HEIGHT * 0.07,
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius:5,
                        elevation: 10,
                    }}
                    buttonTitle="Save" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

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
        width: SCREEN_WIDTH * 0.055,
        height: SCREEN_HEIGHT * 0.022,
        // marginLeft: SCREEN_WIDTH * 0.01

    },

    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        // marginTop: SCREEN_HEIGHT * 0.007,
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.01


    },
    EmailContainer: {
        marginTop: SCREEN_WIDTH * 0.08,
        marginLeft: SCREEN_WIDTH * 0.05,

    },
    EmailTextContainer: {
        fontFamily: 'montserrat_bold',
        fontSize: 16,
        // fontWeight: 'bold',
    },
    TextinputContainer: {
        marginTop: SCREEN_WIDTH * 0.04,

    },
    RadioContainer: {
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.06

    },
    PrivateContainer: {
        marginLeft: SCREEN_WIDTH * 0.1,
        flexDirection: 'row',

    },
    PublicContainer: {
        marginLeft: SCREEN_WIDTH * 0.2,
        flexDirection: 'row'
    },
    PrivateTextContainer: {
        fontFamily: 'montserrat_bold',
        fontSize: 16,
        // fontWeight: 'bold'
    },
    PublicTextContainer: {
        fontFamily: 'montserrat_bold',
        fontSize: 16,
        // fontWeight: 'bold'
    }
});
