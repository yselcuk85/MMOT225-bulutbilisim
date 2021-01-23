/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import SpecialDays from "./SpecialDays"
import Giris from "./Giris"
const App: () => React$Node = () => {
  return (
  <View style={{flex:1}}>
    <Giris/>
    <View style={{flex:1}}>

    <SpecialDays/>
    </View>
  </View>
      
  );
};

const styles = StyleSheet.create({
 
  
});

export default App;
