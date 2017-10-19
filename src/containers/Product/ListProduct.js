
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image, Dimensions
} from 'react-native';
import {Container, Content, Header, Left, Button, Fab,
  Icon, Body, Right, Title, List, ListItem, Thumbnail} from 'native-base'
import {Actions} from 'react-native-router-flux'

import config from '../../config'
import DumyData from './DumyData.json'

const rows = 3;
const cols = 2;
const marginHorizontal = 0;
const marginVertical = 3;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));


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


  renderList(product, iter){
    const {title, price, rate, seller, images} = product;
    const {name, location} = seller;
    return(
      <List key={iter} style={{backgroundColor:"#FFF"}}>
        <ListItem onPress={()=>{Actions.DetailProduct({product:product})}}>
          <Thumbnail square source={{uri:images[0]}}
            style={{width:100,resizeMode: 'contain'}}
          />
        <View style={{ justifyContent:'space-between'}}>
              <Text numberOfLines={2} style={{fontWeight:'bold'}}>{title}</Text>
              <Text style={{color:'red'}}>Rp. {price}</Text>
              <Text style={{fontSize:10}}>{name}</Text>
              <Text style={{fontSize:10, alignItems:'center'}}>
                <Icon name="ios-locate-outline" style={{fontSize:10}}/> {location}
              </Text>
          </View>
        </ListItem>
      </List>
    )
  }

  renderGrid(product, iter){
    const {title, price, rate, seller, images} = product;
    const {name, location} = seller;
    return(
      <View style={styles.boxContainer} key={iter}>
        <Image source={{uri:images[0]}}style={styles.imageGrid}/>
        <View style={{height:80, justifyContent:'space-between'}}>
          <View style={{height:25}}>
            <Text numberOfLines={2} style={{fontWeight:'bold', fontSize:12}}>{title}</Text>
          </View>
            <Text style={{color:'red'}}>Rp. {price}</Text>
          <View>
            <Text style={{fontSize:10}}>{name}</Text>
            <Text style={{fontSize:10, alignItems:'center'}}>
              <Icon name="ios-locate-outline" style={{fontSize:10}}/> {location}
            </Text>
          </View>
        </View>
        <View style={styles.roundedIcon} >
          <Icon name="md-heart-outline" style={{fontSize:20, color:'#aaa'}}/>
        </View>
      </View>
    )
  }


  render() {
    const {title, keyKategori} = this.props;
    const listProduct = DumyData[keyKategori];
    return (
      <Container>
        {this.renderHeader(title)}
        <Content style={{margin:0, marginTop:5, backgroundColor:'#aaa'}}>
          <View style={styles.sectionContainer}>
            {
              (listProduct) && listProduct.map(this.renderGrid)
            }
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  sectionContainer : {
    flex :1,
    flexDirection : 'row',
    flexWrap : 'wrap',
    justifyContent : 'center',
    alignItems : 'center',
    backgroundColor : '#FFF'
  },
  boxContainer : {
    width : width,
    borderWidth : 0.3,
    borderColor : '#ccc',
    borderTopWidth : 0,
    padding : 10
  },
  imageGrid : {
    height: 150,
    width: null,
    resizeMode:'cover',
    margin:3
  },
  roundedIcon :{
    backgroundColor:'#FFF',
    position:'absolute',
    borderColor :'#ddd',
    borderWidth : .2,
    top:5,
    right:5,
    height:30, width:30,
    borderRadius:15,
    justifyContent : 'center',
    alignItems :'center'
  }
});
