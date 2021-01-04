import React, { Component } from 'react';
import { View, Text, Image, TextInput, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { styles } from '../../styles/base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { defaultTheme } from '../../constants'
import { connect } from 'react-redux'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const mapStateToProps = function (state) {
    return {
        selectType: state.selectType,
        btuForAdvice: state.btuForAdvice,
        selectorCalculate: state.selectorCalculate,
        roomInfo: state.roomInfo
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setAir: function (params) {
            dispatch({
                type: 'SELECT_TYPE_AIR',
                payload: params
            })
        },
        setBrand: function (params) {
            dispatch({
                type: 'SELECT_TYPE_BRAND',
                payload: params
            })
        },
        setAirType: function (params) {
            dispatch({
                type: 'SELECT_TYPE_AIR_TYPE',
                payload: params
            })
        },
        setPrice: function (params) {
            dispatch({
                type: 'SELECT_TYPE_PRICE',
                payload: params
            })
        },

        dispatch: dispatch
    }
}


class Conclude extends Component {

    render() {
        const { selectorCalculate, btuForAdvice, selectType, roomInfo } = this.props
        console.log(selectorCalculate, btuForAdvice, selectType, roomInfo)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={[styles.container, styles.mt_1]}>

                        <View style={[styles.flexRowBetween]} >
                            <TouchableOpacity onPress={() => Actions.push('Estimate')} style={{ ...styles.boxIconCircle }}>
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                            </TouchableOpacity>

                            <TouchableOpacity style={{ ...styles.boxIconCircle }} >
                                <Icon style={styles.iconStyleCircle} name="home" size={defaultTheme.size.iconOnTop} />
                            </TouchableOpacity>
                        </View>


                        <View style={{ marginTop: hp('8%') }}>
                            <Text style={{ textAlign: 'center', fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974' }}>ราคาประเมิน</Text>
                        </View>



                        <View style={{ marginVertical: hp('4%') }}>
                            <Text style={{ textAlign: 'center', fontSize: hp('3%'), fontWeight: 'bold', color: '#6CC3ED', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>
                                150,000 บาท
                        </Text>
                        </View>



                        <View style={[styles.flexRowBetween, { padding: hp('2.5%'), marginTop: hp('1%'), backgroundColor: '#F7F7F7', borderRadius: 5 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center' }}>เเบรนด์ที่คุณต้องการ</Text>
                            {this.renderImageBrand('carrier')}
                        </View>

                        <View style={[styles.flexRowBetween, { padding: hp('2.5%'), marginTop: hp('1%'), backgroundColor: '#F7F7F7', borderRadius: 5 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center' }}>ชนิดของเเอร์</Text>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center', color: '#6CC3ED' }}>Inverter</Text>
                        </View>

                        <View style={[styles.flexRowBetween, { padding: hp('2.5%'), marginTop: hp('1%'), backgroundColor: '#F7F7F7', borderRadius: 5 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center' }}>ประเภท</Text>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center', color: '#6CC3ED' }}>VRV</Text>
                        </View>

                        <View style={[styles.flexRowBetween, { padding: hp('2.5%'), marginTop: hp('1%'), backgroundColor: '#F7F7F7', borderRadius: 5 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center' }}>จำนวน BTU</Text>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center', color: '#6CC3ED' }}>22,800 BTU</Text>
                        </View>

                        <View style={[styles.flexRowBetween, { padding: hp('2.5%'), marginTop: hp('1%'), backgroundColor: '#F7F7F7', borderRadius: 5 }]}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center' }}>จำนวนแอร์</Text>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center', color: '#6CC3ED' }}>15 เครื่อง</Text>
                        </View>




                    </View>


                </ScrollView>

                <View style={{ ...styles.container }}>
                    <TouchableOpacity style={{marginBottom:hp('2%'),flexDirection:'row',justifyContent:'center',alignItems:'center'}} onPress={() => Actions.push('Estimate')}>
                        <Icon name="chevron-left" size={hp('2.5%')} style={{ color: defaultTheme.FONT.PRIMARY }} />
                        <Text style={{ color: defaultTheme.FONT.PRIMARY, fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY }}>กลับหน้าประเมินราคา</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>

        )
    }


    renderImageAir(value) {
        let name_url = [
            {
                name_th: 'Wall',
                name_en: 'Wall',
                imageBlue: require('../../../assets/new/icons/wallblue.png'),
                imageWhite: require('../../../assets/new/icons/wallwhite.png'),
            },
            {
                name_th: 'Duck',
                name_en: 'Duck',
                imageBlue: require('../../../assets/new/icons/duck.png'),
                imageWhite: require('../../../assets/new/icons/duckwhite.png'),
            },
            {
                name_th: 'Ceiling',
                name_en: 'Ceiling',
                imageBlue: require('../../../assets/new/icons/ceiling.png'),
                imageWhite: require('../../../assets/new/icons/ceilingwhite.png'),
            },
            {
                name_th: 'Casette',
                name_en: 'Casette',
                imageBlue: require('../../../assets/new/icons/casette.png'),
                imageWhite: require('../../../assets/new/icons/casettewhite.png'),
            },
            {
                name_th: 'ตู้ตั้ง',
                name_en: 'standing',
                imageBlue: require('../../../assets/new/icons/stand.png'),
                imageWhite: require('../../../assets/new/icons/standwhite.png'),
            },
        ]
        let result = name_url.find(el => {
            return el.name_th == value
        })
        return (
            <>
                <View style={{ width: hp('10%'), height: hp('3%'), alignSelf: 'center' }}>
                    <Image source={result ? result.imageBlue : require('../../../assets/new/icons/wallblue.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
            </>
        )
    }

    renderImageBrand(value) {
        let name_url = [
            { name: 'carrier', image: require('../../../assets/images/carrier.png') },
            { name: 'toshiba', image: require('../../../assets/images/toshiba.png') },
            { name: 'lg', image: require('../../../assets/images/lg.png') },
            { name: 'daikin', image: require('../../../assets/images/daikin.png') },
        ]
        let result = name_url.find(el => {
            return el.name == value
        })
        return (
            <>
                <View style={{ width: hp('10%'), height: hp('3%'), alignSelf: 'center' }}>
                    <Image source={result.image} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>
            </>
        )
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Conclude)


var styleScoped = StyleSheet.create({
    boxSelectTypeAir: {
        width: '100%',
        padding: 5,
        borderRadius: 5,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderWidth: 1,
        borderColor: '#CED2D4',
    },
    nextButton: {
        width: '100%',
        padding: hp('1.5%'),
        backgroundColor: '#6CC3ED',
        borderRadius: 5,
    },
});