import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../../styles/base'
import { Actions } from 'react-native-router-flux'
import { defaultTheme } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        menuSelected: state.calculateBtu,
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setAsset: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ASSET',
                payload: params
            })
        },
        setType: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_TYPE',
                payload: params
            })
        },
        setRoomType: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ROOM_TYPE',
                payload: params
            })
        },
        dispatch: dispatch
    }
}


class MainCalculateBtu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            asset: null,
            type: null,
            room: null
        }
    }




    render() {
        const { asset, type, room } = this.state
        const { menuSelected } = this.props
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'white' }}>


                    <View style={[styles.container, styles.mt_1, { marginBottom: 20 }]}>



                        <View style={[styles.flexRowBetween]}>
                            <TouchableOpacity onPress={() => Actions.push('MainPromotion')} style={{ ...styles.boxIconCircle }}>
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                            </TouchableOpacity>
                        </View>


                        <View style={{ marginVertical: hp('2%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                            <View style={{ height: hp('4%'), width: hp('4%'), marginRight: hp('1%') }}>
                                <Image source={require('../../../assets/new/icons/saving.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <Text style={styleScoped.textTitle}>Clearance</Text>
                        </View>

                        <View style={{ ...styleScoped.boxSearchHeader, ...styles.shadowDefault, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                                <TextInput
                                    onFocus={() => Actions.push('SearchPromotion')}
                                    style={styles.inputSearchbox}
                                    placeholder="ค้นหาสินค้าที่ถูกที่สุด"
                                />
                            </View>
                            <View>
                                <Icon name="tune" size={hp('3%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal' }} onPress={() => Actions.push('SearchPromotion')} />
                            </View>
                        </View>

                        <View style={{ marginVertical: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#CECDCD' }}>รายการสินค้าที่ Clearance...</Text>
                        </View>


                        <View style={{ ...styles.row }}>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ ...styles.col_2 }} onPress={() => Actions.push('ProductDetail',
                                {
                                    data: {
                                        id: 1,
                                        brand: 'SAMSUNG',
                                        gen: 'AR10TYFYAWKNST',
                                        detail: '14,300 (4,800 - 17,700) บีทียู/ต่อชั่วโมง',
                                        price: '10,900',
                                        real_price: '35,900',
                                        count: '20',
                                        image: 'https://cw.lnwfile.com/4znyng.jpg'
                                    }
                                }
                            )}>
                                <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ width: hp('6%'), height: hp('3%') }}>
                                            <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                        </View>
                                    </View>
                                    <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                        <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>




                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }








}

export default connect(mapStateToProps, mapDispatchToProps)(MainCalculateBtu)

const styleScoped = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    textTitle: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontSize: hp('3%'),
        color: '#215974'
    },
    grid: {
        width: '33.33%'
    },
    nextButton: {
        width: '100%',
        padding: hp('2%'),
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        borderRadius: 5,
        alignItems: 'center'
    },
    boxSearchHeader: {
        padding: wp('2%'),
        backgroundColor: 'white',
        borderRadius: hp('0.6%'),
        height: hp('5%'),
        width: '100%',
        zIndex: 10
    },

})