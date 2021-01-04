import React from 'react';
import { Scene, Stack, Router } from 'react-native-router-flux';


import LoginMenu from './scene/Login/LoginMenu';
import RegisterMenu from './scene/Login/RegisterMenu';
import RegisterOTP from './scene/Login/RegisterOTP';
import RegisterFinished from './scene/Login/RegisterFinished';
import MainScene from './scene/MainScene';
import ChooseAir from './scene/ChooseAir';
import Product from './scene/Product'
import ProductDetail from './scene/ProductDetail'
import MainCalculateBtu from './scene/Btu'
import SelectType from './scene/SelectType'
import Conclude from './scene/Conclude'
import ChooseLocationForSend from './scene/ChooseLocationForSend'
import CartScene from './scene/CartScene'
import SearchProduct from './scene/SearchProduct'
import ChooseShop from './scene/ChooseShop'
import ShopInfo from './scene/ShopInfo'
import Payment from './scene/Payment'
import CompareProduct from './scene/CompareProduct'
import SpecifyRoom from './scene/Btu/SpecifyRoom'
import RoomInfo from './scene/Btu/RoomInfo'
import SearchProductMain from './scene/SearchProcutMain'
//promotion  
import MostEconomical  from './scene/Promotion/MostEconomical'
import SearchPromotion from './scene/Promotion/Search'
import MainPromotion from './scene/Promotion/Main'
import Promotion from './scene/Promotion/Promotion'
import Cheapest from './scene/Promotion/Cheapest'
import Clearance from './scene/Promotion/Clearance'
//project 
import StepOne from './scene/Project/StepOne'
import StepTwo from './scene/Project/StepTwo'
import StepThree from './scene/Project/StepThree'
import ProjectFinish from './scene/Project/Finish'
import Estimate from './scene/Project/Estimate'
import ProjectConclude from './scene/Project/Conclude'
// setup only
import ChooseBTU from './scene/BuyAndSetup/ChooseBTU'
import BuyAndSetupSearchProduct from './scene/BuyAndSetup/BuyAndSetupSearchProduct'
import ChooseTypeAir from './scene/BuyAndSetup/ChooseTypeAir'
import ConcludeSetupOnly from './scene/BuyAndSetup/Conclude'
const RouterPage = () => {
  return (
    
    <Router>
      <Stack key="root">
        <Scene initial key="login"   component={LoginMenu}        title="Login"   hideNavBar />
        <Scene key="register"        component={RegisterMenu}     title="Register" hideNavBar/>
        <Scene key="registerotp"     component={RegisterOTP}      title="Register OTP" hideNavBar />
        <Scene key="registerfinish"  component={RegisterFinished} title="Register Finish" hideNavBar />
        <Scene key="MainScene"       component={MainScene}        title="Air Dashboard" hideNavBar/>
        <Scene key="ChooseAir"       component={ChooseAir}        title="Choose Air" hideNavBar />
        <Scene key="Product"         component={Product}          title="Product" hideNavBar />
        <Scene key="ProductDetail"   component={ProductDetail}    title="Product Detail" hideNavBar />
        <Scene key="CalculateBtu"    component={MainCalculateBtu} title="Calculate BTU" hideNavBar />
        <Scene key="SelectType"      component={SelectType}       title="SelectType" hideNavBar />
        <Scene key="Conclude"        component={Conclude}         title="Conclude" hideNavBar />
        <Scene key="CartScene"       component={CartScene}        title="Cart" hideNavBar />
        <Scene key="SearchProduct"   component={SearchProduct}    title="SearchProduct" hideNavBar />
        <Scene key="ChooseShop"      component={ChooseShop}       title="ChooseShop" hideNavBar />
        <Scene key="Payment"         component={Payment}          title="Payment" hideNavBar />
        <Scene key="ShopInfo"        component={ShopInfo}         title="ShopInfo" hideNavBar />
        <Scene key="CompareProduct"  component={CompareProduct}   title="CompareProduct" hideNavBar />
        <Scene key="SpecifyRoom"     component={SpecifyRoom}      title="SpecifyRoom" hideNavBar />
        <Scene key="RoomInfo"        component={RoomInfo}         title="RoomInfo" hideNavBar />
        <Scene key="MostEconomical"            component={MostEconomical}         title="MostEconomical" hideNavBar />
        <Scene key="SearchPromotion"           component={SearchPromotion}         title="SearchPromotion" hideNavBar />
        <Scene key="MainPromotion"             component={MainPromotion}         title="MainPromotion" hideNavBar />
        <Scene key="Promotion"                 component={Promotion}         title="Promotion" hideNavBar />
        <Scene key="Cheapest"                  component={Cheapest}         title="Cheapest" hideNavBar />
        <Scene key="Clearance"                 component={Clearance}         title="Clearance" hideNavBar />

        <Scene key="StepOne"                   component={StepOne}         title="StepOne" hideNavBar />
        <Scene key="StepTwo"                   component={StepTwo}         title="StepTwo" hideNavBar />
        <Scene key="StepThree"                 component={StepThree}       title="StepThree" hideNavBar />
        <Scene key="ProjectFinish"             component={ProjectFinish}   title="ProjectFinish" hideNavBar />
        <Scene key="Estimate"                  component={Estimate}   title="Estimate" hideNavBar />
        <Scene key="ProjectConclude"           component={ProjectConclude}   title="ProjectConclude" hideNavBar />


        <Scene key="ConcludeSetupOnly"           component={ConcludeSetupOnly}   title="ConcludeSetupOnly" hideNavBar />





        

        



        



        <Scene key="SearchProductMain"          component={SearchProductMain}        title="SearchProductMain" hideNavBar />
        <Scene key="ChooseLocationForSend"      component={ChooseLocationForSend}         title="Location For send" hideNavBar />
        <Scene key="ChooseBTU"                  component={ChooseBTU}      title="ChooseBTU" hideNavBar />
        <Scene key="BuyAndSetupSearchProduct"   component={BuyAndSetupSearchProduct}      title="BuyAndSetupSearchProduct" hideNavBar />
        <Scene key="ChooseTypeAir"   component={ChooseTypeAir}    title="ChooseTypeAir" hideNavBar />
        
      
      </Stack>
    </Router>
  );
};

export default RouterPage;