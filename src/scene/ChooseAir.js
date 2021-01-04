import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Image
} from 'react-native';
import { styles } from '../styles/base';
import { defaultTheme } from '../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux';

import Picker from 'react-native-picker';



const mapStateToProps = function (state) {
  return {
    btuForAdvice: state.btuForAdvice,
  };
};

const mapDispatchToProps = function (dispatch) {
  return {
    setSelectCalculate: function (params) {
      dispatch({
        type: 'SET_SELECTOR_CALCULATE',
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

class ChooseAir extends Component {
  ListBtu = [
    { id: 1, value: '22800' },
    { id: 2, value: '18000' },
    { id: 3, value: '16000' },
    { id: 4, value: '12000' },
    { id: 5, value: '90000' },
  ];

  state = {
    showNextButton: false,
    selectedBtu: 'เลือก BTU ที่คุณต้องการ',
  };

  constructor(props) {
    super(props);
  }
  onValueChange(value) {

    this.setState(() => {
      return {
        selectedBtu: value,
        showNextButton: true,
      };
    });
    console.log(this.state.showNextButton)
  }

  nextStep() {
    this.props.setSelectCalculate(false);
    Actions.push('SelectType');
  }

  renderPickerItem() {
    return this.ListBtu.map((item) => {
      return (
        <Picker.Item
          color="#8E8E93"
          label={item.value}
          value={item.value}
          key={item.id}
        />
      );
    });
  }

  selectSectionCalculate() {
    this.props.setSelectCalculate(true);
    Actions.push('CalculateBtu');
  }

  openPicker() {
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


  onLuggage = () => {
    Picker.init({
      pickerData: [1, 2, 3, 4, 5, 6, 7],
      pickerTitleText: 'Please select lugguge',
    });
    Picker.show();
  }

  render() {
    const { setBtuAdvice, btuForAdvice } = this.props;
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

          <View style={{ ...styles.container }}>
            <TouchableOpacity style={{ ...styles.boxIconCircle }}>
              <Icon
                style={{ ...styles.iconStyleCircle }}
                name="chevron-left"
                size={defaultTheme.size.iconOnTop}
                onPress={() => Actions.push('MainScene')}
              />
            </TouchableOpacity>
          </View>



          <View
            style={{
              ...styles.container,
              alignItems: 'center',
              marginTop: hp('25%'),
            }}>
            <View>
              <Text
                style={{
                  fontSize: hp('2.2%'),
                  fontFamily: defaultTheme.FONT.FONT_FAMILY,
                  color: '#215974',
                }}>
                โปรดเลือก BTU ที่คุณต้องการ
              </Text>
            </View>

            <TouchableOpacity
              style={{
                borderRadius: hp('0.5%'),
                width: '100%',
                backgroundColor: 'white',
                borderColor: '#CED2D4',
                borderWidth: 1,
                marginTop: hp('2%'),
                padding: hp('1%'),
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              }} onPress={() => this.openPicker()}>
              <Text style={{ color: '#484848', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%') }}>{btuForAdvice == 0 ? 'เลือก BTU ที่คุณต้องการ' : btuForAdvice}</Text>
              <Icon
                style={{ color: '#484848' }}
                name="chevron-down"
                size={defaultTheme.size.iconOnTop}
                onPress={() => Actions.push('MainScene')}
              />
            </TouchableOpacity>

            <View style={{ marginTop: hp('2%'), position: 'relative', width: '100%' }}>
              <Text style={{ ...styleScoped.textOr, textAlign: 'center' }}>
                - - - - - -  - - - - - - - <Text style={{ color: '#215974' }}> หรือ </Text> - - - - - -  - - - - - - -
              </Text>
            </View>

            <TouchableOpacity
              style={{
                ...styles.mt_2,
                ...styles.flexRowCenter,
                ...styleScoped.boxCalculator,
                ...styles.shadowDefault,
                backgroundColor: 'white',
              }}
              onPress={() => this.selectSectionCalculate()}>
              <View style={{ height: hp('5%'), width: wp('6%'), marginRight: 10 }}>
                <Image source={require('../../assets/icons/cal.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
              </View>
              <Text
                style={{
                  fontSize: defaultTheme.size.font - 3,
                  alignSelf: 'center',
                  fontFamily: defaultTheme.FONT.FONT_FAMILY
                }}>
                คำนวณโปรแกรมด้วย BTU
              </Text>
            </TouchableOpacity>


          </View>
        </ScrollView>
        <View style={{ ...styles.container }}>
          {btuForAdvice != '0' ? this.renderNextButton() : null}
        </View>
      </SafeAreaView>

    );
  }

  renderNextButton() {
    return (
      <TouchableOpacity
        style={{...styleScoped.nextButton,flexDirection:'row',justifyContent:'center',marginBottom:hp('1%'),alignItems:'center'}}
        onPress={() => this.nextStep()}>
        <Text style={{ color: 'white', marginRight: 2 , fontSize:hp('2%'),fontFamily:defaultTheme.FONT.FONT_FAMILY }}>
          ถัดไป
        </Text>
        <Icon
          name="chevron-right"
          size={20}
          style={{ color: 'white', fontSize:hp('3%') }}
        />
      </TouchableOpacity>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseAir);

var styleScoped = StyleSheet.create({
  nextButton: {
    width: '100%',
    padding: hp('2%'),
    backgroundColor: defaultTheme.COLORS.PRIMARY,
    borderRadius: 5,
  },
  boxCalculator: {
    width: '100%',
    padding: hp('1%'),
    borderRadius: hp('0.8%'),
    marginBottom: hp('17%'),
  },
  textOr: {
    fontSize: hp('2%'),
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
    color: defaultTheme.COLORS.PRIMARY,
  },
});
