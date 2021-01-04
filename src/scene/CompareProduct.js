import React, { Component } from 'react';
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TouchableOpacity,
    Image,
    CheckBox,
    SafeAreaView
} from 'react-native';


import { styles } from '../styles/base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Actions } from 'react-native-router-flux'
import { defaultTheme, Images } from '../constants'
import AsyncStorage from '@react-native-community/async-storage'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';



export default class CompareProduct extends Component {


    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

                <ScrollView style={{ ...styles.bodyStyle }}>
                    <View style={{ ...styles.flexRowBetween, paddingTop: 10, paddingBottom: 10, ...styles.container, backgroundColor: 'white' }}>
                        <TouchableOpacity style={{ ...styles.boxIconCircle }}>
                            <Icon
                                style={{ ...styles.iconStyleCircle }}
                                name="chevron-left"
                                size={defaultTheme.size.iconOnTop}
                                onPress={() => Actions.push('Product')}
                            />
                        </TouchableOpacity>
                        {/* <Icon
                            name="chevron-left" size={30} style={{ ...styles.iconStyleCircle }}
                            onPress={() => Actions.push('Product')}
                        /> */}
                    </View>

                    <View style={{ ...styles.container, backgroundColor: 'white', paddingBottom: 10 }}>
                        <Text style={{ ...styles.textTitle, color: 'black' }}>เปรียบเทียบสินค้า</Text>
                    </View>
                    <View style={{ ...styles.flexRowBetween, backgroundColor: 'white', alignItems: 'center' }}>
                        <View style={{ ...styles.col_3 }}>
                            <View style={{ width: '100%', height: 30 }}>
                                <Image source={require('../../assets/images/carrier.png')} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>
                            <View style={{ width: '100%', height: 100 }}>
                                <Image source={require('../../assets/images/MaskGroup.png')} style={{ width: '100%', width: '100%', resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>
                            <View>
                                <Text style={{ color: defaultTheme.FONT.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center' }}>CARRIER</Text>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center' }}>รุ่น FTKC15TV2S</Text>
                            </View>
                        </View>

                        <View style={{ ...styles.col_3 }}>
                            <View style={{
                                flexDirection: 'column',
                                justifyContent: 'center',
                                backgroundColor: defaultTheme.COLORS.PRIMARY,
                                borderRadius: 50,
                                width: hp('4%'),
                                height: hp('4%'),
                                padding: hp('1%'),
                                alignSelf: 'center',
                            }}>
                                <Text style={{ color: 'white', textAlign: 'center', textAlignVertical: 'center', fontSize: hp('1.5%') }}>VS</Text>
                            </View>
                        </View>

                        <View style={{ ...styles.col_3 }}>
                            <View style={{ width: '100%', height: 30 }}>
                                <Image source={require('../../assets/images/carrier.png')} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>
                            <View style={{ width: '100%', height: 100 }}>
                                <Image source={require('../../assets/images/MaskGroup.png')} style={{ width: '100%', width: '100%', resizeMode: 'contain', alignSelf: 'center' }} />
                            </View>
                            <View>
                                <Text style={{ color: defaultTheme.FONT.PRIMARY, fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center' }}>CARRIER</Text>
                                <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center' }}>รุ่น RAS-25PKSG-T</Text>
                            </View>
                        </View>
                    </View>
                    {/* compare with shop */}
                    <View style={{ ...styles.container, backgroundColor: 'white', marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>เปรียบเทียบจากราคาร้าน</Text>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3 }}></Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>FTKC15TV25</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>RAS-25PKSG-T</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10, alignItems: 'center' }}>
                            <View style={{ ...styles.col_3, flexDirection: 'row' }}>
                                <CheckBox style={{ width: 10, alignSelf: 'center' }} />
                                <View style={{ width: '100%', height: 50 }}>
                                    <Image source={Images.shop1} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                </View>
                            </View>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>25,500 บาท</Text>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>34,500 บาท</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10, alignItems: 'center' }}>
                            <View style={{ ...styles.col_3, flexDirection: 'row' }}>
                                <CheckBox style={{ width: 10, alignSelf: 'center' }} />
                                <View style={{ width: '100%', height: 50 }}>
                                    <Image source={Images.shop1} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                </View>
                            </View>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>25,500 บาท</Text>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>34,500 บาท</Text>
                        </View>


                        <View style={{ ...styles.row, marginTop: 10, alignItems: 'center' }}>
                            <View style={{ ...styles.col_3, flexDirection: 'row' }}>
                                <CheckBox style={{ width: 10, alignSelf: 'center' }} />
                                <View style={{ width: '100%', height: 50 }}>
                                    <Image source={Images.shop3} style={{ width: '100%', height: '100%', resizeMode: 'contain' }} />
                                </View>
                            </View>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>25,500 บาท</Text>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>34,500 บาท</Text>
                        </View>

