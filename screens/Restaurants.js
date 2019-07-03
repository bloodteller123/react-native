import React, {Component} from 'react';
import {View,
        Text,
        Button,
        //ScrollView,
        Alert,
        StyleSheet
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

import CustomRestaurant from '../component/CustomRestaurant';


const resInfo = [
    {
        resName: 'Eclipse Asian Cuisine',
        imageUrl: require('../assets/food/sushi.jpeg'),
        foodType: 'CASUAL DINING',
        location: '376 Rideau Street, Ottawa K1N 5Y6',
        cuisineType:'Japan, Fusion',
        cost:'40',
        hours: '7am – 7pm (Mon-Fri),4pm – 9pm (Sat-Sun)'
    },
    {
        resName: 'Bite Burger House',
        imageUrl: require('../assets/food/burger.jpeg'),
        foodType: 'CASUAL DINING',
        location: '181 McArthur Avenue, Ottawa K1L 6P8',
        cuisineType:'Burgers',
        cost:'32',
        hours: '11am – 7pm (Mon-Fri),2pm – 6pm (Sat-Sun)'
    },
    {
        resName: 'Misto Fine Food Emporium',
        imageUrl: require('../assets/food/sandwich.jpeg'),
        foodType: 'BAKERY,CAFÉ',
        location: '1365 Wellington Street, Ottawa K1Y 3B8',
        cuisineType:'Sandwich, Bakery',
        cost:'40',
        hours: '7am – 10pm (Mon-Fri),9am – 4pm (Sat-Sun))'
    },
    {
        resName: 'SRoyal Treasure',
        imageUrl: require('../assets/food/chinesefood.jpeg'),
        foodType: 'CASUAL DINING',
        location: '774 Somerset Street West, Ottawa K1R 6R1',
        cuisineType:'Chinese, Japanese, Thai',
        cost:'55',
        hours: '9am – 10pm (Mon-Fri),10am – 4pm (Sat-Sun)'
    },
    {
        resName: 'Stella Luna Gelato Café',
        imageUrl: require('../assets/food/desserts.jpeg'),
        foodType: 'DESERTS POLAR',
        location: '136 Saint Patrick Street, Ottawa K1N 5J9',
        cuisineType:'Ice Cream, Desserts, Cafe',
        cost:'29',
        hours: '7am – 7pm (Mon-Fri),8am – 4pm (Sat-Sun)'
    },
];

export default class Restaurants extends Component{

    goToMenu = ()=> {
        this.props.navigation.navigate('MenuPage');
    }

    render(){
        return(
            <View style={{ height:600, justifyContent: 'center', alignItems: 'center' }}>
            <ScrollView style={{flex:1}}>
                {
                    resInfo.map((info,index) =>{
                        return <CustomRestaurant  onPress={this.goToMenu} key = {info.resName }{...info}/>
                    })
                }
            </ScrollView>
        </View>
        );
    }
}