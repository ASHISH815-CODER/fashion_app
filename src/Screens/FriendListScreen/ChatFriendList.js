// ChatContainer

import * as React from 'react';
// import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
// import Icon from 'react-native-vector-icons/AntDesign';
// import { CustomTextInput } from '../../Component/CutomTextInput';
// import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';


const DATA = [
    {
        cover_img: require('../../Assets/Images/FriendsImage/Friend3.png'),
        // title: 'Blouse',

    },
    {
        cover_img: require('../../Assets/Images/FriendsImage2/FriendsImages2.png'),
        // title: 'Crop Top',

    },
    {
        cover_img: require('../../Assets/Images/TankTop/TankTop.png'),
        // title: 'Tank Top',

    },
    {
        cover_img: require('../../Assets/Images/CamiTop/CamiTop.png'),
        // title: 'Cami Top',
    },
    {
        cover_img: require('../../Assets/Images/TubeTop/TubeTop.png'),
        // title: 'Tube Top',
    },
    {
        cover_img: require('../../Assets/Images/TunicTop/TunicTop.png'),
        // title: 'Tunic Top',
    },
    {
        cover_img: require('../../Assets/Images/LongLineTop/LongLineTop.png'),

    },
    {
        cover_img: require('../../Assets/Images/Pemplum/Pemplum.png'),

    },
];

const data = [
    {
        image: require('../../Assets/Images/FriendsImage/Friend3.png'),
        title: 'Tiana Gouse',

    },
    {
        image: require('../../Assets/Images/FriendsImage2/FriendsImages2.png'),
        title: 'Kaylynn Passaquindici Arcand',


    },
    {
        image: require('../../Assets/Images/ClothsImage/Cloths.png'),
        title: 'Alena Culhane',

    },
    {
        image: require('../../Assets/Images/CropTopImage/CropTop.png'),
        title: 'Cheyenne Lubin',

    },
    {
        image: require('../../Assets/Images/TankTop/TankTop.png'),
        title: 'Livia Gouse',

    },
    {
        image: require('../../Assets/Images/CamiTop/CamiTop.png'),
        title: 'Allison Philips',
    },
    {
        image: require('../../Assets/Images/TubeTop/TubeTop.png'),
        title: 'Haylie Franci',
    },
    {
        image: require('../../Assets/Images/TunicTop/TunicTop.png'),
        title: 'Kaiya Gouse',
    },


];



export const ChatFriendList = () => {


    const Item = ({ title, img }) => (
        <TouchableOpacity
            //  onPress={() => navigation.navigate('')}
            style={styles.item}>
            <Image style={styles.FlatlistImagecontainer}
                source={img} />
            <View style={{
                height: SCREEN_HEIGHT * 0.015, width: SCREEN_WIDTH * 0.03, borderRadius: 20, backgroundColor: '#4CAF50',
                position: 'absolute', left: SCREEN_WIDTH * 0.1
            }}></View>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (

        <Item title={item.title} img={item.cover_img} />
    );


    const Items = ({ title, img }) => (
        <View style={styles.liststyle}>
            <Image style={styles.Imagescontainer}
                source={img} />
            <View style={{
                height: SCREEN_HEIGHT * 0.015, width: SCREEN_WIDTH * 0.03, borderRadius: 20, backgroundColor: '#4CAF50',
                position: 'absolute', left: SCREEN_WIDTH * 0.12, marginTop: SCREEN_WIDTH * 0.03,
            }}></View>
            <View style={styles.TitleSizeContainer}>
                <Text style={styles.TitleStyle}>{title}</Text>
            </View>
        </View>
    );

    const render = ({ item }) => (
        <Items title={item.title} img={item.image} />
    );

    return (
        <View style={styles.container}>
            <View style={styles.Styling}>
                <Text style={styles.FlatlistTextStyle}>New Friends</Text>
                <ScrollView>
                    <SafeAreaView style={styles.Flatlistcontainer}>
                        <FlatList
                            horizontal={true}
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item}
                            showsHorizontalScrollIndicator={false}
                        />
                    </SafeAreaView>
                </ScrollView>
            </View>
            <View style={styles.FriendsContainer}>
                <Text style={styles.FriendTextStyle}>Friends</Text>
                <Text style={styles.FollowButtonStyle}>201</Text>
            </View>
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
        fontWeight: '500'
    },

    Flatlist: {
        // flexDirection:'row',
        marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.04,
    },
});