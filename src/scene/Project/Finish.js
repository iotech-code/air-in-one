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

                        <View style={{ ...styles.container, flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                            <View style={{ height: hp('10%'), width: hp('10%'), marginTop: hp('30%') }}>
                                <Image source={require('../../../assets/icons/finish.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                            </View>
                            <View style={{ marginTop: hp('2%') }}>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('3%') }}>คุณส่งแบบฟอร์มเรียบร้อยแล้ว </Text>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') , textAlign:'center',color:'#ACADC3' }}>ทาง Air In 1 จะติดต่อคุณกลับไปเร็วที่สุด</Text>
                            </View>
                        </View>

                    </ScrollView>
                    <View style={{ ...styles.container }}>
                        <TouchableOpacity onPress={() => Actions.push('MainScene')} style={{ padding: hp('2%'), backgroundColor: defaultTheme.COLORS.PRIMARY, borderRadius: 5, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') ,  }}>กลับไปที่หน้าหลัก</Text>
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