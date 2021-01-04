import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, Picker, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../../styles/base'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        roomInfo: state.roomInfo
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setPosition: function (params) {
            dispatch({
                type: 'SELECT_ROOM_INFO_POSITION',
                payload: params
            })
        },
        setWindow: function (params) {
            dispatch({
                type: 'SELECT_ROOM_INFO_WINDOW',
                payload: params
            })
        },
        setAirType: function (params) {
            dispatch({
                type: 'SELECT_ROOM_INFO_AIR_TYPE',
                payload: params
            })
        },
        setBrand: function (params) {
            dispatch({
                type: 'SELECT_ROOM_INFO_BRAND',
                payload: params
            })
        },
        setPrice: function (params) {
            dispatch({
                type: 'SELECT_ROOM_INFO_PRICE',
                payload: params
            })
        },
        setType: function (params) {
            dispatch({
                type: 'SELECT_ROOM_INFO_TYPE',
                payload: params
            })
        },
        dispatch: dispatch
    }
}


class RoomInfo extends Component {

    constructor(props) {
        super(props)
        this.state = {
            position: null,
            window: null,
            selectedTypeAir: null,
            blueColor: '#6CC3ED',
            selectType: '',
            selectedBrand: null,
            selectedPrice: 'default'
        }
    }

    onSelectType(value) {
        this.setState({ selectType: value })
    }

