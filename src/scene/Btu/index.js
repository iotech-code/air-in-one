import React, { Component } from 'react';
import { View, Text, Image, TextInput, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { styles } from '../../styles/base'
import { Actions } from 'react-native-router-flux'
import { defaultTheme } from '../../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { connect } from 'react-redux'

const mapStateToProps = function (state) {
    return {
        menuSelected: state.calculateBtu,
    }
}

const mapDispatchToProps = function (dispatch) {
    return {
        setAsset: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ASSET',
                payload: params
            })
        },
        setType: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_TYPE',
                payload: params
            })
        },
        setRoomType: function (params) {
            dispatch({
                type: 'CALCULATE_SELECT_ROOM_TYPE',
                payload: params
            })
        },
        dispatch: dispatch
    }
}


class MainCalculateBtu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            asset: null,
            type: null,
            room: null
        }
    }


    chooseAsset(asset) {
        const { setAsset, setRoomType, setType } = this.props
        if (asset == 'commerce') {
            setRoomType(null)
        }
        setType(null)
        setAsset(asset)
    }

    chooseType(type) {
        const { setType } = this.props
        setType(type)
    }

    chooseRoomType(roomType) {
        const { setRoomType } = this.props
        setRoomType(roomType)
    }



    render() {
        const { asset, type, room } = this.state
        const { menuSelected } = this.props
        return (

            <SafeAreaView style={{ flex: 1  }}>
                <ScrollView style={{backgroundColorL:'white'}}>


                    <View style={[styles.container, styles.mt_1, { marginBottom: 20 }]}>

                        

                        <View style={[styles.flexRowBetween]}>
                            <TouchableOpacity onPress={() => Actions.push('ChooseAir')} style={{ ...styles.boxIconCircle }}>
                                <Icon style={styles.iconStyleCircle} name="chevron-left" size={defaultTheme.size.iconOnTop} />
                            </TouchableOpacity>
                        </View>


                        <View style={{ marginVertical: hp('2%') }}>
                            <Text style={styleScoped.textTitle}>เลือกลักษณะสินทรัพย์</Text>
                        </View>


                        <View style={{ ...styles.row }}>

                            <View style={{ ...styles.col_3 }} >
                                <TouchableOpacity style={{
                                    ...styles.boxMenu,
                                    ...styles.shadowDefault,
                                    backgroundColor: menuSelected.asset == 'home' ? defaultTheme.COLORS.PRIMARY : 'white'
                                }} onPress={() => this.chooseAsset('home')}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={
                                            menuSelected.asset == 'home'
                                                ? require('../../../assets/icons/homeWhite.png')
                                                : require('../../../assets/icons/Group4051.png')
                                        } style={styles.imageMenu} />
                                    </View>
                                    <Text style={[styles.textMenu, { color: menuSelected.asset == 'home' ? 'white' : 'black' }]}>บ้านพักอาศัย</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ ...styles.col_3 }} >
                                <TouchableOpacity style={{
                                    ...styles.boxMenu,
                                    ...styles.shadowDefault,
                                    backgroundColor: menuSelected.asset == 'commerce' ? defaultTheme.COLORS.PRIMARY : 'white'
                                }} onPress={() => this.chooseAsset('commerce')}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Image source={require('../../../assets/icons/Group4058.png')} style={styles.imageMenu} />
                                    </View>
                                    <Text style={[styles.textMenu, { color: menuSelected.asset == 'commerce' ? 'white' : 'black' }]}>เชิงพาณิชย์</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {menuSelected.asset == 'home' ? this.renderSelectTypeOne() : null}
                        {menuSelected.asset == 'commerce' ? this.renderSelectTypeTwo() : null}

                        {(menuSelected.asset != null && menuSelected.asset != 'commerce') && menuSelected.type != null ? this.renderSelectTypeRoom() : null}

                        {(menuSelected.asset == 'commerce' && menuSelected.type != null) || (menuSelected.asset == 'home' && menuSelected.type != null && menuSelected.roomType != null) ? this.renderNextButton() : null}



                    </View>
                </ScrollView>
            </SafeAreaView>

        )
    }




    renderSelectTypeOne() {
        const { type } = this.state
        const { menuSelected } = this.props
        return (
            <View>

                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือกประเภท</Text>
                </View>

                <View style={{ ...styles.row }}>

                    <View style={{ ...styles.col_3 }} >
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: menuSelected.type == 'home' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseType('home')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    menuSelected.type == 'home'
                                        ? require('../../../assets/icons/homeWhite.png')
                                        : require('../../../assets/icons/Group4051.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: menuSelected.type == 'home' ? 'white' : 'black' }]}>บ้าน</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_3 }} >
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: menuSelected.type == 'apartment' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseType('apartment')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    menuSelected.type == 'apartment'
                                        ? require('../../../assets/icons/Group7257.png')
                                        : require('../../../assets/icons/Group4245.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: menuSelected.type == 'apartment' ? 'white' : 'black' }]}>อพาร์ทเมนต์</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_3 }}>
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: menuSelected.type == 'villa' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseType('villa')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    menuSelected.type == 'villa'
                                        ? require('../../../assets/icons/Group7258.png')
                                        : require('../../../assets/icons/Group4071.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: menuSelected.type == 'villa' ? 'white' : 'black' }]}>วิลล่า</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        )
    }


    renderSelectTypeTwo() {
        const { type } = this.state
        const { menuSelected } = this.props

        return (
            <View>

                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือกประเภท</Text>
                </View>

                <View style={{ ...styles.row }}>

                    <View style={{ ...styles.col_3 }} >
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: menuSelected.type == 'shop' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseType('shop')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={require('../../../assets/icons/Group4058.png')} style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: menuSelected.type == 'shop' ? 'white' : 'black' }]}>ร้านค้า</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_3 }} >
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: menuSelected.type == 'restaurant' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseType('restaurant')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={menuSelected.type == 'restaurant' ?  
                                require('../../../assets/new/icons/restaurantwhite.png') 
                                : require('../../../assets/icons/Group4058.png')} style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: menuSelected.type == 'restaurant' ? 'white' : 'black' }]}>ร้านอาหาร</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_3 }}>
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: menuSelected.type == 'office' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseType('office')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    menuSelected.type == 'office'
                                        ? require('../../../assets/icons/Group7257.png')
                                        : require('../../../assets/icons/Group4245.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: menuSelected.type == 'office' ? 'white' : 'black' }]}>ออฟฟิส</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>

        )
    }



    renderSelectTypeRoom() {
        const { roomType } = this.props.menuSelected
        return (
            <View>

                <View style={[styles.mt_2, { marginBottom: 10 }]}>
                    <Text style={styleScoped.textTitle}>เลือกประเภทห้อง</Text>
                </View>

                <View style={{ ...styles.row }}>

                    <View style={{ ...styles.col_3 }} >
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: roomType == 'bedroom' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseRoomType('bedroom')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    roomType == 'bedroom'
                                        ? require('../../../assets/icons/Group7260.png')
                                        : require('../../../assets/icons/Group7254.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: roomType == 'bedroom' ? 'white' : 'black' }]}>ห้องนอน</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_3 }} >
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: roomType == 'kitchen' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseRoomType('kitchen')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    roomType == 'kitchen'
                                        ? require('../../../assets/icons/Group7261.png')
                                        : require('../../../assets/icons/Group7255.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: roomType == 'kitchen' ? 'white' : 'black' }]}>ห้องครัว</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ ...styles.col_3 }}>
                        <TouchableOpacity style={{
                            ...styles.boxMenu,
                            ...styles.shadowDefault,
                            backgroundColor: roomType == 'livingroom' ? defaultTheme.COLORS.PRIMARY : 'white'
                        }} onPress={() => this.chooseRoomType('livingroom')}>
                            <View style={{ alignItems: 'center' }}>
                                <Image source={
                                    roomType == 'livingroom'
                                        ? require('../../../assets/icons/Group7262.png')
                                        : require('../../../assets/icons/Group7256.png')
                                } style={styles.imageMenu} />
                            </View>
                            <Text style={[styles.textMenu, { color: roomType == 'livingroom' ? 'white' : 'black' }]}>ห้องนั่งเล่น</Text>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        )
    }


    renderNextButton() {
        return (

            <TouchableOpacity style={[styleScoped.nextButton, styles.flexRowCenter,{marginTop:this.props.menuSelected.asset == 'home' ? hp('13%') : hp('35%')}]} onPress={() => { Actions.push('SpecifyRoom') }}>
                <Text style={[styles.fontBold, { color: 'white', marginRight: 2, fontSize: hp('2%'), textAlignVertical: 'center' }]}>ถัดไป</Text>
                <Icon name="chevron-right" size={hp('3%')} style={[styles.fontBold, { color: 'white', marginTop: 1, alignSelf: 'center' }]} />
            </TouchableOpacity>
            
        )
    }




}

export default connect(mapStateToProps, mapDispatchToProps)(MainCalculateBtu)

const styleScoped = StyleSheet.create({
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5
    },
    textTitle:{
        fontFamily:defaultTheme.FONT.FONT_FAMILY,
        fontSize:hp('1.8%')
    },  
    grid: {
        width: '33.33%'
    },
    nextButton: {
        width: '100%',
        padding: hp('2%'),
        backgroundColor: defaultTheme.COLORS.PRIMARY,
        borderRadius: 5,
        alignItems:'center'
    },


})