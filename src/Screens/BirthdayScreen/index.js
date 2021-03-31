// Splash
import * as React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground, FlatList, SafeAreaView, ScrollView } from "react-native"
// import { Icon } from 'react-native-vector-icons/icon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { CustomTextInput } from '../../Component/CutomTextInput';
import { LoginButton } from '../../Component/LoginButton';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../Helper/DeviceDimensions';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { Header } from '../../Component/Header';

export function BirthdayScreen({ navigation }) {

    return (
        <View style={styles.container}>

            <View >
                <Header
                    currentObject={navigation}
                    BackTextName={
                        <Text style={{
                            fontFamily: "montserrat_medium",
                        }}>Birthday</Text>
                    }

                />

            </View>
            <View style={styles.CalendarContainer}>
                <Text style={styles.CalendarTextContainer}>Your Birthday</Text>
            </View>
            <View style={styles.BirthdayTextinputContainer}>
                <CustomTextInput
                    showReverse
                    TextInputProps={{
                        placeholder: "24-2-2020"
                    }}
                    IconName="calendar-o"
                    IconColor="#FF2B8A"
                />
            </View>
            <View style={styles.CalenderStyle}>
                <Calendar
                    // Initially visible month. Default = Date()
                    current={'2021-03-04'}
                    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
                    minDate={'2012-05-10'}
                    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
                    maxDate={'2021-03-04'}
                    // Handler which gets executed on day press. Default = undefined
                    onDayPress={(day) => { console.log('selected day', day) }}
                    // Handler which gets executed on day long press. Default = undefined
                    onDayLongPress={(day) => { console.log('selected day', day) }}
                    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
                    monthFormat={'yyyy MM'}
                    // Handler which gets executed when visible month changes in calendar. Default = undefined
                    onMonthChange={(month) => { console.log('month changed', month) }}
                    // Hide month navigation arrows. Default = false
                    hideArrows={false}
                    // Replace default arrows with custom ones (direction can be 'left' or 'right')
                    // renderArrow={(direction) => (<Arrow/>)}
                    // Do not show days of other months in month page. Default = false
                    hideExtraDays={true}
                    // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
                    // day from another month that is visible in calendar page. Default = false
                    disableMonthChange={false}
                    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
                    firstDay={1}
                    // Hide day names. Default = false
                    hideDayNames={false}
                    // Show week numbers to the left. Default = false
                    showWeekNumbers={true}
                    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
                    onPressArrowLeft={subtractMonth => subtractMonth()}
                    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
                    onPressArrowRight={addMonth => addMonth()}
                    // Disable left arrow. Default = false
                    disableArrowLeft={false}
                    // Disable right arrow. Default = false
                    disableArrowRight={false}
                    // renderArrow = {(direction)=>{direction == 'right' ? <Icon name = "chevron-right" /> : <Icon name = "chevron-left" />}}
                    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
                    disableAllTouchEventsForDisabledDays={true}
                    // Replace default month and year title with custom one. the function receive a date as parameter.
                    // renderHeader={(date) => {/*Return JSX*/ }}
                    // Enable the option to swipe between months. Default = false
                    enableSwipeMonths={true}
                    horizontal={true}
                    pastScrollRange={50}
                    // Max amount of months allowed to scroll to the future. Default = 50
                    futureScrollRange={50}
                    // Enable or disable scrolling of calendar list
                    scrollEnabled={true}
                    // Enable or disable vertical scroll indicator. Default = false
                    showScrollIndicator={true}
                    pagingEnabled={true}
                />
            </View>
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
    BirthdayTextinputContainer: {
        marginTop: SCREEN_WIDTH * 0.01,
        marginLeft: SCREEN_WIDTH * 0.05,

    },
    CalendarTextContainer: {
        fontFamily: 'montserrat_bold',
        fontSize: 16,
        // fontWeight: 'bold',
    },
    CalendarContainer: {
        marginTop: SCREEN_WIDTH * 0.04,
        marginLeft: SCREEN_WIDTH * 0.05,
    },
    CalenderStyle: {
        marginTop: SCREEN_HEIGHT * 0.02
    }
});
