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
                                <TouchableOpacity onPress={() => Actions.push('MainScene')} style={{ ...styles.boxIconCircle }}>
                                    <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ marginVertical: hp('2%'), flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                <View style={{ height: hp('3%'), width: hp('3%'), marginRight: hp('1%') }}>
                                    <Image source={require('../../../assets/new/icons/promoempt.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                </View>
                                <Text style={styleScoped.textTitle}>โปรโมชั่น</Text>
                            </View>

                            <View style={{ ...styleScoped.boxSearchHeader, ...styles.shadowDefault, flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                    <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                                    <TextInput
                                        onFocus={() => Actions.push('SearchPromotion')}
                                        style={styles.inputSearchbox}
                                        placeholder="ค้นหาสินค้าโปรโมชั่น"
                                    />
                                </View>
                                <View>
                                    <Icon name="tune" size={hp('3%')} style={{ ...styles.iconSearchInbox, fontWeight: 'normal' }} onPress={() => Actions.push('SearchPromotion')} />
                                </View>
                            </View>

                            <View style={{ marginTop: hp('3%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{ height: hp('4%'), width: hp('4%'), marginRight: hp('1%') }}>
                                        <Image source={require('../../../assets/new/icons/promotion.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848' }}>สินค้าโปรโมชั่น</Text>
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} onPress={()=>Actions.push('Promotion')}>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY, fontSize: hp('1.5%') }}>ดูทั้งหมด</Text>
                                    <Icon name="chevron-right" size={hp('2.5%')} style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }} />
                                </TouchableOpacity>
                            </View>




                        </View>

                        <View style={{ ...styles.container, }}>
                            <Swiper style={{ height: hp('20%'), }} dotStyle={{ position: 'relative', bottom: 0 }}>
                                <View style={{ height: '100%' }}>
                                    <Image source={require('../../../assets/images/slide2.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'repeat', borderRadius: 5 }} />
                                </View>
                                <View style={{ height: '100%' }}>
                                    <Image source={require('../../../assets/images/slide3.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'repeat', borderRadius: 5 }} />
                                </View>
                                <View style={{ height: '100%', }}>
                                    <Image source={require('../../../assets/images/slide1.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'repeat', borderRadius: 5 }} />
                                </View>
                            </Swiper>


                            <View style={{ marginTop: hp('3%'), marginBottom: hp('1%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{ height: hp('4%'), width: hp('4%'), marginRight: hp('1%') }}>
                                        <Image source={require('../../../assets/new/icons/cheap.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848' }}>ถูกที่สุด</Text>
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY, fontSize: hp('1.5%') }} onPress={()=>Actions.push('MostEconomical')}>ดูทั้งหมด</Text>
                                    <Icon name="chevron-right" size={hp('2.5%')} style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ ...styles.row }}>
                                <View style={{ ...styles.col_2 }}>
                                    <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: hp('6%'), height: hp('3%') }}>
                                                <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: hp('6%'), height: hp('3%') }}>
                                                <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>



                            <View style={{ marginTop: hp('3%'), marginBottom: hp('1%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{ height: hp('4%'), width: hp('4%'), marginRight: hp('1%') }}>
                                        <Image source={require('../../../assets/new/icons/saving.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848' }}>ประหยัดที่สุด</Text>
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }} onPress={()=>Actions.push('Cheapest')}>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY, fontSize: hp('1.5%') }}>ดูทั้งหมด</Text>
                                    <Icon name="chevron-right" size={hp('2.5%')} style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ ...styles.row }}>
                                <View style={{ ...styles.col_2 }}>
                                    <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: hp('6%'), height: hp('3%') }}>
                                                <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: hp('6%'), height: hp('3%') }}>
                                                <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>


                            <View style={{ marginTop: hp('3%'), marginBottom: hp('1%'), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <View style={{ height: hp('4%'), width: hp('4%'), marginRight: hp('1%') }}>
                                        <Image source={require('../../../assets/new/icons/clearance.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                    </View>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%'), color: '#484848' }}>สินค้า Clerance</Text>
                                </View>
                                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY, fontSize: hp('1.5%') }} onPress={()=>Actions.push('Clearance')}>ดูทั้งหมด</Text>
                                    <Icon name="chevron-right" size={hp('2.5%')} style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }} />
                                </TouchableOpacity>
                            </View>

                            <View style={{ ...styles.row }}>
                                <View style={{ ...styles.col_2 }}>
                                    <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: hp('6%'), height: hp('3%') }}>
                                                <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={{ ...styles.col_2 }}>
                                    <View style={{ ...styles.shadowDefault, borderRadius: 5, padding: hp('1%'), backgroundColor: 'white', width: '100%' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                            <View style={{ width: hp('6%'), height: hp('3%') }}>
                                                <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                            </View>
                                            <View style={{ borderRadius: 5, backgroundColor: "#FF4646", paddingHorizontal: hp('1%'), flexDirection: 'column', justifyContent: 'center', height: hp('3%') }}>
                                                <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%'), textAlign: 'center' }}>20%</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginVertical: hp('3%'), height: hp('5%'), width: '100%' }}>
                                            <Image source={require('../../../assets/images/air.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                        </View>
                                        <View>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>CARRIER แอร์ผนัง</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.4%'), color: '#ACACAC' }}>รุ่น FTKC15TV2S</Text>
                                            <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), color: defaultTheme.FONT.PRIMARY }}>25,900 บาท</Text>
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