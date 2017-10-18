import React, { Component } from 'react'
import {Actions, Scene, Router} from 'react-native-router-flux';

import SideBar from './src/components/SideBar'
import HomeScreen from './src/containers/HomeScreen'
import RegisterScreen from './src/containers/AuthScreen/Register'
import LoginScreen from './src/containers/AuthScreen/Login'

import ListProduct from './src/containers/Product/ListProduct'

import UserStore from './src/store/User'


const INITIAL_DETAIL = {parent_id : 0, directory_id : 0, name : "Mirrorizer"};

/**
 * The root component of the application.
 * In this component I am handling the entire application state, but in a real app you should
 * probably use a state management library like Redux or MobX to handle the state (if your app gets bigger).
 */
export default class App extends Component<{}> {

   componentWillMount(){
      // UserStore.avaibleUser()
      this.scenes = Actions.create(
        <Scene key="root">
          <Scene key="drawer" drawer contentComponent={SideBar} open={true} hideNavBar>
            <Scene key="main" >
              <Scene key="HomeScreen" component={HomeScreen} hideNavBar/>
              <Scene key="RegisterScreen" component={RegisterScreen} store={UserStore} hideNavBar/>
              <Scene key="LoginScreen" component={LoginScreen} store={UserStore} hideNavBar/>
                <Scene key="ListProduct" component={ListProduct} keyKategori="fashionWanita" title="List Product" hideNavBar/>


            </Scene>
          </Scene>
        </Scene>
      );
  }

  render(){
    return <Router scenes={this.scenes}/>
  }

}
