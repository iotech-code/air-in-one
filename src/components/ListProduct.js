
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

import { styles } from '../styles/base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux';
import { defaultTheme } from '../constants'
import { connect } from 'react-redux'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const mapStateToProps = function (state) {
  return {
    compareProduct: state.compareProduct,
    productCart: state.productCart,
    compareProductList: state.compareProductList,

  }
}


const mapDispatchToProps = function (dispatch) {
  return {
    setCompareProduct: function (params) {
      dispatch({
        type: 'COMPARE_PRODUCT',
        payload: params
      })
    },
    addToCart: function (params) {
      dispatch({
        type: 'ADD_TO_CART',
        payload: params
      })
    },
    addToCompare: function (params) {
      dispatch({
        type: 'ADD_TO_COMPARE',
        payload: params
      })
    },
    dispatch: dispatch
  }
}



class ListProduct extends Component {



  constructor(props) {
    super(props);
    this.state = {
      haveInCart: false
    }

  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.compareProduct) {
      this.checkItemInCompare();
    } else {
      this.checkItemInCart()
    }
  }

  componentDidMount() {
    this.checkItemInCart()
    this.checkItemInCompare()
  }

  async checkItemInCart() {

    const { productCart } = this.props

    let response = await productCart.find(el => {

      return el.id == this.props.data.id
    })

    if (response === undefined) {
      this.setState({ haveInCart: false })
    } else {
      this.setState({ haveInCart: true })
    }

  }

  async checkItemInCompare() {
    const { compareProductList } = this.props
    let response = await compareProductList.find(el => {
      return el.id == this.props.data.id
    })
    if (response !== undefined) {
      this.setState({ haveInCart: true })
    } else {
      this.setState({ haveInCart: false })
    }

  }

  async pushInCart(value) {
    const { compareProduct, addToCart, addToCompare, compareProductList } = this.props
    try {

      if (compareProduct) {

        if (compareProductList.length < 2) {
          addToCompare(value);
          this.checkItemInCompare()
          console.log('compare')

        }

      } else {
        addToCart(value)
        this.checkItemInCart()
        console.log('add to cart')

      }

    } catch (error) {
      console.log('error', error)
    }

  }




  render() {
    const item = this.props
    return (

      <View
        style={[styles.shadowDefault, this.state.haveInCart ? styleScoped.customBoxProductInCart : styleScoped.customBoxProduct]}
      >

        <TouchableOpacity style={styleScoped.productBoxImage} onPress={() => Actions.push('ProductDetail', { data: item.data })}>
          <Image source={{ uri: item.data.image }} style={styleScoped.customImageProduct} />
        </TouchableOpacity>

        <TouchableOpacity style={styleScoped.productBoxDetail} onPress={()=>Actions.push('ProductDetail', { data: item.data })}>

          <View style={styles.flexRowBetween}>

            <View >
              <Text Text style={styleScoped.productPrice}>{item.data.price} บาท</Text>
              <View style={styles.flexRowBetween}>
                <Text style={styleScoped.producDisCountPrice}>{item.data.price} บาท </Text>
                <View style={styleScoped.productPercentDiscount}>
                  <Text style={{ color: '#fff', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>- {item.data.count} %</Text>
                </View>
              </View>
            </View>



            <View >
              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Icon name="star" size={hp('1.5%')} style={{ color: '#FFD10F' }} />
                <Icon name="star" size={hp('1.5%')} style={{ color: '#FFD10F' }} />
                <Icon name="star" size={hp('1.5%')} style={{ color: '#FFD10F' }} />
                <Icon name="star" size={hp('1.5%')} style={{ color: '#FFD10F' }} />
                <Icon name="star" size={hp('1.5%')} style={{ color: '#DAF4FC' }} />
              </View>

              <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2.5%'), alignSelf: 'center' }}>4.0</Text>
                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('1.8%'), alignSelf: 'center' }}>/5</Text>
              </View>
            </View>

          </View>

          <Text style={styleScoped.textTitleBrandProduct}>{item.data.brand} แอร์ผนัง</Text>
          <Text style={styleScoped.textProductSubDetail}>รุ่น {item.data.gen}</Text>
          <Text style={styleScoped.textProductSubDetail}>{item.data.detail}</Text>

        </TouchableOpacity>

      </View>

    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListProduct)


var styleScoped = StyleSheet.create({

  customBoxProduct: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white'
  },
  customBoxProductInCart: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: defaultTheme.COLORS.PRIMARY
  },
  customImageProduct: {
    width: '100%',
    height: 250,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  textProductSubDetail: {
    fontSize: hp('1.7%'),
    color: '#ACACAC',
    fontFamily: defaultTheme.FONT.FONT_FAMILY
  },
  textTitleBrandProduct: {
    fontSize: hp('2.4%'),
    fontFamily: defaultTheme.FONT.FONT_FAMILY
  },
  productBoxImage: {
    borderRadius: 5,
    backgroundColor: 'white',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10
  },
  productBoxDetail: {
    padding: 10,
    backgroundColor: '#F5FCFD',
    borderRadius: 10
  },
  productPrice: {
    color: '#6CC3ED',
    fontSize: hp('2.8%'),
    fontFamily: defaultTheme.FONT.FONT_FAMILY
  },
  producDisCountPrice: {
    color: '#6CC3ED',
    fontSize: hp('1.5%'),
    textDecorationLine: 'line-through',
    marginRight: 10,
    fontFamily: defaultTheme.FONT.FONT_FAMILY
  },
  productPercentDiscount: {
    fontSize: 12,
    fontWeight: 'bold',
    borderRadius: 2,
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#DC5C4C',
    height: 22,
    alignItems: 'center'
  },

  boxProductInCart: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: defaultTheme.COLORS.GREY,
    alignItems: 'center'
  },


  boxChooseProduct: {
    borderRadius: 8,
    padding: 10,
    backgroundColor: defaultTheme.COLORS.PRIMARY,
    alignItems: 'center'
  }





})