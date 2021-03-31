import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView, Switch } from "react-native"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import { LoginButton } from '../../Component/LoginButton';
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/AntDesign';
import { ChatHeader } from '../../Component/ChatHeader';
import Ionicons from 'react-native-vector-icons/Ionicons'






export default function ChatSettingScreen({ navigation }) {
    const [toggle, setToggle] = useState(false);
    const [Flag, SetFlag] = useState(false);

    const [ChatSettings, setChatSettings] = useState([
        {
            title: "Mute Messages",
            isEnabled: false,
            // onchangeHandler : onchangeHandler()
        },
        {
            title: "Chat History",
            isEnabled: false,
            // onchangeHandler : onchangeHandler()
        },
        {
            title: "Block",
            isEnabled: false,
            // onchangeHandler : onchangeHandler()
        },
    ])


    //spretefunction
    const onselectionchange = (el, i) => {
        let existingData = [...ChatSettings];

        existingData[i].isEnabled = !existingData[i].isEnabled;

        setChatSettings(existingData)
    }



    return (
        <View style={{ color: '#E5E5E5' }}>
            <View >
                <ChatHeader
                    // onIconPress={() => navigate()}
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                            
                        }}>Details</Text>
                    }

                    IconComponent={
                        <Ionicons onPress={() => SetFlag(!Flag)}
                            style={styles.FlagIconStyle}
                            name={Flag ? "flag" : "flag-outline"} color="#000000" size={25} />
                    }

                    SecondIcon={
                        <Icon
                            style={styles.SearchImageContainer}
                            name="infocirlceo" color="#000000" size={25} />
                    }
                />

            </View>
            <View >
                {
                    ChatSettings.map((el, i) => {
                        return (
                            <>
                                <TouchableOpacity onPress={() => onselectionchange(el, i)}>
                                    <View style={styles.DetailsContainer}>
                                        <Text style={styles.DetailsText}>{el.title}</Text>
                                        <View style={styles.Switchcontainer}>
                                            <Switch
                                                // trackColor={{ el.: '#E8E8E8', false: '#E8E8E8' }}
                                                trackColor={el.isEnabled ? { true: '#E8E8E8', false: '#E8E8E8' } : { true: '#', false: '#E8E8E8' }}
                                                thumbColor={el.isEnabled ? "#1F1F1F" : "#FF2B8A"}
                                                onValueChange={(value) => onselectionchange(el, i)}
                                                value={el.isEnabled}
                                            />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                                <View style={{ height: 0.5, backgroundColor: '#E5E5E5', marginTop: SCREEN_HEIGHT * 0.02 }} />

                            </>


                        )
                    })
                }



            </View>
            {
                ChatSettings[2].isEnabled ?
                    <>

                        <View style={styles.ItemBackgroundStyle}>


                            <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly' }}>
                                <Text style={styles.BlockDalogText}>Are you sure to Block</Text>
                                <Text style={{ fontFamily: 'montserrat_bold' }}> Tiana Cousee</Text>
                            </View>
                            <Text style={{ textAlign: 'center' }}>Request?</Text>

                            <View style={styles.ButtonContainer}>

                                <LoginButton onSubmitPress={() => navigation.navigate('ChatSettingBlockScreen')}
                                    ButtonTextStyle={{ color: "#fff", fontSize: 16, fontFamily: 'montserrat_bold' }}
                                    ButtonStyle={{
                                        backgroundColor: "#FF2B8A",
                                        width: SCREEN_WIDTH * 0.22,
                                        height: SCREEN_HEIGHT * 0.05,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: SCREEN_HEIGHT * 0.01,
                                        borderRadius: 8,
                                    }}
                                    buttonTitle="Yes" />

                                <LoginButton

                                    ButtonTextStyle={{
                                        color: "#FFFFFF", fontSize: 16, fontFamily: 'montserrat_bold',
                                    }}
                                    ButtonStyle={{
                                        backgroundColor: "#383838",
                                        width: SCREEN_WIDTH * 0.22,
                                        height: SCREEN_HEIGHT * 0.05,
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: SCREEN_HEIGHT * 0.01,
                                        borderRadius: 8,

                                    }}
                                    buttonTitle="No" />
                            </View>

                        </View>
                    </>
                    : null
            }
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
        alignItems: 'center',
        alignSelf: 'center',
        width: SCREEN_WIDTH,
        justifyContent: 'space-between',
        paddingVertical: SCREEN_HEIGHT * 0.04,
        paddingHorizontal: SCREEN_WIDTH * 0.04,

    },
    SearchImageContainer:{
left:SCREEN_WIDTH*0.025
    },
    ItemBackgroundStyle: {
        paddingVertical: SCREEN_HEIGHT * 0.039,
        backgroundColor: '#FBF0EF',
        // left : SCREEN_WIDTH * 0.06,
        borderRadius: 10,
        width: SCREEN_WIDTH * 0.95,
        alignSelf: 'center'

    },
    Switchcontainer: {
        flex: 1,
        tintColor: '#1F1F1F'
    },
    GroupImageView: {
        width: SCREEN_WIDTH * 0.12,
        height: SCREEN_HEIGHT * 0.04,
        flexDirection: 'row'
    },

    FlagImagestyle: {
        width: SCREEN_WIDTH * 0.061,
        height: SCREEN_HEIGHT * 0.032,
        right: SCREEN_HEIGHT * 0.02,

    },
    InfoImagestyle: {
        width: SCREEN_WIDTH * 0.061,
        height: SCREEN_HEIGHT * 0.03,
    },
    Imagestylesecond: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_HEIGHT * 0.02,
    },

    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 17,
        paddingHorizontal: SCREEN_WIDTH * 0.02
    },
    DetailsText: {
        fontFamily: 'montserrat_medium',
        fontSize: 17,

    },

    BlockDialogText: {
        fontFamily: 'montserrat_medium',
        fontSize: 14,

    },
    DialogLigihtText: {
        fontFamily: 'montserrat_bold',
        fontSize: 14,
        paddingLeft: SCREEN_WIDTH * 0.02,
        paddingRight: SCREEN_WIDTH * 0.02


    },

    DetailsContainer: {
        fontSize: 15,
        color: '#000000',
        fontFamily: 'montserrat_medium',
        padding: SCREEN_HEIGHT * 0.9,
        padding: SCREEN_WIDTH * 0.04,
        flexDirection: 'row',
        alignItems: 'center'

    },

    Item_Style: {
        flexDirection: 'row',
        padding: 20,
        backgroundColor: '#FBF0EF',

        // left : SCREEN_WIDTH * 0.06,

    },
    ButtonContainer: {
        width: SCREEN_WIDTH * 0.6,
        alignSelf: 'center',
        flexDirection: 'row',
        // alignItems: 'center',
        // alignSelf: 'center',
        // paddingHorizontal :SCREEN_HEIGHT * 0.1,
        justifyContent: 'space-evenly'
    },

}
)

