import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    CheckBox,
    SafeAreaView,
    ImageBackground,
    TextInput,
    Alert
} from 'react-native';


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../constants'

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


import { connect } from 'react-redux'

// import Omise from 'omise';
// const omise = Omise({'secretKey':'pkey_test_5bmmdygfv61fzvvugfx', 'omiseVersion':'2019-05-29'});

import Omise from 'omise-react-native';

Omise.config('pkey_test_5lpkdebz7i7des2x4ik', '2015-11-17');



const mapStateToProps = function (state) {
    return {
        compareProduct: state.compareProduct,
        productCart: state.productCart,
        compareProductList: state.compareProductList,

    }
}



class Payment extends Component {

    state = {
        listProduct: [],
        createCredit: false,
        name: '',
        number: '',
        expiration_month: '',
        expiration_year: '',
        security_code: ''
    }

    constructor(props) {
        super(props)

    }


    createCredit() {
        this.setState({ createCredit: false })

        Omise.createToken({
            'card': {
                'name': 'JOHN DOE',
                'city': 'Bangkok',
                'postal_code': 10320,
                'number': '4242424242424242',
                'expiration_month': 10,
                'expiration_year': 2018,
                'security_code': 123
            }
        }).then(res => {
            console.log(res.id)
        }).catch(e => {
            console.log('ERROR', e)
        })

        Alert.alert(
            'เพิ่มบัตรเครดิต',
            'สำเร็จ',
        );

    }

    checkBill() {

        

        Omise.createToken({
            'type': 'internet_banking_bbl',
            'amount': 500000,
            'currency': 'thb'
        }).then(res => {
            console.log(res.id)
           
        }).catch(e => {
            console.log('ERROR', e)
        })

        Alert.alert(
            'การชำระเงิน',
            'สำเร็จ',
            [
                { text: 'OK', onPress: () => Actions.push('MainScene') }
            ]
        );

    }

