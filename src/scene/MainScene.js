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
import { styles } from '../styles/base';
import { defaultTheme } from '../constants';
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
          img: require('../../assets/icons/ac.png'),
          scene: 'ChooseAir',
        },
        {
          name_th: 'ซื้อพร้อมติดตั้ง',
          buyType: 'buywithinstall',
          img: require('../../assets/icons/acsetting.png'),
          scene: 'ChooseAir',
        },
        {
          name_th: 'ติดตั้งอย่างเดียว',
          buyType: 'installOnly',
          img: require('../../assets/icons/setting.png'),
          scene: 'ChooseBTU',
        },
      ],
      menuPromotion: [
        {
          name_th: 'ถูกที่สุด',
          name_en: 'Most economical',
          path: 'MostEconomical',
          img: require('../../assets/icons/cheapest.png'),
        },
        {
          name_th: 'ประหยัดที่สุด',
          name_en: 'Cheapest',
          path: 'Cheapest',
          img: require('../../assets/icons/saving.png'),
        },
        {
          name_th: 'สิน้คาโปรโมชั่น',
          name_en: 'Promotion',
          path: 'Promotion',
          img: require('../../assets/icons/hot.png'),
        },
        {
          name_th: 'Clearance',
          name_en: 'Clearance',
          path: 'Clearance',
          img: require('../../assets/icons/clearance.png'),
        },
      ],
      menuProject: [
        {
          name_th: 'แอร์ทั่วไป',
          img: require('../../assets/icons/acreg.png'),
          path: 'StepOne'
        },
        {
          name_th: 'VRV', img: require('../../assets/icons/vrv.png'),
          path: 'StepOne'
        },
        {
          name_th: 'Chiller', img: require('../../assets/icons/chiller.png'),
          path: 'StepOne'
        },
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
          <ScrollView>
            <View style={{ ...styles.header, marginBottom: 50 }}>
              <Text style={{ ...styles.textTitle, color: 'white', ...styles.textHeader }}>คุณมีรุ่นในใจมั้ย ?</Text>
              <View style={{ position: 'relative' }}>
                <View style={{ ...styles.boxSearchHeader, ...styles.shadowDefault }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                    <Icon name="magnify" size={hp('3%')} style={styles.iconSearchInbox} />
                    <TextInput
                      style={styles.inputSearchbox}
                      placeholder="ค้นหาแอร์ที่คุณต้องการ"
                      onFocus={() => Actions.push('SearchProductMain')}
                    />
                  </View>
                </View>
              </View>
            </View>

            <View style={{ ...styles.container, }}>
              <Swiper style={{ height: hp('20%'), }} dotStyle={{ position: 'relative', bottom: 0 }}>
                <View style={{ height: '100%' }}>
                  <Image source={require('../../assets/images/slide2.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'repeat', borderRadius: 5 }} />
                </View>
                <View style={{ height: '100%' }}>
                  <Image source={require('../../assets/images/slide3.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'repeat', borderRadius: 5 }} />
                </View>
                <View style={{ height: '100%', }}>
                  <Image source={require('../../assets/images/slide1.jpg')} style={{ height: '100%', width: '100%', resizeMode: 'repeat', borderRadius: 5 }} />
                </View>
              </Swiper>

            </View>


            <View style={{ ...styles.container }}>

              {/* title  section 1*/}
              <View style={{ flexDirection: "row", justifyContent: 'flex-start', height: hp('8%'), marginBottom: - 20 }}>
                <View style={{ height: hp('8%'), width: wp('7%'), marginRight: hp('1%') }}>
                  <Image
                    source={require('../../assets/icons/accat.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  />
                </View>
                <Text
                  style={{ ...styleScoped.textMenuTitle }}>ซื้อแอร์</Text>
              </View>

              {/* menu */}
              <View style={{ ...styles.row }}>
                {menuBuy.map((item, index) => {
                  return (
                    <View style={{ ...styles.col_3 }} key={`Menu__${index}`}>
                      <TouchableOpacity
                        onPress={() =>
                          this.selectedMenu(item.buyType, item.scene)
                        }>
                        <View style={{ alignItems: 'center', width: '100%', height: hp('8%') }}>
                          <Image source={item.img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>
                        <Text style={styles.textMenu}>{item.name_th}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>

              {/* title section 2*/}
              <View style={{ flexDirection: "row", justifyContent: 'flex-start', height: hp('8%'), marginTop: 10, marginBottom: - 20 }}>
                <View style={{ height: hp('8%'), width: wp('5%'), marginRight: hp('1%') }}>
                  <Image
                    source={require('../../assets/icons/project.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  />
                </View>
                <Text
                  style={{ ...styleScoped.textMenuTitle }}>งานโปรเจค</Text>
              </View>

              {/* menu */}
              <View style={{ ...styles.row }}>
                {menuProject.map((item, index) => {
                  return (
                    <View style={{ ...styles.col_3 }} key={`Project__${index}`}>
                      <TouchableOpacity onPress={()=>Actions.push('StepOne')}>
                        <View style={{ alignItems: 'center', width: '100%', height: hp('8%') }}>
                          <Image source={item.img} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                        </View>
                        <Text style={styles.textMenu}>{item.name_th}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
              </View>

              {/* title section 3*/}
              <View style={{ flexDirection: "row", justifyContent: 'flex-start', height: hp('8%'), marginTop: 10, marginBottom: - 20 }}>
                <View style={{ height: hp('8%'), width: wp('7%'), marginRight: hp('1%') }}>
                  <Image
                    source={require('../../assets/icons/promotion.png')}
                    style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                  />
                </View>
                <Text
                  style={{ ...styleScoped.textMenuTitle }}>โปรโมชั่น</Text>
              </View>

              {/* menu */}
              <View style={{ ...styles.row }}>
                {menuPromotion.map((item, index) => {
                  return (
                    <View style={{ ...styles.col_3 }} key={`Promotion__${index}`}>
                      <TouchableOpacity
                        onPress={() =>
                          this.selectedMenu('buy', item.path, item.name_en)
                        }>
                        <View style={{ alignItems: 'center', width: '100%', height: hp('8%') }}>
                          <Image
                            source={item.img}
                            style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                          />
                        </View>
                        <Text style={{ ...styles.textMenu }}>{item.name_th}</Text>
                      </TouchableOpacity>
                    </View>
                  );
                })}
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
  }
})