import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Platform,
    Dimensions,
    Image,
    Button,
    StyleSheet
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select'; 
import Icon from 'react-native-vector-icons/Ionicons';

import FoodType from '../component/FoodType'
import CollectionType from '../component/CollectionType';

const locations = [
    {
      label: 'Ottawa',
      value: 'Ottawa',
    },
    {
      label: 'Toronto',
      value: 'Toronto',
    },
    {
      label: 'Montreal',
      value: 'Montreal',
    },
    {
        label: 'Vancouver',
        value: 'Vancouver',
      }
  ];
const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default class Explore extends Component{

    constructor(props){
        super(props);
        this.state={
            location:"Ottawa"
        }
    }

    componentWillMount(){
        this.startHeaderHeight = 10;
        if(Platform.OS == "android"){
            this.startHeaderHeight = 50 + StatusBar.currentHeight;
        }
    }

    navigateToRestaurant = ()=>{
        this.props.navigation.navigate('RestaurantList');
    }

    render(){
        const styles = StyleSheet.create({
            containerStyle: {
              borderWidth: 1,
              borderRadius: 2,
              borderColor: '#ddd',
              borderBottomWidth: 0,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.8,
              shadowRadius: 2,
              elevation: 1,
              marginLeft: 5,
              marginRight: 5,
              marginTop: 10,
            }
          })

        const placeholder = {
            label: 'Select a sport...',
            value: null,
            color: '#9EA0A4',
          };
          
        return (
            <SafeAreaView style={{flex:1}}>
                <View style={{flex:1}}>
                    <View style={{height: this.startHeaderHeight,
                            borderBottomWidth:1
                        }}> 
                    </View>
                    
                    <ScrollView scrollEventThrottle = {16}>
                        <View>
                            <Text>Please select your city</Text>
                            <RNPickerSelect
                                placeholder={placeholder}
                                items={locations}
                                onValueChange={value => {
                                    this.setState({
                                    location: value,
                                    });
                                }}
                                style={{
                                    ...pickerSelectStyles,
                                    iconContainer: {
                                    top: 10,
                                    right: 12,
                                    },
                                }}
                                value={this.state.location}
                                useNativeAndroidPickerStyle={false}
                                textInputProps={{ underlineColor: 'yellow' }}
                                Icon={() => {
                                    return <Icon name="ios-arrow-down" size={24} color="gray" />;
                                }}
                            />
                        </View>
                        <View style={{flex:1, paddingTop:15}}>
                            <Text style={{fontSize:25,fontWeight:'600'}}>
                                Quick Spot Your Food
                            </Text>
                            <Text style={{fontSize:10,fontWeight:'300',paddingLeft:10}}>
                                Discover food by their types
                            </Text>
                            <View style={{ height:130,marginTop:15}}>
                                <ScrollView
                                    horizontal = {true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <FoodType imageUrl = {require('../assets/breakfast.png')}
                                            description = "Breakfast"
                                            onPress = {this.navigateToRestaurant}
                                    />
                                    <FoodType imageUrl = {require('../assets/lunch.png')}
                                            description = "Lunch"
                                            onPress = {this.navigateToRestaurant}
                                            
                                    />
                                    <FoodType imageUrl = {require('../assets/dinner.png')}
                                            description = "Dinner"
                                            onPress = {this.navigateToRestaurant}
                                    />
                                    <FoodType imageUrl = {require('../assets/take_out.jpeg')}
                                            description = "Take-out"
                                            onPress = {this.navigateToRestaurant}
                                    />
                                    <FoodType imageUrl = {require('../assets/delivery.png')}
                                            description = "Delivery"
                                            onPress = {this.navigateToRestaurant}
                                    />
                                    <FoodType imageUrl = {require('../assets/drinks.png')}
                                            description = "Drinks"
                                            onPress = {this.navigateToRestaurant}
                                    />
                                    <FoodType imageUrl = {require('../assets/dessert.png')}
                                            description = "Desserts"
                                            onPress = {this.navigateToRestaurant}
                                    />
                                </ScrollView>
                            </View>
                        </View>
                        <View style={{marginTop:30}}>
                            <Text style={{fontSize:25,fontWeight:'600'}}>
                                Collections
                            </Text>
                            <Text style={{fontSize:10,fontWeight:'300',paddingLeft:10}}>
                                Explore curated lists of top restaurants, cafes, pubs, and bars in Ottawa, based on trends
                            </Text>

                            <CollectionType
                                imageUrl={require("../assets/collection1.jpg")}
                                description = "Classic maki-style rolls, sashimi or nigiri sushi, hit up these spots for your favourite Japanese snack"
                                onPress = {this.navigateToRestaurant}
                            />
                            <CollectionType
                                imageUrl={require("../assets/collection2.jpg")}
                                description = "From cookies and doughnuts to ice cream and cakes, knock yourself out with these classic and creative desserts"
                                onPress = {this.navigateToRestaurant}
                            />
                            <CollectionType
                                imageUrl={require("../assets/collection3.jpg")}
                                description = "The best restaurants in town for a complete fine-dining experience"
                                onPress = {this.navigateToRestaurant}
                            />
                        </View>
                    </ScrollView>
                    <Button
                        title="Go to Restaurant"
                        onPress={() => this.props.navigation.navigate('RestaurantList')}
                    />
                </View>
            </SafeAreaView>
        );
    }
}