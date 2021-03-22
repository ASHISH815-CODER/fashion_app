// Splash
import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather'
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import ImagePicker from 'react-native-image-crop-picker';




const data = [
    {
        title: 'Outfits',

    },
    {
        title: 'Tops',

    },
    {
        title: 'Bottoms',

    },
    {
        title: 'Accessory',
    },
    {
        title: 'Shoes',
    },


];


const DATA = [
    {
        cover_img: require('../../Assets/Images/ClothsImage/Cloths.png'),
        title: 'Blouse',
        size: 'Size: S',


    },
    {
        cover_img: require('../../Assets/Images/CropTopImage/CropTop.png'),
        title: 'Crop Top',
        size: 'Size: L',
    },
    {
        cover_img: require('../../Assets/Images/TankTop/TankTop.png'),
        title: 'Tank Top',
        size: 'Size: XXL',
    },
    {
        cover_img: require('../../Assets/Images/CamiTop/CamiTop.png'),
        title: 'Cami Top',
        size: 'Size: XL',
    },
    {
        cover_img: require('../../Assets/Images/TubeTop/TubeTop.png'),
        title: 'Tube Top',
        size: 'Size: XL',
    },
    {
        cover_img: require('../../Assets/Images/TunicTop/TunicTop.png'),
        title: 'Tunic Top',
        size: 'Size: S',
    },
    {
        cover_img: require('../../Assets/Images/LongLineTop/LongLineTop.png'),
        title: 'Maxi/Longtop',
        size: 'Size: S',
    },
    {
        cover_img: require('../../Assets/Images/Pemplum/Pemplum.png'),
        title: 'Pemplum',
        size: 'Size: M',
    },


];



