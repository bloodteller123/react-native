import React, {Component} from 'react';
import {View,
        Text,
        Button,
        ScrollView,
        StyleSheet
} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import OrderItem from '../component/OrderItem'


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

export default class OrderPage extends Component{
    state = {
        
        total:this.props.navigation.getParam('total'),
        //items: this.props.navigation.getParam('items')
        addedItems:[]
    }

   
    goBack = ()=>{
        this.props.navigation.navigate('MenuPage');
    }

    componentDidMount(){
        this.setState({
            addedItems:this.props.navigation.getParam('items')
        });
        console.log('MOUNTED');
    }

    render(){
        let {addedItems} = this.state
       // let items = this.props.navigation.getParam('items');
        //let {items} = this.state;
        let listen = this.props.navigation.getParam('listen');
        //let total = 
        let updateItems = this.props.navigation.getParam('updateItems');
        //let getTotal = this.props.navigation.getParam('getTotal');
        let updateQuantity = this.props.navigation.getParam('updateQuantity');

        

        const removeItem = (deletingItemId)=>{
           // let addedItems = [...items];
           let copy = [...addedItems]
            console.log(copy);
            const itemToDelete = copy.find((item)=>{return item.id== deletingItemId});
            console.log('now delete this object: ');
            console.log(itemToDelete);
            //copy.splice(itemToDelete,1);
            copy = copy.filter(item=>item!=itemToDelete);
            console.log('after splicing');
            console.log(copy); // 
            let num = -Math.abs(itemToDelete.quantity);

           // updateQuantity(deletingItemId,num); ???????????
            //updateItems(copy);
            console.log('double check');
            console.log(copy); // 
           // this.setState({items:[...addedItems]});
            console.log('This is from order Page, with deleted Id:'+deletingItemId);
          //  console.log(items);
          this.setState({
            addedItems:[...copy]
          },()=>{
              console.log(addedItems);
              console.log('CHECK');
            });
        }

        const updateTotal = (val)=>{
            this.setState(prevS=>{
                console.log("Prestate total is: "+prevS.total);
                return{
                    total:prevS.total+val
                }
            });
        }

        return(
            <View>
                <ScrollView>
                    { // holy shit if filter is removed this will not work
                        addedItems.filter(item=>item.quantity>0).map((item,index)=>{
                            console.log("items to be rendered: ");
                            console.log(item);
                            return <OrderItem 
                                        total={this.state.total}
                                        listen={listen}
                                        remove={removeItem} 
                                        updateTotal = {updateTotal}
                                        updateQuantity = {updateQuantity}
                                        key={item.id} 
                                        goBack = {this.goBack}
                                        {...item}
                                    />
                        })
                    }
                </ScrollView>
                <View>
                    <Text>
                        Total: ${Number(( this.state.total).toFixed(3))}
                    </Text>
                </View>
                <View>
                    {this.state.total>0?
                        <Button
                        title='Checkout'
                        />
                        :
                        null
                    }
                </View>
            </View>
        );
    }
}