import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class NewsItem extends React.Component{

  render (){

    const Konu= this.props.type;
    let bgcolor = 'white';

    if (Konu=='spor'){
      bgcolor = '#ffa500';
    

    } else if (Konu=='saglik'){
      bgcolor= '#acc0b7';

    }

    const titleVal= this.props.title;
    const descriptionVal= this.props.description;

    return(
      <View style={{backgroundColor:bgcolor}}>
        <Text style={styles.baslik}>{titleVal}</Text>
        <Text style={styles.aciklama}>{descriptionVal}</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  baslik:{
    fontSize: 20,
    fontWeight: "bold",
    padding:70
  },
  aciklama:{
    fontSize: 14,
    fontWeight: "bold",
    padding:10
  }
});
