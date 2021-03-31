// Splash
import * as React from 'react';
import { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView, } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Header } from '../../Component/Header';


const ENTRIES1 = [
    {
        illustration: require('../../Assets/Images/BackgroundImage/background.png'),

    },

    {
        illustration: require('../../Assets/Images/ProfileImage/Profile.png'),

    },
    {
        illustration: require('../../Assets/Images/BackgroundImage/background.png'),

    },


];


//   const { width: screenWidth } = Dimensions.get('window');



const render = ({ item, navigation }, parallaxProps) => {

    return (


        <View style={styles.item}>

            <Image
                source={item.illustration}

                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}

            />



        </View>
    );
};




const DATA = [
    {
        cover_img: require('../../Assets/Images/ClothsImage/Cloths.png'),
        title: 'Blouse',

    },
    {
        cover_img: require('../../Assets/Images/CropTopImage/CropTop.png'),
        title: 'Crop Top',

    },
    {
        cover_img: require('../../Assets/Images/TankTop/TankTop.png'),
        title: 'Tank Top',

    },
    {
        cover_img: require('../../Assets/Images/CamiTop/CamiTop.png'),
        title: 'Cami Top',
    },
    {
        cover_img: require('../../Assets/Images/TubeTop/TubeTop.png'),
        title: 'Tube Top',
    },
    {
        cover_img: require('../../Assets/Images/TunicTop/TunicTop.png'),
        title: 'Tunic Top',
    },
    {
        cover_img: require('../../Assets/Images/LongLineTop/LongLineTop.png'),
        title: 'Maxi/Longline Top',
    },
    {
        cover_img: require('../../Assets/Images/Pemplum/Pemplum.png'),
        title: 'Pemplum',
    },
];

const Item = ({ title, img }) => (
    <TouchableOpacity
        //  onPress={() => navigation.navigate('')}
        style={styles.item}>
        <Image style={styles.FlatlistImagecontainer}
            source={img} />
        <View style={styles.TitleSizeContainer}>
            <Text style={styles.TitleStyle}>{title}</Text>
        </View>
    </TouchableOpacity>
);

const renderItem = ({ item }) => (

    <Item title={item.title} img={item.cover_img} />
);

