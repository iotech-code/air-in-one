
import React, { Component } from 'react';
import {
    StyleSheet,
    Platform,
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';
import { styles } from '../styles/base'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux';
import ListProduct from '../components/ListProduct'
import { ProductList } from '../services/Product'
import { defaultTheme } from '../constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        compareProduct: state.compareProduct,
        productCart: state.productCart,
        compareProductList: state.compareProductList,
        confirmProduct: state.confirmProduct,
        productCartLenght: state.productCartLenght,
        productCompareLength: state.productCompareLength,
        filterName: state.filterName,
        showFilterName: state.showFilterName
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        addTocart:function(params){
            dispatch({
                type: 'ADD_TO_CART',
                payload: params
            })
        },
        setCompareProduct: function (params) {
            dispatch({
                type: 'COMPARE_PRODUCT',
                payload: params
            })
        },
        setFilterName: function (params) {
            dispatch({
                type: 'SET_FILTER_NAME',
                payload: params
            })
        },
        toggleFilter: function (params) {
            dispatch({
                type: 'SHOW_FILTER_NAME',
                payload: params
            })
        },
        dispatch: dispatch
    }
}

class DetailProduct extends Component {


    constructor(props) {
        super(props);

    }

    selectThisProduct(value){
        const { addTocart} = this.props
        addTocart(value)
        Actions.push('Product')

    }

