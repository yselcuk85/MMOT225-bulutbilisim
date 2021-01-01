import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class Zomato extends Component {
    constructor(props) {
        super(props);
        this.state = {
            restaurant: null
       
        }
        this.state = {
          
            dailymenu: null
        }
    }

    componentDidMount() {

        fetch("https://developers.zomato.com/api/v2.1/restaurant?res_id=16692140"
            , {
                method: 'GET',
                headers: {
                    "user-key": "0fadfd14df663287055ee512eb388be7"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ restaurant: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });

            fetch("https://developers.zomato.com/api/v2.1/dailymenu?res_id=16692140"
            , {
                method: 'GET',
                headers: {
                    "user-key": "0fadfd14df663287055ee512eb388be7"
                }
            })
            .then(r => {
                return r.json();
            })
            .then(res => {
                this.setState({ dailymenu: res });
            }).catch(e => {
                console.warn("error zomato : ", e);
            });
         
    }

    render() {

        

        if (!this.state.restaurant) {
            return null;
        }
        if (!this.state.dailymenu) {
            return null;
        }
        return (
            <View>
            <Text>Restaurant : {this.state.restaurant.name}</Text>
            
            <Text>Adres : {this.state.restaurant.location.address}</Text>
            <Text>Mutfak : {this.state.restaurant.cuisines}</Text>
            <Text>Pahalılık derecesi : {this.state.restaurant.price_range}</Text>

            <Text>Para birimi : {this.state.restaurant.currency}</Text>
              
            <Text>Günlük menü : {this.state.dailymenu.message}</Text>

            </View>
        );
    }
}