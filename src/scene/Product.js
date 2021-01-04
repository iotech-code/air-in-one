import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView
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
import SearchProduct from '../components/SreachProduct'
import Slider from '@react-native-community/slider';

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


class Product extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ProductList: ProductList,
            toggleFilter: false,
            filterName: '',
            haveInCart: false,
            countItemInCart: 0,
            compareProduct: false,
            searchProduct: false,
            openFilter: false
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

    onToggleSearch(value) {
        this.setState({ searchProduct: value })

    }

    async onToggleCompare() {
        const { setCompareProduct, compareProduct } = this.props
        if (compareProduct) {
            setCompareProduct(false)
        } else {
            setCompareProduct(true)
        }
    }



    checkItemInCart() {
        //  const {productCart,compareProduct} = this.props
        // if (compareProduct) {
        //     this.setState({
        //         haveInCart: true,
        //         countItemInCart: productCart.length
        //     })
        // }
    }

    setOpenFilter(value) {

        this.setState({ openFilter: value })
    }

    componentDidMount() {
        this.checkItemInCart();
    }


    render() {
        const { productCompareLength, compareProduct, filterName, showFilterName } = this.props

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView style={{ opacity: this.state.openFilter ? 0.1 : 1 }}>

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
                            <TouchableOpacity style={{
                                ...styles.boxIconCircle,
                                marginRight: hp('1%'),
                                backgroundColor: '#92DAFC',
                            }}
                                onPress={() => Actions.push('ChooseLocationForSend')}
                            >
                                <Icon name="pencil-outline" size={hp('2.5%')} style={{ color: 'white', textAlign: 'center' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ position: 'relative' }}>
                            <View style={{ ...styles.boxSearchHeader, ...styles.shadowDefault, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                                    <TextInput
                                        onFocus={() => this.onToggleSearch(true)}
                                        style={styles.inputSearchbox}
                                        placeholder="ค้นหาเครื่องปรับอากาศ..."
                                    />
                                </View>
                                <View>
                                    <Icon name="tune" size={hp('3%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal' }} onPress={() => this.setOpenFilter(true)} />
                                </View>
                            </View>
                        </View>
                    </View>


                    {
                        this.state.searchProduct == true ?

                            <SearchProduct chooseProduct={() => this.onToggleSearch(false)}></SearchProduct>
                            :
                            <View style={styles.container}>

                                <View style={{ ...styleScoped.boxContent }} >
                                    {this.rendercompareProductButton()}

                                    <View >
                                        {this.state.ProductList.map((el, i) => {
                                            return <ListProduct data={el} key={i}></ListProduct>
                                        })}
                                    </View>

                                </View>
                            </View>
                    }

                </ScrollView>


                {
                    this.props.confirmProduct ?
                        <View style={{ ...styles.container, backgroundColor: 'white', paddingVertical: hp('2%'), ...styles.shadowDefault }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#215974' }}>สินค้าที่เลือก</Text>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#215974' }}>1</Text>
                            </View>

                            <TouchableOpacity style={{
                                flexDirection: 'row',
                                justifyContent: 'center',
                                padding: hp('1.5%'),
                                marginTop: hp('2%'),
                                backgroundColor: defaultTheme.COLORS.PRIMARY,
                                borderRadius: 5
                            }}
                                onPress={() => Actions.push('ChooseShop')}
                            >
                                <Text style={{ color: 'white', fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY }}>เลือกร้านค้า</Text>
                            </TouchableOpacity>

                        </View>
                        : null
                }

                {this.state.openFilter
                    ?
                    this.renderFilter()
                    : null
                }

                {/* { this.props.confirmProduct ? this.renderGetItemInCart() : null} */}

                { compareProduct ? this.renderSectionCompare() : null}
            </SafeAreaView>

        )
    }


    renderFilter() {
        return (
            <>
                <View style={{ height: hp('70%'), backgroundColor: 'white', ...styles.shadowDefault, borderTopRightRadius: 15, borderTopLeftRadius: 15 }}>
                    <View style={{ ...styles.container }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: hp('3%') }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%'), color: '#215974' }}>
                                Filter
                            </Text>
                            <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                                <Icon
                                    style={{ ...styles.iconStyleCircle }}
                                    name="chevron-down"
                                    size={defaultTheme.size.iconOnTop}
                                    onPress={() => this.setOpenFilter(false)}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#215974', marginTop: hp('2%') }}>
                            เลือกแบรนด์
                        </Text>
                        <ScrollView showsVerticalScrollIndicator={false} horizontal style={{ marginTop: hp('1%'), paddingVertical: hp('2%') }}>
                            <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                <Image source={require('../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                <Image source={require('../../assets/images/toshiba.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                <Image source={require('../../assets/images/lg.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                <Image source={require('../../assets/images/daikin.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                <Image source={require('../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                        </ScrollView>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#215974', marginTop: hp('2%') }}>
                            ช่วงราคา
                        </Text>
                        <Slider
                            style={{ width: '100%', height: 40 }}
                            minimumValue={0}
                            maximumValue={20}
                            minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                            minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                            thumbTintColor={defaultTheme.COLORS.PRIMARY}
                            value={20}
                        />
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: '#ACACAC' }}>
                                5,000 บาท
                            </Text>
                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: '#ACACAC' }}>
                                100,000 บาท
                            </Text>
                        </View>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#215974', marginTop: hp('2%') }}>
                            Rating
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: hp('1%') }}>
                            <Icon name="star" size={hp('3.5%')} style={{ color: '#FFD10F', marginRight: hp('1%') }} />
                            <Icon name="star" size={hp('3.5%')} style={{ color: '#FFD10F', marginRight: hp('1%') }} />
                            <Icon name="star" size={hp('3.5%')} style={{ color: '#FFD10F', marginRight: hp('1%') }} />
                            <Icon name="star" size={hp('3.5%')} style={{ color: '#FFD10F', marginRight: hp('1%') }} />
                            <Icon name="star" size={hp('3.5%')} style={{ color: '#DAF4FC', marginRight: hp('1%') }} />
                        </View>
                        <View style={{ padding: hp('2%'), backgroundColor: defaultTheme.COLORS.PRIMARY, alignItems: 'center', borderRadius: 5, marginTop: hp('11%') }}>
                            <Text style={{ textAlign: 'center', fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: 'white' }}>ยืนยัน</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }





    rendercompareProductButton() {
        const { compareProduct } = this.props

        return (
            <View style={styleScoped.boxcompareProduct}>
                <View style={styles.flexRowEnd}>
                    <TouchableOpacity
                        style={compareProduct ? styleScoped.customButtomCompareActive : styleScoped.customButtomCompare}
                        onPress={() => this.onToggleCompare()}>

                        <View style={styles.flexRowBetween}>
                            <Icon
                                name="compare-horizontal"
                                size={20}
                                style={[styles.fontPrimary, { width: 25 },]}
                                style={[compareProduct ? { color: 'white' } : { color: defaultTheme.FONT.PRIMARY }, { marginRight: 10 }]}
                            />
                            <Text
                                style={compareProduct ? styleScoped.textCustomCompareActive : styleScoped.textCustomCompare}>เปรียบเทียบสินค้า</Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    renderGetItemInCart() {
        const { countItemInCart } = this.state
        const { productCartLenght } = this.props
        return (
            <TouchableOpacity style={{ padding: 20, backgroundColor: '#6CC3ED' }} onPress={() => Actions.push('ChooseShop')}>

                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <View style={{ width: '42%' }}>
                        <Text style={{
                            width: 25,
                            height: 25,
                            backgroundColor: 'white',
                            borderRadius: 50,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            color: defaultTheme.FONT.PRIMARY,
                            fontFamily: defaultTheme.FONT.FONT_FAMILY,
                            fontWeight: 'bold',
                        }}>
                            {productCartLenght}
                        </Text>
                    </View>

                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold',
                        fontFamily: defaultTheme.FONT.FONT_FAMILY,
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}>
                        เลือกสินค้า
                    </Text>
                </View>

            </TouchableOpacity>
        )
    }

    renderItemButtomFilter() {
        const filter = this.state.filterName
        const { filterName, setFilterName } = this.props
        return (
            <View>
                <View style={{ ...styles.flexRowStart }} >

                    <TouchableOpacity
                        style={filterName == 'Most economical' ? styleScoped.customButtomFilterActive : styleScoped.customButtomFilter}
                        onPress={() => setFilterName('Most economical')}
                    >
                        <Text style={filterName == 'Most economical' ? styleScoped.customTextFilterActive : styleScoped.customTextFilter}>ประหยัดที่สุด</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={filterName == 'Cheapest' ? styleScoped.customButtomFilterActive : styleScoped.customButtomFilter}
                        onPress={() => setFilterName('Cheapest')}>
                        <Text style={filterName == 'Cheapest' ? styleScoped.customTextFilterActive : styleScoped.customTextFilter}>ถูกที่สุด</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={filterName == 'Promotion' ? styleScoped.customButtomFilterActive : styleScoped.customButtomFilter}
                        onPress={() => setFilterName('Promotion')}>
                        <Text style={filterName == 'Promotion' ? styleScoped.customTextFilterActive : styleScoped.customTextFilter}>โปรโมชั่น</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={filterName == 'Clearance' ? styleScoped.customButtomFilterActive : styleScoped.customButtomFilter}
                        onPress={() => setFilterName('Clearance')}>
                        <Text style={filterName == 'Clearance' ? styleScoped.customTextFilterActive : styleScoped.customTextFilter}>Clearance</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ marginTop: 10 }}>
                    {filterName ?
                        <Text style={{ fontSize: 12, fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.FONT_GREY }} >
                            {filterName == 'Most economical' ? 'รายการสินค้า ประหยัดที่สุด' : null}
                            {filterName == 'Cheapest' ? 'รายการสินค้า ถูกที่สุด' : null}
                            {filterName == 'Promotion' ? 'รายการสินค้า โปรโมชั่น' : null}
                            {filterName == 'Clearance' ? 'รายการสินค้า Clearance' : null}
                        </Text>
                        : null
                    }
                </View>

            </View>
        )
    }

    renderSectionCompare() {
        const { productCompareLength } = this.props
        return (
            <View style={{ ...styleScoped.sectionCompare }}>
                <View style={{ ...styleScoped.boxItemCompare }}>

                    <View style={{ ...styleScoped.twoProductCompare }}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ ...styleScoped.boxTwoImageCompare }}>
                                <Icon name="close-box" size={hp('1.8%')} style={{ ...styleScoped.iconCloseItem }} />
                                <Image source={Images.arismall} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View>
                                <Text style={{ ...styleScoped.textBrandAirCompare }}>CARRIER</Text>
                                <Text style={{ ...styleScoped.textModelAirCompare }}>รุ่น FTKC15TV2S</Text>
                            </View>
                        </View>
                        <View style={{
                            alignSelf: 'center',
                            textAlign: 'center',
                            padding: 10,
                            backgroundColor: defaultTheme.COLORS.PRIMARY,
                            borderRadius: 50,
                        }}>
                            <Text style={{ ...styleScoped.textCompareVS }}>VS</Text>

                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ ...styleScoped.boxTwoImageCompare }}>
                                <Icon name="close-box" size={hp('1.8%')} style={{ ...styleScoped.iconCloseItem }} />
                                <Image source={Images.arismall} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View>
                                <Text style={{ ...styleScoped.textBrandAirCompare }}>CARRIER</Text>
                                <Text style={{ ...styleScoped.textModelAirCompare }}>รุ่น FTKC15TV2S</Text>
                            </View>
                        </View>

                    </View>

                </View>

                <View style={{ ...styles.container }}>

                    <TouchableOpacity style={{ ...styleScoped.confirmCompareActive }} onPress={() => Actions.push('CompareProduct')}>
                        <Text style={{ ...styleScoped.textConfirmCompare }}>เปรียบเทียบสินค้า</Text>
                    </TouchableOpacity>

                </View>





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
        paddingHorizontal: hp('2%'),
        paddingVertical: hp('2%'),
        borderRadius:5,
        backgroundColor: defaultTheme.COLORS.PRIMARY
    },
    textConfirmCompare: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize:hp('2%'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
    },
    textConfirmCompare: {
        textAlignVertical: 'center',
        textAlign: 'center',
        color: 'white',
        fontSize:hp('2%'),
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
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
        color: 'red',
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
        fontWeight: "bold",
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        color: 'white'
    }




});
