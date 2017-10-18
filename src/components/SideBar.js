import React, {Component} from 'react';
import {View, StyleSheet, Text, Image, ImageBackground} from 'react-native';
import {List, Icon, ListItem, Left, Body, Drawer} from 'native-base';
import {Actions} from 'react-native-router-flux'
import {observer} from 'mobx-react/native'

import config from '../config';

const logoApp = require('../images/logo.png');

@observer
export default class SideBar extends Component{

  renderProfile(user){
    return(
      <View style={styles.profile}>
        <Icon name="ios-happy-outline" style={[styles.icon, {fontSize:50}]}/>
        <Text>{user.username}</Text>
        <Text>{user.email}</Text>
      </View>
    )
  }

  render(){
    return (
      <View style={styles.drawerContent}>
        <Image source={logoApp} style={styles.logoApp} >
          {this.renderProfile({username:"m sahli", email:"m@mail.com"})}
        </Image>
        <View style={styles.leftBottom}>
          <List>
            <ListItem icon onPress={()=>{ Actions.HomeScreen() }}>
              <Left><Icon name="ios-folder-outline" style={styles.icon}/></Left>
              <Body><Text style={{color:config.themeColor}}>Beranda</Text></Body>
            </ListItem>
            <ListItem icon onPress={()=>{ Actions.Settings() }}>
              <Left><Icon name="ios-settings-outline" style={styles.icon}/></Left>
              <Body><Text style={{color:config.themeColor}}>Kategori</Text></Body>
            </ListItem>
            <ListItem icon onPress={()=>{ Actions.About() }}>
              <Left><Icon name="ios-information-circle-outline" style={styles.icon}/></Left>
              <Body><Text style={{color:config.themeColor}}>Masuk</Text></Body>
            </ListItem>
            <ListItem icon onPress={()=>{
                logout()
                Actions.AuthScreen();
              }}
            >
              <Left><Icon name="ios-log-out" style={styles.icon}/></Left>
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
    paddingTop:10,
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
