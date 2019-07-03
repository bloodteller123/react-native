import React, {Component} from 'react';
import {
    View,
    Text,
    SafeAreaView,
    Platform,
    StatusBar,
    ScrollView,
    StyleSheet
} from 'react-native';
import {SearchBar} from 'react-native-elements'
import MenuItem from '../component/MenuItem'

// temp


export default class Search extends Component{
    componentWillMount(){
        this.startHeaderHeight = 80;
        if(Platform.OS == "android"){
            this.startHeaderHeight = 100 + StatusBar.currentHeight;
        }

    }
    state = {
        text: ''
    }
    render(){
        return (
            <SafeAreaView>
                <View>
                    <SearchBar
                            placeholder = "Find Your Food"
                            onChangeText = {newText => {this.setState({text:newText})}}
                            value = {this.state.text}
                    />
                    
                </View>
                
            </SafeAreaView>
        );
    }
}