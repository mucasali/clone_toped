import React, {Component} from 'react'
import {Image, Text} from 'react-native'
import {Card, CardItem, Col, Row, Grid, Button, Icon} from 'native-base'
import {Actions} from 'react-native-router-flux'

const renderCol = ({key, title, icon}, iter)=>{
  return(
      <Col key={key} style={{padding:10}}>
        <Button iconLeft transparent onPress={()=>{Actions.ListProduct({keyKategori:key, title:title})}}>
          <Image
            style={{width: 30, height: 30, resizeMode: 'contain'}}
            source={{uri: icon}}
          />
          <Text> {title}</Text>
        </Button>
      </Col>
  )
}

const renderMenu = (menu, iter)=>{
  return(
    <Grid key={iter}>
      {menu.map(renderCol)}
    </Grid>
  )
}

const CardMenu = ({kategori})=>{
  console.log('CardMenu.kategoriMenu', kategori)
  const {key, menu, name} = kategori;
  return(
    <Card style={{margin:10}}>
      <CardItem header><Text>{name}</Text></CardItem>
      { (menu) && menu.map(renderMenu)}
    </Card>
  )
}

export default CardMenu;
