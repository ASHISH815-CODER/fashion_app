// Splash
import * as React from 'react';
import { useState, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native"
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
// import { GiftedChat } from 'react-native-gifted-chat'
import { Avatar, Bubble, Composer, GiftedAvatar, GiftedChat, InputToolbar, Send, Message } from 'react-native-gifted-chat';

// class CustomMessage extends Message {
//     renderAvatar() {
//         return (
//             <Avatar {...this.getInnerComponentProps()} />
//         );
//     }
// }

export function ChatScreen({ navigation }) {

    const [Flag, SetFlag] = useState(false);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello , How are You',
                // avatar: require('../../Assets/Images/FriendsImage/Friend3.png'),
                createdAt: new Date(),
                // avatar: require('../../Assets/Images/FriendsImage/Friend3.png'),
                user: {
                    _id: 2,
                    name: '',
                    avatar: require('../../Assets/Images/FriendsImage/Friend3.png'),
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])



    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                textStyle={{
                    right: {
                        color: '#fff',
                    },
                }}
                wrapperStyle={{
                    left: {
                        backgroundColor: '#EBEBEB',
                    },
                    right: {
                        backgroundColor: '#FF2B8A',
                    },
                }}
            />
        );
    }

    // const renderAvatar = (props) => {
    //     return (
    //         // <Avatar {...props} showAvatarForEveryMessage position = 'right'>
    //         //      <Image
    //         //         style={{ width: SCREEN_WIDTH * 0.02, height: SCREEN_HEIGHT * 0.01 }}
    //         //         source={require('../../Assets/Images/FriendsImage/Friend3.png')} />
    //         //         <View style = {{backgroundColor : 'green', height : 50, width : 50}}></View>
    //         // </Avatar>
    //         <GiftedAvatar {...props}>
    //             <Image
    //                 style={{ width: SCREEN_WIDTH * 0.02, height: SCREEN_HEIGHT * 0.01 }}
    //                 source={require('../../Assets/Images/FriendsImage/Friend3.png')} />
    //         </GiftedAvatar>
    //     )
    // }



    //    const renderComposer = (props) => {
    //         return(
    //         <TextInput
    //            {...props}
    //            styles={{backgroundColor:"#666"}}
    //         />
    //       )
    //   } 


    // const renderComposer = (props) => {

    //     <View style={{}}>
    //         <Composer
    //             {...props}
    //             // composerHeight: number | undefined;
    //             // text : string;
    //             // placeholderTextColor: string;
    //             // placeholder="Message..."
    //         // textInputProps: null;
    //         // multiline: boolean;
    //         // disableComposer: boolean;
    //         // textInputStyle = {{
    //         //     borderColor :"#f5f5f5",
    //         //     borderWidth : 0.5,
    //         //     borderRadius : 10,
    //         //     elevation : 1,
    //         //     width : SCREEN_WIDTH*0.8
    //         //     // maxHeight : deviceDimesions.Height*0.15,
    //         // }}
    //         // textInputAutoFocus: boolean;
    //         // keyboardAppearance: string;
    //         // onTextChanged: () => void;
    //         // onInputSizeChanged: () => void;
    //         />
    //     </View>

    // }






    const renderSend = (props) => {
        return < Send {...props}
        >

            <View style={{}}>
                <Image
                    style={{ width: SCREEN_WIDTH * 0.11, height: SCREEN_HEIGHT * 0.055, }}
                    source={require('../../Assets/Images/Sendbutton/Sendbutton.png')} resizeMode={'contain'} />
            </View>
        </Send >
    }



    return (
        <View style={styles.container}>

            <View style={styles.ImageContainer}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.Imagestyle}
                        source={require('../../Assets/Images/BackImage/BackImage.png')}>
                    </Image>
                </TouchableOpacity>

                <View style={styles.ImageViewStyle}>
                    <TouchableOpacity>
                        <Image style={styles.ProfileStyle}
                            source={require('../../Assets/Images/FriendsImage/Friend3.png')}>
                        </Image>
                    </TouchableOpacity>
                </View>
                <Text style={styles.BackTextStyle}>Tiana Gouse</Text>
                <View style={styles.IconsContainer}>

                    <Ionicons onPress={() => SetFlag(!Flag)}
                        style={styles.FlagIconStyle}
                        name={Flag ? "flag" : "flag-outline"} color="#000000" size={25} />
                    <TouchableOpacity>
                        <Icon style={styles.SearchImageContainer}
                            name="infocirlceo" color="#000000" size={25} />
                    </TouchableOpacity>
                </View>



            </View>


            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1
                }}
                placeholder='Type your message....'
                alwaysShowSend={true}
                renderBubble={renderBubble}
                showUserAvatar={true}
                showAvatarForEveryMessage={true}
                // maxInputLength ={SCREEN_WIDTH*0.9}
                // renderAvatar={renderAvatar}
                // renderMessage = {(props)=><CustomMessage {...props} />}
                // renderAvatar={()=>{<Image source={require('../../Assets/Images/FriendsImage/Friend3.png')} style={{height : 40, width : 40}} />}}
                // renderComposer={renderComposer}
                // maxComposerHeight = {SCREEN_HEIGHT*0.15}
                // scrollToBottom={true}
                loadEarlier={false}
                // textInputStyle={{height:SCREEN_HEIGHT*0.2}}
                // textInputProps={textInputProps}
                // multiline ={false}
                // isKeyboardInternallyHandled={false}
                onLoadEarlier={true}
                infiniteScroll={true}
                // inverted ={false}
                // isLoadingEarlier ={false}
                // renderInputToolbar = {renderInputToolbar}
                // backgroundImage = {ImagesPathVariable.DrawerScreenBackGround}
                renderSend={renderSend}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor : "#f5f5f5"
        // height: SCREEN_HEIGHT,
        // width: SCREEN_WIDTH,
        // paddingBottom: SCREEN_HEIGHT * 0.01
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
        marginLeft: SCREEN_WIDTH * 0.03

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
        left: SCREEN_WIDTH * 0.02
    },
    ProfileStyle: {
        width: SCREEN_WIDTH * 0.09,
        height: SCREEN_HEIGHT * 0.045,
        // borderRadius: 6

    },
    IconsContainer: {
        left: SCREEN_WIDTH * 0.37,
        flexDirection: 'row'
    },
    FlagIconStyle: {
    },
    SearchImageContainer: {
        left: SCREEN_WIDTH * 0.03,
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
