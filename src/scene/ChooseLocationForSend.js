import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme } from '../constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';




export default class ChooseLocationForSend extends Component {
    constructor(props) {
        super(props)
        this.state = {
            search: false
        }
    }

    onToggleSearch(value){
        this.setState({search:value})
    }

    render() {
        return (
            <ScrollView >
                <View style={{ ...styles.header, marginBottom: hp('4%') }}>
                    <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                        <Icon
                            style={{ ...styles.iconStyleCircle }}
                            name="chevron-left"
                            size={defaultTheme.size.iconOnTop}
                            onPress={() => Actions.push('Product')}
                        />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('5%'), marginTop: hp('2%') }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                            <View style={{
                                ...styles.boxIconCircle,
                                backgroundColor: '#DAF4FC',
                                marginRight: hp('1%')
                            }}>
                                <Icon name="crosshairs-gps" size={hp('2.5%')} style={{ color: '#215974', textAlign: 'center' }} />
                            </View>
                            <View>
                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>Current Location </Text>
                                <TouchableOpacity onPress={() => Actions.push('ChooseLocationForSend')}>
                                    <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>หมู่บ้านพลีโน่ สุขสวัสดิ์</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ position: 'relative' }}>
                        <View style={{ ...styles.boxSearchHeader, ...styles.shadowDefault, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                                <TextInput
                                    onFocus={() => this.onToggleSearch(true)}
                                    style={styles.inputSearchbox}
                                    placeholder="ค้นหาที่อยู่ของคุณ..."
                                />
                            </View>
                            {
                                this.state.search ?
                                    <View>
                                        <Icon name="close-circle" size={hp('3%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal', color: '#CECDCD' }} onPress={() => this.onToggleSearch(false)} />
                                    </View>
                                    :
                                    null
                            }

                        </View>
                    </View>
                </View>

                {
                    this.state.search
                        ?
                        <View>
                            {this.renderListAddressFavorite()}
                            {this.renderListAddress()}
                            {this.renderListAddress()}
                            {this.renderListAddress()}
                            {this.renderListAddress()}
                        </View>
                        :
                        <View style={{flexDirection:'column',justifyContent:'center'}}>
                            <Text>Map loading ...</Text>
                        </View>

                }







            </ScrollView>
        )
    }


    renderListAddressFavorite() {
        return (
            <>
                <View style={{ ...styles.container, marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginBottom: hp('2%') }}>
                        <Icon name="star" size={hp('2.2%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal', color: '#FFC107' }} />
                        <Text style={{
                            color: '#CECDCD',
                            fontSize: hp('1.8%'),
                            fontFamily: defaultTheme.FONT.FONT_FAMILY,
                        }}>ที่อยู่โปรด</Text>
                    </View>
                    <TouchableOpacity onPress={() => Actions.push('Product')}>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>หมู่บ้านพลีโน่</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#CECDCD',
                        marginTop: hp('1%'),
                        fontSize: hp('1.7%'),
                        fontFamily: defaultTheme.FONT.FONT_FAMILY,

                    }} >16km - สุขสวัสดิ์ 30, ทุ่งครุ, กรุงเทพมหานคร </Text>
                    <View style={{ borderWidth: 1, borderColor: '#CECDCD', borderStyle: 'dashed', marginTop: hp('3%') }}></View>

                </View>
            </>
        )
    }


    renderListAddress() {
        return (
            <>
                <View style={{ ...styles.container, marginTop: hp('3%') }}>
                    <TouchableOpacity onPress={() => Actions.push('Product')}>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>หมู่บ้านพลีโน่</Text>
                    </TouchableOpacity>
                    <Text style={{
                        color: '#CECDCD',
                        marginTop: hp('1%'),
                        fontSize: hp('1.7%'),
                        fontFamily: defaultTheme.FONT.FONT_FAMILY,

                    }} >16km - สุขสวัสดิ์ 30, ทุ่งครุ, กรุงเทพมหานคร </Text>
                </View>
            </>
        )
    }


}