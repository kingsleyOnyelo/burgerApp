import React, {Component} from "react";
import {View,Text,StyleSheet, TouchableHighlight, Image, ScrollView} from "react-native";
import { Item, Input, Label } from 'native-base';


class MealScreen extends Component{
    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <View style={{display:'flex', justifyContent:'flex-start', marginTop:30}}>
                <Text style={{fontSize:40, fontWeight: 'bold'}}>Hello, John</Text>
                </View>

                <View style={{display:'flex', justifyContent:'flex-start'}}>
                    <Text style={{alignSelf:'flex-start', fontSize: 20}}>Select your meal for the day</Text>
                </View>

                <View style={{width:'80%', marginTop: 30}}>
                <Item rounded>
                    <Input placeholder='Seacrh for meals, dishes'/>
                </Item>
                </View>
           <View style={{display:'flex', flexDirection:'column', width:'80%', marginTop:20}}>
               <View style={{width:'100%', backgroundColor:'black', borderRadius:15}}>
               <Image source={require('../assets/images/papaburger.png')} style={{width: 250, height:100}}/>
               </View>
               <View>
               <Text style={{fontSize: 25}}>Cheese Burger</Text>
               <Text>Beef Vegetables abd chilli</Text>
               </View>
               <View>

               </View>

           </View>
           <View style={{display:'flex', flexDirection:'column', width:'80%', marginTop:20}}>
               <View style={{width:'100%', backgroundColor:'black', borderRadius:15}}>
               <Image source={require('../assets/images/papaburger.png')} style={{width: 250, height:100}}/>
               </View>
               <View>
               <Text style={{fontSize: 25}}>Cheese Burger</Text>
               <Text>Beef Vegetables abd chilli</Text>
               </View>
               <View>
                   
               </View>

           </View>

           <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'90%', marginTop: 20}}>
            <Text style={{fontSize: 17}}>Recommended</Text>
            <Text style={{fontSize: 17}} onPress={()=>this.props.navigation.navigate('order')}>View All</Text>
           </View>
           <View style={{display:'flex', flexDirection:'row', width:'90%',marginTop: 20, justifyContent:'space-between'}}>
           <Image source={require('../assets/images/papaburger.png')} style={{width: 70, height:70}}/>
           <Image source={require('../assets/images/papaburger.png')} style={{width: 70, height:70}}/>
           <Image source={require('../assets/images/papaburger.png')} style={{width: 70, height:70}}/>
           <Image source={require('../assets/images/papaburger.png')} style={{width: 70, height:70}}/>
           </View>

            </View>
            </ScrollView>

            )
        }
    }

    const styles = StyleSheet.create({
        container:{
            flex:1,
            paddingTop: 30,
            paddingBottom:20,
            alignItems:'center',
            height:'100%'
        },
     

    });
    export default MealScreen;