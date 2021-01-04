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
                                <TouchableOpacity onPress={() => Actions.push('StepOne')} style={{ ...styles.boxIconCircle }}>
                                    <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginVertical: hp('2%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <Text style={styleScoped.textTitle}>ประเมินราคา</Text>
                            </View>

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={styleScoped.subTextTitle}>ระบุข้อมูลสินค้าเพื่อประเมินราคา</Text>
                                <Text style={{ ...styleScoped.subTextTitle, color: '#215974' }}>แอร์ทั่วไป</Text>
                            </View>


                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>เลือกแบรนด์</Text>
                                <ScrollView showsVerticalScrollIndicator={false} horizontal style={{ marginTop: hp('1%'), paddingVertical: hp('2%') }}>
                                    <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                        <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                        <Image source={require('../../../assets/images/toshiba.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                        <Image source={require('../../../assets/images/lg.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                        <Image source={require('../../../assets/images/daikin.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <View style={{ ...styles.shadowDefault, backgroundColor: 'white', borderRadius: 10, height: hp('11%'), width: wp('25%'), marginRight: hp('1%'), padding: hp('1%') }}>
                                        <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                </ScrollView>
                            </View>


                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>เลือกชนิดของแอร์</Text>
                                <View style={{ marginTop: hp('1.2%'), flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <View style={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), backgroundColor: '#F5FAFC', borderRadius: 5, marginRight: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>Inverter</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), backgroundColor: '#F5FAFC', borderRadius: 5, marginRight: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>Non-Inverter</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>เลือกประเภท  </Text>
                                <View style={{ marginTop: hp('1.2%'), flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <View style={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), backgroundColor: '#F5FAFC', borderRadius: 5, marginRight: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>VRV</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), backgroundColor: '#F5FAFC', borderRadius: 5, marginRight: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>Split Type</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>ราคาที่ต้องการ <Text style={{ color: '#ACACAC' }}>(เลือกได้มากกว่า 1)</Text> </Text>
                                <View style={{ marginTop: hp('1.2%'), flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <View style={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), backgroundColor: '#F5FAFC', borderRadius: 5, marginRight: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>ราคาเครื่อง</Text>
                                    </View>
                                    <View style={{ paddingHorizontal: hp('2%'), paddingVertical: hp('1%'), backgroundColor: '#F5FAFC', borderRadius: 5, marginRight: hp('1%') }}>
                                        <Text style={{ fontSize: hp('2%'), fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>ราคาติดตั้ง</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%') }}>
                                <Text style={{ ...styleScoped.textTitleLabel }}>เลือก BTU ของแอร์ </Text>
                                <View style={{
                                    marginTop: hp('1.2%'),
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    borderColor: defaultTheme.COLORS.PRIMARY,
                                    padding: hp('1%'),
                                    borderRadius: 5,
                                    borderWidth: 1,
                                    alignItems:'center'
                                }}>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#215974' }}>22,000</Text>
                                    <Icon  name="chevron-down" size={hp('2%')} color="#215974" />
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ ...styleScoped.textTitleLabel, color: '#215974', fontSize: hp('2.2%') }}>จำนวนแอร์</Text>
                                <View style={{ padding: hp('1%'), borderColor: defaultTheme.COLORS.PRIMARY, borderWidth: 1, borderRadius: 5 }}>
                                    <Text style={{ color: defaultTheme.FONT.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>15 เครื่อง</Text>
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%') }}>
                                <Slider
                                    style={{ width: '100%', height: hp('2%') }}
                                    minimumValue={0}
                                    maximumValue={20}
                                    minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                    minimumTrackTintColor={defaultTheme.COLORS.PRIMARY}
                                    thumbTintColor={defaultTheme.COLORS.PRIMARY}
                                />
                            </View>

                            <View style={{ marginTop: hp('1%'), flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>10</Text>
                                <Text style={{ color: '#ACACAC', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>50</Text>
                            </View>

                        </View>



                        <View style={{ ...styles.container }}>
                            <TouchableOpacity onPress={()=>Actions.push('ProjectConclude')}
                            style={{ padding: hp('2%'), backgroundColor: defaultTheme.COLORS.PRIMARY, borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>ประเมินราคา</Text>
                            </TouchableOpacity>
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