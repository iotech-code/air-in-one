
import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    CheckBox,
    SafeAreaView
} from 'react-native'


import { styles } from '../styles/base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux';
import { Images, defaultTheme } from '../constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        setupOnlySelectProduct: state.setupOnlySelectProduct,
    }
}




class ShopInfo extends Component {


    constructor(props) {
        super(props);

    }

    render() {
        const { setupOnlySelectProduct } = this.props
        return (


            <View style={{ flex: 1 }}>


                <ScrollView style={{ backgroundColor: '#F7F7F7', position: 'relative', height: '100%' }}>
                    <SafeAreaView>

                        <View style={[styles.flexRowEnd, { backgroundColor: 'white', padding: 10 }]}>
                            <TouchableOpacity onPress={() => Actions.push('ChooseShop')} style={{ ...styles.boxIconCircle }}>
                                <Icon name="close" size={25} style={styles.iconStyleCircle} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ height: 200, width: '100%', backgroundColor: 'white' }}>
                            <Image source={Images.shop1} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>


                        <View style={{ paddingHorizontal: hp('1%'), paddingVertical: hp('0.5%'), flexDirection: 'row', justifyContent: 'flex-start' }}>
                            {
                                setupOnlySelectProduct ?
                                    <View style={{
                                        flexDirection: 'row',
                                        paddingHorizontal: 15,
                                        paddingVertical: 10,
                                        borderRadius: 5,
                                        backgroundColor: 'white',
                                        width: 120,
                                        borderWidth: 1,
                                        borderColor: defaultTheme.COLORS.PRIMARY
                                    }}>
                                        <Text style={{ width: '100%', textAlign: 'center', fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, textAlignVertical: 'center', marginRight: 20, color: defaultTheme.FONT.PRIMARY }}>25,000 BTU</Text>
                                    </View>
                                    : null
                            }
                        </View>



