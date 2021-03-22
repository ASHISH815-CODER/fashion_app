// Splash
import React, { useState, useCallback } from 'react';
import { Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView, View, TextInput } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import RangeSlider from 'rn-range-slider';
import { Radio } from 'native-base';
import Slider from "react-native-slider";



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

    <Item img={item.cover_img} />
);

export function UploadingPhotoScreen({ navigation }) {
    const [ShowGenderOptions, setShowGenderOptions] = useState();
    const [SelectedGender, setSelectedGender] = useState('')
    const [CostumeType, setCostumeType] = useState('outfit')
    // const thumbStyle = useCallback(() =>
    //     <Image style={styles.SliderImageStyle}
    //         source={require('../../Assets/Images/SliderImage/SliderImage.png')}>
    //     </Image>, []);
    // const renderRail = useCallback(() => <View style={{ left: SCREEN_WIDTH * 0.02, width: SCREEN_WIDTH * 0.9, height: SCREEN_HEIGHT * 0.02, backgroundColor: '#FF2B8A', borderRadius: 15 }}></View>, []);
    // const renderRailSelected = useCallback(() => <View style={{ backgroundColor: 'green', borderRadius: 15 }}></View>, []);
    // const renderLabel = useCallback(value => null, []);
    // const renderNotch = useCallback(() => <Text>35%</Text>, []);
    // const handleValueChange = useCallback((low, high) => {
    //     console.log(low, high)
    // }, []);




    return (
        <View style={styles.container}>


            <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Entypo name="cross" size={35} color="#000000"
                        style={styles.ProfileImageStyle}>
                    </Entypo>
                </TouchableOpacity>
                <Text style={styles.BackTextStyle}>Photos</Text>
                <View style={styles.ImageView}>
                    <TouchableOpacity>
                        <Image style={styles.Imagestyle}
                            source={require('../../Assets/Images/BackgroundImage/background.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View>





            <SafeAreaView style={styles.Flatlistcontainer}>
                <FlatList
                    horizontal={true}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item}
                    showsHorizontalScrollIndicator={false}
                />
            </SafeAreaView>



            <View>
                <Slider
                    // trackStyle={customStyles4.track}
                    // thumbStyle={customStyles4.thumb}
                    minimumTrackTintColor='#FF2B8A'
                    trackStyle={{
                        paddingVertical: SCREEN_HEIGHT * 0.01, borderRadius: 10, backgroundColor
                            : 'lightgrey'
                    }}
                    // thumbImage={}
                    style={{ width: SCREEN_WIDTH * 0.9, alignSelf: 'center', }}
                    thumbStyle={{
                        backgroundColor: '#FF2B8A',
                        borderRadius: 100,
                        borderWidth: 4,
                        borderColor: '#fff'
                    }}
                //    debugTouchArea={true}
                // animateTransitions={true}
                />

            </View>

            {/* <View style={styles.RangeSliderContainer}>
                <RangeSlider
                    style={styles.slider}
                    // disabled
                    min={0}
                    max={100}
                    step={1}
                    disableRange
                    floatingLabel
                    renderThumb={renderThumb}
                    renderRail={renderRail}
                    renderRailSelected={renderRailSelected}
                    renderLabel={renderLabel}
                    renderNotch={renderNotch}
                    onValueChanged={handleValueChange}
                />

            </View> */}
            <Text style={styles.ProgressStyle}>Uploading Progress</Text>

            <ScrollView>
                <View style={styles.GenderContainer}>
                    <Text style={styles.DetailsTextStyle}>Details</Text>
                    <TouchableOpacity onPress={() => setShowGenderOptions(!ShowGenderOptions)}>
                        <Text style={styles.GenderTextContainer}>Caption Optional</Text>
                    </TouchableOpacity >
                    <Icon style={{ marginTop: SCREEN_HEIGHT * 0.005, left: 2 }} name={ShowGenderOptions ? "chevron-up" : "chevron-down"} color="#979797" />

                </View>

                {ShowGenderOptions ?
                    <View style={styles.GenderOptionContainer}>
                        <TouchableOpacity style={styles.GenderOption}
                            onPress={() => { setSelectedGender('Male'); setShowGenderOptions(!ShowGenderOptions) }}>
                            <Text style={{
                                marginLeft: SCREEN_WIDTH * 0.05, marginVertical: SCREEN_HEIGHT * 0.02, color: '#383838', fontFamily: 'montserrat_medium',
                            }}>Caption</Text>
                            <CustomTextInput
                                HideIcon
                                TextInputProps={{
                                    placeholder: "Write Caption"
                                }}
                            />
                        </TouchableOpacity>

                    </View>
                    :
                    null
                }
                <View style={styles.RadioContainer}>
                    <View style={styles.PrivateContainer}>
                        <Radio selected={CostumeType == 'outfit' ? true : false} onPress={() => setCostumeType('outfit')} color="#FFFFFF" selectedColor='#FF2B8A' />
                        <Text style={styles.PrivateTextContainer}>Outfit</Text>
                    </View>
                    <View style={styles.PublicContainer}>
                        <Radio selected={CostumeType == 'single item' ? true : false} onPress={() => setCostumeType('single item')} color="#FFFFFF" selectedColor='#FF2B8A' />
                        <Text style={styles.PublicTextContainer}>Single Item</Text>
                    </View>

                </View>

                <View style={styles.CategoryContainer}>
                    <Text style={styles.CategoryStyle}>
                        Category
                </Text>
                    <TouchableOpacity style={styles.SelectCategoryStyle}>
                        <Text style={styles.SelectCategoryTextStyle}>Select Category</Text>
                        <Icon name="chevron-down" size={17} color="#8C8C8C"
                            style={{ right: SCREEN_WIDTH * 0.02 }} >
                        </Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.CategoryContainer}>
                    <Text style={styles.CategoryStyle}>
                        Brand
                </Text>
                    <TouchableOpacity style={styles.SelectCategoryStyle}>
                        <Text style={styles.SelectCategoryTextStyle}>Select Brand</Text>
                        <Icon name="chevron-down" size={17} color="#8C8C8C"
                            style={{ right: SCREEN_WIDTH * 0.02 }} >
                        </Icon>
                    </TouchableOpacity>
                </View>

                <View style={styles.CategoryContainer}>
                    <Text style={styles.CategoryStyle}>
                        Color
                </Text>
                    <TouchableOpacity style={styles.SelectCategoryStyle}>
                        <Text style={styles.SelectCategoryTextStyle}>Select Color</Text>
                        <Icon name="chevron-down" size={17} color="#8C8C8C"
                            style={{ right: SCREEN_WIDTH * 0.02 }} >
                        </Icon>
                    </TouchableOpacity>
                </View>

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
                        borderRadius: 5
                    }}
                    buttonTitle="Continue" />
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
        padding: 10
    },
    ProfileImageStyle: {
    },
    ImageView: {
        marginLeft: SCREEN_WIDTH * 0.63
    },
    Imagestyle: {
        width: SCREEN_WIDTH * 0.1,
        height: SCREEN_HEIGHT * 0.05,
        borderRadius: 6

    },
    SliderImageStyle: {
        width: SCREEN_WIDTH * 0.06,
        height: SCREEN_HEIGHT * 0.032,
        borderRadius: 100,
        borderWidth: 4,
        borderColor: '#fff',
        left: SCREEN_WIDTH * 0.03,
        // right:SCREEN_WIDTH*0.03
    },

    BackTextStyle: {
        fontFamily: 'montserrat_medium',

        marginTop: SCREEN_HEIGHT * 0.007,
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.01
    },
    item: {
        marginHorizontal: 3,
        // marginVertical: 5,
        borderRadius: 15
    },
    FlatlistImagecontainer: {
        width: SCREEN_WIDTH * 0.2,
        height: SCREEN_HEIGHT * 0.1,
        resizeMode: 'center'
    },
    TitleSizeContainer: {
        alignItems: 'flex-start',
        paddingLeft: SCREEN_WIDTH * 0.02
    },
    TitleStyle: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    Flatlistcontainer: {
        marginTop: SCREEN_HEIGHT * 0.02,
        marginLeft: SCREEN_WIDTH * 0.02,
    },
    ProgressStyle: {
        fontFamily: 'montserrat_medium',
        marginVertical: SCREEN_HEIGHT * 0.01,
        color: '#8C8C8C',
        marginLeft: SCREEN_WIDTH * 0.05
    },
    DetailsTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 20,
        // marginLeft: SCREEN_WIDTH * 0.03
    },
    DetailsContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    CaptionStyle: {
        fontFamily: 'montserrat_medium',
        color: '#8C8C8C',

        marginLeft: SCREEN_WIDTH * 0.5

    },
    RadioContainer: {
        flexDirection: 'row',
        marginVertical: SCREEN_HEIGHT * 0.02

    },
    PrivateContainer: {
        marginLeft: SCREEN_WIDTH * 0.05,
        flexDirection: 'row',

    },
    PublicContainer: {
        marginLeft: SCREEN_WIDTH * 0.2,
        flexDirection: 'row'
    },
    PrivateTextContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: 'bold'
    },
    PublicTextContainer: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: 'bold'
    },
    CategoryContainer: {
        marginVertical: SCREEN_HEIGHT * 0.02
    },
    CategoryStyle: {
        fontFamily: 'montserrat_medium',
        marginLeft: SCREEN_WIDTH * 0.05
    },
    SelectCategoryStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: SCREEN_HEIGHT * 0.005,
        borderWidth: 1,
        paddingVertical: 13,
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center',
        borderColor: '#8C8C8C',
        borderRadius: 5
    },
    SelectCategoryTextStyle: {
        color: '#8C8C8C',
        left: SCREEN_WIDTH * 0.02
    },
    GenderContainer: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginTop: SCREEN_HEIGHT * 0.03,
        width: SCREEN_WIDTH * 0.9,
        alignSelf: 'center'

    },
    GenderTextContainer: {
        fontFamily: 'montserrat_medium',
        color: "#979797",
        marginLeft: SCREEN_WIDTH * 0.39
    },
    GenderOptionContainer: {
        // borderWidth: 1,
        width: SCREEN_WIDTH * 0.9,
        // alignSelf: 'center',
        // padding: 10,
        marginTop: SCREEN_HEIGHT * 0.01,

    },
    GenderOption: {
        // padding: SCREEN_WIDTH * 0.01
    },
    OptionText: {
        color: "#979797"
    },
    SelectedGenderText: {
        color: "#FF2B8A"
    },
    RangeSliderContainer: {
        marginVertical: SCREEN_HEIGHT * 0.02
    }
});



