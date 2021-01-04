
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import { styles } from '../styles/base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux';
import { defaultTheme } from '../constants'
import { connect } from 'react-redux'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const mapStateToProps = function (state) {
    return {
        compareProduct: state.compareProduct,
        productCart: state.productCart,
        compareProductList: state.compareProductList,

    }
}


const mapDispatchToProps = function (dispatch) {
    return {
        setCompareProduct: function (params) {
            dispatch({
                type: 'COMPARE_PRODUCT',
                payload: params
            })
        },
        dispatch: dispatch
    }
}



class SearchProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            haveInCart: false
        }

    }

    chooseProduct(){
        this.props.chooseProduct()
    }


    render() {
        return (
            <View style={{ ...styles.container, marginTop: hp('1%') }}>
                <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY  }}>Recent</Text>

                <TouchableOpacity style={{flexDirection:'row',justifyContent:'flex-start',marginTop:'1%'}} onPress={()=>this.chooseProduct()}>
                    <View style={{padding:hp('2%'),width:wp('50%'),height:hp('10%'),...styles.shadowDefault,backgroundColor:'white',borderRadius:5}}>
                        <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
                            <View style={{width:hp('10%'),height:'100%'}}>
                                <Image source={require('../../assets/images/arismall.png')} style={{height:'100%',width:'100%',resizeMode:'contain',alignItems:'center'}}/>
                            </View>
                            <View style={{alignSelf:'center'}}>
                                <View style={{height:hp('3%'),width:hp('5%')}}>
                                    <Image source={require('../../assets/images/carrier.png')}  style={{width:'100%',height:'100%',resizeMode:'contain'}}/>
                                </View>
                                <Text style={{marginTop:hp('1%'),fontSize:hp('1.2%'),color:defaultTheme.FONT.FONT_GREY}}>รุ่น FTKC15TV2S</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, marginTop:hp('2%') }}>แบรน์ดัง</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>

                    {this.renderItemBrand('Carrier')}
                    {this.renderItemBrand('Toshiba')}
                    {this.renderItemBrand('LG')}
                    {this.renderItemBrand('Dakin')}
                    {this.renderItemBrand('Carrier')}
                    {this.renderItemBrand('Toshiba')}
                    {this.renderItemBrand('LG')}
                    {this.renderItemBrand('Dakin')}

                </View>

                <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY , marginTop:hp('1%')}}>แบรน์ดัง</Text>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', flexWrap: 'wrap'}}>
                    {this.renderItemBrand('SM AIR')}
                    {this.renderItemBrand('Air Many')}
                    {this.renderItemBrand('Modern Air')}
                    {this.renderItemBrand('DN Air')}
                    {this.renderItemBrand('New Cooler Air')}
                </View>


            </View>
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
                    fontSize:hp('1.7%'),
                    fontFamily: defaultTheme.FONT.FONT_FAMILY,
                    color: defaultTheme.FONT.FONT_GREY
                }}>{value}</Text>
            </View>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchProduct)


var styleScoped = StyleSheet.create({


})