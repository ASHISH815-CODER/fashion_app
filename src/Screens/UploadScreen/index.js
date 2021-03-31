// Splash
import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView, image } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/AntDesign';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import ImagePicker from 'react-native-image-crop-picker';
import { Header } from '../../Component/Header';
import { navigate } from '../../../RootNavigation';
// import { useState } from 'react/cjs/react.development';

export function UploadScreen({ navigation }) {

    const [renderImage, SetrenderImage] = useState(require('../../Assets/Images/CameraImage/camera.png'));

    const UploadClothing = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            multiple: true
        }).then(image => {
            console.log(image);
            SetrenderImage({ uri: image.path })
        });

    }


    return (
        <View style={styles.container}>

            <View >
                <Header
                    onIconPress={() => navigate('CommonNotificationScreen')}
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>New Post</Text>
                    }
                    IconComponent={
                        <Icon
                            // style={styles.SearchContainer}
                            name="arrowright" color="#000000" size={18}
                        />
                    }
                />

            </View>

            {/* <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.Imagestyle}
                        source={require('../../Assets/Images/BackImage/BackImage.png')}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.BackTextStyle}>New Post</Text>
                <View style={styles.IconStyle}>
                    <TouchableOpacity onPress={() => navigation.navigate("CommonNotificationScreen")}>
                        <Icon name="arrowright" size={25} color="#383838"></Icon>
                    </TouchableOpacity>
                </View>
            </View> */}

            <View style={{ backgroundColor: '#F6F6F6', height: SCREEN_HEIGHT * 0.68 }}>
                <View style={styles.UploadContainer}>
                    <View style={styles.UploadingPohtoTextStyle}>
                        <Text style={styles.UploadTextStyle}>Upload Photos</Text>
                        <Text style={styles.TakePictureStyle}>Take picture or choose from your library</Text>
                    </View>
                    <TouchableOpacity onPress={() => UploadClothing()}>
                        <Image style={styles.CameraImageStyle}
                            source={renderImage}>
                        </Image>

                    </TouchableOpacity>
                    <View style={styles.ButtonContainer}>
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
                                borderRadius: 5,
                                elevation: 10,
                            }}
                            buttonTitle="Continue" />
                    </View>
                </View>
            </View>

            <View style={styles.ProfilePhotoContainer}>

                <Text style={styles.PhotoTextStyle}>Photos</Text>
                <Text style={styles.ProfileTextStyle}>Profile</Text>

            </View>

            <View style={styles.ProfilePhotoImageContainer}>

                <TouchableOpacity
                    // onPress={UploadPhoto == 'Photo' ? true : false} onPress={() => SetUploadPhoto('Photo')} backgroundColor="#000000" selectedColor='#FF2B8A'
                    onPress={() => navigation.navigate('UploadingPhotoScreen')}
                >
                    <EvilIcons
                        name="camera" size={40} color="#fff"
                        style={styles.PhotoImageStyle}>

                    </EvilIcons>
                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={UploadPhoto == 'Profile' ? true : false} onPress={() => SetUploadPhoto('Profile')} backgroundColor="#000000" selectedColor='#FF2B8A'
                    onPress={() => navigation.navigate('UploadingProfilePhoto')}
                >
                    <Icon

                        name="user" size={30} color="#fff"
                        style={styles.ProfileImageStyle}>

                    </Icon>
                </TouchableOpacity>

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
        // marginTop: SCREEN_HEIGHT * 0.002,
        width: SCREEN_WIDTH * 0.057,
        height: SCREEN_HEIGHT * 0.022,
        // marginLeft: SCREEN_WIDTH * 0.03

    },
    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.01

    },
    IconStyle: {
        marginLeft: SCREEN_WIDTH * 0.65
    },

    EmailContainer: {
        marginTop: SCREEN_WIDTH * 0.08,
        marginLeft: SCREEN_WIDTH * 0.05,

    },
    EmailTextContainer: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    TextinputContainer: {
        marginTop: SCREEN_WIDTH * 0.04,

    },
    UploadContainer: {
        marginTop: SCREEN_HEIGHT * 0.05,
        // marginLeft: SCREEN_WIDTH * 0.05,
        color: '#F6F6F6'

    },
    UploadingPohtoTextStyle: {
        marginLeft: SCREEN_WIDTH * 0.05,

    },
    UploadTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 20,
        // fontWeight: '600',


    },
    TakePictureStyle: {
        fontFamily: 'montserrat_medium',
        color: '#8C8C8C',


    },
    CameraImageStyle: {
        width: SCREEN_WIDTH * 0.6,
        height: SCREEN_HEIGHT * 0.27,
        alignSelf: 'center',
        marginVertical: SCREEN_HEIGHT * 0.07

    },
    ButtonContainer: {

    },
    ProfilePhotoContainer: {
        flexDirection: 'row',
        marginTop: SCREEN_HEIGHT * 0.03,
        marginLeft: SCREEN_WIDTH * 0.05

    },
    PhotoTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16
    },
    ProfileTextStyle: {
        fontFamily: 'montserrat_medium',

        fontSize: 16,
        marginLeft: SCREEN_WIDTH * 0.13
    },
    ProfilePhotoImageContainer: {
        flexDirection: 'row',
        // justifyContent:'space-around',
        marginTop: SCREEN_HEIGHT * 0.03,
        marginLeft: SCREEN_WIDTH * 0.03

    },
    PhotoImageStyle: {
        borderRadius: 5,
        borderWidth: 1,
        padding: 16,
        borderColor: '#FF2B8A',
        backgroundColor: '#FF2B8A'
    },
    ProfileImageStyle: {
        // width:SCREEN_WIDTH*0.18,
        borderRadius: 5,
        borderWidth: 1,
        padding: 18,
        borderColor: '#FF2B8A',
        backgroundColor: '#FF2B8A',
        marginLeft: SCREEN_WIDTH * 0.1,
    }
});
