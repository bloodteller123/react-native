import React, {Component} from 'react';
import {View,
        Buttom,
        Text,
        ScrollView,
        SafeAreaView,
        Image,
        TouchableWithoutFeedback,
        StyleSheet
            } from'react-native';
            
import Icon from 'react-native-vector-icons/Ionicons';



const styles = StyleSheet.create({
    restaurant:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,

        //backgroundColor: "#ffffff",
        borderRadius: 10,
        marginTop:15
    },
    horizontalLine:{
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    box:{
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,

        backgroundColor: "#ffffff",
        borderRadius: 0,
        flexDirection: 'row',
        marginLeft:30,
        marginTop:5
    }

});

export default class CustomRestaurant extends Component{

    render(){
        const {resName,imageUrl,foodType,location,cuisineType,cost,hours} = this.props;
        
        return(
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={styles.restaurant}>
                    <View> 
                        <View>
                            <Image
                                style={{width:320}}
                                source = {imageUrl}
                            />
                            <View>
                                <Text>
                                {resName}
                                </Text>
                                <Text>
                                {location}
                                </Text>
                            </View>
                            <View style={styles.horizontalLine}></View>
                            <View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text> CUISINES:  </Text> 
                                    <Text>{cuisineType}</Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text> COST FOR TWO:  </Text> 
                                    <Text> CA ${cost} </Text>
                                </View>
                                <View style={{flexDirection: 'row'}}>
                                    <Text> HOURS: </Text> 
                                    <Text>{hours}</Text>
                                </View>
                            </View>
                            <View style={styles.horizontalLine}></View>
                            <View style={{flexDirection: 'row'}}>
                                <View style={styles.box}>
                                    <Text>4.6 </Text>
                                    <Icon name="ios-star" size={15} />
                                    <Text>(500+)</Text>
                                </View>
                                <View style={styles.box}>
                                    <Text>{foodType} </Text>
                                </View>
                                <View style={styles.box}>
                                    <Text>Hot </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}