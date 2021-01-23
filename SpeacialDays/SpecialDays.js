import React, { Component } from 'react';
import { ActivityIndicator, FlatList, Text, View,Image,ImageBackground } from 'react-native';

export default class SpecialDays extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      isLoading: true
    };
  }

  componentDidMount() {
    fetch('https://date.nager.at/api/v2/publicholidays/2020/US')
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { data, isLoading } = this.state;

    return (

        
       
      <View style={{ flex: 1, padding: 24 , backgroundColor:"yellow"}}>
          
        {isLoading ? <ActivityIndicator/> : (
          <FlatList
         
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text style={{backgroundColor: "yellow"}}>{"\n"}{"\n"}TARİH:{item.date} {"\n"}{"\n"}GÜN İSMİ:{item.name}
              </Text>
             
            )}
          />
        )}
      </View>
  
    );
  }
};