import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text, FlatList, SafeAreaView, } from "react-native"
import { ScrollView } from 'react-native-gesture-handler';
// import { FlatList } from 'react-native-gesture-handler';
// import { SafeAreaView } from 'react-navigation';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo'
import { Header } from '../../Component/Header';
import { Right } from 'native-base';

const DATA = [
    {
        cover_img: require('../../Assets/Images/SearchImages/SearchImages.png'),

    },
    {
        cover_img: require('../../Assets/Images/SearchI/SearchI.png'),

    },
    {
        cover_img: require('../../Assets/Images/SearchImag/SearchImag.png'),

    },
    {
        cover_img: require('../../Assets/Images/Searching/Searching.png'),

    },
    {
        cover_img: require('../../Assets/Images/Searchone/Searchone.png'),

    },
    {
        cover_img: require('../../Assets/Images/Searchtwo/Searchtwo.png'),

    },



];




export function SearchFeedScreen({ navigation }) {

    const [ActiveTab, SetActiveTab] = useState('Top');


    const Item = ({ img }) => (

        <TouchableOpacity onPress={() => navigation.navigate('SearchPeopleScreen')}

            style={styles.item}>

            <Image style={styles.FlatlistImagecontainer}
                source={img} />


        </TouchableOpacity>
    );

    const renderItem = ({ item }) => (

        <Item title={item.title} size={item.size} img={item.cover_img} />
    );
    return (
        <View style={styles.container}>



            <View >
                <Header
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Back</Text>
                    }
                    ImageComponent={
                        <Image style={styles.ProfileStyle}
                            source={require('../../Assets/Images/ProfileImage/Profile.png')}>
                        </Image>
                    }

                />

            </View>

            {/* <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.Imagestyle}
                        source={require('../../Assets/Images/BackImage/BackImage.png')}>
                    </Image>
                </TouchableOpacity>
                <Text style={styles.BackTextStyle}>Back</Text>
                <View style={styles.ImageViewStyle}>
                    <TouchableOpacity>
                        <Image style={styles.ProfileStyle}
                            source={require('../../Assets/Images/ProfileImage/Profile.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
            </View> */}
            <View style={styles.TextInputContainer}>
                <CustomTextInput

                    TextInputProps={{
                        placeholder: "Search Feed"
                    }}

                    IconName="search"
                    IconColor="#000000"
                />
            </View>

            <View style={styles.BarsStyling}>
                <TouchableOpacity onPress={() => SetActiveTab('Top')}>
                    <Text style={{
                        color: ActiveTab == "Top" ? "#FF2B8A" : "#000000",
                        fontFamily: 'montserrat_medium',
                        fontSize: 18
                    }}>Top</Text>

                </TouchableOpacity>
                <TouchableOpacity onPress={() => SetActiveTab('Accounts')}>
                    <Text style={{
                        color: ActiveTab == "Accounts" ? "#FF2B8A" : "#000000",
                        fontFamily: 'montserrat_medium',
                        fontSize: 18,
                        marginLeft: SCREEN_WIDTH * 0.07
                    }}>Accounts</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => SetActiveTab('Tags')}>
                    <Text style={{
                        color: ActiveTab == "Tags" ? "#FF2B8A" : "#000000",
                        fontFamily: 'montserrat_medium',
                        fontSize: 18,
                        marginLeft: SCREEN_WIDTH * 0.07
                    }}>Tags</Text>
                </TouchableOpacity>
            </View>



            <ScrollView>
                <SafeAreaView style={styles.Flatlistcontainer}>
                    <FlatList
                        numColumns={2}
                        data={DATA}
                        renderItem={renderItem}
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
        // alignSelf : 'center'
    },
    ImageContainer: {
        backgroundColor: '#FBF0EF',
        flexDirection: 'row',
        // marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.025,
        padding: 10,
        alignItems: 'center'
    },
    Imagestyle: {
        // width: SCREEN_WIDTH * 0.15,
        // height: SCREEN_HEIGHT * 0.022
        // marginTop: SCREEN_HEIGHT * 0.008,
        width: SCREEN_WIDTH * 0.053,
        height: SCREEN_HEIGHT * 0.022,
        // marginLeft: SCREEN_WIDTH * 0.01

    },
    ImageViewStyle: {
        left: SCREEN_WIDTH * 0.67
    },
    ProfileStyle: {
        width: SCREEN_WIDTH * 0.09,
        height: SCREEN_HEIGHT * 0.045,
        borderRadius: 6,
        marginLeft:SCREEN_WIDTH*0.6
        

    },
    BackTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 16,
        // fontWeight: '400',
        marginLeft: SCREEN_WIDTH * 0.01


    },
    TextInputContainer: {
        marginTop: SCREEN_HEIGHT * 0.03,
        // marginLeft: SCREEN_WIDTH * 0.05,

    },
    BarsStyling: {
        flexDirection: 'row',
        marginLeft: SCREEN_WIDTH * 0.055,
        marginVertical: SCREEN_HEIGHT * 0.02
    },

    item: {
        marginHorizontal: 5,
        marginVertical: 8,
        marginLeft: SCREEN_WIDTH * 0.03,
        // alignContent:'center'
        // backgroundColor: '#fff'

    },

    Flatlistcontainer: {
        width: SCREEN_WIDTH,

        // marginTop: SCREEN_HEIGHT * 0.02,
        // marginLeft: SCREEN_WIDTH * 0.04,
    },
    FlatlistImagecontainer: {
        borderRadius: 15,
        width: SCREEN_WIDTH * 0.44
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
    DetailsTextStyle: {
        fontFamily: 'montserrat_medium',
        fontSize: 20,
        // marginLeft: SCREEN_WIDTH * 0.03
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
});









































