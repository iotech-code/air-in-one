import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    SafeAreaView,
    StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import { styles } from '../../styles/base';
import { defaultTheme } from '../../constants';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper'

const mapStateToProps = function (state) {
    return {
        compareProduct: state.compareProduct,
        productCart: state.productCart,
        compareProductList: state.compareProductList,
        confirmProduct: state.confirmProduct,
        productCartLenght: state.productCartLenght,
        productCompareLength: state.productCompareLength,
    };
};

const mapDispatchToProps = function (dispatch) {
    return {
        setCompareProduct: function (params) {
            dispatch({
                type: 'COMPARE_PRODUCT',
                payload: params,
            });
        },
        setSelectedMenu: function (params) {
            dispatch({
                type: 'SELECT_MENU_AIR',
                payload: params,
            });
        },
        setFilterName: function (params) {
            dispatch({
                type: 'SET_FILTER_NAME',
                payload: params,
            });
        },
        toggleFilterName: function (params) {
            dispatch({
                type: 'SHOW_FILTER_NAME',
                payload: params,
            });
        },
        dispatch: dispatch,
    };
};

class MainScene extends Component {
    constructor(props) {
        super(props);

        this.props.setCompareProduct(false);
        this.state = {
            menuBuy: [
                {
                    name_th: 'เลือกซื้อแอร์',
                    buyType: 'buy',
                    img: require('../../../assets/icons/ac.png'),
                    scene: 'ChooseAir',
                },
                {
                    name_th: 'ซื้อพร้อมติดตั้ง',
                    buyType: 'buywithinstall',
                    img: require('../../../assets/icons/acsetting.png'),
                    scene: 'ChooseAir',
                },
                {
                    name_th: 'ติดตั้งอย่างเดียว',
                    buyType: 'installOnly',
                    img: require('../../../assets/icons/setting.png'),
                    scene: 'ChooseBTU',
                },
            ],
            menuPromotion: [
                {
                    name_th: 'ถูกที่สุด',
                    name_en: 'Most economical',
                    path: 'MostEconomical',
                    img: require('../../../assets/icons/cheapest.png'),
                },
                {
                    name_th: 'ประหยัดที่สุด',
                    name_en: 'Cheapest',
                    path: 'Cheapest',
                    img: require('../../../assets/icons/saving.png'),
                },
                {
                    name_th: 'สิน้คาโปรโมชั่น',
                    name_en: 'Promotion',
                    path: 'Promotion',
                    img: require('../../../assets/icons/hot.png'),
                },
                {
                    name_th: 'Clearance',
                    name_en: 'Clearance',
                    path: 'Clearance',
                    img: require('../../../assets/icons/clearance.png'),
                },
            ],
            menuProject: [
                {
                    name_th: 'แอร์ทั่วไป',
                    img: require('../../../assets/icons/acreg.png'),
                },
                { name_th: 'VRV', img: require('../../../assets/icons/vrv.png') },
                { name_th: 'Chiller', img: require('../../../assets/icons/chiller.png') },
            ],
        };
    }

    selectedMenu(menu, page, filterName = null) {
        const { setSelectedMenu, setFilterName, toggleFilterName } = this.props;
        setSelectedMenu(menu);
        if (filterName) {
            setFilterName(filterName);
            toggleFilterName(true);
        }
        Actions.push(page);
    }
    componentDidMount() { }
    onValueChange() {
        this.setState({});
    }
    render() {
        const { menuPromotion, menuBuy, menuProject } = this.state;
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <KeyboardAvoidingView>
                    <ScrollView style={{ backgroundColor: 'white' }}>


                        <View style={[styles.container, styles.mt_1, { marginBottom: 20 }]}>



                            <View style={[styles.flexRowBetween]}>
                                <TouchableOpacity onPress={() => Actions.push('MainPromotion')} style={{ ...styles.boxIconCircle }}>
                                    <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginVertical: hp('2%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ height: hp('3%'), width: hp('3%'), marginRight: hp('1%') }}>
                                    <Image source={require('../../../assets/new/icons/promoempt.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                </View>
                                <Text style={styleScoped.textTitle}>โปรโมชั่น</Text>
                            </View>


                            <View style={{ ...styles.row }}>
                                <View style={{ ...styles.col_2 }}>
                                    <View>
                                        <View style={{ height: hp('20%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/slide1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848', marginTop: hp('1%') }}>รับฟรีบัตรเงินสด</Text>
                                            <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>
                                                <Icon name="calendar-text" size={hp('1.5%')} /> Until 31 Dec</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View>
                                        <View style={{ height: hp('20%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/slide2.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848', marginTop: hp('1%') }}>รับฟรีบัตรเงินสด</Text>
                                            <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>
                                                <Icon name="calendar-text" size={hp('1.5%')} /> Until 31 Dec</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View>
                                        <View style={{ height: hp('20%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/slide3.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848', marginTop: hp('1%') }}>รับฟรีบัตรเงินสด</Text>
                                            <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>
                                                <Icon name="calendar-text" size={hp('1.5%')} /> Until 31 Dec</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View>
                                        <View style={{ height: hp('20%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/slide1.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848', marginTop: hp('1%') }}>รับฟรีบัตรเงินสด</Text>
                                            <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>
                                                <Icon name="calendar-text" size={hp('1.5%')} /> Until 31 Dec</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View>
                                        <View style={{ height: hp('20%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/slide2.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848', marginTop: hp('1%') }}>รับฟรีบัตรเงินสด</Text>
                                            <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>
                                                <Icon name="calendar-text" size={hp('1.5%')} /> Until 31 Dec</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View>
                                        <View style={{ height: hp('20%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/slide3.jpg')} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 5 }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848', marginTop: hp('1%') }}>รับฟรีบัตรเงินสด</Text>
                                            <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') }}>
                                                <Icon name="calendar-text" size={hp('1.5%')} /> Until 31 Dec</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                        </View>




                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScene);


const styleScoped = StyleSheet.create({
    textMenuTitle: {
        fontSize: hp('2.2%'),
        fontFamily: 'Kanit',
        fontWeight: '300',
        textAlignVertical: 'center',
        alignSelf: 'center',
    },
    boxSearchHeader: {
        padding: wp('2%'),
        backgroundColor: 'white',
        borderRadius: hp('0.6%'),
        height: hp('5%'),
        width: '100%',
        zIndex: 10
    },
    textTitle: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontSize: hp('3%'),
        color: '#215974'
    },
})