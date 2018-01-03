import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
import { createStore} from 'redux'
import { Provider}from 'react-redux'
import reducer from './src/reducers'
import { Constants } from 'expo'
import MainNavigator from './src/components/MyNavigator'
import {setLocalNotification} from "./utils/helpers";
import { composeWithDevTools } from 'redux-devtools-extension'

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}



export default class App extends React.Component {

  componentDidMount() {
    setLocalNotification()
  }

  render() {
    return (
        <Provider store={createStore(reducer,composeWithDevTools())}>
            <View style={styles.container}>
                 <UdaciStatusBar style={styles.statusBar}  />
                <MainNavigator/>
            </View>
        </Provider>
    )
  }
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
   statusBar: {
    backgroundColor: '#a719ff',
    },
});
