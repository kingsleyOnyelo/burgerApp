import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';





export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>

          <View>
         {/*  <Ionicons name="md-settings" size={22} color="white" />
          <Ionicons name="shopping-basket" size={22} color="white" /> */}
          </View>

          <View style={{display: 'flex', justifyContent:'space-between', width:'80%', flexDirection:'row'}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>Cheese</Text>
          <Text>NGN</Text>
          </View>

          <View  style={{display: 'flex', justifyContent:'space-between',width:'80%', flexDirection:'row'}}>
          <Text style={{fontSize:24, fontWeight:'bold'}}>Burgar</Text>
          <Text style={{fontSize:24, fontWeight:'bold'}}>2000</Text>
          </View>


              <View style={{display:'flex', }}>
                <Image source={require('../assets/images/papaburger.png')} style={{width: 250, height:250}}/>
              </View>


           <View style={{width:'80%', justifyContent:'center'}}>
             <Text style={{textAlign:'center', fontSize: 20}}>Our Medium Cheeze burger is packed with just the right amount of nutrition including veggies you need to kickstart your day. Perfect for breakfast choice!</Text>
           </View>



           <View>
             <Text style={{fontSize: 25, fontWeight:'bold'}}>Size</Text>
           </View>


           <View style={{display:'flex', justifyContent:'space-around', flexDirection:'row', width:'100%', marginTop: 20, }}>
             <View style={{backgroundColor:'#CCCCCC', width: 70, height:70, borderRadius: 10, paddingTop: 18}}>
               <Text style={{fontSize:24, fontWeight:'bold', alignSelf:'center'}}>S</Text>
             </View>
             <View style={{backgroundColor:'#CCCCCC', width: 70, height:70, borderRadius: 10, paddingTop: 18}}>
             <Text style={{fontSize:24, fontWeight:'bold', alignSelf:'center'}}>L</Text>
             </View>
             <View style={{backgroundColor:'#CCCCCC', width: 70, height:70, borderRadius: 10, paddingTop: 18}}>
             <Text style={{fontSize:24, fontWeight:'bold', alignSelf:'center'}}>M</Text>
             </View>

           </View>

           <View style={{width:'80%'}}>
           <TouchableHighlight style={styles.button} onPress={()=>props.navigation.navigate('checkout')}
                            >
                            <Text style={{color:'#fff', fontSize: 16, paddingLeft:8, paddingRight:8}}>Proceed to checkout</Text>
            </TouchableHighlight>
           </View>

              

        </View>

       
    </ScrollView>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
   
  },
  Slider:{
    width:'90%',
    height:500,
  },
  but:{
    width:100,
    textAlign:'center',
    alignContent:'center',
    marginTop:10,
    borderRadius: 20,
    shadowColor: '#ddd',
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