export function FeedScreen({ navigation }) {

    const [activeSlide, setActiveSlide] = useState(0);


    const [entries, setEntries] = useState([]);
    const carouselRef = useRef(null);

    const goForward = () => {
        carouselRef.current.snapToNext();
    };

    const goBackward = () => {
        carouselRef.current.snapToPrev();
    };

    useEffect(() => {
        setEntries(ENTRIES1);
    }, []);




    return (
        <View style={styles.container}>
            <View >
                <Header
                    onIconPress={() => navigate('SearchScreen')}
                    currentObject = {navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Back</Text>
                    }
                    IconComponent={
                        <Icon
                            // style={styles.SearchContainer}
                            name="search" color="#000000" size={18}
                        />
                    }
                />

            </View>

            <ScrollView>

                <View style={styles.carausalStyle}>
                    <TouchableOpacity onPress={goForward}>
                    </TouchableOpacity>
                    <Carousel
                        ref={carouselRef}
                        sliderWidth={SCREEN_WIDTH}
                        sliderHeight={SCREEN_HEIGHT}
                        itemWidth={SCREEN_WIDTH}
                        data={entries}
                        renderItem={render}
                        // hasParallaxImages={true}
                        onSnapToItem={(index) => setActiveSlide(index)}

                    />

                    <SimpleLineIcons onpress={goBackward}
                        style={{
                            position: 'absolute',
                            marginLeft: SCREEN_HEIGHT * 0.01,
                            marginTop: SCREEN_HEIGHT * 0.25,
                            borderWidth: 1,
                            borderRadius: 50,
                            padding: 5,
                            backgroundColor: '#000000'
                        }}
                        name="arrow-left" color="#fff" size={18} />


                    <SimpleLineIcons onPress={goForward}
                        style={{
                            position: 'absolute',
                            marginLeft: SCREEN_HEIGHT * 0.455,
                            marginTop: SCREEN_HEIGHT * 0.25,
                            borderWidth: 1,
                            borderRadius: 50,
                            padding: 5,
                            backgroundColor: '#000000'
                        }}
                        name="arrow-right" color="#fff" size={18} />

                    <View style={{ position: 'absolute', alignSelf: 'center', marginTop: SCREEN_HEIGHT * 0.43 }}>
                        <Pagination
                            dotsLength={3}
                            activeDotIndex={activeSlide}
                            containerStyle={{ width: SCREEN_WIDTH * 0.3 }}
                            dotStyle={{
                                width: 50,
                                height: 5,
                                borderRadius: 5,
                                marginHorizontal: 4,
                                backgroundColor: '#FF2B8A'
                            }}
                            inactiveDotStyle={{
                                width: 15,
                                height: 5,
                                borderRadius: 5,
                                marginHorizontal: 4,
                                backgroundColor: '#E5E5E5'
                                // Define styles for inactive dots here
                            }}
                            inactiveDotOpacity={1}
                            inactiveDotScale={0.6}
                        />
                    </View>


                </View>

                <View style={styles.ContentContainer}>
                    <Text style={styles.BlouseStyle}>Blouse</Text>
                    <View style={styles.ContentImages}>
                        <TouchableOpacity


                            style={styles.ContentUserImage}>
                            <Icon name="user" color="#FF2B8A" size={28}></Icon>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ContentLikeImage}>
                            <Icon name="hearto" color="#FF2B8A" size={28}></Icon>
                        </TouchableOpacity >
                        <TouchableOpacity style={styles.ContentShareImage}>
                            <SimpleLineIcons name="share" color="#FF2B8A" size={28}></SimpleLineIcons>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text style={styles.BrandContainer}>Brand: Gucci</Text>
                <Text
                    style={styles.ClothInfromationContainer}>
                    This one cute garment has long sleeves and elasticated detail below
                    the bust with short gathers. When you want to hide your belly
                    fat and still look stylish.
                    </Text>
                <View style={styles.ColorTextImageContainer}>
                    <Text style={styles.ColorContainer}>Color</Text>
                    <Image style={styles.ColorImageContainer}
                        source={require('../../Assets/Images/ColorImage/Color.png')}>
                    </Image>
                    <Text style={styles.SizeContainer}>Size</Text>
                    <Image style={styles.SizeImageContainer}
                        source={require('../../Assets/Images/SizeImage/Size.png')}>
                    </Image>
                </View>
                <Text style={styles.WearContainer}>Elle Fanning is Wearing</Text>
                <Text style={styles.CaptionContainer}>Caption Optional</Text>
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
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#FBF0EF'
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
        height: SCREEN_HEIGHT * 0.022
    },
    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.015
    },
    SearchContainer: {
        marginLeft: SCREEN_WIDTH * 0.75
    },
    item: {
        // width: SCREEN_WIDTH,
        // height: SCREEN_HEIGHT,
        // alignSelf:'center'
    },
    // imageContainer: {
    //     width: SCREEN_WIDTH,
    //     height: SCREEN_HEIGHT,

    // },
    carausalStyle: {

    },


    image: {
        resizeMode: 'cover',
        height: SCREEN_HEIGHT * 0.5,
        width: SCREEN_WIDTH,
    },
    // Viewcontainer: {

    // },

    // TextStyle: {
    //     fontSize: 40,
    //     marginTop: SCREEN_HEIGHT * 0.04,

    // },
    // TextStyleContainer: {
    //     fontSize: 15,
    //     marginVertical: SCREEN_HEIGHT * 0.03,
    //     fontWeight: 'bold'
    // },
    Browsecontainer: {
        fontSize: 15,
        marginVertical: SCREEN_HEIGHT * 0.03,
        fontWeight: 'bold'
    },

    BackgroundImageContainer: {
        // flex: 1,
        // marginTop: SCREEN_HEIGHT * 0.04,
        height: SCREEN_HEIGHT * 0.5,
        width: SCREEN_WIDTH,
    },
    BlouseStyle: {
        fontFamily: 'montserrat_bold',
        fontSize: 20,
        // fontWeight: '600',
    },
    ContentContainer: {
        marginVertical: SCREEN_HEIGHT * 0.01,
        flexDirection: 'row',
        paddingLeft: 9,
        justifyContent: 'flex-start'
    },
    ContentImages: {
        marginLeft: SCREEN_WIDTH * 0.5,
        flexDirection: 'row',
    },
    ContentUserImage: {
        // marginLeft:SCREEN_WIDTH*0.04,
        // width: SCREEN_WIDTH * 0.072,
        // height: SCREEN_HEIGHT * 0.033
    },
    ContentLikeImage: {
        marginLeft: SCREEN_WIDTH * 0.03,
        // width: SCREEN_WIDTH * 0.072,
        // height: SCREEN_HEIGHT * 0.035
    },
    ContentShareImage: {
        marginLeft: SCREEN_WIDTH * 0.03,
        // width: SCREEN_WIDTH * 0.074,
        // height: SCREEN_HEIGHT * 0.038
    },
    BrandContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 20,
        color: '#979797',
        marginLeft: SCREEN_WIDTH * 0.02,
        marginVertical: SCREEN_HEIGHT * 0.005,

    },
    ClothInfromationContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 13,
        color: '#979797',
        marginLeft: SCREEN_WIDTH * 0.02
    },
    ColorTextImageContainer: {
        flexDirection: 'row',
        marginLeft: SCREEN_WIDTH * 0.02,
        marginVertical: SCREEN_HEIGHT * 0.01,

    },
    ColorContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 24,
        marginTop: SCREEN_HEIGHT * 0.01
    },
    ColorImageContainer: {
        marginLeft: SCREEN_WIDTH * 0.01,
        // width: SCREEN_WIDTH * 0.1,
        // height: SCREEN_HEIGHT * 0.08
    },
    SizeContainer: {
        fontFamily: 'montserrat_medium',

        fontSize: 24,
        marginTop: SCREEN_HEIGHT * 0.01,
        marginLeft: SCREEN_WIDTH * 0.1
    },
    SizeImageContainer: {
        marginLeft: SCREEN_WIDTH * 0.01,
        // width: SCREEN_WIDTH * 0.1,
        // height: SCREEN_HEIGHT * 0.08
    },
    WearContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 22,
        // fontWeight: '600',
        marginLeft: SCREEN_WIDTH * 0.02
    },
    CaptionContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 14,
        color: '#979797',
        marginTop: SCREEN_HEIGHT * 0.02,
        marginLeft: SCREEN_WIDTH * 0.02
    },
    Flatlistcontainer: {
        marginTop: SCREEN_HEIGHT * 0.02,
        marginLeft: SCREEN_WIDTH * 0.04,
    },
    TitleStyle: {
        fontFamily: 'montserrat_bold',
        fontSize: 15,
        // fontWeight: 'bold'
    },
    item: {
        marginHorizontal: 8,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    FlatlistImagecontainer: {
        // marginVertical: SCREEN_HEIGHT * 0.01,
    },
    TitleSizeContainer: {
        alignItems: 'flex-start',
        paddingLeft: SCREEN_WIDTH * 0.02
    },
});
