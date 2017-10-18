
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

import config from '../../config'
import DumyData from './DumyData.json'

export default class DetailProduct extends Component<{}> {

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

  renderHeaderProduct(product){
    const {images, title, price} = product
    return(
      <Card>
        <CardItem >
          <Image
            style={{height:300, width:null, flex:1, margin:0}}
            source={{uri:images[0]}}/>
        </CardItem>
        <CardItem>
          <Body style={{justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold'}}>{title}</Text>
            <Text style={{color:'red'}}>Rp. {price}</Text>
          </Body>
        </CardItem>
      </Card>
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
    const {information, description} = product;
    return (
      <Container>
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

});
