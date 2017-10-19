import React, {Component} from 'react'
import {View, Image, StyleSheet, ScrollView} from 'react-native'

const HEIGHTIMAGE = 300;

export default class BackgroundImage extends Component{

  render(){
    const {urlImage, heightImage} = this.props;
    const heightimage = heightImage ? heightImage : HEIGHTIMAGE;
    return(
      <View style={styles.container}>
        <Image
          style={[styles.image, {height : heightimage}]}
          source={{uri:urlImage}}
        />
      </View>
    )
  }
}


// <ScrollView >
//   {this.props.children}
// </ScrollView>
const styles = StyleSheet.create({
  container : {
    flex : 1,
    position : 'absolute',
    top:0, left:0, width:'100%'
  },
  image : {
    flex : 1,
    width:null
  },
  containerChildren : {
    position : 'absolute'
  }
})
