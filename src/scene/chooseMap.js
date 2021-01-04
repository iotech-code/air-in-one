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
import ListProduct from '../components/ListProduct'
import { ProductList } from '../services/Product'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../constants'
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


class chooseMap extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ProductList: ProductList,
            toggleFilter: false,
            filterName: '',
            haveInCart: false,
            countItemInCart: 0,
            compareProduct: false,
            searchProduct: false
        };
        this.onChangeText = this.onChangeText.bind(this)
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
        const { toggleFilter, showFilterName } = this.props
        if (showFilterName) {
            toggleFilter(false)
        } else {
            toggleFilter(true)
        }
    }

    onToggleSearch(val) {
        this.state.searchProduct = val
        console.log(this.state.searchProduct)
    }

    async onToggleCompare() {
        const { setCompareProduct, compareProduct } = this.props
        if (compareProduct) {
            setCompareProduct(false)
        } else {
            setCompareProduct(true)
        }
    }




    componentDidMount() {
        this.checkItemInCart();
    }


    render() {
        const { productCompareLength, compareProduct, filterName, showFilterName } = this.props
        console.log(filterName)
        return (
            <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={{ ...styles.header, marginBottom: hp('4%') }}>
                        <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                            <Icon
                                style={{ ...styles.iconStyleCircle }}
                                name="chevron-left"
                                size={defaultTheme.size.iconOnTop}
                                onPress={() => Actions.push('MainScene')}
                            />
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: hp('5%'), marginTop: hp('2%') }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <View style={{
                                    backgroundColor: '#DAF4FC',
                                    ...styles.boxIconCircle,
                                    marginRight: hp('1%')
                                }}>
                                    <Icon name="map-marker" size={hp('2.5%')} style={{ color: '#215974', textAlign: 'center' }} />
                                </View>
                                <View>
                                    <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>จัดส่งที่ </Text>
                                    <TouchableOpacity onPress={() => Actions.push('ChooseLocationForSend')}>
                                        <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), fontWeight: 'bold' }}>หมู่บ้านพลีโน่ สุขสวัสดิ์</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{
                                ...styles.boxIconCircle,
                                marginRight: hp('1%'),
                                backgroundColor: '#92DAFC',
                            }}>
                                <Icon name="pencil-outline" size={hp('2.5%')} style={{ color: 'white', textAlign: 'center' }} />
                            </View>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <View style={{ ...styles.boxSearchHeader, ...styles.shadowDefault, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                                    <TextInput
                                        onFocus={()=>this.onToggleSearch(true)}
                                        onBlur={()=>this.onToggleSearch(false)}
                                        style={styles.inputSearchbox}
                                        placeholder="ค้นหาเครื่องปรับอากาศ..."
                                    />
                                </View>
                                <View>
                                    <Icon name="tune" size={hp('3%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal' }}  />
                                </View>
                            </View>
                        </View>
                    </View>



                </ScrollView>

            </View>

        )
    }

}




export default connect(mapStateToProps, mapDispatchToProps)(Product)




var styleScoped = StyleSheet.create({


    boxHeader: {
        height: 100,
        backgroundColor: 'white',
        padding: 20,
        paddingBottom: 10
    },
    boxContent: {
        backgroundColor: 'white',
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
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    customButtomCompareActive: {
        borderRadius: 5,
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    textCustomCompare: {
        color: '#000',
        textAlignVertical: 'center',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    },
    textCustomCompareActive: {
        color: 'white',
        textAlignVertical: 'center',
        fontFamily: defaultTheme.FONT.FONT_FAMILY
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
    },
    sectionCompare: {

    },
    confirmCompare: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: defaultTheme.COLORS.GREY
    },
    confirmCompareActive: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: defaultTheme.COLORS.PRIMARY
    },
    textConfirmCompare: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontWeight: 'bold'
    },
    textConfirmCompare: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontWeight: 'bold'
    },
    boxItemCompare: {
        borderTopWidth: 4,
        borderTopColor: defaultTheme.COLORS.PRIMARY,
        paddingVertical: 20,
        paddingHorizontal: 10,
        minHeight: 20
    },
    twoProductCompare: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    oneProductCompare: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    iconCloseItem: {
        alignSelf: 'flex-end',
        color: defaultTheme.FONT.PRIMARY,
        position: 'absolute',
        zIndex: 1
    },
    boxImageCompare: {
        width: 100,
        height: 40,
        marginRight: 10,
        position: 'relative'
    },
    boxTwoImageCompare: {
        width: 70,
        height: 50,
        marginRight: 10,
        position: 'relative'
    },
    boxItemImageCompare: {
        width: 100,
        height: 40,
        marginRight: 10,
        position: 'relative'
    },
    textBrandAirCompare: {
        fontWeight: 'bold',
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        color: defaultTheme.FONT.PRIMARY
    },
    textModelAirCompare: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        color: defaultTheme.FONT.FONT_GREY,
        fontSize: 12,
        fontWeight: 'bold'
    },
    textCompareVS: {
        alignSelf: 'center',
        textAlign: 'center',
        padding: 10,
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        borderRadius: 50, color: 'white',
        fontWeight: "bold",
        marginLeft: 10,
        fontFamily: defaultTheme.FONT.FONT_FAMILY
    }




});
