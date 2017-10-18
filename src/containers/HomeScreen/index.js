
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content, Header, Left, Button,
  Icon, Body, Right, Title, Input, Grid} from 'native-base'
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
        <Body style={{ margin:10}}>
          <Grid style={{backgroundColor:'#FFF', padding:10, paddingLeft:0}}>
            <Button transparent onPress={Actions.drawerOpen}>
              <Icon name='menu' />
            </Button>
            <Grid >
              <Icon name="ios-search" style={{fontSize:20}}/>
              <Text> Cari Produk atau Toko</Text>
            </Grid>
            <Button transparent onPress={Actions.drawerOpen}>
              <Icon name='md-cart' />
            </Button>
          </Grid>
        </Body>
      </Header>
    )
  }


  render() {
    console.log('dumy data', DumyData);
    const {kategori_menu} = DumyData;
    return (
      <Container>
        {this.renderHeader("")}
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
