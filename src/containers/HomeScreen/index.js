
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content, Header, Left, Button,
  Icon, Body, Right, Title} from 'native-base'
import {Actions} from 'react-native-router-flux'

import config from '../../config'
import CardMenu from './components/CardMenu'
import DumyData from './DumyData.json'

export default class App extends Component<{}> {

  renderHeader(title){
    return(
      <Header
        androidStatusBarColor={config.themeColor2}
        searchBar={true}
        style={{backgroundColor:config.themeColor}}>
        <Left>
          <Button transparent onPress={Actions.drawerOpen}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }


  render() {
    console.log('dumy data', DumyData);
    const {kategori_menu} = DumyData;
    return (
      <Container>
        {this.renderHeader("test")}
        <Content style={{margin:5}}>
          {
            kategori_menu.map((kategori, iter)=>{
              return <CardMenu kategori={kategori} key={iter}/>
            })
          }
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
