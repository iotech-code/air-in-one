import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  SafeAreaView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from '../styles/base';
import { Actions } from 'react-native-router-flux';
import { defaultTheme } from '../constants';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import {Picker} from '@react-native-community/picker';
import Picker from 'react-native-picker';

import { connect } from 'react-redux';

const mapStateToProps = function (state) {
  return {
    selectType: state.selectType,
    btuForAdvice: state.btuForAdvice,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    setAir: function (params) {
      dispatch({
        type: 'SELECT_TYPE_AIR',
        payload: params,
      });
    },
    setBrand: function (params) {
      dispatch({
        type: 'SELECT_TYPE_BRAND',
        payload: params,
      });
    },
    setAirType: function (params) {
      dispatch({
        type: 'SELECT_TYPE_AIR_TYPE',
        payload: params,
      });
    },
    setPrice: function (params) {
      dispatch({
        type: 'SELECT_TYPE_PRICE',
        payload: params,
      });
    },
    setBtuAdvice: function (params) {
      dispatch({
        type: 'SET_BTU_ADVICE',
        payload: params,
      });
    },

    dispatch: dispatch,
  };
};

class SelectType extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    blueColor: '#6CC3ED',
    selectType: '',
    selectedBrand: null,
    selectedTypeAir: null,
    selectedPrice: 'default',
    menuTypeOfAir: [
      {
        name_th: 'Wall',
        name_en: 'Wall',
        imageBlue: require('../../assets/new/icons/wallblue.png'),
        imageWhite: require('../../assets/new/icons/wallwhite.png'),
      },
      {
        name_th: 'Duck',
        name_en: 'Duck',
        imageBlue: require('../../assets/new/icons/duck.png'),
        imageWhite: require('../../assets/new/icons/duckwhite.png'),
      },
      {
        name_th: 'Ceiling',
        name_en: 'Ceiling',
        imageBlue: require('../../assets/new/icons/ceiling.png'),
        imageWhite: require('../../assets/new/icons/ceilingwhite.png'),
      },
      {
        name_th: 'Casette',
        name_en: 'Casette',
        imageBlue: require('../../assets/new/icons/casette.png'),
        imageWhite: require('../../assets/new/icons/casettewhite.png'),
      },
      {
        name_th: 'ตู้ตั้ง',
        name_en: 'standing',
        imageBlue: require('../../assets/new/icons/stand.png'),
        imageWhite: require('../../assets/new/icons/standwhite.png'),
      },
    ],
    listBrand: [
      { name: 'carrier', image: require('../../assets/images/carrier.png') },
      { name: 'toshiba', image: require('../../assets/images/toshiba.png') },
      { name: 'lg', image: require('../../assets/images/lg.png') },
      { name: 'daikin', image: require('../../assets/images/daikin.png') },

    ],
  };

  onSelectType(value) {
    const { } = this.props;
    this.setState({ selectType: value });
  }

  selectBrand(value) {
    this.setState({ selectedBrand: value });
  }

  openPickerBtu() {
    const { setBtuAdvice, } = this.props;
    Picker.init({
      pickerData: ['22800', '18000', '16000', '12000', '90000'],
      pickerTitleText: 'กรุณาเลือก BTU',
      onPickerCancel: data => { },
      onPickerSelect: data => { },
      onPickerConfirm: data => {
        setBtuAdvice(data[0])
      }
    });
    Picker.show();
  }

  oepnPickerPrice() {
    const { setPrice, } = this.props;
    Picker.init({
      pickerData: ['5,000-10,000', '10,000-15,000', '15,000-20,000', '20,000-25,000', '25,000-30,000'],
      pickerTitleText: 'กรุณาเลือกช่วงราคา',
      onPickerCancel: data => { },
      onPickerSelect: data => { },
      onPickerConfirm: data => {
        setPrice(data[0])
      }
    });
    Picker.show();
  }

  onSelectTypeAir(value) {
    this.setState({ selectedTypeAir: value });
  }

  render() {
    const { selectType, setAir, btuForAdvice } = this.props;
    const { menuTypeOfAir } = this.state;
    return (
      <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
        <ScrollView >
          <View style={{ ...styles.header, marginBottom: hp('2.2%'), paddingTop: hp('5%') }}>
            <TouchableOpacity style={{ ...styles.boxIconCircle, marginBottom: hp('3%') }}>
              <Icon
                style={{ ...styles.iconStyleCircle }}
                name="chevron-left"
                size={defaultTheme.size.iconOnTop}
                onPress={() => Actions.push('ChooseAir')}
              />
            </TouchableOpacity>
            <Text style={{ ...styles.textTitle, color: 'white', ...styles.textHeader }}>โปรดเลือก BTU ที่คุณต้องการ ?</Text>
            <View style={{ position: 'relative' }}>
              <TouchableOpacity style={{ ...styles.boxSearchHeader, ...styles.shadowDefault }} onPress={() => this.openPickerBtu()}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2%') }}>{btuForAdvice} BTU</Text>
                  <Icon
                    style={{ color: defaultTheme.COLORS.PRIMARY }}
                    name="chevron-down"
                    size={defaultTheme.size.iconOnTop}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ ...styles.container, position: 'relative', marginTop: hp('2.5%') }}>

            <View style={{ marginBottom: hp('1%') }}>
              <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontWeight: 'bold' }}>โปรดเลือกประเภทของเเอร์</Text>
            </View>

            <View style={{ ...styles.mb_1, ...styles.row }}>
              {menuTypeOfAir.map((item, index) => {
                return (
                  <View style={{ ...styles.col_3 }} key={`menuAirType__${index}`}>
                    <TouchableOpacity
                      style={{
                        ...styles.boxMenu,
                        ...styles.shadowDefault,
                        backgroundColor: selectType.air == item.name_en
                          ? defaultTheme.COLORS.PRIMARY
                          : 'white',
                      }}
                      onPress={() => setAir(item.name_en)}>
                      <View style={{ alignItems: 'center' }}>
                        {selectType.air == item.name_en ? (
                          <Image
                            source={item.imageWhite}
                            style={styles.imageMenu}
                          />
                        ) : (
                            <Image
                              source={item.imageBlue}
                              style={styles.imageMenu}
                            />
                          )}
                      </View>
                      <Text
                        style={[
                          styles.textMenu,
                          {
                            color:
                              selectType.air == item.name_en ? 'white' : 'black',

                          },
                        ]}>
                        {item.name_th}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>

            {selectType.air ? this.renderSelectBrand() : null}
            {selectType.brand ? this.renderSelectTypeAir() : null}
            {selectType.type ? this.renderSelectPrice() : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderSelectBrand() {
    const { brand } = this.props.selectType;
    const { setBrand } = this.props;
    const { listBrand } = this.state;
    return (
      <View>
        <View style={{ marginTop: hp('1%'), marginBottom: hp('1%') }}>
          <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontWeight: 'bold' }}>เลือกแบรนด์</Text>
        </View>

        <View style={[styles.mb_1, styles.row]}>
          {listBrand.map((item, index) => {
            return (
              <View style={{ ...styles.col_3 }} key={`brand__${index}`}>
                <TouchableOpacity
                  style={{
                    ...styles.boxMenu,
                    ...styles.shadowDefault,
                    borderColor:
                      brand == item.name ? defaultTheme.COLORS.PRIMARY : '',
                    borderWidth: brand == item.name ? 2 : 0,
                  }}
                  onPress={() => setBrand(item.name)}>
                  <View style={{ alignItems: 'center' }}>
                    <Image
                      source={item.image}
                      style={{
                        width: '100%',
                        height: hp('8%'),
                        resizeMode: 'contain',
                      }}
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </View>
    );
  }

  renderSelectTypeAir() {
    const { type } = this.props.selectType;
    const { setAirType } = this.props;
    const typeAir = ['Inverter', 'Non-Inverter', 'Inverter และ Non-Inverter'];
    return (
      <View>
        <View style={{ marginTop: hp('1%'), marginBottom: hp('1%') }}>
          <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontWeight: 'bold' }}>เลือกชนิดของแอร์</Text>
        </View>
        {typeAir.map((item, index) => {
          return (
            <View style={{  }} key={`type__${index}`}>
              <TouchableOpacity
                key={`typeAir__${index}`}
                style={[
                  styles.mb_1,
                  styleScoped.boxSelectTypeAir,
                  styles.shadowDefault,
                  {
                    padding: 15,
                    backgroundColor:
                      type == item ? defaultTheme.COLORS.PRIMARY : 'white',
                  },
                ]}
                onPress={() => setAirType(item)}>
                <Text
                  style={{
                    fontFamily: defaultTheme.FONT.FONT_FAMILY,
                    textAlign: 'center',
                    color: type == item ? 'white' : defaultTheme.COLORS.PRIMARY,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            </View>

          );
        })}
      </View>
    );
  }

  renderSelectPrice() {
    const { price } = this.props.selectType;
    const { setPrice } = this.props;
    return (
      <View>
        <View style={{ marginTop: hp('2%'), marginBottom: hp('1%') }}>
          <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontWeight: 'bold' }}>เลือกช่วงราคาที่คุณต้องการ</Text>
        </View>

        <TouchableOpacity style={{
          position: "relative",
          padding: hp('1%'),
          ...styles.shadowDefault,
          backgroundColor: 'white',
          borderRadius: 5,
          marginBottom: hp('2%'),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems:'center'
        }} 
        onPress={()=>this.oepnPickerPrice()}
        >
          <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.5%') , color: price ? defaultTheme.FONT.PRIMARY : 'black' }}>{price ? price : 'เลือกช่วงราคา'}</Text>
          <Icon
            style={{ color: defaultTheme.COLORS.PRIMARY }}
            name="chevron-down"
            size={defaultTheme.size.iconOnTop}
          />
        </TouchableOpacity>

        {price ? this.renderNextButton() : null}
      </View>
    );
  }

  renderNextButton() {
    return (
      <TouchableOpacity
        style={{
          ...styleScoped.nextButton,
          ...styles.flexRowCenter,
           marginBottom: hp('2%') ,
           alignItems:'center'
        }}
        onPress={() => Actions.push('Conclude')}>
        <Text style={{ color: 'white', fontSize:hp('2%') , fontFamily:defaultTheme.FONT.FONT_FAMILY }}>
          ถัดไป
        </Text>
        <Icon
          name="chevron-right"
          size={hp('3%')}
          style={[styles.fontBold, { color: 'white', marginTop: 1 }]}
        />
      </TouchableOpacity>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectType);

var styleScoped = StyleSheet.create({
  boxSelectTypeAir: {
    width: '100%',
    padding: 10,
    borderRadius: hp('0.5%'),
    backgroundColor: 'white',
  },
  nextButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#6CC3ED',
    borderRadius: 5,
  },
});
