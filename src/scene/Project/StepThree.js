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
import Slider from '@react-native-community/slider';

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
                <KeyboardAvoidingView style={{ flex: 1 }}>
                    <ScrollView style={{ backgroundColor: 'white', flex: 1 }}>

                        <View style={[styles.container, styles.mt_1, { marginBottom: 20 }]}>



                            <View style={[styles.flexRowBetween]}>
                                <TouchableOpacity onPress={() => Actions.push('StepTwo')} style={{ ...styles.boxIconCircle }}>
                                    <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginVertical: hp('2%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={styleScoped.textTitle}>งานโปรเจค</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styleScoped.subTextTitle}>Step III : ข้อมูลติดต่อ</Text>
                                <Text style={{ ...styleScoped.subTextTitle, color: '#215974' }}>แอร์ทั่วไป</Text>
                            </View>


                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>เบอร์ติดต่อ</Text>
                                <View style={{ marginTop: hp('1%'), padding: hp('1.5%'), borderColor: '#CECDCD', borderWidth: 1, borderRadius: 5 }}>
                                    <TextInput style={{ color: '#808085', fontFamily: defaultTheme.FONT.FONT_FAMILY }} placeholder="กรอกเบอร์โทรของคุณ" />
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>อีเมลของคุณ</Text>
                                <View style={{ marginTop: hp('1%'), padding: hp('1.5%'), borderColor: '#CECDCD', borderWidth: 1, borderRadius: 5 }}>
                                    <TextInput style={{ color: '#808085', fontFamily: defaultTheme.FONT.FONT_FAMILY }} placeholder="กรอกอีเมลของคุณ" />
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>เวลาสะดวกให้ติดต่อกลับ</Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: hp('1%') }}>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#ACADC3', marginRight: hp('1%') }}>
                                        ระหว่าง
                                    </Text>
                                    <View style={{
                                        padding: hp('1%'),
                                        borderColor: '#CECDCD',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        marginRight: hp('3%'),
                                        width: wp('30%'),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>10.00 น.</Text>
                                        <Icon name="menu-down" size={hp('2%')} color="#6CC3ED" />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#ACADC3', marginRight: hp('1%') }}>
                                        ถึง
                                    </Text>
                                    <View style={{
                                        padding: hp('1%'),
                                        borderColor: '#CECDCD',
                                        borderWidth: 1,
                                        borderRadius: 5,
                                        marginRight: hp('1%'),
                                        width: wp('30%'),
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}>
                                        <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>12.00 น.</Text>
                                        <Icon name="menu-down" size={hp('2%')} color="#6CC3ED" />
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={{ color: 'black', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>
                                    ต้องการความรวดเร็ว?
                                </Text>
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }} onPress={()=>Actions.push('Estimate')}>
                                    <Text style={{ marginLeft: hp('2%'), color: defaultTheme.FONT.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>
                                        ประเมินราคาเอง
                                </Text>
                                    <Icon name="chevron-right" size={hp('2.5%')} style={{color:defaultTheme.FONT.PRIMARY}} />
                                </TouchableOpacity>
                            </View>


                        </View>

                    </ScrollView>
                    <View style={{ ...styles.container }}>
                        <TouchableOpacity onPress={() => Actions.push('ProjectFinish')} style={{ padding: hp('2%'), backgroundColor: defaultTheme.COLORS.PRIMARY, borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>ยืนยันการส่งฟอร์ม</Text>
                        </TouchableOpacity>
                    </View>

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
    subTextTitle: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontSize: hp('1.8%'),
        color: '#ACADC3'
    },
    textTitleLabel: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontSize: hp('2%'),
        color: '#215974'
    }
})