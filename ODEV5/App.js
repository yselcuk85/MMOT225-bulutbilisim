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

import NewsItem from './NewsItem.js';

const App: () => React$Node = () => {
  return (
      <SafeAreaView>
        <View><Text style={styles.bas}> Haberler </Text></View>
        <ScrollView>
        <NewsItem type='spor' title='Beşiktaş Fenerbahçe Beşiktaş fark yarattı' description='Beşiktaş 4-Fenerbahçe 3'/>
        <NewsItem type='saglik' title='Doktorlar uyarıyor' description='Virüs mutasyona uğradı!'/>
        <NewsItem type='spor' title='Ronaldo Yükseliyor' description=' Karantinadan çıkan Ronaldo gollerine  devam ediyor'/>
        <NewsItem type='saglik' title='Doktorlar Ölüyor' description='Virüsten etkilenen bir çok doktor hayatını kaybetti!.'/>
        <NewsItem type='spor' title='Maradona öldü' description='Futbol efsanesi Diego Maradona kalp krizi sonrası yaşama veda etti.'/>
        <NewsItem type='saglik' title='Ebola virüsü' description='İnsanlarda bilinen ilk Ebola salgını, 1976’da Sudan Cumhuriyeti ve Demokratik Kongo Cumhuriyeti’nde eş zamanlı olarak ortaya çıkmıştır.'/>
        <NewsItem type='spor' title='Hattrick' description='Milan lille maçında ki milli futbolcumuz Yusuf Yazıcı  Milan karşısında Hattrick Yaptı.'/>
        <NewsItem type='saglik' title='Kara Vebas' description='Kötü şöhretli gaga maskeleri olan Veba Doktorları, Kara Ölüm ile yaygın olarak ilişkilidir. Bununla birlikte, bu kostümler çok daha az yaygındı ve daha sonra 17. yüzyılda ortaya çıktı..'/>
        </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bas:{
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;