    render() {
        const { productCart } = this.props
        return (

            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>
                    {/* <SafeAreaView> */}


                    <View style={{ ...styles.flexRowBetween, marginTop: 10, marginBottom: 10, ...styles.container }}>

                        <View style={{ ...styles.boxIconCircle, backgroundColor: defaultTheme.COLORS.PRIMARY }}>
                            <Icon
                                name="chevron-left" size={defaultTheme.size.iconOnTop} style={{ ...styles.iconStyleCircle, color: 'white' }}
                                onPress={() => Actions.push('CartSecene')}
                            />
                        </View>

                        <View style={{ marginTop: 6 }}>
                            <Text style={{ ...styles.textTitle, fontFamily: defaultTheme.FONT.FONT_FAMILY, marginLeft: - hp('4%'), color: 'black' }}>
                                เช็คเอ้าท์
                                </Text>
                        </View>

                        <View >

                        </View>
                    </View>

                    <View style={{ ...styles.container }}>
                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2.5%') }}>Contact Info</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View >
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), marginBottom: 5 }}>คุณแมน</Text>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), }}>0909878142</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ textAlignVertical: 'center', color: defaultTheme.FONT.PRIMARY }}>แก้ไข</Text>
                                    <Icon name="chevron-right" size={hp('2.8%')} style={{ color: defaultTheme.FONT.PRIMARY }} />
                                </View>
                            </View>
                        </View>



                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2.5%') }}>Delivery to</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: wp('50%') }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), marginBottom: 5 }}>หมู่บ้านพลีโน่ สุขสวัสดิ 30, ทุ่งครุ, กทม 10120</Text>
                            </View>
                            <View style={{ flexDirection: 'column', justifyContent: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ textAlignVertical: 'center', color: defaultTheme.FONT.PRIMARY }}>แก้ไข</Text>
                                    <Icon name="chevron-right" size={hp('2.8%')} style={{ color: defaultTheme.FONT.PRIMARY }} />
                                </View>
                            </View>
                        </View>



                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2.5%') }}>Product</Text>
                        </View>



                        <View style={{
                            marginTop: hp('2%'),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: hp('1%'),
                            ...styles.shadowDefault,
                            borderRadius: 10,
                            backgroundColor: "white",
                        }}>

                            <View style={{ width: hp('10%'), flexDirection: "column", justifyContent: 'center' }}>
                                <Image source={require('../../assets/images/air.png')}
                                    style={{ marginLeft: hp('2%'), width: hp('10%'), height: hp('5%'), resizeMode: 'contain' }} />
                            </View>

                            <View>
                                <View style={{ paddingVertical: hp('0.5%'), paddingHorizontal: hp('0.8%'), backgroundColor: '#215974', borderRadius: 5 }}>
                                    <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>
                                        เครื่องเปล่า
                                        </Text>
                                </View>
                                <Text style={{ marginTop: hp('1%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>
                                    CARRIER
                                    </Text>
                                <Text style={{ marginTop: hp('0.2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), color: defaultTheme.FONT.FONT_GREY }}>
                                    14,300 BTU/Hours
                                    </Text>
                                <Text style={{ marginTop: hp('1%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, fontWeight: 'bold', fontSize: hp('2%'), color: defaultTheme.FONT.PRIMARY }}>
                                    24,900 BTU
                                    </Text>
                            </View>

                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                borderWidth: 1,
                                borderColor: '#EBEBEB',
                                paddingHorizontal: hp('2%'),
                                paddingVertical: hp('1%'),
                                borderRadius: 5
                            }}>
                                <View>
                                    <Icon name="plus" size={hp('2.5%')} style={{ color: defaultTheme.FONT.PRIMARY }} />
                                </View>
                                <View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%'), textAlign: 'center' }}>1</Text>
                                </View>
                                <View>
                                    <Icon name="minus" size={hp('2.5%')} style={{ color: defaultTheme.FONT.PRIMARY }} />
                                </View>

                            </View>




                        </View>

                        <TouchableOpacity style={{
                            marginTop: hp('2%'),
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: hp('3%'),
                            ...styles.shadowDefault,
                            borderRadius: 10,
                            backgroundColor: "white",
                        }}>

                            <Text style={{ color: defaultTheme.FONT.FONT_GREY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2.3%') }}>ซื้อ Control Air เพิ่ม</Text>
                            <Text style={{ color: defaultTheme.FONT.FONT_GREY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2.3%') }}>5,000 บาท</Text>

                        </TouchableOpacity>


                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2.5%') }}>การชำระเงิน</Text>
                        </View>

                        <View>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.FONT_GREY, fontSize: hp('1.8%') }}>ผ่าน Mobile banking</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: '#5B7174',
                            paddingVertical: hp('1%'),
                            paddingHorizontal: hp('1%'),
                            borderRadius: 5,
                            marginTop: hp('1%'),
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontFamily: defaultTheme.FONT.FONT_FAMILY,
                                textAlignVertical: 'center',
                                fontSize: hp('1.8%'),
                                marginRight: 10,
                            }}> Pay with K PLUS</Text>
                            <View style={{ width: 40, height: 40 }}>
                                <Image source={Images.logoKplus} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: '#4f2a77',
                            paddingVertical: hp('1%'),
                            paddingHorizontal: hp('1%'),
                            borderRadius: 5,
                            marginTop: hp('1%'),
                            alignItems: 'center'
                        }}>
                            <Text style={{
                                color: 'white',
                                fontFamily: defaultTheme.FONT.FONT_FAMILY,
                                textAlignVertical: 'center',
                                fontSize: hp('1.8%'),
                                marginRight: 10,
                            }}> Pay with SCB</Text>
                            <View style={{ width: 40, height: 40 }}>
                                <Image source={Images.logoSCB} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                        </View>



                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.FONT_GREY, fontSize: hp('1.8%') }}>ผ่านบัตรเครดิต</Text>
                        </View>

                        <View style={{
                            paddingVertical: hp('2%'),
                            backgroundColor: '#F1F9FF',
                            paddingHorizontal: hp('2.6%'),
                            borderRadius: 5
                        }}>
                            <Text style={{ color: defaultTheme.FONT.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), marginBottom: hp('1%') }}>PAYMENT DETAILS</Text>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>XXXX-XXXX-XXXX-1908</Text>
                        </View>

                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: '#CDD4D9',
                            paddingVertical: hp('2%'),
                            paddingHorizontal: hp('3%'),
                            borderRadius: 5,
                            marginTop: hp('1%'),
                            marginBottom: hp('1%'),
                            alignItems: 'center'
                        }}
                            onPress={() => this.setState({ createCredit: true })}
                        >
                            <Icon name="credit-card-outline" size={hp('3%')} color={'white'} style={{ marginRight: 10 }} />
                            <Text style={{
                                color: 'white',
                                fontFamily: defaultTheme.FONT.FONT_FAMILY,
                                textAlignVertical: 'center',
                                marginRight: 10,
                                fontSize: hp('2.5%')
                            }}>
                                เพิ่มบัตรเครดิต
                                </Text>
                        </TouchableOpacity>


                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2.5%') }}>Coupon</Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ height: hp('12%'), width: wp('45%'), backgroundColor: 'white', }}>
                                <ImageBackground source={require('../../assets/new/icons/bluecoupon.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20, ...styles.shadowDefault }}>
                                    <View style={{ padding: hp('1.45%') }}>
                                        <Text style={{ fontSize: hp('3%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: 'white' }}>1000 $</Text>
                                        <Text style={{ fontSize: hp('1.5%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: 'white' }}>ส่วนลดติดตั้งและบริการ</Text>
                                    </View>
                                </ImageBackground>
                            </View>
                            <View style={{ height: hp('12%'), width: wp('45%'), backgroundColor: 'white', }}>
                                <ImageBackground source={require('../../assets/new/icons/bluecoupon.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain', borderRadius: 20, ...styles.shadowDefault }}>
                                    <View style={{ padding: hp('1.45%') }}>
                                        <Text style={{ fontSize: hp('3%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: 'white' }}>30 % Off</Text>
                                        <Text style={{ fontSize: hp('1.5%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: 'white' }}>ส่วนลดติดตั้งและบริการ</Text>
                                    </View>
                                </ImageBackground>
                            </View>

                        </View>

                        <View style={{ marginTop: hp('3%'), marginBottom: hp('2%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#484848', fontSize: hp('2.5%') }}>Redeem Coupon</Text>
                        </View>

                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            padding: hp('0.5%'),
                            paddingLeft: hp('2%'),
                            borderWidth: 1,
                            borderColor: defaultTheme.COLORS.PRIMARY,
                            borderRadius: 5,
                            alignItems: 'center',
                            marginBottom: hp('3%')
                        }}>

                            <Text style={{
                                fontFamily: defaultTheme.FONT.FONT_FAMILY,
                                fontSize: hp('2%'),
                                color: '#CECDCD'
                            }}>Enter Code </Text>


                            <View style={{
                                paddingHorizontal: hp('2%'),
                                paddingVertical: hp('1%'),
                                backgroundColor: '#F7F7F7',
                                borderRadius: 5,
                                backgroundColor: defaultTheme.COLORS.PRIMARY
                            }}>
                                <Text style={{
                                    fontFamily: defaultTheme.FONT.FONT_FAMILY,
                                    fontSize: hp('1.5%'),
                                    color: 'white'
                                }}>Redeem</Text>
                            </View>
                        </View>


                    </View>








                    {/* </SafeAreaView> */}

                </ScrollView>

                {
                    this.state.createCredit ? null
                        :
                        <View style={{ ...styles.shadowDefault, backgroundColor: 'white' }}>
                            <View style={{ ...styles.container, paddingVertical: hp('1.5%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2.5%'), color: defaultTheme.FONT.PRIMARY }}>ทั้งหมด</Text>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2.5%') }}>24,900 บาท</Text>
                            </View>

                            <TouchableOpacity style={{ ...styles.container, marginBottom: hp('3%') }} onPress={() => this.checkBill()}>
                                <View style={{
                                    paddingVertical: hp('1.5%'),
                                    paddingHorizontal: hp('2.5%'),
                                    backgroundColor: defaultTheme.FONT.PRIMARY,
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    borderRadius: 5,
                                    alignItems: 'center'
                                }}>
                                    <Text style={{
                                        color: 'white',
                                        fontFamily: defaultTheme.FONT.FONT_FAMILY,
                                        textAlignVertical: 'center',
                                        fontSize: hp('2%')
                                    }}>ชำระเงิน</Text>
                                    <Icon name="chevron-right" size={hp('2.5%')} style={{ color: 'white' }} />
                                </View>
                            </TouchableOpacity>
                        </View>
                }


                {this.state.createCredit ? this.renderCreateCredit() : null}
            </SafeAreaView>
        )
    }


    renderCreateCredit() {
        return (
            <View style={{
                paddingVertical: 10,
                height: hp('70%'),
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                ...styles.shadowDefault,
                backgroundColor: 'white',
            }}>
                <View style={{ ...styles.container, paddingTop: hp('2%'), borderTopLeftRadius: hp('2%') }}>
                    <Text style={{ color: defaultTheme.FONT.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2.5%') }}>
                        Add Credit Card
                    </Text>

                    <View style={{ width: wp('50%'), height: hp('10%') }}>
                        <Image source={Images.logoCredit} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>

                    <Text style={{ color: '#215974', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>
                        Crad Number
                    </Text>

                    <View style={{
                        marginTop: hp('1%'),
                        paddingBottom: hp('1%'),
                        borderBottomWidth: 1,
                        borderBottomColor: defaultTheme.COLORS.PRIMARY,
                        width: wp('70%'),

                    }}>
                        <TextInput
                            style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%') }}
                        />
                    </View>



                    <Text style={{ color: '#215974', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), marginTop: hp('3%') }}>
                        Expire Date
                    </Text>

                    <View style={{
                        marginTop: hp('1%'),
                        paddingBottom: hp('1%'),
                        borderBottomWidth: 1,
                        borderBottomColor: defaultTheme.COLORS.PRIMARY,
                        width: wp('25%'),

                    }}>
                        <TextInput
                            style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%') }}
                        />
                        {/* <Text style={{
                            fontFamily: defaultTheme.FONT.FONT_FAMILY,
                            fontSize: hp('3%')
                        }}>
                            
                            50 / 21</Text> */}
                    </View>



                    <Text style={{ color: '#215974', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), marginTop: hp('3%') }}>
                        Cardholder Name
                    </Text>

                    <View style={{
                        marginTop: hp('1%'),
                        paddingBottom: hp('1%'),
                        borderBottomWidth: 1,
                        borderBottomColor: defaultTheme.COLORS.PRIMARY,
                        width: wp('50%'),

                    }}>
                        <TextInput
                            style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%') }}
                        />
                        {/* <Text style={{
                            fontFamily: defaultTheme.FONT.FONT_FAMILY,
                            fontSize: hp('3%')
                        }}>
                            John Doe</Text> */}

                    </View>


                </View>

                <TouchableOpacity style={{ ...styles.container, marginBottom: 20, marginTop: hp('3%') }}
                    onPress={() => this.createCredit()}>
                    <View style={{
                        paddingVertical: hp('2%'),
                        paddingHorizontal: hp('2%'),
                        backgroundColor: defaultTheme.FONT.PRIMARY,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        borderRadius: 5,
                        marginTop: 10,
                        alignItems: 'center'
                    }}>
                        <Icon name="plus" size={hp('2.5%')} style={{ color: 'white' }} />
                        <Text style={{
                            color: 'white',
                            fontSize: hp('2.5%'),
                            fontFamily: defaultTheme.FONT.FONT_FAMILY,
                            textAlignVertical: 'center'
                        }}>เพิ่มบัตรเครดิต</Text>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }


    renderMoreService() {
        return (
            <View style={{ ...styles.container, paddingVertical: 5, backgroundColor: 'white', flexDirection: 'row', marginTop: 10 }}>
                <CheckBox style={{ marginRight: 20 }} />
                <Text style={{ textAlignVertical: 'center', fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ซื้อ Control Air เพิ่ม</Text>

                <Text style={{ flex: 1, textAlign: 'right', textAlignVertical: 'center', fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>5,000 บาท</Text>
            </View>
        )
    }

    renderItemProducts(item, key) {
        return (
            <View key={key} style={{
                ...styles.container,
                marginTop: 10,
                borderBottomWidth: 2,
                borderBottomColor: defaultTheme.COLORS.SECONDARY,
                backgroundColor: 'white',
                paddingVertical: 5
            }}>

                <View style={{ flexDirection: 'row' }}>

                    <View style={{ ...styleScoped.boxBorderImageCircleStore, marginRight: 30 }}>
                        <Image source={Images.shopSmair} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                    </View>

                    <Text style={{
                        marginTop: 15,
                        borderRadius: 5, height: 30,
                        paddingVertical: 5,
                        paddingHorizontal: 10,
                        backgroundColor: '#EFFAFF',
                        fontFamily: defaultTheme.FONT.FONT_FAMILY
                    }}>
                        ราคาเครื่องเปล่า
                    </Text>

                </View>



                <View style={{ ...styles.flexRowStart, marginTop: 10 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox style={{ marginTop: 5, borderColor: defaultTheme.COLORS.PRIMARY }} />
                        <View style={{ height: 50, width: 100, marginTop: 0, marginRight: 20 }}>
                            <Image source={require('../../assets/images/arismall.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>
                    </View>


                    <View >
                        <Text style={{ marginRight: 10, fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 16 }} >
                            ค่าติดตั้ง 1,500 บาท
                        </Text>


                        <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.FONT_GREY, marginTop: 5 }}>
                            {item.brand} : {item.gen}
                        </Text>

                        <View style={{ marginTop: 10, marginBottom: 30, flexDirection: 'row' }}>

                            <Icon name="star-circle" size={25} color="#FFC250" style={{ marginTop: 3, marginLeft: 3, marginRight: 5, textAlignVertical: 'center' }} />
                            <Text style={{ textAlignVertical: 'center', marginRight: 15, color: defaultTheme.FONT.FONT_GREY, fontWeight: 'bold' }}>ติดตั้งพรีเมี่ยม 2,500 บาท</Text>


                        </View>
                    </View>


                </View>
            </View>
        )
    }

}



export default connect(mapStateToProps)(Payment)


const styleScoped = StyleSheet.create({

    boxBorderImageCircleStore: {
        width: 60,
        height: 60,
        borderRadius: 50,
        padding: 10,
        marginRight: 20,
        borderWidth: 1,
        borderColor: '#CDD4D9'
    },

})