import React, {Component} from 'react';
import {View, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import landingPage from './src/screens/landingPage';
import login from './src/screens/login';
import regist from './src/screens/regist';
import regist2 from './src/screens/regist2';
import regist3 from './src/screens/regist3';
import homePage from './src/screens/home';
import forgotPassword from './src/screens/forgotPassword';
import bso from './src/screens/bso';
import cabLab from './src/screens/cabLab';
import kepanitiaan from './src/screens/kepanitiaan';
import pageHooligans from './src/screens/pageHooligans';
import pageTEM from './src/screens/pageTEM';
import pageTesla from './src/screens/pageTesla';
import pageBindes from './src/screens/pageBindes';
import pageGathrak from './src/screens/pageGathrak';
import pageBM from './src/screens/pageBM';
import pageKomten from './src/screens/pageKomten';
import pageTosca from './src/screens/pageTosca';
import pageTranstel from './src/screens/pageTranstel';
import pageSKO from './src/screens/pageSKO';
import satcomRadar from './src/screens/satcomRadar';
import wirelessCom from './src/screens/wirelessCom';
import pageNCM from './src/screens/pageNCM';
import pageCPS from './src/screens/pageCPS';
import pageAdaptive from './src/screens/pageAdaptive';
import pageDastran from './src/screens/pageDastran';
import pageAntena from './src/screens/pageAntena';
import pageNanosat from './src/screens/pageNanosat';
import pageMicrowave from './src/screens/pageMicrowave';
import pageSiskom from './src/screens/pageSiskom';
import pageElkom from './src/screens/pageElkom';
import pageMobcom from './src/screens/pageMobcom';
import pageMbc from './src/screens/pageMBC';
import pagePsi from './src/screens/pagePsi';
import pageImv from './src/screens/pageImv';
import pageDsp from './src/screens/pageDsp';

const Stack = createNativeStackNavigator();
function telcoAppv2() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Landing" component={landingPage} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="Regist" component={regist} />
        <Stack.Screen name="Regist2" component={regist2} />
        <Stack.Screen name="Regist3" component={regist3} />
        <Stack.Screen name="Home" component={homePage} />
        <Stack.Screen name="lupaPW" component={forgotPassword} />
        <Stack.Screen name="BSO" component={bso} />
        <Stack.Screen name="cabLab" component={cabLab} />
        <Stack.Screen name="Kepanitiaan" component={kepanitiaan} />
        <Stack.Screen name="Hooligans" component={pageHooligans} />
        <Stack.Screen name="TEM" component={pageTEM} />
        <Stack.Screen name="Tesla" component={pageTesla} />
        <Stack.Screen name="Bindes" component={pageBindes} />
        <Stack.Screen name="Gathrak" component={pageGathrak} />
        <Stack.Screen name="BM" component={pageBM} />
        <Stack.Screen name="Komten" component={pageKomten} />
        <Stack.Screen name="Tosca" component={pageTosca} />
        <Stack.Screen name="Transtel" component={pageTranstel} />
        <Stack.Screen name="SKO" component={pageSKO} />
        <Stack.Screen name="Satcomradar" component={satcomRadar} />
        <Stack.Screen name="Wicom" component={wirelessCom} />
        <Stack.Screen name="NCM" component={pageNCM} />
        <Stack.Screen name="CPS" component={pageCPS} />
        <Stack.Screen name="Adaptive" component={pageAdaptive} />
        <Stack.Screen name="Dastran" component={pageDastran} />
        <Stack.Screen name="Antena" component={pageAntena} />
        <Stack.Screen name="Microwave" component={pageMicrowave} />
        <Stack.Screen name="Nanosat" component={pageNanosat} />
        <Stack.Screen name="Siskom" component={pageSiskom} />
        <Stack.Screen name="Elkom" component={pageElkom} />
        <Stack.Screen name="Mobcom" component={pageMobcom} />
        <Stack.Screen name="MBC" component={pageMbc} />
        <Stack.Screen name="PSI" component={pagePsi} />
        <Stack.Screen name="IMV" component={pageImv} />
        <Stack.Screen name="DSP" component={pageDsp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default telcoAppv2;
