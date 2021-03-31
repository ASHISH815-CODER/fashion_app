// Splash
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { Header } from '../../Component/Header';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';

function RenderTabs({ name, icon, value, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ width: SCREEN_WIDTH * 0.95, flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <View style={styles.GenderContainer}>
                {icon}
                <Text style={styles.GenderText}>{name}</Text>

                <Text style={styles.GenderName}>{value}</Text>

                <Image style={styles.GenderButton}
                    source={require('../../Assets/Images/NextButton/NextButton.png')}>
                </Image>
            </View>
        </TouchableOpacity>
    )
}

export function ProfileScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <View >
                <Header
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Profile</Text>
                    }

                />

            </View>

            <View style={styles.ProfileContainer}>
                <Image style={styles.ProfileImage}
                    source={require('../../Assets/Images/ProfileImage/Profile.png')}>
                </Image>

                <Text style={styles.ProfileTextConatiner}>Elle Fanning</Text>

                <Text style={styles.UserNameContainer}>@ellefanning</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NameScreen')}>
                    <Image style={styles.EditButtonContainer}
                        source={require('../../Assets/Images/EditButtonImage/editButton.png')}>
                    </Image>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('GenderScreen')}>
                <View style={styles.GenderContainer}>
                    <Image style={styles.GenderImage}
                        source={require('../../Assets/Images/GenderImage/Gender.png')}>
                    </Image>

                    <Text style={styles.GenderText}>Gender</Text>

                    <Text style={styles.GenderName}>Female</Text>

                    <Image style={styles.GenderButton}
                        source={require('../../Assets/Images/NextButton/NextButton.png')}>
                    </Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('BirthdayScreen')}>
                <View style={styles.BirthdayContainer}>
                    <Image style={styles.BirthdayImage}
                        source={require('../../Assets/Images/BirthdayCalender/BirthdayCalender.png')}>
                    </Image>

                    <Text style={styles.BirthdayText}>BirthDay</Text>

                    <Text style={styles.BirthdayName}>12-12-2000</Text>
                    <Image style={styles.BirthdayButton}
                        source={require('../../Assets/Images/NextButton/NextButton.png')}>
                    </Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('EmailScreen')}
            >
                <View style={styles.EmailContainer}>
                    <Image style={styles.EmailImage}
                        source={require('../../Assets/Images/MailImage/MailImage.png')}>
                    </Image>

                    <Text style={styles.EmailText}>Email</Text>

                    <Text style={styles.EmailName}>ellefanning@gmail.com</Text>

                    <Image style={styles.EmailButton}
                        source={require('../../Assets/Images/NextButton/NextButton.png')}>
                    </Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('PhoneScreen')}>
                <View style={styles.PhoneContainer}>
                    <Image style={styles.PhoneImage}
                        source={require('../../Assets/Images/PhoneImage/Phone.png')}>
                    </Image>

                    <Text style={styles.PhoneText}>Phone</Text>

                    <Text style={styles.PhoneName}>(307) 555 0133</Text>

                    <Image style={styles.PhoneButton}
                        source={require('../../Assets/Images/NextButton/NextButton.png')}>
                    </Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ChangePasswordScreen')}>
                <View style={styles.PasswordContainer}>
                    <Image style={styles.PasswordImage}
                        source={require('../../Assets/Images/PasswordImage/Password.png')}>
                    </Image>

                    <Text style={styles.PasswordText}>Password</Text>

                    <Text style={styles.PasswordName}>...............</Text>

                    <Image style={styles.PasswordButton}
                        source={require('../../Assets/Images/NextButton/NextButton.png')}>
                    </Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ProfileTypeScreen')}>
                <View style={styles.ProfileTypeContainer}>
                    <Image style={styles.ProfileTypeImage}
                        source={require('../../Assets/Images/ProfileTypeImage/ProfileType.png')}>
                    </Image>

                    <Text style={styles.ProfileTypeText}>Profile Type</Text>

                    <Text style={styles.ProfileTypeName}>Public</Text>

                    <Image style={styles.ProfileTypeButton}
                        source={require('../../Assets/Images/NextButton/NextButton.png')}>
                    </Image>
                </View>
            </TouchableOpacity>

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
        // marginTop: SCREEN_HEIGHT * 0.003,
        width: SCREEN_WIDTH * 0.055,
        height: SCREEN_HEIGHT * 0.022,
        // marginLeft: SCREEN_WIDTH * 0.03,

    },
    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        // marginTop: SCREEN_HEIGHT * 0.003,
        fontSize: 16,
        // fontWeight: '400',

        marginLeft: SCREEN_WIDTH * 0.01


    },
    SearchContainer: {
        marginLeft: SCREEN_WIDTH * 0.75
    },
    ProfileContainer: {
        marginTop: SCREEN_HEIGHT * 0.02,
        flexDirection: 'row',
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center'
    },
    ProfileImage: {
        borderRadius: 4,
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_HEIGHT * 0.1,
        // marginLeft: SCREEN_WIDTH * 0.025,
    },
    ProfileTextConatiner: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.025,
        fontSize: 18,
        // fontWeight: '600',
        marginTop: SCREEN_HEIGHT * 0.015,
    },
    EditButtonContainer: {
        marginLeft: SCREEN_WIDTH * 0.38,
        marginTop: SCREEN_HEIGHT * 0.022,
    },
    UserNameContainer: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.25,
        fontSize: 12,
        marginTop: SCREEN_HEIGHT * 0.06,
        position: 'absolute',
        color: '#C4C4C4'
    },
    GenderContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.08,

    },
    GenderImage: {
        // marginLeft: SCREEN_WIDTH * 0.02,
        // marginTop: SCREEN_HEIGHT * 0.03,
    },
    GenderText: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.01,
        fontSize: 16,
        // fontWeight: '600',
    },
    GenderName: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.45,
        fontSize: 16,
        // fontWeight: '600',
        color: '#C4C4C4'
        // marginTop: SCREEN_HEIGHT * 0.015,
    },
    GenderButton: {
        // marginLeft: SCREEN_WIDTH * 0.1,
        marginTop: SCREEN_HEIGHT * 0.006,
        left: 30
    },
    BirthdayContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.05,

    },
    BirthdayImage: {
        // marginLeft: SCREEN_WIDTH * 0.02,
        // marginTop: SCREEN_HEIGHT * 0.03,
    },
    BirthdayText: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.02,
        fontSize: 16,
        // fontWeight: '600',
    },
    BirthdayName: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.36,
        fontSize: 16,
        // fontWeight: '600',
        color: '#C4C4C4'
        // marginTop: SCREEN_HEIGHT * 0.015,
    },
    BirthdayButton: {
        // marginLeft: SCREEN_WIDTH * 0.1,
        marginTop: SCREEN_HEIGHT * 0.006,
        left: 30

    },
    EmailContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.05,
    },
    EmailImage: {
        // marginLeft: SCREEN_WIDTH * 0.02,
        // marginTop: SCREEN_HEIGHT * 0.03,
    },
    EmailText: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.02,
        fontSize: 16,
        // fontWeight: '600',
    },
    EmailName: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.16,
        fontSize: 16,
        // fontWeight: '600',
        color: '#C4C4C4'
        // marginTop: SCREEN_HEIGHT * 0.015,
    },
    EmailButton: {
        // marginLeft: SCREEN_WIDTH * 0.1,
        marginTop: SCREEN_HEIGHT * 0.006,
        left: 25

    },
    PhoneContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.05,

    },
    PhoneImage: {
        // marginLeft: SCREEN_WIDTH * 0.02,
        // marginTop: SCREEN_HEIGHT * 0.03,
    },
    PhoneText: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.01,
        fontSize: 16,
        // fontWeight: '600',
    },
    PhoneName: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.34,
        fontSize: 16,
        // fontWeight: '600',
        color: '#C4C4C4'
        // marginTop: SCREEN_HEIGHT * 0.015,
    },
    PhoneButton: {
        // marginLeft: SCREEN_WIDTH * 0.1,
        marginTop: SCREEN_HEIGHT * 0.006,
        left: 28

    },
    PasswordContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.05,
    },
    PasswordImage: {
        // marginLeft: SCREEN_WIDTH * 0.02,
        // marginTop: SCREEN_HEIGHT * 0.03,
    },
    PasswordText: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.01,
        fontSize: 16,
        // fontWeight: '600',
    },
    PasswordName: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.4,
        fontSize: 16,
        // fontWeight: '600',
        color: '#C4C4C4'
        // marginTop: SCREEN_HEIGHT * 0.015,
    },
    PasswordButton: {
        // marginLeft: SCREEN_WIDTH * 0.1,
        marginTop: SCREEN_HEIGHT * 0.006,
        left: 32

    },
    ProfileTypeContainer: {
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.9,
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.05,
    },
    ProfileTypeImage: {
        // marginLeft: SCREEN_WIDTH * 0.02,
        // marginTop: SCREEN_HEIGHT * 0.03,
    },
    ProfileTypeText: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.03,
        fontSize: 16,
        // fontWeight: '600',
    },
    ProfileTypeName: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.37,
        fontSize: 16,
        // fontWeight: '600',
        color: '#C4C4C4'
        // marginTop: SCREEN_HEIGHT * 0.015,
    },
    ProfileTypeButton: {
        // marginLeft: SCREEN_WIDTH * 0.1,
        marginTop: SCREEN_HEIGHT * 0.006,
        left: 30

    },

});
