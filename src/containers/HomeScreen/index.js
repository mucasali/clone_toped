
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Container, Content, Header, Left, Button,
  Icon, Body, Right, Title, Input, Grid, Tab, Tabs} from 'native-base'
import {Actions} from 'react-native-router-flux'

import config from '../../config'
import CardMenu from './components/CardMenu'
import CardHotList from './components/CardHotList'
import DumyData from './DumyData.json'

export default class App extends Component<{}> {

  renderHeader(title){
    return(
      <Header hasTabs
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

  renderTabs(kategori_menu, hot_list){
    return(
      <Tabs initialPage={1}>
        <Tab heading="BERANDA"
          textStyle={styles.textTabs}
          activeTextStyle={styles.textTabs}
          tabStyle={{backgroundColor:config.themeColor}}
          activeTabStyle={{backgroundColor: config.themeColor}}
        >
          {this.renderBeranda(kategori_menu)}
        </Tab>
        <Tab heading="HOT LIST"
          textStyle={styles.textTabs}
          activeTextStyle={styles.textTabs}
          tabStyle={{backgroundColor:config.themeColor}}
          activeTabStyle={{backgroundColor: config.themeColor}}
        >
          {this.renderHotList(hot_list)}
        </Tab>
      </Tabs>
    )
  }

  renderBeranda(kategori_menu){
    return(
      <Content style={styles.content}>
        {
          kategori_menu.map((kategori, iter)=>{
            return <CardMenu kategori={kategori} key={iter}/>
          })
        }
      </Content>
    )
  }

  renderHotList(hot_list){
    return(
      <Content style={styles.content} >
        {
          hot_list.map((list, iter)=>{
            return (
              <CardHotList hotList={list} key={iter}
              titleStyle={{color:config.themeColor2, fontWeight:'bold'}}
              pricestyle={{color:'#4e4b4b', fontWeight:'bold'}}/>
            )
          })
        }
      </Content>
    )
  }


  render() {
    console.log('dumy data', DumyData);
    const {kategori_menu, hot_list} = DumyData;
    return (
      <Container>
        {this.renderHeader("")}
        {this.renderTabs(kategori_menu, hot_list)}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  textTabs : {
    color: '#fff', fontWeight: 'bold', fontSize:10
  },
  Content : {
    margin : 5,
    backgroundColor : '#4e4b4b'
  }
});