                        <View style={{ ...styles.container, backgroundColor: 'white', paddingVertical: 20 }}>
                            <View style={{ ...styles.flexRowStart, alignItems: 'center' }}>
                                <View style={{
                                    width: hp('3%'),
                                    height: hp('3%'),
                                    borderRadius: 50,
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    backgroundColor: '#FFDC64',
                                    marginTop: hp('0.5%'),
                                    marginRight: hp('1%')
                                }}>
                                    <Icon name="thumb-up" size={10} style={{
                                        textAlignVertical: 'center',
                                        textAlign: 'center',
                                        color: 'white'
                                    }}
                                    />
                                </View>
                                <Text style={{ color: defaultTheme.FONT.FONT_GREY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>ร้านแนะนำ</Text>
                            </View>
                            <Text style={{ ...styles.textTitle, fontFamily: defaultTheme.FONT.FONT_FAMILY, marginTop: 10 }}>ร้าน SM AIR</Text>

                            {
                                setupOnlySelectProduct ?

                                    <Text style={{ fontSize: hp('2.5%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, marginTop: 10, color: defaultTheme.FONT.PRIMARY }}>
                                        ติดตั้ง 1,500 บาท
                            </Text>

                                    :

                                    <Text style={{ fontSize: hp('3%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, marginTop: 10, color: defaultTheme.FONT.PRIMARY }}>
                                        24,900 บาท
                            </Text>
                            }


                            <View style={{ marginTop: 10, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 10, flexDirection: 'row' }}>
                                    <Icon name="star" size={20} color="#FFC250" style={{ textAlignVertical: 'center' }} />
                                    <Icon name="star" size={20} color="#FFC250" style={{ textAlignVertical: 'center' }} />
                                    <Icon name="star" size={20} color="#FFC250" style={{ textAlignVertical: 'center' }} />
                                    <Icon name="star" size={20} color="#FFC250" style={{ textAlignVertical: 'center' }} />
                                    <Icon name="star" size={20} color="#FFC250" style={{ textAlignVertical: 'center' }} />
                                </View>

                                <Text style={{ fontWeight: "bold", fontSize: hp('2.5%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, }}>4.0</Text>
                                <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlignVertical: 'bottom' }}>/5</Text>
                            </View>

                            <View style={{ marginTop: 10, flexDirection: 'row' }}>
                                <Text style={{ paddingVertical: 5, paddingHorizontal: 20, backgroundColor: defaultTheme.COLORS.LIGHT_PRIMARY }}>
                                    OPEN
                            </Text>
                                <Text style={{ textAlignVertical: 'center', marginLeft: 10, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>10.00 น. - 20.00 น.</Text>
                            </View>


                            <View style={[styles.flexRowStart, styles.mt_1, { alignItems: 'center' }]}>
                                <Icon name="shield-check" size={20} color="#49C5F1" style={{ marginTop: 3, marginRight: 5 }} />
                                <Text style={styleScoped.textConFirm, { marginRight: 20, textAlignVertical: 'center' }}>ของแท้ 100%</Text>
                                <Icon name="currency-usd-circle" size={20} color="#49C5F1" style={{ marginTop: 3, marginLeft: 3, marginRight: 5 }} />
                                <Text style={styleScoped.textConFirm, { textAlignVertical: 'center' }}>คืนเงิน/คืนสินค้าภายใน 15 วัน</Text>
                            </View>

                            <View style={{ ...styles.flexRowStart, marginTop: 10 }}>
                                <CheckBox />
                                <View >
                                    <View style={{ ...styles.flexRowStart, alignItems: 'center' }}>
                                        <Icon name="star-circle" size={25} color="#FFC250" style={{ marginTop: 3, marginLeft: 3, marginRight: 5, textAlignVertical: 'center' }} />
                                        <Text style={{ textAlignVertical: 'center' }}>ติดตั้งพรีเมี่ยม 2,500 บาท</Text>
                                    </View>
                                    <View style={{ ...styles.flexRowStart, marginTop: 10, alignItems: 'center' }}>
                                        <Icon name="help-circle" size={25} color={defaultTheme.FONT.FONT_GREY} style={{ marginTop: 3, marginLeft: 3, marginRight: 5, textAlignVertical: 'center' }} />
                                        <Text style={{ textAlignVertical: 'center' }}>ใช้อุปกรณเเบรนด์เนม ไนโตรเจนเทสรั่ว</Text>
                                    </View>
                                </View>
                            </View>

                        </View>


                        <View style={{ ...styles.container, backgroundColor: 'white', paddingVertical: 20, marginTop: 10 }}>
                            <Text style={{ ...styleScoped.textAnotherTitle }}>โปรโมชั่น</Text>
                            <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>
                                <Icon name="tag" size={hp('2.3%')} color={defaultTheme.FONT.PRIMARY} style={{ marginTop: 3, marginLeft: 3, marginRight: 5, textAlignVertical: 'center' }} />
                                <Text style={{ textAlignVertical: 'center', fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ฟรีค่จัดส่ง</Text>
                            </View>
                        </View>


                        <View style={{ ...styles.container, backgroundColor: 'white', paddingVertical: 20, marginTop: 10 }}>
                            <Text style={{ ...styleScoped.textAnotherTitle }}>อุปกรณ์ที่มีให้</Text>

                            <View style={{ ...styles.row, marginTop: 10 }}>
                                <View style={{ ...styles.col_4 }}>
                                    <View style={{ width: '100%', height: 50 }}>
                                        <Image source={Images.pipe} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', marginTop: 10 }}>ท่อทองแดง 4 เมตร</Text>
                                </View>

                                <View style={{ ...styles.col_4 }}>
                                    <View style={{ width: '100%', height: 50 }}>
                                        <Image source={Images.rail} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', marginTop: 10 }}>รางครอบท่อข้อต่อ 2 ชุด</Text>
                                </View>

                                <View style={{ ...styles.col_4 }}>
                                    <View style={{ width: '100%', height: 50 }}>
                                        <Image source={Images.breaker} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', marginTop: 10 }}>เบรกเกอร์</Text>
                                </View>

                                <View style={{ ...styles.col_4 }}>
                                    <View style={{ width: '100%', height: 50 }}>
                                        <Image source={Images.powercable} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', marginTop: 10 }}>สายไฟ10 เมตร</Text>
                                </View>

                                <View style={{ ...styles.col_4 }}>
                                    <View style={{ width: '100%', height: 50 }}>
                                        <Image source={Images.waterpipe} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', marginTop: 10 }}>ท่อน้ำทิ้ง</Text>
                                </View>

                                <View style={{ ...styles.col_4 }}>
                                    <View style={{ width: '100%', height: 50 }}>
                                        <Image source={Images.hanging} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', marginTop: 10 }}>ขาเเขวน</Text>
                                </View>
                            </View>

                        </View>


                        <View style={{ ...styles.container, backgroundColor: 'white', paddingVertical: 20, marginTop: 10 }}>
                            <Text style={{ ...styleScoped.textAnotherTitle, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>รายละเอียดสินค้า</Text>
                            <Text style={{ ...styleScoped.textAddressAccount }}>ที่ตั้ง, เบอร์โทร, เวลาเปิด-ปิดทำการ</Text>

                            <Text style={{ marginTop: 10, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ที่ตั้ง</Text>
                            <Text style={{ ...styleScoped.textAddressAccount }}>448/32 หมู่บ้านการ์เด้นเฮาส์</Text>

                            <Text style={{ marginTop: 10, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>เบอร์โทร</Text>
                            <Text style={{ ...styleScoped.textAddressAccount }}>02-2974848</Text>

                            <Text style={{ marginTop: 10, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>เวลาเปิด-ปิดทำการ</Text>
                            <Text style={{ ...styleScoped.textAddressAccount }}>8.00 น. - 21.00 น.</Text>

                            <View style={[styles.flexRowCenter, styles.customButtomSeeMore]}>
                                <Text style={styles.textInButtomSeemore}>เพิ่มเติม </Text>
                                <Icon name="chevron-down" size={22} color="#6CC3ED" />
                            </View>

                        </View>

                        <View style={[styleScoped.boxAnotherInfo, styles.container]}><View style={styleScoped.boxanotherInfo}>
                            <View style={styles.flexRowBetween}>
                                <Text style={styleScoped.textAnotherTitle}>Rating & Reviews (21)</Text>
                                <View style={styles.flexRowEnd}>
                                    <Text style={styleScoped.textSeeMore}>
                                        ดูทั้งหมด
            </Text>
                                    <Icon name="chevron-right" size={20} color="#49C5F1" style={{ marginTop: 2 }} />
                                </View>
                            </View>
                            <Text style={styles.mt_1, { color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }} >Brand, Model, Air Conditioner Rated Capacity (HP)</Text>

                            <View style={[styles.flexRowStart, styles.mt_1]}>
                                <View style={styleScoped.boxIconAccount}>
                                    <Icon name="account" size={50} color="#fff" />
                                </View>
                                <View >
                                    <Text style={styleScoped.textNameAccount}>นภัสสร พ.</Text>
                                    <Text style={styleScoped.textAddressAccount}>กรุงเทพมหานคร</Text>
                                </View>
                                <View style={styleScoped.starRatingReview}>
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#F1F9FF" />
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                            <View style={[styles.flexRowStart, styles.mt_1]}>
                                <View style={styleScoped.boxIconAccount}>
                                    <Icon name="account" size={50} color="#fff" />
                                </View>
                                <View >
                                    <Text style={styleScoped.textNameAccount}>นภัสสร พ.</Text>
                                    <Text style={styleScoped.textAddressAccount}>กรุงเทพมหานคร</Text>
                                </View>
                                <View style={styleScoped.starRatingReview}>
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#F1F9FF" />
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                            <View style={[styles.flexRowStart, styles.mt_1]}>
                                <View style={styleScoped.boxIconAccount}>
                                    <Icon name="account" size={50} color="#fff" />
                                </View>
                                <View >
                                    <Text style={styleScoped.textNameAccount}>นภัสสร พ.</Text>
                                    <Text style={styleScoped.textAddressAccount}>กรุงเทพมหานคร</Text>
                                </View>
                                <View style={styleScoped.starRatingReview}>
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#F1F9FF" />
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>

                            <View style={[styles.flexRowStart, styles.mt_1]}>
                                <View style={styleScoped.boxIconAccount}>
                                    <Icon name="account" size={50} color="#fff" />
                                </View>
                                <View >
                                    <Text style={styleScoped.textNameAccount}>นภัสสร พ.</Text>
                                    <Text style={styleScoped.textAddressAccount}>กรุงเทพมหานคร</Text>
                                </View>
                                <View style={styleScoped.starRatingReview}>
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#FFC250" />
                                    <Icon name="star" size={15} color="#F1F9FF" />
                                </View>
                            </View>
                            <Text style={{ marginTop: 5, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>


                            <View style={styleScoped.boxComment}>
                                <Icon name="message" size={25} color="#6CC3ED" style={{ marginRight: 10 }} />
                                <Text style={{ color: '#6CC3ED', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>คอมเม้นของคุณ...</Text>
                            </View>


                        </View>
                        </View>


                    </SafeAreaView>





                </ScrollView>
                {this.renderGetItemInCart()}



            </View>
        )
    }



    renderGetItemInCart() {
        return (
            <TouchableOpacity style={{ padding: hp('2%'), backgroundColor: '#6CC3ED', height: hp('8%') }} onPress={() => Actions.push('CartScene')}>
                <Text style={{
                    color: 'white',
                    fontSize:hp('2.5%'),
                    fontFamily: defaultTheme.FONT.FONT_FAMILY,
                    textAlign: 'center',
                    textAlignVertical: 'center'
                }}>
                    เลือกร้าน
            </Text>
            </TouchableOpacity>
        )
    }
}


export default connect(mapStateToProps)(ShopInfo)



var styleScoped = StyleSheet.create({
    detailBoxImage: {
        height: 300,
        backgroundColor: '#fff'
    },
    detailImage: {
        width: '100%',
        height: '100%'
    },
    detailBox: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10
    },
    textPrice: {
        color: '#6CC3ED',
        fontWeight: 'bold',
        fontSize: 24
    },
    textDiscount: {
        color: '#6CC3ED',
        fontSize: 14,
        textDecorationLine: 'line-through',
        marginRight: 10
    },
    boxTextDiscountPercent: {
        width: 50,
        fontSize: 12,
        fontWeight: 'bold',
        borderRadius: 2,
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: '#DC5C4C',
        height: 22,
        alignItems: 'center'
    },
    textTitleBrand: {
        fontWeight: 'bold',
        fontSize: 20
    },
    textinfo: {
        fontSize: 14,
        color: '#ACACAC'
    },
    textScore: {
        fontSize: 20,
        color: '#000',
        marginLeft: 8,
        fontWeight: 'bold'
    },
    textFullScore: {
        fontSize: 14,
        color: '#000'
    },
    textConFirm: {
        marginLeft: 2,
        marginTop: 2,
        fontWeight: 'bold',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    boxAnotherInfo: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10,
        marginBottom: 10
    },
    textAnotherTitle: {
        fontSize: hp('2%'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textSeeMore: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#49C5F1',
        marginTop: 2
    },
    boxBorderImageCircleStore: {
        width: 60,
        height: 60,
        borderRadius: 50,
        padding: 10,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#f7f7f7'
    },
    customImageCircleStore: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    textTitleStore: {
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 5
    },
    textPriceStore: {
        textAlign: 'right',
        flex: 0.98,
        flexDirection: 'row',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5
    },
    boxIconAccount: {
        backgroundColor: '#CDD4D9',
        borderRadius: 50,
        alignItems: 'center',
        textAlignVertical: 'center',
        padding: 8,
        marginRight: 12
    },
    textNameAccount: {
        fontWeight: 'bold',
        marginTop: 10,
        fontSize: 14
    },
    textAddressAccount: {
        marginTop: 2,
        fontSize: 14,
        color: '#ACACAC',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    starRatingReview: {
        flex: 0.98,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 5
    },
    boxComment: {
        marginTop: 20,
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        backgroundColor: '#F7F7F7'
    }


})