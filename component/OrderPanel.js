import React, {Component} from 'react';
import {View,
        Button,
        Text
            } from 'react-native';


export default class OrderPanel extends Component{
    render(){
        return(
            
            <View style={{flexDirection:'row'}}>
                <View style={{marginLeft:130}}>
                    <Button
                        title='View Cart'
                        onPress={this.props.navigate}
                    />
                </View>
                <Text style={{marginLeft:30,fontWeight:'500',fontSize:30}}>${this.props.value}</Text>
            </View>
        );
    }
}
