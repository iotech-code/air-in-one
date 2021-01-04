import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
} from 'react-native';


import { styles } from '../../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme } from '../../constants'

import {connect} from 'react-redux'

const mapStateToProps = function(state){
    return{
        setupOnlySelectProduct: state.setupOnlySelectProduct,
    }
}

const mapDispatchToProps = function(dispatch){
    return{
        setInstallOnly:function (params) {
           dispatch({
            type: 'SETUP_ONLY_PRODUCT',
            payload: params
           }) 
        },
        dispatch:dispatch
    }
}


 class BuyAndSetupSearchProduct extends Component {

    state = {
        searchProduct: ''
    }

    selectProduct(){
        const {setInstallOnly} = this.props
        setInstallOnly(true)
        Actions.push('ChooseBTU')
    }

    render() {
        return (
            <ScrollView>
                <View style={{ ...styles.flexRowStart, marginTop: 10, marginBottom: 10, ...styles.container }}>
                    <Icon
                        name="chevron-left" size={30} style={{ ...styles.iconStyleCircle, marginRight: 10, }}
                        onPress={() => Actions.push('ChooseBTU')}
                    />

                    <View style={{ padding: 5, backgroundColor: defaultTheme.COLORS.SECONDARY, ...styles.flexRowStart, borderRadius: 5 }}>
                        <Icon name="magnify" size={25} color={defaultTheme.FONT.FONT_GREY} />
                        <TextInput
                            style={{
                                textAlign: 'left',
                                height: '100%',
                                width: '90%',
                                padding: 0,
                                paddingLeft: 5,
                                color: defaultTheme.COLORS.FONT_GREY,
                                fontWeight: 'bold',
                                fontFamily: defaultTheme.FONT_FAMILY
                            }}
                            placeholder="ค้าหาเครื่องปรับอากาศ..."
                            onChangeText={(text) => this.setState({ searchProduct: text })}
                        />
                    </View>

                </View>

                {
                    this.state.searchProduct == '' ?
                        <View>
                            <View style={{ ...styles.container, marginTop: 10 }}>
                            <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>แบรนด์ดัง</Text>
                            <View style={{ ...styles.flexRowStart, flexWrap: 'wrap', marginTop: 10 }}>
                                {this.renderItemBrand('Carrier')}
                                {this.renderItemBrand('Toshiba')}
                                {this.renderItemBrand('LG')}
                                {this.renderItemBrand('Dakin')}
                                {this.renderItemBrand('Carrier')}
                                {this.renderItemBrand('Toshiba')}
                                {this.renderItemBrand('LG')}
                                {this.renderItemBrand('Dakin')}
                            </View>

                            </View>

                            <View style={{ ...styles.container, marginTop: 10 }}>
                                <Text style={{ fontWeight: 'bold', fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ร้านดัง</Text>
                                <View style={{ ...styles.flexRowStart, flexWrap: 'wrap', marginTop: 10 }}>
                                    {this.renderItemBrand('SM AIR')}
                                    {this.renderItemBrand('Air Many')}
                                    {this.renderItemBrand('Modern Air')}
                                    {this.renderItemBrand('DN AIR')}
                                    {this.renderItemBrand('New Cooling Air')}
                                </View>

                            </View>
                        </View>

                        : this.renderItemProducts()
                }

            </ScrollView>
        )
    }

    renderItemBrand(value) {
        return (
            <TouchableOpacity style={{
                backgroundColor: defaultTheme.COLORS.SECONDARY,
                paddingHorizontal: 15,
                paddingVertical: 5,
                minWidth: 20,
                borderRadius: 5,
                marginVertical: 10,
                marginHorizontal: 5
            }} onPress={()=> this.setState({searchProduct:'a'})}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: defaultTheme.COLORS.PRIMARY,
                    color: defaultTheme.FONT.FONT_GREY
                }}>{value}</Text>
            </TouchableOpacity>
        )
    }


    renderItemProducts(){
        return(
            <TouchableOpacity 
            style={{ ...styles.container, marginTop: 10,paddingBottom:10,borderBottomWidth:2,borderBottomColor:defaultTheme.COLORS.SECONDARY }}
            onPress={()=> this.selectProduct()}
            >
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
                                    marginTop:2,
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
            </TouchableOpacity>
            
        )
        
    }




}

export default connect(mapStateToProps,mapDispatchToProps)(BuyAndSetupSearchProduct)
