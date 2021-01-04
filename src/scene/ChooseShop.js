import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image
} from 'react-native';


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

import { ProductList } from '../services/Product'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../constants'

import { connect } from 'react-redux'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import SearchProduct from '../components/SreachProduct'
const mapStateToProps = function (state) {
    return {
        setupOnlySelectProduct: state.setupOnlySelectProduct,
    }
}



class ChooseShop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ProductList: ProductList,
            toggleFilter: false,
            filterName: '',
            haveInCart: false,
            countItemInCart: 0
        };
    }

    onChangeText(val) {
        let result = ProductList.filter(el => {
            return el.brand
                .toString()
                .toLowerCase()
                .indexOf(val.toLowerCase()) >= 0
        })
        this.setState(old => {
            return { ProductList: result }
        })
        // this.state.ProductList = result
    }

    onToggleFilter() {
        if (this.state.toggleFilter) {
            this.setState({ toggleFilter: false })
        } else {
            this.setState({ toggleFilter: true })
        }
    }



    render() {
        const { setupOnlySelectProduct } = this.props
        return (
            <ScrollView>

                <View style={{ ...styles.header, marginBottom: hp('4%') }}>
                    <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                        <Icon
                            style={{ ...styles.iconStyleCircle }}
                            name="chevron-left"
                            size={defaultTheme.size.iconOnTop}
                            onPress={() => Actions.push('Product')}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%'),marginTop:hp('3%'),fontWeight:'bold'}}>Your Product</Text>
                    </View>
                    <View style={{padding:hp('1%'),width:wp('50%'),height:hp('8%'),marginBottom:hp('5%'),marginTop:hp('2%'),...styles.shadowDefault,backgroundColor:'white',borderRadius:5}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <View style={{width:hp('10%'),height:'100%',marginRight:hp('1%')}}>
                                <Image source={require('../../assets/images/arismall.png')} style={{height:'100%',width:'100%',resizeMode:'contain',alignItems:'center'}}/>
                            </View>
                            <View style={{alignSelf:'center'}}>
                                <Text style={{fontSize:hp('1.8%'),fontFamily: defaultTheme.FONT.FONT_FAMILY}}>CARRIER</Text>
                                <Text style={{fontSize:hp('1.5%'),color:defaultTheme.FONT.FONT_GREY}}>FTKC15TV2S</Text>
                            </View>
                        </View>
                    </View>


                    <View style={{ position: 'relative' }}>
                        <View style={{ ...styles.boxSearchHeader, ...styles.shadowDefault, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                                <TextInput
                                    onFocus={() => this.onToggleSearch(true)}
                                    onBlur={() => this.onToggleSearch(false)}
                                    style={styles.inputSearchbox}
                                    placeholder="ค้นหาร้าน"
                                />
                            </View>
                            <View>
                                <Icon name="tune" size={hp('3%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal' }} />
                            </View>
                        </View>
                    </View>
                </View>


                <View style={{ marginTop: 10, flexDirection:'row',justifyContent:'flex-end', ...styles.container, marginBottom: 10 }}>

                    <View style={{
                        flex: 0.4,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingHorizontal: 15,
                        paddingVertical: 10,
                        borderRadius: 5,
                        backgroundColor: defaultTheme.COLORS.SECONDARY
                    }}>
                        {
                            setupOnlySelectProduct ?
                                <Text style={{  fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>ติ๊ดตั้งอย่างเดียว</Text>
                                :
                                <Text style={{  fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>ราคาเครื่องเปล่า</Text>

                        }
                        <Icon name="chevron-down" size={20} color={defaultTheme.FONT.PRIMARY} style={{ textAlignVertical: 'center' }} />
                    </View>
                </View>


                {this.renderItemShop()}
                {this.renderItemShop()}
                {this.renderItemShop()}
                {this.renderItemShop()}
                {this.renderItemShop()}


            </ScrollView>
        )
    }


    renderItemShop() {
        const { setupOnlySelectProduct } = this.props
        return (

            <TouchableOpacity style={{
                ...styles.container,
                ...styles.flexRowStart,
                marginTop: 10,
                paddingBottom: 10
            }}
                onPress={() => Actions.push('ShopInfo')}
            >
                <View style={{ width: hp('12%'), height: hp('9%'), marginRight: hp('2%') }}>
                    <Image source={Images.shop1} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                </View>

                <View style={{ padding: 5 }}>

                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, marginRight: 10 ,fontSize:hp('2%')}}>SM AIR</Text>
                        <View style={{
                            width:hp('2%'),
                            height:hp('2%'),
                            borderRadius:50,
                            flexDirection:'column',
                            justifyContent:'center',
                            backgroundColor: '#FFDC64',
                            marginTop:hp('0.5%')
                        }}>
                            <Icon name="thumb-up" size={10} style={{
                                textAlignVertical: 'center',
                                textAlign: 'center',
                                color: 'white'
                            }}
                            />
                        </View>
                        
                    </View>
                    {
                        setupOnlySelectProduct ?
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY , fontSize:hp('1.8%') }}>ค่าติดตั้ง 1,500</Text>
                            :
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY , fontSize:hp('1.8%')}}>25,9000 บาท</Text>

                    }

                    <View style={{ flexDirection: 'row', marginTop: hp('0.5%') }}>
                        <Icon name="map-marker" size={15} style={{ color: 'red' }} />
                        <Text style={{ fontSize: hp('1.3%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.FONT_GREY }}> 1.5 km</Text>
                    </View>


                </View>

                <View style={{ flex: 0.8, flexDirection: 'row', justifyContent: 'flex-end' , marginTop:hp('1%') }} >
                    <Icon name="star" size={15} color="#FFC250" />
                    <Icon name="star" size={15} color="#FFC250" />
                    <Icon name="star" size={15} color="#FFC250" />
                    <Icon name="star" size={15} color="#FFC250" />
                    <Icon name="star" size={15} color="#F1F9FF" />
                </View>



            </TouchableOpacity>


        )
    }




}


export default connect(mapStateToProps)(ChooseShop)



var styleScoped = StyleSheet.create({


    boxHeader: {
        height: 100,
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 10
    },
    boxContent: {
        backgroundColor: 'white',
        paddingHorizontal: 20,
        marginTop: 10
    },
    boxCustomTextInput: {
        backgroundColor: '#f7f7f7',
        padding: 5,
        borderRadius: 5,
        height: 40,
    },
    customTextInput: {
        textAlign: 'left',
        height: '100%',
        padding: 0,
        paddingLeft: 10,
        color: defaultTheme.COLORS.FONT_GREY,
        fontWeight: 'bold'
    },
    customButtomCompare: {
        borderRadius: 5,
        backgroundColor: '#f7f7f7',
        width: 160,
        paddingTop: 5,
        paddingBottom: 1,
        paddingLeft: 10,
        paddingRight: 10
    },
    boxCompareProduct: {
        height: 32,
        marginTop: 10
    },
    textCustomCompare: {
        color: '#000',
        marginTop: 1,
        fontWeight: 'bold'
    },
    customButtomFilter: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: defaultTheme.COLORS.PRIMARY,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 5
    },
    customButtomFilterActive: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderColor: defaultTheme.COLORS.PRIMARY,
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 5
    },
    customTextFilter: {
        color: defaultTheme.COLORS.PRIMARY,
        fontWeight: 'bold',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    customTextFilterActive: {
        color: 'white',
        fontWeight: 'bold',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    }




});
