import {StyleSheet} from 'react-native'

const container = StyleSheet.create({
    deck:{
        flex: 1,
        padding: 50,
        margin:10,
        borderColor:'#0e0b0c',
        justifyContent:'center',
        alignItems:'center',
    },
    DeckDetail:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
    },
    decks:{
        justifyContent:'flex-start',
        alignItems:'center',
    },
    addCard:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
    },
    quiz:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
    },
    newDeck:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
    }
})