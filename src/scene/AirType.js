/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {StatusBar, StyleSheet, Keyboard, ScrollView, PixelRatio,Dimensions} from 'react-native';
import { Thumbnail,View,Picker, Form, Text, Container, Header, Content, Icon, Grid, Right, Button } from 'native-base';
import { Col, Row } from 'react-native-easy-grid';
import backimage from '../ASSETS/ICON/BackButton.png'
import home from '../ASSETS/ICON/home.blue.png'
import img1 from '../ASSETS/IMAGES/carrier.png'
import img2 from '../ASSETS/IMAGES/toshiba.png'
import img3 from '../ASSETS/IMAGES/lg.png'
import icon1 from '../ASSETS/ICON/Group3739.png'
import icon2 from '../ASSETS/ICON/cassette.blue.png'
import icon3 from '../ASSETS/ICON/duck.blue.png'
import icon4 from '../ASSETS/ICON/ac.tall.blue.png'
import icon5 from '../ASSETS/ICON/cieling.blue.png'

var FONT_BACK_LABEL = 40;
var width_screen = Dimensions.get('window').width;

export default class ChosseAir extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  onValueChange(value: string) {
    this.setState({
      
    });
  }
  clickHandler1 = () => {
    
    return (
      <>
      <Text style={styles.text3}>เลือกแบรนด์</Text>
        <Grid>
          <Col><Button style={styles.button1} onPress={() => this.clickHandler2()}>
          <Thumbnail
          source={img1}
          style={styles.img}/></Button></Col>
          <Col><Button style={styles.button1} onPress={() => this.clickHandler2()}>
          <Thumbnail
          source={img2}
          style={styles.img}/>
          </Button></Col>
          <Col><Button style={styles.button1} onPress={() => this.clickHandler2()}>
          <Thumbnail
          source={img3}
          style={styles.img}/>
         </Button></Col>
        </Grid>
      </>
    )
  }
  clickHandler2 = () => {
    return (
      <>
      <Text style={styles.text3}>เลือกชนิดของแอร์</Text>
      <View style={styles.view2}>
        <Button style={styles.button2} >
        <Text style={styles.text4}>Inverter</Text></Button>
        <Button style={styles.button2} >
       <Text style={styles.text5}>Non-Inverter</Text></Button>
        <Button style={styles.button2} >
        <Text style={styles.text6} >Inverter และ Non-Inverter</Text></Button>
      </View>
      </>
    )
  }
  render() {
    return (
      <Container>
        <Content>
        <View style={styles.view1}>
        <View>
        <Grid>
        <Row>
        <Col>
        <Thumbnail
          source={backimage}
          style={styles.back}/>
        </Col>
          <Col></Col>
          <Col>
          <Thumbnail
          source={home}
          style={styles.home}/>
          </Col>
        </Row>
         </Grid>
          <Text style={styles.text1}>โปรดเลือกประเภทของแอร์</Text>
        </View>
        <Grid>
        <Col>
             <Button style={styles.button1} onPress={() => this.clickHandler1()}>
             <Thumbnail
              source={icon1}
              style={styles.icon}/>
             <Text style={styles.text2}>{"\n"}Wall</Text>
             </Button>

             <Button style={styles.button1}  onPress={() => this.clickHandler1()}>
             <Thumbnail
              source={icon2}
              style={styles.icon}/>
             <Text style={styles.text2}>{"\n"}Casette</Text></Button>
        </Col>
        <Col>
              <Button style={styles.button1}  onPress={() => this.clickHandler1()}>
              <Thumbnail
              source={icon3}
              style={styles.icon}/>
              <Text style={styles.text2}>{"\n"}Duck</Text></Button>
              <Button style={styles.button1}  onPress={() => this.clickHandler1()}>
              <Thumbnail
              source={icon4}
              style={styles.icon}/>
              <Text style={styles.text2}>{"\n"}ตู้ตั้ง</Text></Button>
        </Col>
        <Col>
              <Button style={styles.button1} onPress={() => this.clickHandler1()} >
              <Thumbnail
              source={icon5}
              style={styles.icon}/>
              <Text style={styles.text2}>{"\n"}Ceiling</Text></Button>
        </Col>
        </Grid>
        <Text style={styles.text3}>เลือกแบรนด์</Text>
        <Grid>
          <Col><Button style={styles.button1} onPress={() => this.clickHandler2()}>
          <Thumbnail
          source={img1}
          style={styles.img}/></Button></Col>
          <Col><Button style={styles.button1} onPress={() => this.clickHandler2()}>
          <Thumbnail
          source={img2}
          style={styles.img}/>
          </Button></Col>
          <Col><Button style={styles.button1} onPress={() => this.clickHandler2()}>
          <Thumbnail
          source={img3}
          style={styles.img}/>
         </Button></Col>
        </Grid>
        <Text style={styles.text3}>เลือกชนิดของแอร์</Text>
      <View style={styles.view2}>
        <Button style={styles.button2} >
        <Text style={styles.text4}>Inverter</Text></Button>
        <Button style={styles.button2} >
       <Text style={styles.text5}>Non-Inverter</Text></Button>
        <Button style={styles.button2} >
        <Text style={styles.text6} >Inverter และ Non-Inverter</Text></Button>
      </View>
      <Text style={styles.text3}>เลือกช่วงราคาที่คุณต้องการ</Text>
      <Form style={styles.form1}>
            <Picker
              note
              mode="dropdown"
              style={styles.dropdown1}
            >
              <Picker.Item label="22,800 BTU" value="22,800" />
            </Picker>
      </Form>
          </View>
        </Content>
      </Container>
    );
  }
}
if (PixelRatio.get() <= 2) {
  FONT_BACK_LABEL = 14;
}

var styles = StyleSheet.create({
  view1: {
    flex:1,
    flexDirection: 'column',
    
  },
  back: {
  fontWeight: "bold",
  marginLeft: 29,
  },
  button1: {
    backgroundColor: '#ffffff',
    textShadowColor: '#000000',
    margin : 10,
    height: 100,
    textAlign: 'center',
    lineHeight: 100,
    flexDirection: 'column',
    
  },
  text2: {
    color: '#000000',
    textAlign: 'center',
    justifyContent: 'center',
  },
  text1: {
    fontWeight: "bold",
    
   },
   text3: {
    marginTop: 20,
    fontWeight: "bold",
   },
   button2: {
    textAlign: 'center',
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    borderWidth: 0.5,
    textShadowColor: '#000000',
    width: Dimensions.get('window').width,
    marginBottom: 5,
   },
  text4: {
    marginLeft: 150,
    color: "#000000",
    textAlign: "center",
  },
  text5: {
    marginLeft: 135,
    color: "#000000",
    textAlign: "center",
  },
  text6: {
    marginLeft: 95,
    color: "#000000",
    textAlign: "center",
  },
   view2: {
    flex:1,
    flexDirection: 'column',
    width: Dimensions.get('window').width,
   },
   img: {
     width: 100,
     height:40,
   },
   icon: {
     width: 90,
     height: 30,
   },
   home: {
     textAlign: 'right',
   },
   form1: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingLeft: 50,
    color: '#000000',
    paddingTop:15,
  },
  dropdown1: {
    textAlign: 'center',
    paddingLeft: 100,
    width: 250,
  },
});
