// Splash
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native";
// import { Icon } from 'react-native-vector-icons/icon';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { Header } from '../../Component/Header';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';


export function ChangePasswordScreen({ navigation }) {

    return (
        <View style={styles.container}>

<View >
                <Header
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Change Password</Text>
                    }

                />

            </View>

            <View style={styles.EmailContainer}>
                <Text style={styles.EmailTextContainer}>Old Password</Text>
            </View>
            <View style={styles.TextinputContainer}>
                <CustomTextInput

                    TextInputProps={{
                        placeholder: "Password",
                        secureTextEntry: true
                    }}
                    IconName="lock"
                    IconColor="#979797"
                    IconSize={25}
                />
            </View>

            <View style={styles.EmailContainer}>
                <Text style={styles.EmailTextContainer}>New Password</Text>
            </View>
            <View style={styles.TextinputContainer}>
                <CustomTextInput

                    TextInputProps={{
                        placeholder: "New Password",
                        secureTextEntry: true
                    }}
                    IconName="lock"
                    IconColor="#979797"
                    IconSize={25}
                />
            </View>

            <View style={styles.EmailContainer}>
                <Text style={styles.EmailTextContainer}>New Password Again</Text>
            </View>
            <View style={styles.TextinputContainer}>
                <CustomTextInput

                    TextInputProps={{
                        placeholder: "New Password Again",
                        secureTextEntry: true
                    }}
                    IconName="lock"
                    IconColor="#979797"
                    IconSize={25}
                />
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
        width: SCREEN_WIDTH * 0.053,
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
        marginTop: SCREEN_WIDTH * 0.01,

    }
});
