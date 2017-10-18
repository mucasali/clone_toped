import React , {Component} from 'react'
import {StyleSheet, Text, ToastAndroid} from 'react-native'
import {Container, Content, Header, Left, Button, Body, Icon,
  Title, Right, Form, Item, Label, Input} from 'native-base'
import {Actions} from 'react-native-router-flux'

export default class Login extends Component{

  constructor(props){
    super()
    this.state = {
      email : "",
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

  renderInput(){
    return(
      <Form>
        <Item floatingLabel key="email">
          <Label>Email</Label>
          <Input
            keyboardType={"email-address"}
            onChangeText={(text)=>{
              this.setState({email : text})
            }}
            value={this.state.email}
          />
        </Item>
          <Item floatingLabel key="password">
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              onChangeText={(text)=>{
                this.setState({password : text})
              }}
              value={this.state.password}
            />
          </Item>
      </Form>
    )
  }

  handleRegister(store){

  }

  render(){
    const {store} = this.props;

    return(
      <Container style={{backgroundColor:'#FFF'}}>
        {this.renderHeader("Masuk")}
        <Content >
          {this.renderInput()}
          <Button block success style={styles.buttonRegister}
            onPress={()=>{
              const resLogin = store.login(this.state)
              ToastAndroid.show(resLogin.message, ToastAndroid.SHORT);
              if(resLogin.status){
                Actions.HomeScreen()
              }
            }} >
            <Text style={{color:"#FFF"}}>Masuk</Text>
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
