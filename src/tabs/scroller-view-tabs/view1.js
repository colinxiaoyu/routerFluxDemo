/**
 * Created by puxiang on 2018/3/3.
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import Day from '../component/day';
import moment from 'moment';

const today = moment(new Date()).format('YYYY-MM-DD');
export default class View1 extends React.Component {

    state = {

        markedDates: {
            '2018-05-17': {disabled: true,userImage: true},

        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#333248', width: 50, height: 50,
                        borderRadius: 25, alignItems: 'center'
                    }}
                    onPress={() => {
                        const dates = this.state.markedDates;
                        console.log('today',today);
                        const newDates = Object.assign({
                        }, dates,{
                            [today]: {disabled: true,userImage: true},
                        });
                        this.setState({
                            markedDates: newDates,
                        })

                    }}>
                    <Text style={{fontSize: 20, color: 'white'}}>签到</Text>
                </TouchableOpacity>
                <Calendar
                    style={styles.calendar}
                    current={'2018-05-09'}
                    minDate={'2018-05-09'}
                    displayLoadingIndicator={false}
                    markingType={'period'}
                    theme={{
                        calendarBackground: '#333248',
                        textSectionTitleColor: 'white',
                        dayTextColor: 'red',
                        todayTextColor: 'white',
                        selectedDayTextColor: 'white',
                        monthTextColor: 'white',
                        selectedDayBackgroundColor: '#333248',
                        arrowColor: 'white',
                        // textDisabledColor: 'red',
                        'stylesheet.calendar.header': {
                            week: {
                                marginTop: 5,
                                flexDirection: 'row',
                                justifyContent: 'space-between'
                            }
                        }
                    }}
                    markedDates={this.state.markedDates}
                    hideArrows={false}
                    dayComponent={Day}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});