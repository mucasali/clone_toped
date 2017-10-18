import React , {Component} from 'react'
import {StyleSheet, Text, ToastAndroid} from 'react-native'
import {Container, Content, Header, Left, Button, Body, Icon,
  Title, Right, Form, Item, Label, Input} from 'native-base'
import {Actions} from 'react-native-router-flux'

export default class Register extends Component{

  constructor(props){
    super()
    this.state = {
      email : "",
      name : "",
      ponsel : "",
      password : ""
    }
  }

  renderHeader(title){
    return(
      <Header style={{backgroundColor:'#FFF'}}>
        <Left>
          <Button transparent onPress={Actions.pop}>
            <Icon name='ios-arrow-round-back' style={{color:'#000', fontSize:30}}/>
          </Button>
        </Left>
        <Body>
          <Title style={{color:"#000"}}>{title}</Title>
        </Body>
        <Right />
      </Header>
    )
  }

  renderInput(UserStore){
    const {property} = UserStore;
    return(
      <Form>
        {
          property.map((item, iter)=>{
            return(
              <Item floatingLabel key={iter}>
                <Label>{item.title}</Label>
                <Input
                  keyboardType={item.inputType}
                  secureTextEntry={item.secureInput}
                  onChangeText={(text)=>{
                    this.setState({[item.key] : text})
                  }}
                  value={this.state[item.key]}
                />
              </Item>
            )
          })
        }
      </Form>
    )
  }

  handleRegister(store){

  }

  render(){
    const {store} = this.props;

    return(
      <Container style={{backgroundColor:'#FFF'}}>
        {this.renderHeader("Daftar")}
        <Content >
          {this.renderInput(store)}
          <Button block success style={styles.buttonRegister}
            onPress={()=>{
              const resRegister = store.register(this.state)
              ToastAndroid.show(resRegister.message, ToastAndroid.SHORT);
              if(resRegister.status){
                Actions.HomeScreen()
              }
            }} >
            <Text style={{color:"#FFF"}}>DAFTAR</Text>
          </Button>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  buttonRegister : {
    margin : 10
  }
});
