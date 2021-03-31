// Splash
import React, { useState } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView, View } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { Header } from '../../Component/Header';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';


export function GenderScreen({ navigation }) {
    const [ShowGenderOptions, setShowGenderOptions] = useState(false);
    const [SelectedGender, setSelectedGender] = useState('Male')

    return (
        <View style={styles.container}>

            <View >
                <Header
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Gender</Text>
                    }

                />

            </View>

            <View style={styles.EmailContainer}>
                <Text style={styles.EmailTextContainer}>Choose Gender</Text>
            </View>

            <TouchableOpacity onPress={() => setShowGenderOptions(!ShowGenderOptions)}>
                <View style={styles.GenderContainer}>
                    <Text style={styles.GenderTextContainer}>{SelectedGender}</Text>
                    <Icon name={ShowGenderOptions ? "chevron-up" : "chevron-down"} color="#979797" />

                </View>
            </TouchableOpacity >
            {ShowGenderOptions ?
                <View style={styles.GenderOptionContainer}>
                    <TouchableOpacity style={styles.GenderOption} onPress={() => { setSelectedGender('Male'); setShowGenderOptions(!ShowGenderOptions) }}>
                        <Text style={SelectedGender == "Male" ? styles.SelectedGenderText : styles.OptionText}>Male</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.GenderOption} onPress={() => { setSelectedGender('Female'); setShowGenderOptions(!ShowGenderOptions) }}>
                        <Text style={SelectedGender == "Female" ? styles.SelectedGenderText : styles.OptionText}>Female</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.GenderOption} onPress={() => { setSelectedGender('Others'); setShowGenderOptions(!ShowGenderOptions) }}>
                        <Text style={SelectedGender == "Others" ? styles.SelectedGenderText : styles.OptionText}>Others</Text>
                    </TouchableOpacity>
                </View>
                :
                null
            }
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
                        borderRadius: 5,
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
        marginTop: SCREEN_WIDTH * 0.04,
    },
    GenderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        padding: 10,
        marginTop: SCREEN_HEIGHT * 0.01,
        borderColor: '#979797',
        borderRadius: 5

    },
    GenderTextContainer: {
        color: "#979797"
    },
    GenderOptionContainer: {
        borderWidth: 1,
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        // padding: 10,
        marginTop: SCREEN_HEIGHT * 0.015,
        borderColor: '#979797',
        borderRadius: 5

    },
    GenderOption: {
        padding: SCREEN_WIDTH * 0.02
    },
    OptionText: {
        fontFamily: 'montserrat_medium',
        color: "#979797"
    },
    SelectedGenderText: {
        color: "#FF2B8A"
    }

});



