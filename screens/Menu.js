import React, { Component } from 'react';
import {
  Animated,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

import Styles from '../component/Styles';
import MenuItem from '../component/MenuItem';
import OrderPanel from '../component/OrderPanel';


const HEADER_MAX_HEIGHT = 200;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 60 : 73;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollY: new Animated.Value(
        // iOS has negative initial scroll value because content inset...
        Platform.OS === 'ios' ? -HEADER_MAX_HEIGHT : 0,
      ),
      refreshing: false,
      allPopularFood:[
          {
              id:1,
              name:'Spicy Salmon Maki',
              imageUrl:require('../assets/resFood/22.jpg'),
              description:'Salmon, cucumber and spicy mayo. Spicy',
              price:3.56,
              quantity:0
          },
          {
            id:2,
            name:'Kimchi Fried Rice_',
            imageUrl:require('../assets/resFood/11.jpeg'),
            description:'Kimchi, pork, vegetable, and egg on top',
            price:13.35,
            quantity:0
        },
        {
            id:3,
            name:'Spicy Tuna Maki___',
            imageUrl:require('../assets/resFood/33.jpg'),
            description:'Tuna, cucumber and spicy mayo. Spicy',
            price:6.64,
            quantity:0
        },
        {
            id:4,
            name:'Crispy Chicken___',
            imageUrl:require('../assets/resFood/44.jpg'),
            description:'Deep fried spicy battered popcorn chicken',
            price:9.23,
            quantity:0
        },
        {
            id:5,
            name:'Idaho Maki________',
            imageUrl:require('../assets/resFood/55.jpeg'),
            description:'Sweet potato tempura and teriyaki sauce. Vegetarian',
            price:6.72,
            quantity:0
        },
        {
            id:6,
            name:'Spicy Pork Bulgogi',
            imageUrl:require('../assets/resFood/66.jpeg'),
            description:'Stir fried thin sliced marinated pork in spicy sauce. Spicy',
            price:9.13,
            quantity:0
        }
      ],
      allBeverage:[
          {
              name:'Soda',
              price:1.99
          },
          {
            name:'Green Tea Can',
            price:3.99
        },
        {
            name:'Tea',
            price:0.99
        },
        {
            name:'Monster',
            price:4.99
        },
        {
            name:'Coke Can',
            price:2.99
        },
        {
            name:'Smoothie',
            price:3.99
        }
      ],
      isAdded:false,
      total:0,
      addedItems:[]
    };

  }

  addToCart = (item)=>{
    
    this.setState(prevState=>{
        const value = Number((prevState.total+item.price).toFixed(3))
        return{
            isAdded:true,
            total: value,
            addedItems:[...prevState.addedItems,item]
        }
    },()=>this.updateQuantity(item.id,1));

    
    this.refs.toast.show('Item Added! ');
    
  }

  navigateToOrder = ()=>{
      console.log(this.state.addedItems);
      this.props.navigation.navigate('Order',{
          total:this.state.total,
          items:this.state.addedItems,
          listen: this.listenToCart,
          updateItems:this.updateAddedItems,
          getTotal:this.getTotal,
          updateQuantity:this.updateQuantity
      });
  }

  listenToCart = (value) =>{
      console.log('changes received '+value);
      
      this.setState(prevS=>{
            return{
                total:Number(( prevS.total+value).toFixed(3))
            }
      });
  }

  updateQuantity = (id,val)=>{
    console.log('should update quantity');
    if(this.state.addedItems.length>0){
        let items = [...this.state.addedItems]
        let objIndex = items.findIndex(obj => obj.id == id);
        console.log('the index is: '+objIndex);
        if(objIndex>-1){
            items[objIndex] = {...items[objIndex], quantity:items[objIndex].quantity+val};
            console.log('quantity is: '+items[objIndex].quantity);
            console.log(items);
            this.updateAddedItems(items);
            console.log('Updated Completed');
            console.log(this.state.addedItems);
        }
    }

  }

  updateAddedItems = (items)=>{
    this.setState({
        addedItems:[...items],
        isAdded:(this.state.total>0)?true:false
    },()=>{console.log(this.state.addedItems);console.log("After setState")});
    
    
    return this.state.addedItems;
  }


  getTotal = ()=>{
      return this.state.total;
  }

  resetTotal = ()=>{
      this.setState({
          total:0
      });
  }

  createMenuItem = () => {
    return (
      <View>
            <View >
                <Text style={{fontSize:25,fontWeight:'600'}}>
                    Popular menu items
                </Text>
            </View>
            <View>
                {
                    this.state.allPopularFood.map((food,index) =>{
                    return <MenuItem onPress = {this.addToCart} key={food.id} {...food}/>
                    })
                }
            </View>
      </View>
    );
  }

  render() {
    // Because of content inset the scroll value will be negative on iOS so bring
    // it back to 0.
    const scrollY = Animated.add(
      this.state.scrollY,
      Platform.OS === 'ios' ? HEADER_MAX_HEIGHT : 0,
    );
    const headerTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, -HEADER_SCROLL_DISTANCE],
      extrapolate: 'clamp',
    });

    const imageOpacity = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });
    const imageTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 100],
      extrapolate: 'clamp',
    });

    const titleScale = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [1, 1, 0.8],
      extrapolate: 'clamp',
    });
    const titleTranslate = scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
      outputRange: [0, 0, -2],
      extrapolate: 'clamp',
    });

    return (
      <View style={Styles.fill}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="rgba(0, 0, 0, 0.251)"
        />
        <Animated.ScrollView
          style={Styles.fill}
          scrollEventThrottle={1}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }],
            { useNativeDriver: true },
          )}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => {
                this.setState({ refreshing: true });
                setTimeout(() => this.setState({ refreshing: false }), 1000);
              }}
              // Android offset for RefreshControl
              progressViewOffset={HEADER_MAX_HEIGHT}
            />
          }
          // iOS offset for RefreshControl
          contentInset={{
            top: HEADER_MAX_HEIGHT,
          }}
          contentOffset={{
            y: -HEADER_MAX_HEIGHT,
          }}
        >
          {this.createMenuItem()}
        </Animated.ScrollView>
        <View>
            {
                this.state.total!=0?<OrderPanel navigate={this.navigateToOrder} value={this.state.total}/>:null
            }
        </View>
        <Animated.View
          pointerEvents="none"
          style={[
            Styles.header,
            { transform: [{ translateY: headerTranslate }] },
          ]}
        >
          <Animated.Image
            style={[
              Styles.backgroundImage,
              {
                opacity: imageOpacity,
                transform: [{ translateY: imageTranslate }],
              },
            ]}
            source={require('../assets/resLogo.jpeg')}
          />
        </Animated.View>
        <Animated.View
          style={[
            Styles.bar,
            {
              transform: [
                { scale: titleScale },
                { translateY: titleTranslate },
              ],
            },
          ]}
        >
          <Text style={Styles.title}>Eclipse Asian Cuisine</Text>
        </Animated.View>
        <Toast 
            ref="toast"
            style={{backgroundColor:'white'}}
            textStyle={{color:'black',fontSize:25}}
            positionValue={200}
            position='center'

        />
      </View>
    );
  }
}