    render() {
        const { position, window, airType, type, brand } = this.props.roomInfo
        const { selectedTypeAir, selectType, selectedBrand } = this.state
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <ScrollView>

                    <View style={[styles.container, styles.mt_1]}>
                        <View style={[styles.flexRowBetween]}>
                            <TouchableOpacity onPress={() => Actions.push('SpecifyRoom')} style={{ ...styles.boxIconCircle }}>
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                            </TouchableOpacity>
                            {/* <TouchableOpacity >
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={26} onPress={() => Actions.push('SpecifyRoom')} />
                            </TouchableOpacity>

                            <TouchableOpacity >
                                <Icon style={styles.iconStyleCircle} name="home" size={26} onPress={() => Actions.push('MainScene')} />
                            </TouchableOpacity> */}
                        </View>

                        <View style={{ ...styles.mt_1 }}>
                            <View style={{ ...styles.mb_1, width: '100%' }}>
                                <Image source={require('../../../assets/images/Group4963.png')} style={{ width: '100%', height: hp('30%'), resizeMode: 'contain' }} />
                            </View>


                            {this.renderPosition()}
                            {position ? this.renderWindow() : null}
                            {window ? this.renderSelectTypeAir() : null}
                            {airType ? this.renderTypeAir() : null}
                            {type ? this.renderSelectBrand() : null}
                            {brand ? this.renderSelectPrice() : null}


                        </View>

                    </View>

                </ScrollView>
            </SafeAreaView>

        )
    }

    renderPosition() {
        const { position } = this.props.roomInfo
        const { setPosition } = this.props
        return (
            <View>
                <View>
                    <Text style={styleScoped.textTitle}>เลือกตำแน่งห้องของคุณ</Text>
                </View>

                <View style={{ ...styles.row }}>
                    <View style={{ ...styles.col_2 }}>
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            height:wp('35%'),
                            backgroundColor: position == 'ห้องใต้หลังคา'
                                ? defaultTheme.COLORS.PRIMARY
                                : 'white',
                        }}
                            onPress={() => setPosition('ห้องใต้หลังคา')}>
                            <View style={{
                                backgroundColor: defaultTheme.COLORS.SECONDARY,
                                borderRadius: 50, height: hp('7%'),
                                width: hp('7%'),
                                alignSelf: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ ...styleScoped.textNumber }}>1</Text>
                            </View>
                            <Text
                                style={{
                                    ...styleScoped.textMenu,
                                    color: position == 'ห้องใต้หลังคา' ? 'white' : 'black',
                                }}>
                                ห้องใต้หลังคา
                  </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_2 }}>
                        <TouchableOpacity
                            style={{
                                ...styles.boxMenu,
                                ...styles.shadowDefault,
                                height:wp('35%'),
                                backgroundColor:
                                    position == 'ห้องอื่นๆ' ? defaultTheme.COLORS.PRIMARY : 'white',
                            }}
                            onPress={() => setPosition('ห้องอื่นๆ')}>
                            <View style={{
                                backgroundColor: defaultTheme.COLORS.SECONDARY,
                                borderRadius: 50, height: hp('7%'),
                                width: hp('7%'),
                                alignSelf: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ ...styleScoped.textNumber }}>2</Text>
                            </View>
                            <Text
                                style={{
                                    ...styleScoped.textMenu,
                                    color: position == 'ห้องอื่นๆ' ? 'white' : 'black',
                                }}>
                                ห้องอื่นๆ
                  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }


    renderWindow() {
        const { window } = this.props.roomInfo
        const { setWindow } = this.props
        return (
            <View style={{ marginTop: 10 }}>
                <View >
                    <Text style={styleScoped.textTitle}>ห้องของคุณมีหน้าต่างหรือไม่</Text>
                </View>

                <View style={{ ...styles.row }}>

                    <View style={{ ...styles.col_2 }}>
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            paddingTop: 25,
                            backgroundColor: window == "มี" ? defaultTheme.COLORS.PRIMARY : 'white',
                            height:wp('35%'),
                            flexDirection:'column',
                            justifyContent:'center'
                        }} onPress={() => setWindow('มี')}>
                             <View style={{
                                backgroundColor: defaultTheme.COLORS.SECONDARY,
                                borderRadius: 50, 
                                height: hp('7%'),
                                width: hp('7%'),
                                alignSelf: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                            <Text style={{ ...styleScoped.textNumber}}>มี</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                    <View style={{ ...styles.col_2 }}>
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            paddingTop: 25,
                            height:wp('35%'),
                            flexDirection:'column',
                            justifyContent:'center',
                            backgroundColor: window == 'ไม่มี' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => setWindow('ไม่มี')}>
                            <View style={{
                                backgroundColor: defaultTheme.COLORS.SECONDARY,
                                borderRadius: 50, 
                                height: hp('7%'),
                                width: hp('7%'),
                                alignSelf: 'center',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ ...styleScoped.textNumber}}>ไม่มี</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        )
    }

    renderSelectTypeAir() {
        const { airType } = this.props.roomInfo
        const { setAirType } = this.props
        const ListType = ['Inverter', 'Non-Inverter', 'Inverter และ Non-Inverter']
        return (
            <View>
                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือกชนิดของแอร์</Text>
                </View>

                {
                    ListType.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={[styles.mb_1, styleScoped.boxSelectTypeAir,
                                { padding: 15, backgroundColor: airType == item ? defaultTheme.COLORS.PRIMARY :defaultTheme.COLORS.SECONDARY }]}
                                onPress={() => setAirType(item)}
                                key={index}
                            >
                                <Text style={{ textAlign: 'center', color: airType == item ? 'white' : defaultTheme.COLORS.PRIMARY , fontSize:hp('2%'),fontFamily:defaultTheme.FONT.FONT_FAMILY }}>{item}</Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </View>
        )
    }


    renderSelectBrand() {
        const { brand } = this.props.roomInfo
        const { setBrand } = this.props
        const ListBrand = [
            { name: 'carrier', img: require('../../../assets/images/carrier.png') },
            { name: 'toshiba', img: require('../../../assets/images/toshiba.png') },
            { name: 'lg', img: require('../../../assets/images/lg.png') },
        ]
        return (
            <View>
                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือก Brand</Text>
                </View>


                <View style={[styles.mb_1, styles.row]}>

                    {
                        ListBrand.map((item, index) => {
                            return (
                                <View style={{ ...styles.col_3 }} key={`brand__${index}`}>
                                    <TouchableOpacity style={[styles.boxMenu, styles.shadowDefault,
                                    { borderColor: brand == item.name ? defaultTheme.COLORS.PRIMARY : '' , padding:hp('2%') },
                                    { borderWidth: brand == item.name ? 2 : 0 }]}
                                        onPress={() => setBrand(item.name)}>
                                        <View style={{ alignItems: 'center' ,height: hp('8%')}}>
                                            <Image source={item.img} style={{ width: '100%',height:'100%', resizeMode: 'contain' }} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }

                </View>
            </View>

        )
    }


    renderTypeAir() {
        const { type } = this.props.roomInfo
        const { setType } = this.props
        return (
            <View>

                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือกประเภทแอร์ของคุณ</Text>
                </View>


                <View style={[styles.mb_1, styles.row]}>
                    <View style={{ ...styles.col_2 }} >
                        <TouchableOpacity
                            style={[styles.boxMenu, styles.shadowDefault,
                            { backgroundColor: type == 'Wall' ? defaultTheme.COLORS.PRIMARY : 'white' ,height:wp('35%'),}]}
                            onPress={() => setType('Wall')}
                        >
                            <View style={{flexDirection:'row',justifyContent:'center' }}>
                                <View style={{  height:hp('8%') ,width:hp('10%') ,}}>
                                    {
                                        type == 'Wall'
                                            ? <Image source={require('../../../assets/new/icons/wallwhite.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
                                            : <Image source={require('../../../assets/new/icons/wallblue.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
                                    }
                                </View>
                            </View>
                            
                            <Text style={[styles.textMenu,{ color: type == 'Wall' ? 'white' : 'black' , fontFamily:defaultTheme.FONT.FONT_FAMILY,fontSize:hp('2%')}]}>Wall</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ ...styles.col_2 }} >
                        <TouchableOpacity
                            style={[styles.boxMenu, styles.shadowDefault,
                            { backgroundColor: type == 'Duck' ? defaultTheme.COLORS.PRIMARY : 'white' ,height:wp('35%')}]}
                            onPress={() => setType('Duck')}
                        >
                            <View style={{flexDirection:'row',justifyContent:'center' }}>
                                <View style={{  height:hp('8%') ,width:hp('10%') ,}}>
                                {
                                    type == 'Duck'
                                        ? <Image source={require('../../../assets/new/icons/duckwhite.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
                                        : <Image source={require('../../../assets/new/icons/duck.png')} style={{height:'100%',width:'100%',resizeMode:'contain'}} />
                                }
                              </View>
                            </View>
                            <Text style={[styles.textMenu,{ color: type == 'Duck' ? 'white' : 'black' ,fontFamily:defaultTheme.FONT.FONT_FAMILY,fontSize:hp('2%') }]}>Duck</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        )
    }


    renderSelectPrice() {
        const { price } = this.props.roomInfo
        const { setPrice } = this.props
        return (
            <View>
                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือกช่วงราคาที่คุณต้องการ</Text>
                </View>

                <View style={[styles.mt_1, { backgroundColor: 'white', borderRadius: 5, width: '100%',  borderColor: '#8E8E93' }, styles.shadowDefault]}>
                    <Picker style={{ width: '100%' }} selectedValue={price} onValueChange={(itemValue, itemIndex) => setPrice(itemValue)}>
                        <Picker.Item color={defaultTheme.COLORS.PRIMARY} label="เลือกช่วงราคาที่ต้องการ..." value="null"></Picker.Item>
                        <Picker.Item color="#8E8E93" label="5,000-10,000" value="5,000-10,000"></Picker.Item>
                        <Picker.Item color="#8E8E93" label="10,000-15,000" value="10,000-15,000"></Picker.Item>
                        <Picker.Item color="#8E8E93" label="15,000-20,000" value="15,000-20,000"></Picker.Item>
                        <Picker.Item color="#8E8E93" label="20,000-25,000" value="20,000-25,000"></Picker.Item>
                        <Picker.Item color="#8E8E93" label="25,000-30,000" value="25,000-30,000"></Picker.Item>
                    </Picker>
                </View>

                {price ? this.renderNextButton() : null}

            </View>
        )
    }

    renderNextButton() {
        return (
            <TouchableOpacity style={[styleScoped.nextButton,  styles.flexRowCenter,{ marginTop: hp('1%'), padding:hp('2%') ,alignItems:'center'  }]} onPress={() => Actions.push('Conclude')}>
                <Text style={[{ color: 'white', marginRight: 2 , fontFamily:defaultTheme.FONT.FONT_FAMILY , fontSize:hp('2%')}]}>ถัดไป</Text>
                <Icon name="chevron-right" size={hp('2%')}  color={'white'} />
            </TouchableOpacity>
        )
    }



}

export default connect(mapStateToProps, mapDispatchToProps)(RoomInfo)


const styleScoped = StyleSheet.create({
    textTitle: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        fontSize: hp('2%'),
        marginTop: hp('2%'),
        marginBottom: hp('1%')
    },
    textNumber: {
        color: defaultTheme.FONT.PRIMARY,
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: hp('3%')
    },
    textMenu: {
        fontFamily: defaultTheme.FONT.FONT_FAMILY,
        textAlign: 'center',
        marginTop: hp('1%'),
        fontSize:hp('1.8%')
        
    },
    boxSelectTypeAir: {
        width: '100%',
        padding: hp('1%'),
        borderRadius: 5,
        backgroundColor: 'white'
    },
    nextButton: {
        width: '100%',
        padding: hp('1%'),
        backgroundColor: '#6CC3ED',
        borderRadius: 5,
    },

})