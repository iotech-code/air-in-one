/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StatusBar,
  StyleSheet,
  TextInput,
  Keyboard,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import {
  Container,
  Content,
  Header,
  Title,
  Body,
  Left,
  Right,
  Text,
  Button,
  Toast,
  Item,
  Thumbnail,
  Row,
  CheckBox,
  Col,
} from 'native-base';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign';
import Spinner from 'react-native-loading-spinner-overlay';

const RegisterMenu = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });

  return (
    <>
      <Container>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        <Header style={{backgroundColor: 'white'}}>
          <Left style={{flex: 1}} />
          <Body style={{flex: 0}}>
            <Title style={styles.topic_header}>Login page</Title>
          </Body>
          <Right style={{flex: 1}}>
            <Row style={{justifyContent: 'flex-end'}}>
              <Text style={{marginTop: 8}}>Help</Text>
              <Icon
                style={styles.headerIcon}
                name="ios-question"
                color="#000"
              />
            </Row>
          </Right>
        </Header>
        <ScrollView>
          <Content contentContainerStyle={styles.content_Style}>
            <StatusBar hidden={true} />
            <Thumbnail
              style={styles.img_Background}
              source={{
                uri:
                  'https://www.solidbackgrounds.com/images/1920x1200/1920x1200-light-blue-solid-color-background.jpg',
              }}
            />
            <Item style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="user" color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="lightgray"
                underlineColorAndroid="transparent"
              />
            </Item>
            <Item style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="mail" color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="lightgray"
                underlineColorAndroid="transparent"
              />
            </Item>
            <Item style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="mobile1" color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Phone"
                placeholderTextColor="lightgray"
                underlineColorAndroid="transparent"
              />
            </Item>
            <Item style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="lock" color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="lightgray"
                underlineColorAndroid="transparent"
              />
            </Item>
            <Item style={styles.searchSection}>
              <Icon style={styles.searchIcon} name="lock" color="#000" />
              <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                placeholderTextColor="lightgray"
                underlineColorAndroid="transparent"
              />
            </Item>
            <Col>
              <Row style={styles.checkboxSection}>
                <CheckBox checked={true} />
                <Left>
                  <Text style={{marginTop: -2, marginLeft: 30}}>
                    By signing up, you agree to out
                  </Text>
                </Left>
              </Row>
            </Col>
            <Col>
              <Row style={styles.checkboxSection}>
                <TouchableHighlight
                  activeOpacity={0.6}
                  underlayColor="#DDDDDD00">
                  <Text style={styles.service_text}>
                    Service and Privacy Policy
                  </Text>
                </TouchableHighlight>
              </Row>
            </Col>

            <Button
              style={styles.button_createAccount}
              onPress={() => Actions.pop()}>
              <Text uppercase={false} style={styles.text_createAccount}>
                Create Account
              </Text>
            </Button>
          </Content>
        </ScrollView>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: '#FFF',
  },
  content_Style: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  img_Background: {
    height: 150,
    width: '100%',
    borderRadius: 0,
    opacity: 0.1,
  },
  searchSection: {
    borderColor: '#9BD2F7',
    borderWidth: 2,
    borderRadius: 15,
    width: '80%',
    marginTop: 20,
  },
  checkboxSection: {
    borderWidth: 0,
    width: '80%',
    marginTop: 20,
  },
  searchIcon: {
    padding: 10,
    color: 'lightgray',
    fontSize: 24,
  },
  headerIcon: {
    padding: 10,
    color: 'black',
    fontSize: 18,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    backgroundColor: 'transparent',
    color: 'black',
    borderColor: '#9BD2F7',
    borderRadius: 25,
    fontSize: 15,
  },
  topic_header: {
    color: '#FFF',
    margin: 12,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  topic: {
    color: '#9BD2F7',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  service_text: {
    width: 300,
    textAlign: 'center',
    marginTop: 0,
    fontSize: 17,
    fontWeight: 'bold',
    color: '#0040cf',
    opacity: 0.7,
  },
  button_createAccount: {
    width: '80%',
    marginTop: 30,
    flexDirection: 'row',
    backgroundColor: '#9BD2F7',
    borderRadius: 10,
    height: 55,
    marginBottom: 30,
  },
  text_createAccount: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    fontSize: 17,
    fontWeight: 'bold',
    fontStyle: 'normal',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'stretch',
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    opacity: 0.7,
  },
});

export default RegisterMenu;
