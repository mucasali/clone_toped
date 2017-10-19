
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View, Image
} from 'react-native';
import {Container, Content, Header, Left, Button, Card, CardItem,
  Icon, Body, Right, Title, List, ListItem, Thumbnail} from 'native-base'
import {Actions} from 'react-native-router-flux'

import BackgroundImage from '../../components/BackgroundImage'
import config from '../../config'
import DumyData from './DumyData.json'

export default class DetailProduct extends Component<{}> {

  renderHeader(title){
    return(
      <Header
        androidStatusBarColor={config.themeColor2}
        style={{backgroundColor:'transparent', top:0}}
        >
        <Left>
          <Button transparent onPress={Actions.pop}>
            <Icon name='md-arrow-back' />
          </Button>
        </Left>
        <Right style={{width:100}}>
            <Button transparent onPress={Actions.pop}><Icon name="md-share"/></Button>
            <Button transparent onPress={Actions.pop}><Icon name="ios-cart-outline"/></Button>
            <Button transparent onPress={Actions.pop}><Icon name="md-more"/></Button>
        </Right>
      </Header>
    )
  }

  renderHeaderProduct(product){
    const {images, title, price} = product
    return(
      <View style={{marginTop:245, backgroundColor:'transparent'}} bordered>
        <View style={{backgroundColor:'transparent'}}>
          <View style={{backgroundColor:'transparent', height:50}}/>
          <View style={{backgroundColor:'#FFF', padding:10,paddingRight:70, height:100}}>
            <Text tyle={{fontWeight:'bold'}}>{title}</Text>
            <Text style={{color:'red'}}>Rp. {price}</Text>
          </View>
          <View style={styles.roundedIcon} >
            <Icon name="md-heart-outline" style={{fontSize:30, color:'#aaa'}}/>
          </View>
        </View>
      </View>
    )
  }

  renderInformation({name, value}, iter){
    return(
      <List key={iter} style={{backgroundColor:"#FFF"}}>
        <ListItem>
          <Left><Text>{name}</Text></Left>
          <Right><Text>{value}</Text></Right>
        </ListItem>
      </List>
    )
  }

  render() {
    const {product} = this.props;
    // const product = DumyData["fashionWanita"][0];
    const {information, description, images} = product;
    return (
      <Container>
        <BackgroundImage
          urlImage={images[2]}
        >
      </BackgroundImage>
          {this.renderHeader("")}
          <Content style={{margin:0, marginTop:5}}>
            {this.renderHeaderProduct(product)}
            <Card>
              <CardItem><Text style={{fontWeight:'bold'}}>Informasi Produk</Text></CardItem>
              {
                information.map(this.renderInformation)
              }
            </Card>
            <Card>
              <CardItem><Text style={{fontWeight:'bold'}}>Diskripsi Produk</Text></CardItem>
              <CardItem><Text>{description}</Text></CardItem>
            </Card>
          </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  roundedIcon :{
    backgroundColor:'#FFF',
    position:'absolute',
    borderColor :'#ddd',
    borderWidth : .8,
    top:30,
    right:5,
    height:50, width:50,
    borderRadius:25,
    justifyContent : 'center',
    alignItems :'center'
  }
});
