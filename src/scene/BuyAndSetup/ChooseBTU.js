import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Picker,
  TouchableOpacity,
  Image,
  SafeAreaView
} from 'react-native';
import { styles } from '../../styles/base';
import { defaultTheme } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Actions } from 'react-native-router-flux';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { connect } from 'react-redux'

const mapStateToProps = function (state) {
  return {
    setupOnlySelectProduct: state.setupOnlySelectProduct,
  }
}

class ChooseBTU extends Component {

  state = {
    showNextButton: false,
    selectedBtu: 'default',
  };

  constructor(props) {
    super(props);
  }


  render() {
    const { setupOnlySelectProduct } = this.props
    return (
      <SafeAreaView style={{ flex: 1 }}>

        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          <View style={{ ...styles.container }}>
            <View style={[styles.flexRowBetween]}>

              <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                <Icon
                  style={{ ...styles.iconStyleCircle }}
                  name="chevron-left"
                  size={defaultTheme.size.iconOnTop}
                  onPress={() => Actions.push('MainScene')}
                />
              </TouchableOpacity>


              <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                <Icon
                  style={{ ...styles.iconStyleCircle }}
                  name="home"
                  size={defaultTheme.size.iconOnTop}
                  onPress={() => Actions.push('MainScene')}
                />
              </TouchableOpacity>


            </View>
          </View>

          <View style={[styles.container, { alignItems: 'center', marginTop: hp('25%') }]}>


            {/* {setupOnlySelectProduct ? this.renderProductSelected() : null} */}

            {/* {setupOnlySelectProduct ?
              <View style={{ ...styleScoped.boxProdductSelected }}>
                {this.renderItemProducts()}
              </View>
              : null
            } */}


            <View style={{ width: '100%' }}>
              <View>
                <Text style={{ ...styles.textTitle, textAlign: 'center', color: '#215974' }}>ค้นหาเครื่องปรับอากาศของคุณ</Text>
              </View>

              <TouchableOpacity style={{ ...styleScoped.boxFindProduct, alignItems: 'center' }} onPress={() => Actions.push('BuyAndSetupSearchProduct')}>
                <Icon
                  name="magnify"
                  size={hp('2%')}
                  style={{ ...styleScoped.iconFindProduct, marginRight: hp('1%') }}
                />
                <Text style={{ ...styleScoped.textTitleFindProduct }}>
                  ระบุ รุ่นหรือยี่ห้อเเอร์ของคุณ...
                  </Text>

              </TouchableOpacity>
            </View>






            <View style={{ marginVertical: hp('2.5%') }}>
              <Text style={styles.textOr}>
                - - - - - - - - - - - - - - - <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, color: '#215974', fontSize: hp('2%') }}>หรือ</Text> - - - - - - - - - - - - - -{' '}
              </Text>
            </View>

            <TouchableOpacity
              style={{ ...styleScoped.boxChooseTypeAndBtu, alignItems: 'center' }}
              onPress={() => Actions.push('ChooseTypeAir')}>
              <Icon
                name="server"
                size={hp('3%')}
                style={{ ...styleScoped.iconChooseTypeAndBtu }}
                color={defaultTheme.COLORS.PRIMARY}
              />
              <Text style={{ ...styleScoped.textTitleChooseTypeAndBtu }}>
                เลือกประเภทและ BTU
            </Text>
            </TouchableOpacity>

            {/* {setupOnlySelectProduct ? this.renderNextButton() : null} */}


          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  renderNextButton() {
    return (
      <TouchableOpacity
        style={[
          styleScoped.nextButton,
          styles.flexRowCenter,
          { marginTop: '20%' },
        ]}
        onPress={() => Actions.push('ChooseShop')}>
        <Text style={[styles.fontBold, { color: 'white', marginRight: 2 }]}>
          ถัดไป
        </Text>
        <Icon
          name="chevron-right"
          size={20}
          style={[styles.fontBold, { color: 'white', marginTop: 1 }]}
        />
      </TouchableOpacity>
    );
  }


  renderProductSelected() {
    return (
      <View>
        <Text style={styles.textTitle}>สินค้าของคุณ</Text>
      </View>
    )
  }

  renderItemProducts() {
    return (
      <View style={{ marginTop: 10, paddingBottom: 10, borderBottomWidth: 2, borderBottomColor: defaultTheme.COLORS.SECONDARY }}>
        <View style={{ ...styles.flexRowStart }}>
          <View >
            <View style={{ height: 25, width: 75, marginRight: 20, justifyContent: 'center' }}>
              <Image source={require('../../../assets/images/carrier.png')} style={{ width: '100%', height: '75%', resizeMode: 'contain' }} />
            </View>
            <View style={{ height: 50, width: 75, marginTop: 0, marginRight: 20 }}>
              <Image source={require('../../../assets/images/MaskGroup.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
            </View>
          </View>
          <View >
            <View style={{ ...styles.flexRowStart }}>
              <Text style={{ marginRight: 10, fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY }} >
                CARRIER เเอร์ผนัง
                        </Text>
              <Icon
                name="thumb-up" size={10} style={{
                  textAlignVertical: 'center',
                  textAlign: 'center',
                  backgroundColor: '#FFDC64',
                  width: 18,
                  height: 18,
                  borderRadius: 50,
                  marginTop: 2,
                  color: 'white'
                }}
              />
            </View>

            <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.FONT_GREY, marginTop: 5 }}>
              รุ่น FTKC15TV2S
                    </Text>

            <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.FONT_GREY, marginTop: 5 }}>
              14,300 บีิทียู/ต่อชั่วโมง
                    </Text>

            <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: 12, color: defaultTheme.FONT.PRIMARY, marginTop: 5 }}>
              25,900 บาท
                    </Text>

          </View>
        </View>
      </View>

    )

  }


}
export default connect(mapStateToProps)(ChooseBTU)



var styleScoped = StyleSheet.create({
  nextButton: {
    width: '100%',
    padding: 15,
    backgroundColor: defaultTheme.COLORS.PRIMARY,
    borderRadius: 5,
  },
  boxChooseTypeAndBtu: {
    width: '100%',
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 20,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    ...styles.shadowDefault,
  },
  textTitleChooseTypeAndBtu: {
    fontSize: hp('1.8%'),
    textAlignVertical: 'center',
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
  },
  iconChooseTypeAndBtu: {
    marginRight: 10,
    alignSelf: 'center',
    marginTop: 5,
  },
  boxFindProduct: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: hp('2%'),
    paddingVertical: hp('1%'),
    width: '100%',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    borderColor: '#CED2D4',
  },
  textTitleFindProduct: {
    fontFamily: defaultTheme.FONT.FONT_FAMILY,
    color: defaultTheme.FONT.FONT_GREY,
    fontSize: hp('1.8%'),
  },
  iconFindProduct: {
    color: defaultTheme.FONT.FONT_GREY,
  },
  boxProdductSelected: {
    height: 110,
    padding: 10,
    borderWidth: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: "center",
    borderRadius: 5,
    borderColor: defaultTheme.COLORS.PRIMARY,
    marginVertical: 20
  }
});
