/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native'
import {name as appName} from './app.json'
import WelcomScreens from './screens/WelcomScreens'
import Start from './screens/Start'
AppRegistry.registerComponent(appName, () => WelcomScreens)
// let FakeProducts = [
//     {
//         proname : 'phone 3',
//         year : 2013
//     },
//     {
//         proname : 'phone 5',
//         year : 2015
//     },
//     {
//         proname : 'phone 4',
//         year : 2014
//     }
    
// ]
    
// AppRegistry.registerComponent(appName, () => () => <WelcomScreens 
//                                                         x = {5} y = {10}
//                                                         person = {{
//                                                             name : 'hai',
//                                                             age : 18,
//                                                             email : 'hai2kb4@gmail.com'
//                                                         }}
//                                                         products = {FakeProducts}
//                                                          />);
