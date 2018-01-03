import {StackNavigator, TabNavigator} from "react-navigation";
import NewDeck from "./NewDeck";
import DeckDetail from "./DeckDetail";
import Decks from "./Decks";
import AddCard from "./AddCard";
import Quiz from "./Quiz";

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
            headerTitle:'DeckDetail',
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

export default MainNavigator