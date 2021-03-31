// Splash
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import ValidationComponent from 'react-native-form-validator';
import { useState } from 'react';

// constructor(props) {
//     super(props);
//     const =  [email: "tibtib@gmail.com", Password : ""];
//   }


export function LoginScreen({ navigation }) {



    return (
        <View style={styles.container}>
            <Image style={styles.Imagestyle}
                //   source={require('./Assets/Images/HangerLogo/Vector.png')}
                source={require('../../Assets/Images/HangerLogo/Vector.png')} />

            <Text style={styles.TextStyle}>Welcome to Icon App</Text>
            <Text style={styles.TextContainer}>Sign in to continue</Text>



            <View style={styles.TextInputContainer}>
                <CustomTextInput

                    TextInputProps={{
                        placeholder: "Your Email",
                    }}
                />
            </View>

            <View style={styles.TextInputContainer}>
                <CustomTextInput

                    IconName="lock"
                    TextInputProps={{
                        placeholder: "Password",
                        secureTextEntry: true
                    }}


                />
            </View>

            <LoginButton
                onSubmitPress={() => navigation.navigate('TabNavigationScreen')}
                ButtonTextStyle={{ color: "#fff", fontSize: 16, fontFamily: 'montserrat_bold', }}
                ButtonStyle={{
                    backgroundColor: "#FF2B8A",
                    width: SCREEN_WIDTH * 0.9,
                    height: SCREEN_HEIGHT * 0.07,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: SCREEN_HEIGHT * 0.01,
                    elevation: 10,
                    borderRadius: 5,
                    ShadowColor: "#FF2B8A"
                }}
                buttonTitle="Sign In" />


            <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: SCREEN_HEIGHT * 0.02 }}>
                <View style={{ width: SCREEN_WIDTH * 0.39, marginLeft: SCREEN_WIDTH * 0.055, height: 1, backgroundColor: '#8C8C8C' }} />
                <View>
                    <Text style={{ width: 50, textAlign: 'center', fontFamily: 'montserrat_bold' }}>OR</Text>
                </View>
                <View style={{ width: SCREEN_WIDTH * 0.39, marginRight: SCREEN_WIDTH * 0.05, height: 1, backgroundColor: '#8C8C8C' }} />
            </View>


            <TouchableOpacity>
                <View style={styles.GoogleContainer}>
                    <Image style={styles.GoogleImageStyle}
                        source={require('../../Assets/Images/GoogleImage/GoogleImage.png')} />
                    <Text style={styles.GoogleTextingContainer}>Login With Google</Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity>
                <View style={styles.FacebookContainer}>
                    <Icon name="facebook" color="#4092FF" size={18} />
                    <Text style={styles.FacebookTextingContainer}>Login With Facebook</Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.PasswordContainer}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.AccountRegisterContainer}>
                <Text style={styles.AccountContainer}>Don't have a account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                    <Text style={styles.RegisterContainer}>  Register</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Imagestyle: {
        // width: SCREEN_WIDTH * 0.375,
        // height: SCREEN_HEIGHT * 0.14,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.04

    },
    TextStyle: {
        fontFamily: 'montserrat_bold',
        fontSize: 22,
        // fontWeight: 'bold',
        textAlign: 'center',
        marginTop: SCREEN_HEIGHT * 0.01
    },
    TextContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 18,
        alignSelf: 'center',
        // fontWeight: 'bold',
        marginTop: SCREEN_HEIGHT * 0.06
    },
    TextInputContainer: {
        marginTop: SCREEN_HEIGHT * 0.03,

    },
    ORContainer: {
        fontSize: 15,
        marginVertical: SCREEN_HEIGHT * 0.02,
        textAlign: 'center',

    },
    GoogleContainer: {
        borderColor: '#8C8C8C',
        flexDirection: 'row',
        borderWidth: 1,
        padding: 15,
        justifyContent: 'flex-start',
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        borderRadius: 5

    },
    GoogleTextingContainer: {
        fontFamily: 'montserrat_bold',
        fontSize: 15,
        // fontWeight: 'bold',
        marginLeft: SCREEN_WIDTH * 0.15,
        color: '#8C8C8C'
    },
    FacebookContainer: {
        borderRadius: 5,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: '#8C8C8C',
        padding: 15,
        justifyContent: 'flex-start',
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.03,
    },
    FacebookTextingContainer: {
        fontSize: 15,
        fontFamily: 'montserrat_bold',

        // fontWeight: 'bold',
        marginLeft: SCREEN_WIDTH * 0.15,
        color: '#8C8C8C'
    },
    PasswordContainer: {
        fontFamily: 'montserrat_medium',
        textAlign: 'center',
        marginVertical: SCREEN_HEIGHT * 0.02,
        color: '#FF2B8A'
    },
    AccountRegisterContainer: {
        flexDirection: 'row',
        alignSelf: 'center'
    },
    AccountContainer: {
        fontFamily: 'montserrat_light',

        color: '#8C8C8C'
    },
    RegisterContainer: {
        fontFamily: 'montserrat_bold',
        color: '#FF2B8A',
        // fontWeight: 'bold'
    }
});
