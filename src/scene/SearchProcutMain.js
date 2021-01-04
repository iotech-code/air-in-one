import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme } from '../constants'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default class SearchProductMain extends Component {

    state = {
        searchProduct: ''
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ ...styles.flexRowStart, marginTop: 10, marginBottom: 10, ...styles.container }}>
                        <TouchableOpacity style={{ ...styles.boxIconCircle, marginRight: hp('2%') }}>
                            <Icon
                                style={{ ...styles.iconStyleCircle }}
                                name="chevron-left"
                                size={defaultTheme.size.iconOnTop}
                                onPress={() => Actions.push('MainScene')}
                            />
                        </TouchableOpacity>

                        <View style={{ padding: 5, backgroundColor: defaultTheme.COLORS.SECONDARY, ...styles.flexRowStart, borderRadius: 5, alignItems: 'center' }}>
                            <Icon name="magnify" size={hp('2.5%')} color={defaultTheme.FONT.FONT_GREY} />
                            <TextInput
                                style={{
                                    fontSize: hp('2%'),
                                    textAlign: 'left',
                                    height: '100%',
                                    width: '90%',
                                    padding: 0,
                                    paddingLeft: 5,
                                    color: defaultTheme.COLORS.FONT_GREY,
                                    fontFamily: defaultTheme.FONT.FONT_FAMILY
                                }}
                                placeholder="ค้าหาเครื่องปรับอากาศ..."
                                onChangeText={(text) => this.setState({ searchProduct: text })}
                            />
                        </View>

                    </View>

                    <View style={{ ...styles.container, marginTop: hp('1%') }}>
                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY }}>Recent</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', marginTop: hp('2%') }} onPress={() => this.chooseProduct()}>
                            <View style={{ padding: hp('2%'), width: wp('50%'), height: hp('10%'), ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 5 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <View style={{ width: hp('10%'), height: '100%' }}>
                                        <Image source={require('../../assets/images/arismall.png')} style={{ height: '100%', width: '100%', resizeMode: 'contain', alignItems: 'center' }} />
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <View style={{ height: hp('3%'), width: hp('5%') }}>
                                            <Image source={require('../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <Text style={{ marginTop: hp('1%'), fontSize: hp('1.2%'), color: defaultTheme.FONT.FONT_GREY }}>รุ่น FTKC15TV2S</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, marginTop: hp('2%') }}>แบรน์ดัง</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>

                            {this.renderItemBrand('Carrier')}
                            {this.renderItemBrand('Toshiba')}
                            {this.renderItemBrand('LG')}
                            {this.renderItemBrand('Dakin')}
                            {this.renderItemBrand('Carrier')}
                            {this.renderItemBrand('Toshiba')}
                            {this.renderItemBrand('LG')}
                            {this.renderItemBrand('Dakin')}

                        </View>

                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, marginTop: hp('1%') }}>แบรน์ดัง</Text>

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap' }}>
                            {this.renderItemBrand('SM AIR')}
                            {this.renderItemBrand('Air Many')}
                            {this.renderItemBrand('Modern Air')}
                            {this.renderItemBrand('DN Air')}
                            {this.renderItemBrand('New Cooler Air')}
                        </View>
                    </View>




                </ScrollView>
            </SafeAreaView>
        )
    }

    renderItemBrand(value) {
        return (
            <View style={{
                backgroundColor: defaultTheme.COLORS.SECONDARY,
                paddingHorizontal: 15,
                paddingVertical: 5,
                minWidth: 20,
                borderRadius: 5,
                marginVertical: 10,
                marginHorizontal: 5
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontSize: hp('1.7%'),
                    fontFamily: defaultTheme.FONT.FONT_FAMILY,
                    color: defaultTheme.FONT.FONT_GREY
                }}>{value}</Text>
            </View>
        )

    }




}