
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content, Header, Left, Button,
  Icon, Body, Right, Title, List, ListItem, Thumbnail} from 'native-base'
import {Actions} from 'react-native-router-flux'

import config from '../../config'
import DumyData from './DumyData.json'

export default class ListProduct extends Component<{}> {

  renderHeader(title){
    return(
      <Header
        androidStatusBarColor={config.themeColor2}
        searchBar={true}
        style={{backgroundColor:config.themeColor}}>
        <Left>
          <Button transparent onPress={Actions.pop}>
            <Icon name='ios-arrow-round-back' style={{fontSize:30}}/>
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }


  renderList({title, price, rate, seller, images}, iter){
    const {name, location} = seller;
    return(
      <List key={iter} style={{backgroundColor:"#FFF"}}>
        <ListItem>
          <Thumbnail square source={{uri:images[0]}}
            style={{height:100,resizeMode: 'contain'}}
          />
        <Body style={{paddingLeft:10, justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold'}}>{title}</Text>
            <Text style={{color:'red'}}>Rp. {price}</Text>
            <Text style={{fontSize:10}}>{name}</Text>
            <Text style={{fontSize:10, alignItems:'center'}}>
              <Icon name="ios-locate-outline" style={{fontSize:10}}/> {location}
            </Text>
          </Body>
        </ListItem>
      </List>
    )
  }


  render() {
    const {title, keyKategori} = this.props;
    const listProduct = DumyData[keyKategori];
    return (
      <Container>
        {this.renderHeader(title)}
        <Content style={{margin:0, marginTop:5}}>
          {
            (listProduct) && listProduct.map(this.renderList)
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({

});