    render() {
        return (
            <SafeAreaView style={{flex:1}}>

                <ScrollView style={styles.bodyStyle}>

                    <View style={[styles.flexRowEnd, { backgroundColor: 'white', padding: 10 }]}>
                        <TouchableOpacity onPress={() => Actions.push('Product')} style={{ ...styles.boxIconCircle }}>
                            <Icon name="close" size={25} style={{ ...styles.iconStyleCircle, }} />
                        </TouchableOpacity>
                    </View>

                    <View style={styleScoped.detailBoxImage}>
                        <Image source={{ uri: this.props.data.image }} style={styleScoped.detailImage} />
                    </View>

                    <View style={styleScoped.detailBox}>
                        <View >
                            <Text Text style={{ ...styleScoped.textPrice }}>{this.props.data.price} บาท</Text>
                            <View style={styles.flexRowStart}>
                                <View style={{ width: hp('10%') }}>
                                    <Text style={styleScoped.textDiscount}>{this.props.data.price} บาท </Text>
                                </View>
                                <View style={{ ...styleScoped.boxTextDiscountPercent }}><Text style={{ color: '#fff', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>- {this.props.data.count} %</Text></View>
                            </View>
                            <Text style={{ ...styleScoped.textTitleBrand }}>{this.props.data.brand} แอร์ผนัง</Text>
                            <Text style={{ ...styleScoped.textinfo }}>รุ่น {this.props.data.gen}</Text>
                            <Text style={{ ...styleScoped.textinfo }}>{this.props.data.detail}</Text>

                            <View style={[styles.flexRowStart, styles.mt_1]}>

                                <Icon name="star" size={hp('2.2%')} color="#FFC250" style={{ marginTop: 3 }} />
                                <Icon name="star" size={hp('2.2%')} color="#FFC250" style={{ marginTop: 3 }} />
                                <Icon name="star" size={hp('2.2%')} color="#FFC250" style={{ marginTop: 3 }} />
                                <Icon name="star" size={hp('2.2%')} color="#FFC250" style={{ marginTop: 3 }} />
                                <Icon name="star" size={hp('2.2%')} color="#F1F9FF" style={{ marginTop: 3 }} />
                                <Text style={styleScoped.textScore}>4.0<Text style={styleScoped.textFullScore}>/5</Text></Text>

                            </View>

                            <View style={[styles.flexRowStart, styles.mt_1]}>
                                <Icon name="shield-check" size={20} color="#49C5F1" style={{ marginTop: 3 }} />
                                <Text style={styleScoped.textConFirm}>ของแท้ 100%</Text>
                                <Icon name="currency-usd-circle" size={20} color="#FFC250" style={{ marginTop: 3, marginLeft: 3 }} />
                                <Text style={styleScoped.textConFirm}>คืนเงิน/คืนสินค้าภายใน 15 วัน</Text>
                            </View>


                        </View>
                    </View>

                    <View style={styleScoped.boxanotherInfo}>
                        <View style={styles.flexRowBetween}>
                            <Text style={styleScoped.textAnotherTitle}>ราคาจากร้านต่างๆ</Text>
                            <View style={styles.flexRowEnd}>
                                <Text style={styleScoped.textSeeMore}>
                                    ดูทั้งหมด
            </Text>
                                <Icon name="chevron-right" size={20} color="#49C5F1" style={{ marginTop: 2 }} />
                            </View>
                        </View>

                        <View style={[styles.mt_2, styles.flexRowStart]}>
                            <View style={styleScoped.boxBorderImageCircleStore}>
                                <Image source={{ uri: 'http://www.smairsale.com/images/logo-smairsale.png' }} style={styleScoped.customImageCircleStore} />
                            </View>
                            <View>
                                <Text style={styleScoped.textTitleStore}>SM AIR</Text>
                                <View style={styles.flexRowStart}>
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#F1F9FF" style={{ marginTop: 3, marginRight: 3 }} />
                                </View>
                            </View>

                            <Text style={styleScoped.textPriceStore}>{this.props.data.price} บาท</Text>
                        </View>

                        <View style={[styles.mt_2, styles.flexRowStart]}>
                            <View style={styleScoped.boxBorderImageCircleStore}>
                                <Image source={{ uri: 'http://www.newcoolingair.com/air/img/logo-sbairs-153.png' }} style={styleScoped.customImageCircleStore} />
                            </View>
                            <View>
                                <Text style={styleScoped.textTitleStore}>New Cooling</Text>
                                <View style={styles.flexRowStart}>
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#F1F9FF" style={{ marginTop: 3, marginRight: 3 }} />
                                </View>
                            </View>

                            <Text style={styleScoped.textPriceStore}>{this.props.data.price} บาท</Text>
                        </View>

                        <View style={[styles.mt_2, styles.flexRowStart]}>
                            <View style={styleScoped.boxBorderImageCircleStore}>
                                <Image source={{ uri: 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/p960x960/42250790_847962255591825_1600443133911367680_o.jpg?_nc_cat=103&_nc_sid=85a577&_nc_eui2=AeGk4drI96wq8TozgrH8FJmCtnwUzUytP7O2fBTNTK0_s-pYMFP_f-x-QzjPGMZKXOTpkvOV_-YWLKdkxayA1pE_&_nc_ohc=FV1d8s0kyhQAX9Gs9vb&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=6&oh=83400f4d84e35312e9203c7b3a34d378&oe=5F4EE95E' }} style={styleScoped.customImageCircleStore} />
                            </View>
                            <View>
                                <Text style={styleScoped.textTitleStore}>Airmany</Text>
                                <View style={styles.flexRowStart}>
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#FFC250" style={{ marginTop: 3, marginRight: 3 }} />
                                    <Icon name="star" size={10} color="#F1F9FF" style={{ marginTop: 3, marginRight: 3 }} />
                                </View>
                            </View>

                            <Text style={styleScoped.textPriceStore}>{this.props.data.price} บาท</Text>
                        </View>


                    </View>

                    <View style={styleScoped.boxanotherInfo}>
                        <Text style={styleScoped.textAnotherTitle}>รายละเอียดสินค้า</Text>
                        <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>Brand, Model, Air Conditioner Rated Capacity (HP)</Text>

                        <Text style={[styleScoped.textAnotherTitle, styles.mt_2]}>Brand</Text>
                        <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>{this.props.data.brand}</Text>

                        <Text style={[styleScoped.textAnotherTitle, styles.mt_2]}>Model</Text>
                        <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>{this.props.data.gen}</Text>

                        <Text style={[styleScoped.textAnotherTitle, styles.mt_2]}>Air Coditioner Rated. Capacity (BTUs)</Text>
                        <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>13307</Text>

                        <View style={[styles.flexRowCenter, styles.customButtomSeeMore]}>
                            <Text style={styles.textInButtomSeemore}>เพิ่มเติม </Text>
                            <Icon name="chevron-down" size={22} color="#6CC3ED" />
                        </View>
                    </View>


                    <View style={styleScoped.boxanotherInfo}>
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
                        <Text style={{ marginTop: 5 ,fontFamily:defaultTheme.FONT.FONT_FAMILY }}>ได้รับสินค้า เรียบร้อยเเล้วค่ะ เเอร์เย็น สบายมากค่ะ</Text>


                        <View style={styleScoped.boxComment}>
                            <Icon name="message" size={25} color="#6CC3ED" style={{ marginRight: 10 }} />
                            <Text style={{ color: '#6CC3ED',fontFamily:defaultTheme.FONT.FONT_FAMILY }}>คอมเม้นของคุณ...</Text>
                        </View>


                    </View>

                    <View style={[{ paddingTop: 20 }, styles.flexRowCenter]}>
                        <Text style={{ color: '#000', fontSize: hp('1.6%'), fontFamily:defaultTheme.FONT.FONT_FAMILY  }}>  - - - - - - -  สินค้าใกล้เคียง - - - - - - -</Text>
                    </View>


                    <View style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 10, marginBottom: 20 }}>
                        {ProductList.map((el, i) => {
                            return <ListProduct data={el} key={i}></ListProduct>
                        })}
                    </View>

                </ScrollView>
                <TouchableOpacity style={{padding:hp('2%'),backgroundColor:defaultTheme.COLORS.PRIMARY,alignItems:'center'}} onPress={()=>this.selectThisProduct('AAAAAA')}>
                    <Text style={{fontSize:hp('2%'),color:'white',textAlign:'center',fontFamily:defaultTheme.FONT.FONT_FAMILY}}>เลือกสินค้า</Text>
                </TouchableOpacity>
            </SafeAreaView>

        )
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(DetailProduct)



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
        fontSize: hp('3%'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textDiscount: {
        color: '#6CC3ED',
        fontSize: hp('1.5%'),
        textDecorationLine: 'line-through',
        marginRight: 10,
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    boxTextDiscountPercent: {
        width: hp('6%'),
        fontWeight: 'bold',
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        borderRadius: 2,
        // padding:hp('1%'),
        backgroundColor: '#DC5C4C',
        height: hp('2.5%'),
        alignItems: 'center',
    },
    textTitleBrand: {
        fontSize: hp('2.3'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textinfo: {
        fontSize: hp('1.6%'),
        color: '#ACACAC',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textScore: {
        fontSize: hp('2.2'),
        color: '#000',
        marginLeft: 8,
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textFullScore: {
        fontSize: hp('1.6%'),
        color: '#000',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textConFirm: {
        marginLeft: 2,
        marginTop: 2,
        fontWeight: 'bold',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    boxanotherInfo: {
        backgroundColor: '#fff',
        padding: 10,
        marginTop: 10
    },
    textAnotherTitle: {
        fontSize: hp('2.3%'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textSeeMore: {
        fontSize: hp('1.6%'),
        color: '#49C5F1',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
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
        fontSize: 16,
        marginTop: 5,
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textPriceStore: {
        textAlign: 'right',
        flex: 0.98,
        flexDirection: 'row',
        fontSize: hp('2%'),
        marginTop: 5,
        fontFamily: defaultTheme.FONT.FONT_FAMILY
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
        marginTop: 10,
        fontSize: hp('1.6%'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textAddressAccount: {
        marginTop: 2,
        fontSize: hp('1.6%'),
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