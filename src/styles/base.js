import {Dimensions, StyleSheet} from 'react-native';
import {defaultTheme} from '../constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const defaultFont = 'Kanit';


const secondaryColor = '#F7F7F7'

const styles = StyleSheet.create({
    //responsive
    container:{
      paddingHorizontal:wp('3%')
    },  
    row: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    col_2:{
      width: '50%',
      padding:5
    },
    col_3: {
      width: '33.33%',
      padding:5
    },
    col_4: {
      width: '25%',
      padding:5
    },
    col_5: {
      width: '25%',
      padding:5
    },
    header:{
      backgroundColor: defaultTheme.COLORS.PRIMARY,
      paddingTop:hp('6%'),
      paddingHorizontal:wp('1.5%')
    },  
    textHeader:{
      marginBottom:hp('5%')
    },
    boxSearchHeader:{
      padding: wp('2%'),
      backgroundColor: 'white',
      borderRadius: hp('0.6%'),
      height: hp('5%'),
      width: '100%',
      position: 'absolute',
      top: - hp('2.5%'),
      zIndex:10
    },
    boxIconCircle:{
      backgroundColor:secondaryColor,
      width:hp('5%'),
      height:hp('5%'),
      borderRadius:50,
      flexDirection:'column',
      justifyContent:'center',
    },
    iconStyleCircle:{
      textAlign:'center',
      color:defaultTheme.COLORS.PRIMARY
    },
    iconStyleCircleBgBlue:{
      textAlignVertical:'center',
      textAlign:'center',
      backgroundColor:defaultTheme.COLORS.PRIMARY,
      width:21,
      height:21,
      borderRadius:50,
      color:'white'
    },
    
    mt_1:{
      marginTop:hp('1.5%')
    },
    mt_2:{
      marginTop:20
    },
    mt_3:{
      marginTop:30
    },
    mt_4:{
      marginTop:40
    },
    mb_1:{
      marginBottom:10
    },
    mr_1:{
      marginRight:10
    },
    boxMenu:{
      width:'100%',
      paddingHorizontal:wp('1%'),
      paddingTop:hp('2.5%'),
      paddingBottom:hp('1.5%'),
      minHeight:hp('10%'),
      height:'auto',
      borderRadius:hp('1%'),
      backgroundColor:'white'
    },

    imageMenu:{
      resizeMode:'contain',
      width:'100%',
      height:hp('5%')
    },

    textMenu:{
      textAlign:'center',
      marginTop:hp('1.5%'),
      fontSize:hp('1.5%'),
      fontWeight:'100',
      fontFamily:defaultTheme.FONT.FONT_FAMILY
    },

    textTitle:{
      fontSize:hp('2.3%'),
      fontFamily :defaultTheme.FONT.FONT_FAMILY,
      color:'#484848'
    },  

    textOr:{
      fontSize:hp('1.8%'),
      fontFamily:defaultTheme.FONT.FONT_FAMILY,
      color:'#6CC3ED',
      textAlign:'center'
    },
    

    boxInput:{
      backgroundColor:secondaryColor,
      padding:5,
      borderRadius:5,
      height:37
    },
    inputSearchbox:{
      textAlign:'left',
      height:'100%',
      padding:0,
      paddingLeft:0,
      fontSize:hp('2%'),
      color:'#808085',
      fontFamily:defaultTheme.FONT.FONT_FAMILY
    }, 
    // flex
    flexRowStart:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start'
    },
    flexRowCenter:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center'
    },
    flexRowBetween:{
      flex:1,
      flexDirection:'row',
      justifyContent:'space-between'
    },
    flexRowEnd:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-end'
    },
    flexColEnd:{
      flex:1,
      flexDirection:'column',
      justifyContent:'flex-end'
    },

    //icon
    iconSearchInbox:{
      color:'#808085',
      marginRight:10
    },


    iconFlip:{
      transform: [{rotateY: '180deg'}]
    },

    // shadow
    shadowDefault: {
      shadowColor: '#ccc',
      shadowOffset: {
        width:0,
        height:1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      elevation: 2,
    },

    //font 
    fontBold:{
      fontWeight:'bold'
    },

    // button 
    btnPrimary:{
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: defaultTheme.COLORS.PRIMARY,
      borderRadius: 5,
    },
    textBtn:{
      fontWeight: 'bold',
      fontFamily: defaultTheme.FONT.FONT_FAMILY,
      textAlign: 'center'
    },
    customButtomSeeMore:{
      marginTop:20,
      padding:10,
      backgroundColor:'#F1F9FF'
    },
    textInButtomSeemore:{
      color:'#6CC3ED',
      textAlign:'center',
      fontSize:hp('1.8%'),
      fontFamily:defaultTheme.FONT.FONT_FAMILY 
    },






    bodyStyle:{
      backgroundColor:secondaryColor,
    },
    borderIcon:{
      backgroundColor:secondaryColor,
      borderRadius:50,
      width: 35,
      padding:2,
    },
    bgContent:{
      backgroundColor:'white'
    },
    clearFix:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    floatLeft: {
     
    },
    floatRight: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    fontPrimary:{
      color:'#6cc3ed'
    },
    searchSection: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      flex: 1,
    },
});
export {
  styles,
  defaultFont
};
