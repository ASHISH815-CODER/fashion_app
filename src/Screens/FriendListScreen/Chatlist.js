// ChatContainer

import * as React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/AntDesign';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';


const data = [
    {
        image: require('../../Assets/Images/FriendsImage/Friend3.png'),
        title: 'Tiana Gouse',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '2m ago'

    },
    {
        image: require('../../Assets/Images/FriendsImage2/FriendsImages2.png'),
        title: 'Kaylynn Passaquindici',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '50m ago'

    },
    {
        image: require('../../Assets/Images/ClothsImage/Cloths.png'),
        title: 'Alena Culhane',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '30m ago'
    },
    {
        image: require('../../Assets/Images/CropTopImage/CropTop.png'),
        title: 'Cheyenne Lubin',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '45m ago'

    },
    {
        image: require('../../Assets/Images/TankTop/TankTop.png'),
        title: 'Livia Gouse',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '4m ago'

    },
    {
        image: require('../../Assets/Images/CamiTop/CamiTop.png'),
        title: 'Allison Philips',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '6m ago'

    },
    {
        image: require('../../Assets/Images/TubeTop/TubeTop.png'),
        title: 'Haylie Franci',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '10m ago'

    },
    {
        image: require('../../Assets/Images/TunicTop/TunicTop.png'),
        title: 'Kaiya Gouse',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '1hur'

    },
    {
        image: require('../../Assets/Images/TankTop/TankTop.png'),
        title: 'Livia Gouse',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '2m ago'

    },
    {
        image: require('../../Assets/Images/CamiTop/CamiTop.png'),
        title: 'Allison Philips',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '2m ago'

    },
    {
        image: require('../../Assets/Images/TubeTop/TubeTop.png'),
        title: 'Haylie Franci',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '2m ago'

    },
    {
        image: require('../../Assets/Images/TunicTop/TunicTop.png'),
        title: 'Kaiya Gouse',
        subtitle: 'Letraset sheets containing Lorem',
        Time: '2m ago'

    },


];

export const ChatList = ({ onCardPress }) => {


    const Items = ({ title, img, subtitle, Time }) => (
        <TouchableOpacity onPress={() => onCardPress()}>

            <View style={styles.liststyle}>
                <Image style={styles.Imagescontainer}
                    source={img} />
                <View style={{
                    height: SCREEN_HEIGHT * 0.015, width: SCREEN_WIDTH * 0.03, borderRadius: 20, backgroundColor: '#4CAF50',
                    position: 'absolute', left: SCREEN_WIDTH * 0.12, marginTop: SCREEN_WIDTH * 0.03,
                }}></View>
                <View style={styles.TitleSizeContainer}>
                    <Text style={styles.TitleStyle}>{title}</Text>
                    <Text style={styles.SubtitleStyle}>{subtitle}</Text>
                </View>
                <Text style={styles.TimeStyle}>{Time}</Text>
            </View>
        </TouchableOpacity>
    );

    const render = ({ item }) => (
        <Items title={item.title} img={item.image} subtitle={item.subtitle} Time={item.Time} />
    );

    return (
        <View style={styles.container}>


            <ScrollView>
                <SafeAreaView style={styles.Flatlist}>
                    <FlatList
                        data={data}
                        renderItem={render}
                        keyExtractor={item => item}
                        showsVerticalScrollIndicator={false}

                    />
                </SafeAreaView>
            </ScrollView>

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
        padding: 10,
        alignItems: 'center'
    },
    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        // marginTop: SCREEN_HEIGHT * 0.007,
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.01

    },
    LikeTextStyle: {
        fontFamily: 'montserrat_medium',
        marginTop: SCREEN_HEIGHT * 0.007,
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.65
    },
    Imagestyle: {
        // marginTop: SCREEN_HEIGHT * 0.008,
        width: SCREEN_WIDTH * 0.055,
        height: SCREEN_HEIGHT * 0.022
    },
    ImageViewStyle: {
        left: SCREEN_WIDTH * 0.47
    },
    ProfileStyle: {
        width: SCREEN_WIDTH * 0.09,
        height: SCREEN_HEIGHT * 0.045,
        borderRadius: 6

    },
    SearchImageContainer: {
        left: SCREEN_WIDTH * 0.5,
        // alignSelf: 'center'
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    item: {
        marginHorizontal: 5,
        marginVertical: 5,
        // backgroundColor: '#fff',
        // borderRadius: 10
    },
    FlatlistImagecontainer: {
        width: SCREEN_WIDTH * 0.14,
        height: SCREEN_HEIGHT * 0.07,
        borderRadius: 100,
        resizeMode: 'contain',

    },
    Styling: {
        marginTop: SCREEN_HEIGHT * 0.02,
        borderWidth: 1,
        borderColor: '#E5E5E5',
        paddingVertical: 7
    },
    FlatlistTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        marginLeft: SCREEN_WIDTH * 0.03
    },
    Flatlistcontainer: {
        marginTop: SCREEN_HEIGHT * 0.01,
        marginLeft: SCREEN_WIDTH * 0.04,
    },
    FriendsContainer: {
        paddingVertical: 20,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: '#E5E5E5',
        backgroundColor: '#E5E5E5',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    FriendTextStyle: {
        fontSize: 16,
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.03

    },
    FollowButtonStyle: {
        // marginLeft: SCREEN_WIDTH * 0.2,
        // alignContent:'center',
        fontFamily: 'montserrat_bold',
        borderWidth: 1,
        paddingHorizontal: SCREEN_WIDTH * 0.04,
        paddingVertical: SCREEN_HEIGHT * 0.004,
        // width: SCREEN_WIDTH * 0.25,
        // textAlign: 'center',
        backgroundColor: '#FF2B8A',
        color: '#fff',
        borderColor: '#FF2B8A',
        borderRadius: 5,
        right: SCREEN_WIDTH * 0.03

        // marginTop: SCREEN_HEIGHT * 0.03,
        // shadowColor: '#FF2B8A',

        // alignSelf : 'flex-end'

        // position: 'absolute'

    },
    liststyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5E5',
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        // flex : 1,
        // marginLeft: SCREEN_WIDTH * 0.04
        alignSelf: 'center',
        width: SCREEN_WIDTH * 0.95,
        paddingVertical: 10
        // marginVertical: 5,
        // paddingBottom: 20

    },
    Imagescontainer: {
        height: SCREEN_HEIGHT * 0.08,
        // resizeMode: 'contain',
        borderRadius: 50,
        width: SCREEN_WIDTH * 0.15
        // marginVertical: SCREEN_HEIGHT * 0.01,
        // backgroundColor: '#fff'

    },
    TitleSizeContainer: {

        alignSelf: 'center',
        marginLeft: SCREEN_WIDTH * 0.03,
        // width: SCREEN_WIDTH * 0.4,
        // alignItems: 'flex-start',
        // paddingLeft: SCREEN_WIDTH * 0.02
    },
    TitleStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: '500'
    },
    SubtitleStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 12,
        color: '#8C8C8C'
    },
    TimeStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 10,
        color: '#8C8C8C',
        alignSelf: 'center',
        marginLeft: SCREEN_WIDTH * 0.14
    },

    Flatlist: {
        // flexDirection:'row',
        marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.04,
    },
});