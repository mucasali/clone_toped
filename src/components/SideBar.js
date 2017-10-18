import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {List, Icon, ListItem, Left, Body, Drawer} from 'native-base';
import {Actions} from 'react-native-router-flux'
import {observer} from 'mobx-react/native'

import config from '../config';

const logoApp = require('../images/logo.png');

@observer
export default class SideBar extends Component{

  render(){
    return (
      <View style={styles.drawerContent}>
        <Image source={logoApp} style={styles.logoApp} >
        </Image>
        <View style={styles.leftBottom}>
          <List>
            <ListItem icon onPress={()=>{ Actions.HomeScreen() }}>
              <Body><Text style={{color:config.themeColor}}>Beranda</Text></Body>
            </ListItem>
            <ListItem icon onPress={()=>{ Actions.Settings() }}>
              <Body><Text style={{color:config.themeColor}}>Kategori</Text></Body>
            </ListItem>
            <ListItem icon onPress={()=>{ Actions.LoginScreen() }}>
              <Body><Text style={{color:config.themeColor}}>Masuk</Text></Body>
            </ListItem>
            <ListItem icon onPress={()=>{
                Actions.RegisterScreen();
              }}
            >
              <Body><Text style={{color:config.themeColor}}>Daftar</Text></Body>
            </ListItem>
          </List>
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  leftTop: {
    flex: 1,
  },
  leftBottom: {
    flex: 2,
    backgroundColor: '#FFF'
  },
  logoApp:{
    flex: 1.2,
    width: null,
    height: null,
    backgroundColor: '#f0f0f0',
    resizeMode: 'contain'
  },
  profile :{
    flex:1,
    justifyContent:'flex-end',
    padding:10,
    marginBottom:0
  },
  icon:{
    fontSize:25,
    color:config.themeColor
  },
  iconProfile :{
    color:'blue',
    fontSize:50
  }
})
