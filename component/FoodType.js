import React,{ Component } from 'react';
import {View,
        Text,
        Button,
        Image,
        TouchableWithoutFeedback,
        StyleSheet
            } from 'react-native' 

export default class FoodType extends Component {

    render(){
        return(
            <TouchableWithoutFeedback onPress={this.props.onPress}> 
                <View style={{height:160,width:130,marginLeft:20,
                    borderWidth: 0.5,borderColor:'#dddddd'
                }}>
                    <View style={{flex:2}}>
                        <Image source={this.props.imageUrl}
                            style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                    />
                    </View>
                    <View style={{flex:1,paddingLeft:30,paddingTop:10}}>
                        <Text>
                            {this.props.description}
                        </Text>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        );
    };
}