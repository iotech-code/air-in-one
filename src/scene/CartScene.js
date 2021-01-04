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
} from 'react-native';


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../constants'
import AsyncStorage from '@react-native-community/async-storage'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchProduct from '../components/SreachProduct'

import { connect } from 'react-redux'



const mapStateToProps = function (state) {
  return {
    compareProduct: state.compareProduct,
    productCart: state.productCart,
    compareProductList: state.compareProductList,
    setupOnlySelectProduct: state.setupOnlySelectProduct,
    
  }
}

class CartScene extends Component {

    state = {
        listProduct:[],
        price:0
    }

    constructor(props) {
        super(props)
        this.getItemInCart();
    }

    async getItemInCart(){
        try {
            let item = await AsyncStorage.getItem('product_cart')
            if(item !== null){
             this.setState({listProduct:JSON.parse(item)})
            }
        } catch (error) {
            console.log('getItemInCart',error)
        }
    }

    conditionRenderCart(){
        const {productCart,setupOnlySelectProduct} = this.props
        console.log(productCart.length)
        if(productCart.length != 0){
           return productCart.map((item,index) => {
                return this.renderItemProducts(item,index);        
            })    
        }
        if(setupOnlySelectProduct){
            return this.renderItemProductsInstallOnly();
        }else{
            return this.renderEmptyCart()
        }
         
    }

    componentDidMount(){

    }

    calPrice(){
        const {productCart} = this.props
    }

