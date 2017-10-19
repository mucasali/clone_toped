import React, {Component} from 'react'
import {Image, Text} from 'react-native'
import {Card, CardItem, Col, Row, Grid, Button, Icon, Left, Right} from 'native-base'
import {Actions} from 'react-native-router-flux'

const CardHotList = ({hotList, titleStyle, pricestyle})=>{
  const {key, title, price, urlPicture} = hotList;
  return(
    <Card style={{margin:10}}>
      <CardItem cardBody>
        <Image source={{uri:urlPicture}} style={{height: 200, width: null, flex: 1,}}/>
      </CardItem>
      <CardItem>
        <Left><Text style={titleStyle}>{title}</Text></Left>
        <Right>
          <Text>Mulai dari <Text style={pricestyle}>Rp. {price}</Text></Text></Right>
      </CardItem>
    </Card>
  )
}

export default CardHotList;
