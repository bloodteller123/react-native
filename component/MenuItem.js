import React, {Component} from 'react';
import {View,
        Button,
        Text,
        Image,
        StyleSheet    
            } from 'react-native';


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



export default class MenuItem extends Component {

    handlePress = ()=>{
        this.props.onPress(this.props);
    }

    render(){

        const {id,name,imageUrl,description,price,onPress} = this.props;

        return(
            <View>
                <View >
                    <View style={styles.restaurant}>
                        <View> 
                            <View style={{flexDirection:'row'}}>
                                
                                <View style={{flex:1}}>
                                    <Text style={{fontWeight:'600',fontSize:20}}>{name}</Text> 
                                    <Text style={{paddingLeft:5,marginTop:5}}>$ {price}</Text>
                                    <Text style={{paddingLeft:5,marginTop:15}}>{description}</Text>
                                </View>
                                <View style={{flex:2}} >
                                    <Image
                                        style={{width:230,resizeMode: 'contain'}}
                                        source = {imageUrl}
                                    />
                                </View>
                            </View>
                            <View>
                                <Button
                                    title="Add to Cart"
                                    style={styles.box}
                                    onPress = {this.handlePress}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.horizontalLine}></View>
                </View>
            </View>
        );
    }
}