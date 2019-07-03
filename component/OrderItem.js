import React,{Component} from 'react';
import {View,
        Button,
        Text,
        StyleSheet
            } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { thisTypeAnnotation } from '@babel/types';


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
            
export default class OrderItem extends Component{
    state = {
        value:this.props.quantity,
        isZero:false
    }

    checkZero = ()=>{
        if(this.state.value <= 0 ){
            this.setState({
                isZero:true
            });
            console.log('now should be removing id: '+this.props.id);
            this.props.remove(this.props.id);
            
            console.log('done');
            console.log(this.props);
            //this.props.goBack();
        }
    }

    handleChange = (val)=>{
        this.checkZero();
        this.props.listen(val);
        this.props.updateTotal(val);
        if(val<0){
            console.log('Uha');
            if(this.props.quantity>0){
                this.props.updateQuantity(this.props.id,-1);
            }
                
        }
        else{
            this.props.updateQuantity(this.props.id,1);
        }
    }

    removeItem = ()=>{
        console.log("Removing id: " + this.props.id);
        this.props.remove(this.props.id);
        console.log("Removing total: "+(-Math.abs(this.props.price * this.state.value)));
        this.props.listen(-Math.abs(this.props.price * this.state.value));
        this.props.updateTotal(-Math.abs(this.props.price * this.state.value));
        this.props.updateQuantity(this.props.id,-Math.abs(this.state.value));
    }

    render(){
        return(
            <View>
                {!this.state.isZero? 
                    <View>
                        <View style={styles.restaurant}>
                            <View style={{flexDirection:'row',margin:10}}>
                                <View>
                                    <Icon name='ios-close-circle-outline' size={20} onPress={this.removeItem}/>
                                </View>
                                <View style={{marginLeft:30}}>
                                    <Icon name="ios-add-circle" size={30} onPress={()=>this.setState(prevS=>{
                                        console.log("before added: "+prevS.value);
                                        return {
                                            value:prevS.value+1
                                        }
                                    },()=>this.handleChange(this.props.price))}/>
                                </View>
                                <View style={{marginLeft:30}}>
                                    <Text>{this.props.name}</Text>
                                </View>
                                <View style={{marginLeft:30}}>
                                    <Icon name='ios-remove-circle' size={30} onPress={()=>this.setState(prevS=>{
                                        return {
                                            value:prevS.value-1
                                        }
                                    },()=>this.handleChange(-Math.abs(this.props.price)))}/>
                                </View>
                            </View>
                            <View>
                                <Text>Price: {this.props.price}</Text>
                                <Text>Quantity: {this.state.value
                                                //this.props.quantity
                                        }</Text>
                            </View>
                        </View>
                        <View style={styles.horizontalLine}></View>
                    </View>
                :
                    null
                }       
            </View>
        );
    }
}