export function UserWallScreen({ navigation }) {

    const [Flag, SetFlag] = useState(true);




    const UploadClothing = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
            multiple: true
        }).then(image => {
            console.log(image);
        });
    }

    const Items = ({ title, img }) => (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#fff',
            padding: 13,

        }}>
            <TouchableOpacity
                //  onPress={() => navigation.navigate('')}
                style={styles.items}>
                <Text style={styles.TitleStyles}>{title}</Text>
            </TouchableOpacity>
        </View>
    );

    const render = ({ item }) => (

        <Items title={item.title} />
    );




    const Item = ({ title, size, img }) => (

        <TouchableOpacity
            //  onPress={() => navigation.navigate('FeedScreen')}
            style={styles.item}>

            <Image style={styles.FlatlistImagecontainer}
                source={img} />

            <View style={styles.TitleSizeContainer}>
                <Text style={styles.TitleStyle}>{title}</Text>
                <View style={{ flexDirection: 'row', right: SCREEN_WIDTH * 0.02, marginTop: SCREEN_HEIGHT * 0.01 }}>

                    <Icon onPress={() => SetFlag(!Flag)}
                        style={{ right: SCREEN_WIDTH * 0.02 }}
                        name={Flag ? "hearto" : "heart"} color="#FF2B8A" size={20} />

                    <TouchableOpacity >
                        <Icon style={{}}

                            name="message1" color="#000000" size={18} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.SizeStyle}>{size}</Text>
        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (

        <Item title={item.title} size={item.size} img={item.cover_img} />
    );
    return (
        <View style={styles.container}>

            <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() => UploadClothing()}>
                    <Feather style={{}}

                        name="camera" color="#000000" size={25} />
                </TouchableOpacity>

                <Text style={styles.ElleStyle}>Elle Fanning</Text>

                <TouchableOpacity>
                    <Image style={styles.ProfileStyle}
                        source={require('../../Assets/Images/ProfileImage/Profile.png')}>
                    </Image>
                </TouchableOpacity>
            </View>


            <ScrollView>
                <SafeAreaView style={styles.listcontainer}>
                    <FlatList
                        horizontal={true}
                        data={data}
                        renderItem={render}
                        keyExtractor={item => item}
                        showsHorizontalScrollIndicator={false}
                    // onEndReachedThreshold={false}
                    />
                </SafeAreaView>
            </ScrollView>
            <ScrollView>
                <SafeAreaView style={styles.Flatlistcontainer}>
                    <FlatList
                        numColumns={2}
                        data={DATA}
                        renderItem={renderItem}
                        keyExtractor={item => item}
                    />
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FBF0EF'
    },
    ImageContainer: {
        backgroundColor: '#FBF0EF',
        flexDirection: 'row',
        // marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.025,
        padding: 10,
        justifyContent: 'space-between'
    },
    Imagestyle: {
        // width: SCREEN_WIDTH * 0.15,
        // height: SCREEN_HEIGHT * 0.022
        // marginTop: SCREEN_HEIGHT * 0.008,
        width: SCREEN_WIDTH * 0.055,
        height: SCREEN_HEIGHT * 0.022
    },

    ElleStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.01,
        marginTop: SCREEN_HEIGHT * 0.02


    },
    ProfileStyle: {
        width: SCREEN_WIDTH * 0.09,
        height: SCREEN_HEIGHT * 0.045,
        borderRadius: 6

    },

    BackgroundImageContainer: {
        // flex: 1,
        // marginTop: SCREEN_HEIGHT * 0.04,
        height: SCREEN_HEIGHT * 0.5,
        width: SCREEN_WIDTH,
    },
    ContentContainer: {
        position: 'absolute',
        marginTop: SCREEN_HEIGHT * 0.18
    },
    TextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 21,
        // fontWeight: '400',
        color: '#fff',
        marginLeft: SCREEN_WIDTH * 0.022
    },
    Texingstyle: {
        fontFamily: 'montserrat_bold',
        fontSize: 36,
        // fontWeight: 'bold',
        color: '#fff',
        marginLeft: SCREEN_WIDTH * 0.022
    },
    TickStyle: {
        width: SCREEN_WIDTH * 0.05,
        height: SCREEN_HEIGHT * 0.025,
        marginTop: SCREEN_HEIGHT * 0.022,
        marginLeft: SCREEN_WIDTH * 0.015

    },
    TextingContainer: {
        flexDirection: 'row'
    },
    MiracelContainer: {
        fontFamily: 'montserrat_light',
        fontSize: 13,
        // fontWeight: '200',
        color: '#fff',
        marginLeft: SCREEN_WIDTH * 0.022
    },
    ButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    UpdateContainer: {
        flexDirection: 'row',
        backgroundColor: '#000000',
        marginTop: SCREEN_HEIGHT * 0.027,
        padding: 12,
        width: SCREEN_WIDTH,
        justifyContent: 'space-between'
    },
    LetterContainer: {
        fontFamily: 'montserrat_medium',

        color: "#FF2B8A",
    },
    NumberContainer: {
        fontFamily: 'montserrat_medium',
        color: '#fff',
        // fontWeight: 'bold'
    },
    FollowerContainer: {
        fontFamily: 'montserrat_medium',
        color: '#fff',
        // fontWeight: 'bold',
        marginLeft: SCREEN_WIDTH * 0.04
    },
    FollowerletterContainer: {
        fontFamily: 'montserrat_medium',

        color: "#FF2B8A",
    },
    FollowingContainer: {
        fontFamily: 'montserrat_medium',

        color: '#fff',
        // fontWeight: 'bold',
        marginLeft: SCREEN_WIDTH * 0.04

    },
    FollowingletterContainer: {
        fontFamily: 'montserrat_medium',

        color: "#FF2B8A",
    },
    SelectText: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        padding: 15
    },
    Outfitstyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 17,
        color: '#8C8C8C'
    },
    Tops: {
        fontFamily: 'montserrat_medium',
        fontSize: 17,
        color: '#000000'

    },
    Bottoms: {
        fontSize: 17,
        fontFamily: 'montserrat_medium',

        color: '#8C8C8C'

    },
    Accessory: {
        fontFamily: 'montserrat_medium',

        fontSize: 17,
        color: '#8C8C8C'

    },
    Shoes: {
        fontFamily: 'montserrat_medium',

        fontSize: 17,
        color: '#8C8C8C'
    },
    FlatlistImagecontainer: {
        // marginVertical: SCREEN_HEIGHT * 0.01,
    },
    TitleSizeContainer: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingLeft: SCREEN_WIDTH * 0.01,
        justifyContent: 'space-between'
    },
    TitleStyle: {
        fontFamily: 'montserrat_bold',

        fontSize: 15,
        // fontWeight: 'bold'
    },
    SizeStyle: {
        fontFamily: 'montserrat_medium',
        paddingLeft: SCREEN_WIDTH * 0.01

    },
    item: {
        marginHorizontal: 5,
        marginVertical: 10,
        backgroundColor: '#fff'

    },

    Flatlistcontainer: {
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.04,
    },
    Imagescontainer: {
        width: SCREEN_WIDTH * 0.14,
        height: SCREEN_HEIGHT * 0.07,
        borderRadius: 100,
        resizeMode: 'contain',

    },
    items: {
        // margin
        // Horizontal: 3,
        // width: SCREEN_WIDTH * 0.2
        // marginVertical: 5,
        // backgroundColor: '#fff',
        // borderRadius: 10
    },
    TitleStyles: {
        fontFamily: 'montserrat_bold',
        fontSize: 15,
        color: '#8C8C8C'
    },
    listcontainer: {

        // marginTop: SCREEN_HEIGHT * 0.01,
        // marginLeft: SCREEN_WIDTH * 0.04,
    },
});
