// Splash
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';

export function RegisterScreen({ navigation }) {

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image style={styles.Imagestyle}
                    //   source={require('./Assets/Images/HangerLogo/Vector.png')}
                    source={require('../../Assets/Images/HangerLogo/Vector.png')} />
                <Text style={styles.TextStyle}>Welcome to Icon App</Text>
                <Text style={styles.TextContainer}>Create an new account</Text>
                <View style={styles.TextInputContainer}>
                    <CustomTextInput
                        TextInputProps={{
                            placeholder: "Full Name"
                        }}
                    />
                </View>
                <View style={styles.TextInputContainer}>
                    <CustomTextInput
                        TextInputProps={{
                            placeholder: "Your Email"
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
                <View style={styles.TextInputContainer}>
                    <CustomTextInput
                        IconName="lock"
                        TextInputProps={{
                            placeholder: "Password Again",
                            secureTextEntry: true
                        }}
                    />
                </View>
                <LoginButton
                    //    onSubmitPress={() => navigation.navigate('DiscoverScreen')}
                    ButtonTextStyle={{ color: "#fff", fontSize: 16, fontFamily: 'montserrat_bold', }}
                    ButtonStyle={{
                        backgroundColor: "#FF2B8A",
                        width: SCREEN_WIDTH * 0.9,
                        height: SCREEN_HEIGHT * 0.07,
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: SCREEN_HEIGHT * 0.01,
                        borderRadius:5
                    }}
                    buttonTitle="Sign Up" />
                <View style={styles.AccountRegisterContainer}>
                    <Text style={styles.AccountContainer}>Have an account?</Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}  >
                        <Text style={styles.RegisterContainer}>  Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Imagestyle: {
        // width: SCREEN_WIDTH * 0.35,
        // height: SCREEN_HEIGHT * 0.13,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.06

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
        fontSize: 22,
        alignSelf: 'center',
        // fontWeight: 'bold',
        marginTop: SCREEN_HEIGHT * 0.03
    },
    TextInputContainer: {
        marginTop: SCREEN_HEIGHT * 0.03,

    },
    AccountRegisterContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.03
    },
    AccountContainer: {
        fontFamily:'montserrat_light',
        color: '#8C8C8C'
    },
    RegisterContainer: {
        fontFamily:'montserrat_bold',
        color: '#FF2B8A',
        // fontWeight: 'bold'
    }
});
