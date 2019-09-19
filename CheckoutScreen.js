import React, {Component} from "react";
import {View,Text,StyleSheet, TouchableHighlight} from "react-native";
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


class CheckoutScreen extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={{display:'flex', justifyContent:'flex-start', marginTop:30}}>
                <Text style={{fontSize:40, fontWeight: 'bold'}}>Welcome back!</Text>
                </View>

                <View style={{display:'flex', justifyContent:'flex-start'}}>
                    <Text style={{alignSelf:'flex-start', fontSize: 20}}>Login to your account</Text>
                </View>
               <View style={{width:'80%', marginTop:30}}>
               <Form>
                        <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                        </Item>
                        <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                        </Item>


            </Form>
               </View>

               <View style={{width:'80%', marginTop:30}}>
           <TouchableHighlight style={styles.button} onPress={()=>this.props.navigation.navigate('meal')}
                            >
                            <Text style={{color:'#fff', fontSize: 16, paddingLeft:8, paddingRight:8}}>Login</Text>
            </TouchableHighlight>
           </View>

           <View style={{display:'flex', flexDirection:'row'}}>
               <Text>New user?</Text><Text style={{color:'#E35F38'}}>SignUp</Text>
           </View>
            </View>

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
        button: {
            alignItems: 'center',
            padding: 5,
            paddingTop:14,
            marginTop: 30, 
            borderRadius:10,
            width:'70%',
            height: 50,
            backgroundColor:'#E35F38',
            alignSelf:'center'
          },


    });
    export default CheckoutScreen;