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


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme } from '../constants'



export default class SearchProduct extends Component {

    state = {
        searchProduct: ''
    }

    render() {
        return (
            <ScrollView>
                <View style={{ ...styles.flexRowStart, marginTop: 10, marginBottom: 10, ...styles.container }}>
                    <Icon
                        name="chevron-left" size={30} style={{ ...styles.iconStyleCircle, marginRight: 10, }}
                        onPress={() => Actions.push('Product')}
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
                        : this.renderItemProducts()
                }

            </ScrollView>
        )
    }

    renderItemBrand(value) {
        return (
            <View style={{
                backgroundColor: defaultTheme.COLORS.SECONDARY,
                paddingHorizontal: 15,
                paddingVertical: 5,
                minWidth: 20,
                borderRadius: 5,
                marginVertical: 10,
                marginHorizontal: 5
            }}>
                <Text style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontFamily: defaultTheme.COLORS.PRIMARY,
                    color: defaultTheme.FONT.FONT_GREY
                }}>{value}</Text>
            </View>
        )
    }


    renderItemProducts(){
        return(
            <View style={{ ...styles.container, marginTop: 10,paddingBottom:10,borderBottomWidth:2,borderBottomColor:defaultTheme.COLORS.SECONDARY }}>
                <View style={{ ...styles.flexRowStart }}>
                    <View >
                        <View style={{ height: 25, width: 75, marginRight: 20, justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/carrier.png')} style={{ width: '100%', height: '75%', resizeMode: 'contain' }} />
                        </View>
                        <View style={{ height: 50, width: 75, marginTop: 0, marginRight: 20 }}>
                            <Image source={require('../../assets/images/MaskGroup.png')} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
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
            </View>
            
        )
        
    }




}