    render() {
        const {productCart,setupOnlySelectProduct} = this.props
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>

                    <View style={{ ...styles.flexRowBetween, marginTop: 10, marginBottom: 10, ...styles.container }}>

                        <View style={{ ...styles.boxIconCircle, backgroundColor: defaultTheme.COLORS.PRIMARY }}>
                            <Icon
                                name="chevron-left" size={defaultTheme.size.iconOnTop} style={{ ...styles.iconStyleCircle, color: 'white' }}
                                onPress={() => Actions.push('Product')}
                            />
                        </View>

                        <View style={{ marginTop: 6 }}>
                            <Text style={{ ...styles.textTitle, fontFamily: defaultTheme.FONT.FONT_FAMILY, marginLeft: - hp('4%') }}>
                                รถเข็น
                                </Text>
                        </View>

                        <View >

                        </View>
                    </View>

                    <View style={{ ...styles.container }}>
                        <View style={{ marginTop: hp('2%'), flexDirection: 'row', justifyContent: 'flex-start', height: hp('5%') }}>
                            <Image source={require('../../assets/images/shop1.png')} style={{ height: '100%', width: hp('5%'), resizeMode: 'contain' }} />
                            <View style={{ marginLeft: hp('3%'), alignItems: 'center', marginTop: hp('0.8%') }} >
                                <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlignVertical: 'center' }}>SM AIR</Text>
                            </View>
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



                        <View style={{ marginTop: hp('34%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>Sub Total</Text>
                            <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY }}>24,900 บาท</Text>
                        </View>

                        <TouchableOpacity style={{ marginTop: hp('1%'), backgroundColor: defaultTheme.COLORS.PRIMARY, padding: hp('2%'), borderRadius: 5 }} onPress={() => Actions.push('Payment')} >
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY }}>Proceed To Checkout</Text>
                        </TouchableOpacity>





                    </View>






                </ScrollView>
            </SafeAreaView>

        )
    }

    renderEmptyCart(){
        return (
            <View>
                <View style={{ marginTop: '50%', ...styles.flexRowCenter }}>
                    <Text style={{
                        color: defaultTheme.FONT.FONT_GREY,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontFamily: defaultTheme.FONT.FONT_FAMILY
                    }}>
                        ไม่พบรายการสินค้าหรือบริการ
                    
                    </Text>
                </View>    

                <View style={{ marginTop: 20, ...styles.flexRowCenter }}>
                    <TouchableOpacity style={{ ...styles.btnPrimary, width: 200 }} onPress={() => Actions.push('Product')}>
                        <Text style={{ ...styles.textBtn, color: 'white' }}>
                            เลือกซื้อสินค้าหรือบริการ
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }

    renderMoreService(){
        return (
            <View style={{ ...styles.container,paddingVertical: 5,backgroundColor:'white',flexDirection:'row',marginTop:10}}>
                <CheckBox style={{marginRight:20}}/>
                <Text style={{textAlignVertical:'center',fontWeight:'bold',fontFamily:defaultTheme.FONT.FONT_FAMILY}}>ซื้อ Control Air เพิ่ม</Text>

                <Text style={{flex:1,textAlign:'right',textAlignVertical:'center',fontWeight:'bold',fontFamily:defaultTheme.FONT.FONT_FAMILY,color:defaultTheme.FONT.PRIMARY}}>5,000 บาท</Text>
            </View>
        )
    }

    renderItemProducts(item,key){
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



                <View style={{ ...styles.flexRowStart , marginTop:10}}>

                    <View style={{ flexDirection: 'row' }}>
                        <CheckBox style={{ marginTop: 5, borderColor: defaultTheme.COLORS.PRIMARY }} />
                        <View style={{ height: 50, width: 100, marginTop: 0, marginRight: 20 }}>
                            <Image source={require('../../assets/images/arismall.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>
                    </View>


                    <View >
                        <Text style={{ marginRight: 10, fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 16 }} >
                            {item.brand} : {item.gen}
                        </Text>


                        <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.FONT_GREY, marginTop: 5 }}>
                            {item.detail}
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.PRIMARY, marginTop: 5 }}>
                            {item.price} บาท
                        </Text>
                        <View style={{ marginTop: 10, marginBottom: 30, flexDirection: 'row' }}>

                            <TouchableOpacity style={{
                                backgroundColor: 'white',
                                borderColor: defaultTheme.COLORS.PRIMARY,
                                color: defaultTheme.COLORS.PRIMARY,
                                borderRadius: 50,
                                width: 22,
                                height: 22,
                                borderWidth: 1,
                                padding: 2,
                                marginRight: 15
                            }}>
                                <Icon name="plus" size={15} style={{ textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            </TouchableOpacity>

                            <Text style={{ textAlignVertical: 'center', marginRight: 15, color: defaultTheme.COLORS.PRIMARY, }}>1</Text>

                            <TouchableOpacity style={{
                                backgroundColor: 'white',
                                borderColor: defaultTheme.COLORS.PRIMARY,
                                color: defaultTheme.COLORS.PRIMARY,
                                borderRadius: 50,
                                width: 22,
                                height: 22,
                                borderWidth: 1,
                                padding: 2,
                                marginRight: 15
                            }}>
                                <Icon name="minus" size={15} style={{ textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            </TouchableOpacity>

                        </View>


                    </View>




                </View>
            </View>
        )
    }



    renderItemProductsInstallOnly(){
        return (
            <View style={{
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
                        ติดตั้งอย่างเดียว
                    </Text>

                </View>



                <View style={{ ...styles.flexRowStart , marginTop:10}}>

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
                            CARRIER : FTKC15TV
                        </Text>
                        <View style={{ ...styles.flexRowStart }}>
                            <Icon name="star-circle" size={25} color="#FFC250" style={{ marginTop: 3, marginLeft: 3, marginRight: 5, textAlignVertical: 'center' }} />
                            <Text style={{ textAlignVertical: 'center' ,color:defaultTheme.FONT.FONT_GREY,fontWeight:'bold' }}>ติดตั้งพรีเมี่ยม 2,500 บาท</Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.PRIMARY, marginTop: 5 }}>
                           
                        </Text>
                     


                    </View>




                </View>
            </View>
        )
    }

}

export default connect(mapStateToProps)(CartScene)


const styleScoped = StyleSheet.create({

    boxBorderImageCircleStore:{
        width:60,
        height:60,
        borderRadius:50,
        padding:10,
        marginRight:20,
        borderWidth:1,
        borderColor:'#CDD4D9'
    },

})