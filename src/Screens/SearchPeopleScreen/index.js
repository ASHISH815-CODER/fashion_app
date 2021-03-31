import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView, TextInput } from "react-native"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Popover from 'react-native-popover-view/dist/Popover';
import { CustomTextInput } from '../../Component/CutomTextInput';

export default function SearchPeopleScreen({ navigation }) {
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);
    const [ShowDotOptions, setShowDotOptions] = useState();

    const [RequestNotification] = useState([
        {
            isVerified: true,
            Searchpeopleimg: require('../../Assets/Images/SearchPeople/searchpeople.png'),
            Searchpeopletittle: 'kaylynn Passaquindici Arcand'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/SearchPeoplefirst/searchpeoplefirst.png'),
            Searchpeopletittle: 'Kaiya Baptista'
        },
        {
            isVerified: true,
            Searchpeopleimg: require('../../Assets/Images/Searchpeoplesecond/searchsecond.png'),
            Searchpeopletittle: 'Kaiya Gouse'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/searchpeoplethird/searchpeoplethird.png'),
            Searchpeopletittle: 'Kianna Lipshutz'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/SearchPeople/searchpeople.png'),
            Searchpeopletittle: 'kaylynn Passaquindici Arcand'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/SearchPeoplefirst/searchpeoplefirst.png'),
            Searchpeopletittle: 'Kaiya Baptista'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/Searchpeoplesecond/searchsecond.png'),
            Searchpeopletittle: 'Kaiya Gouse'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/searchpeoplethird/searchpeoplethird.png'),
            Searchpeopletittle: 'Kianna Lipshutz'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/SearchPeople/searchpeople.png'),
            Searchpeopletittle: 'kaylynn Passaquindici Arcand'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/SearchPeoplefirst/searchpeoplefirst.png'),
            Searchpeopletittle: 'Kaiya Baptista'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/Searchpeoplesecond/searchsecond.png'),
            Searchpeopletittle: 'Kaiya Gouse'
        },
        {
            isVerified: false,
            Searchpeopleimg: require('../../Assets/Images/searchpeoplethird/searchpeoplethird.png'),
            Searchpeopletittle: 'Kianna Lipshutz'
        },
    ])

    return (
        <View>
            <View style={styles.ImageContainer}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image style={styles.Imagestylesecond}
                            source={require('../../Assets/Images/BackImage/BackImage.png')}>
                        </Image>
                    </TouchableOpacity>
                    <Text style={styles.BackTextStyle}>Back</Text>

                </View>
                <View style={{
                    alignContent: 'flex-end', alignSelf: 'center',
                    borderWid0th: 1, borderRadius: 10, justifyContent: 'center', alialignItems: 'center', borderColor: "white", width: SCREEN_WIDTH * 0.15, height: SCREEN_HEIGHT * 0.07
                }}>
                    <Image
                        style={{ resizeMode: 'contain', borderRadius: 20, width: SCREEN_WIDTH * 0.15, height: SCREEN_HEIGHT * 0.09 }}
                        source={require('../../Assets/Images/ProfileImage/Profile.png')}
                    />
                </View>

            </View>



            <View style={styles.TextInputContainer}>

                <CustomTextInput

                    TextInputProps={{
                        placeholder: "Search Feed"
                    }}

                    IconName="search"
                    IconColor="#000000"
                />
            </View>
            <View style={{ padding: SCREEN_WIDTH * 0.02 }} >






                {/* <View style={styles.textInputStyle}></View> */}

                {/* 
                    <TextInput
                        style={{
                            height: SCREEN_HEIGHT * 0.07,
                            width: SCREEN_WIDTH * 0.93,
                            paddingHorizontal: SCREEN_WIDTH * 0.1,
                            borderWidth: 1,
                            paddingLeft: 10,
                            margin: 5,
                            borderRadius: 5,
                            borderColor: '#E5E5E5',
                            backgroundColor: '#FCFCFE',
                        }}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder=""
                        keyboardType="text"
                    >
                        <Image
                            style={{ maalignItems: 'center' }}
                            source={require('../../Assets/Images/Search/search.png')}
                        />
                    </TextInput> */}
                {/* <Text style={{
                        marginLeft: SCREEN_WIDTH * 0.02,
                        fontSize: 15,
                        color: '#383838',
                        fontFamily: 'montserrat_medium', alignSelf: 'center', textAlign: 'right'
                    }}>Cancel</Text> */}


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>


                    <ScrollView >
                        <View style={{ alignSelf: 'flex-start' }}>
                            {
                                RequestNotification.map((el, i) => {
                                    return (
                                        <>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: SCREEN_HEIGHT * 0.02, width: SCREEN_WIDTH * 0.96, alignSelf: 'center' }}>
                                                <View style={{ borderWidth: 1, borderRadius: 100, alignItems: 'center', justifyContent: 'center', borderColor: "white", width: SCREEN_WIDTH * 0.14, height: SCREEN_HEIGHT * 0.07 }}>
                                                    <Image
                                                        style={{ resizeMode: 'contain', borderRadius: 100, width: SCREEN_WIDTH * 0.14, height: SCREEN_HEIGHT * 0.09 }}
                                                        source={el.Searchpeopleimg}
                                                    />
                                                </View>
                                                <Text style={styles.TitleStyle}>{el.Searchpeopletittle}
                                                </Text>
                                                <View style={{ alignSelf: 'center', }}>
                                                    <Popover
                                                        isVisible={el.showOptions}
                                                        onRequestClose={() => setShowDotOptions(false)}
                                                        placement="bottom"
                                                        arrowStyle={{ width: 0, height: 0 }}
                                                        backgroundStyle={{ backgroundColor: 'rgba(255,255,255,0.20)' }}
                                                        from={(
                                                            <TouchableOpacity onPress={() => setShowDotOptions(!ShowDotOptions)}>
                                                                <Entypo name="dots-three-vertical" size={20} color="#E5E5E5" textAlign="center">

                                                                </Entypo>
                                                            </TouchableOpacity >
                                                            //   <TouchableOpacity onPress={() => setShowPopover(true)}>
                                                            //     <Text>Press here to open popover!</Text>
                                                            //   </TouchableOpacity>
                                                        )}
                                                    >

                                                        <View style={{ borderWidth: 1, borderRadius: 5, borderColor: '#E7E7E7', backgroundColor: '#FCFCFE' }}>
                                                            <Text style={{
                                                                marginLeft: SCREEN_WIDTH * 0.03, marginRight: SCREEN_WIDTH * 0.03, marginVertical: SCREEN_HEIGHT * 0.02, color: '#383838', fontFamily: 'montserrat_medium',
                                                            }}>Send Friend Request</Text>

                                                            <View style={{ flex: 1, borderWidth: 1, borderColor: '#E7E7E7', marginLeft: SCREEN_WIDTH * 0.03, marginRight: SCREEN_WIDTH * 0.03 }} />

                                                            <Text style={{
                                                                marginLeft: SCREEN_WIDTH * 0.03, marginRight: SCREEN_WIDTH * 0.03, marginVertical: SCREEN_HEIGHT * 0.02, color: '#383838', fontFamily: 'montserrat_medium',
                                                            }}>Block</Text>
                                                        </View>
                                                        {/* <Text style={{padding: SCREEN_WIDTH}}>This is the contents of the popover</Text> */}
                                                    </Popover>
                                                    {/* <TouchableOpacity onPress={() => setShowDotOptions(!ShowDotOptions)}>
                                                            <Entypo name="dots-three-vertical" size={20} color="#E5E5E5" textAlign="center">

                                                            </Entypo>
                                                        </TouchableOpacity > */}

                                                    {/* {ShowDotOptions ?
                                                        <View >
                                                           
                                                            <View style={{ borderWidth: 1, borderRadius: 10, borderColor: '#E5E5E5' }}>
                                                                <Text style={{
                                                                    marginLeft: SCREEN_WIDTH * 0.05, marginVertical: SCREEN_HEIGHT * 0.02, color: '#383838', fontFamily: 'montserrat_medium',
                                                                }}>Send Friend Request</Text>

                                                                <View style={{ flex: 1, borderWidth: 1, borderColor: '#E5E5E5' }} />

                                                                <Text style={{
                                                                    marginLeft: SCREEN_WIDTH * 0.05, marginVertical: SCREEN_HEIGHT * 0.02, color: '#383838', fontFamily: 'montserrat_medium',
                                                                }}>Block</Text>
                                                            </View>

                                                        </View>
                                                        :
                                                        null
                                                    }  */}

                                                </View>

                                            </View>


                                        </>


                                    )
                                })

                            }

                        </View>

                    </ScrollView>

                </View>


            </View>


        </View>


    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    ImageContainer: {
        backgroundColor: '#FCEAE8',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        width: SCREEN_WIDTH,
        justifyContent: 'space-between',
        paddingVertical: SCREEN_HEIGHT * 0.03,
        paddingHorizontal: SCREEN_WIDTH * 0.04,

    },

    Imagestyle: {
        width: SCREEN_WIDTH * 0.07,
        height: SCREEN_HEIGHT * 0.04,



    },
    TextInputContainer: {
        marginTop: SCREEN_HEIGHT * 0.03,
        // marginLeft: SCREEN_WIDTH * 0.05,


    },

    Imagestylesecond: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_HEIGHT * 0.02,



    },

    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        paddingHorizontal: SCREEN_WIDTH * 0.03
    },
    item: {

        borderRadius: 50,


    },

    FlatlistImagecontainer: {
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_HEIGHT * 0.1,
    },

    TitleStyle: {
        flexDirection: 'row',
        // marginLeft: SCREEN_WIDTH * 0.02,
        width: SCREEN_WIDTH * 0.72,
        alignItems: 'center',
        fontSize: 14,
        color: '#383838',
        fontFamily: 'montserrat_medium',
        alignSelf: 'center',

    },
    Flatlistcontainer: {

        padding: SCREEN_HEIGHT * 0.09,
        padding: SCREEN_WIDTH * 0.02,

    },
    Item_Style: {
        flexDirection: 'row',
        padding: 20,
        borderRadius: 25,
        color: '#FBFBFB',
        borderColor: '#FBFBFB',
        opacity: 1,
        borderWidth: 1,
        marginVertical: SCREEN_HEIGHT * 0.01,
        elevation: 0.4
    },
    textInputStyle: {
        height: SCREEN_HEIGHT * 0.07,
        width: SCREEN_WIDTH * 0.76,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderRadius: 5,
        borderColor: '#E5E5E5',
        backgroundColor: '#FCFCFE',
    },
}

)