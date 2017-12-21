import React from 'react';
import { StyleSheet, Text, View,StatusBar,Platform } from 'react-native';
import Decks from './components/Decks'
import Quiz from './components/Quiz'
import { createStore} from 'redux'
import { Provider}from 'react-redux'
import reducer from './reducers'
import { Constants } from 'expo'
import { StackNavigator,TabNavigator } from 'react-navigation'
import DeckDetail from "./components/DeckDetail";
import NewDeck from './components/NewDeck'
import AddCard from './components/AddCard'

function UdaciStatusBar ({backgroundColor, ...props}) {
    return (
        <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
            <StatusBar translucent backgroundColor={backgroundColor} {...props} />
        </View>
    )
}


const Tabs = TabNavigator({
    Decks:{
        screen:Decks,

    },
    NewDeck:{
        screen:NewDeck,
        navigationOptions: {
            tabBarLabel: 'NewDeck'
        }
    }
},{
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#2032e9',
    },
})



const MainNavigator = StackNavigator({
    Home:{
        screen:Tabs,
        navigationOptions:{
            headerTitle:'Home'
        }
    },
    DeckDetail:{
        screen:DeckDetail,
        navigationOptions:{
            headerTitle:'Details',
            headerTintColor: '#39ff6e',
            headerStyle: {
                backgroundColor: '#1115ff',
            }
        }
    },
    Quiz:{
        screen:Quiz,
        navigationOptions:{
            headerTitle:'Quiz'
        }
    },
    AddCard:{
        screen:AddCard,
        navigationOptions:{
            headerTitle:'AddCard'
        }
    }
})

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <View style={styles.container}>
                 <UdaciStatusBar style={styles.statusBar}  />
                <MainNavigator/>
            </View>
        </Provider>
    );
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
