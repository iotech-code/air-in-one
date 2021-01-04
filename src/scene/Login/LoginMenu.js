import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {styles} from '../../styles/base';
import {defaultTheme} from '../../constants';
import {Actions} from 'react-native-router-flux';

const LoginMenu = () => {
  return (
    <KeyboardAvoidingView>
      <ScrollView>
        <View style={styleScoped.container}>
          <View style={styleScoped.boxHeader}>
            <Text style={{...styleScoped.textTitleHeader}}>AirIn1</Text>
            <Text style={styleScoped.textSubTitleHeader}>
              Live a simple life
            </Text>
          </View>

          <View style={{...styleScoped.wrapper__image}}>
            <Image
              source={require('../../../assets/images/login_page.jpg')}
              style={{...styleScoped.login__image}}
            />
          </View>

          <View style={{marginTop: hp('5%')}}>
            <View>
              <View>
                <Text style={styleScoped.textTitleTextInput}>ชื่อบัญชี</Text>
                <TextInput style={styleScoped.textInputCustom} />
              </View>

              <View style={{marginTop: 10}}>
                <Text style={styleScoped.textTitleTextInput}>รหัสผ่าน</Text>

                <TextInput
                  secureTextEntry={true}
                  style={styleScoped.textInputCustom}
                />
              </View>

              <TouchableOpacity
                style={styleScoped.buttonLogin}
                onPress={() => Actions.push('MainScene')}>
                <Text style={{...styleScoped.textLogin}}>เข้าสู่ระบบ</Text>
              </TouchableOpacity>

              <View style={[styles.flexRowBetween, {marginTop: hp('2%')}]}>
                <TouchableOpacity>
                  <Text style={styleScoped.textMenu}>ลงทะเบียน</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styleScoped.textMenu}>ลืมรหัสผ่าน</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styleScoped = StyleSheet.create({
  boxHeader: {
    marginTop: hp('5%'),
    marginBottom: hp('5%'),
  },
  container: {
    paddingLeft: wp('5%'),
    paddingRight: wp('5%'),
  },
  textTitleTextInput: {
    color: defaultTheme.FONT.PRIMARY,
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
    fontSize: hp('2%'),
  },
  textTitleHeader: {
    textAlign: 'center',
    fontSize: hp('9%'),
    color: defaultTheme.FONT.PRIMARY,
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
  },
  textSubTitleHeader: {
    textAlign: 'center',
    fontSize: hp('3.5%'),
    color: defaultTheme.FONT.FONT_GREY,
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
  },
  textMenu: {
    color: '#959595',
    textDecorationLine: 'underline',
    fontSize: hp('2%'),
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
  },
  buttonLogin: {
    width: '100%',
    marginTop: hp('3%'),
    backgroundColor: '#9ce2f8',
    borderRadius: hp('1%'),
    paddingVertical: hp('2%'),
  },
  textLogin: {
    width: '100%',
    textAlign: 'center',
    fontSize: hp('2.5%'),
    fontWeight: 'bold',
    fontFamily: 'Kanit-Bold',
  },
  textInputCustom: {
    borderBottomWidth: 1,
    borderBottomColor: '#c1c1c1',
    fontWeight: 'bold',
    height: hp('5%'),
    paddingBottom: hp('1%'),
    fontSize: hp('2.5%'),
  },
  wrapper__image: {
    marginTop: hp('0.5%'),
    width: '100%',
    height: hp('30%'),
  },
  login__image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default LoginMenu;