                        <View style={[styles.flexRowCenter, styles.customButtomSeeMore]}>
                            <Text style={styles.textInButtomSeemore}>เพิ่มเติม </Text>
                            <Icon name="chevron-down" size={22} color="#6CC3ED" />
                        </View>



                    </View>




                    {/* promotion */}

                    <View style={{ ...styles.container, backgroundColor: 'white', marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>เปรียบเทียบจากราคาร้าน</Text>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3 }}></Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>FTKC15TV25</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>RAS-25PKSG-T</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ฟรีค่าจัดส่ง</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ฟรีค่าติดตั้ง</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>เเถมรางครอบท่อ</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>

                        <View style={[styles.flexRowCenter, styles.customButtomSeeMore]}>
                            <Text style={styles.textInButtomSeemore}>เพิ่มเติม </Text>
                            <Icon name="chevron-down" size={22} color="#6CC3ED" />
                        </View>

                    </View>





                    {/* Product characteristics */}

                    <View style={{ ...styles.container, backgroundColor: 'white', marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>ลักษณะเฉพาะของผลิตภัณฑ์</Text>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3 }}></Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>FTKC15TV25</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>RAS-25PKSG-T</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ขนาดทำความเย็น</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>14,300 BTU</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>13000 BTU</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>กำลังไฟฟ้า</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>กำลังไฟฟ้า</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>กำลังไฟฟ้า</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>เเหล่งจ่ายไฟ</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>เเหล่งจ่ายไฟ</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>เเหล่งจ่ายไฟ</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ค่าไฟ</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>ค่าไฟโดยประมาณ</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>ค่าไฟโดยประมาณ</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>สีหน้ากาก</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>สีหน้ากาก</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>สีหน้ากาก</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>อัตราหมุนเวียน</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>อัตราหมุนเวียน</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>อัตราหมุนเวียน</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>การกระจายลม</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>การกระจายลม</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>การกระจายลม</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>เเผ่นกรองอากาศ</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>เเผ่นกรองอากาศ</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: defaultTheme.FONT.PRIMARY }}>เเผ่นกรองอากาศ</Text>
                        </View>



                        <View style={[styles.flexRowCenter, styles.customButtomSeeMore]}>
                            <Text style={styles.textInButtomSeemore}>เพิ่มเติม </Text>
                            <Icon name="chevron-down" size={22} color="#6CC3ED" />
                        </View>

                    </View>



                    {/* Product characteristics  phase 2*/}

                    <View style={{ ...styles.container, backgroundColor: 'white', marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>
                        <Text style={{ fontFamily: defaultTheme.FONT.FONT_FAMILY, fontSize: hp('2%') }}>ลักษณะเฉพาะของผลิตภัณฑ์</Text>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3 }}></Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>FTKC15TV25</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>RAS-25PKSG-T</Text>
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>สารทำความเย็น</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>สารเย็น 32</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>ระบบ</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>การทำความเย็น</Text>
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                            <Icon name="checkbox-marked" size={25} style={{ ...styles.col_3, textAlignVertical: 'center', textAlign: 'center', color: defaultTheme.FONT.PRIMARY }} />
                        </View>



                        <View style={[styles.flexRowCenter, styles.customButtomSeeMore]}>
                            <Text style={styles.textInButtomSeemore}>เพิ่มเติม </Text>
                            <Icon name="chevron-down" size={22} color="#6CC3ED" />
                        </View>




                    </View>

                    {/* Score  */}

                    <View style={{ ...styles.container, backgroundColor: 'white', marginTop: 10, paddingTop: 10, paddingBottom: 10 }}>

                        <View style={{ ...styles.row, marginTop: 10 }}>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>สรุปคะเเนน</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>FTKC15TV25</Text>
                            <Text style={{ ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY }}>RAS-25PKSG-T</Text>
                        </View>

                        <View style={{ backgroundColor: '#215974', borderRadius: 5, padding: hp('1.5%') }}>
                            <View style={{ ...styles.row }}>
                                <Text style={{ textAlignVertical: 'center', ...styles.col_3, fontFamily: defaultTheme.FONT.FONT_FAMILY, color: 'white', fontSize: hp('2%') }}>คะเเนน</Text>
                                <Text style={{ ...styles.col_3, color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', fontSize: hp('2%') }}>4.5/5</Text>
                                <Text style={{ ...styles.col_3, color: 'white', fontFamily: defaultTheme.FONT.FONT_FAMILY, textAlign: 'center', fontSize: hp('2%') }}>4.9/5</Text>
                            </View>
                        </View>

                    </View>





                </ScrollView>
            </SafeAreaView>
        )
    }



}