import React,{ Component } from 'react';
import {View,
        Text,
        Button,
        Image,
        Dimensions,
        TouchableWithoutFeedback,
        StyleSheet
            } from 'react-native' 

const {height, width} = Dimensions.get('window');
export default class CollectionType extends Component{
    render(){
        return(
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <View style={{width:width-20, height:250,marginTop:10,paddingLeft:10}}>
                <View style={{flex:2}}>
                    <Image
                        style={{flex:1,height:null,width:null,resizeMode:'cover',
                            borderRadius:5,borderWidth:1}}
                        source = {this.props.imageUrl}
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