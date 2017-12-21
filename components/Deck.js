import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,ListView } from 'react-native'

class Deck extends Component{


render() {

    const {deck,navigation} = this.props
    console.log("Deck的props出来了吗=======",this.props)
    return (
            <View style={styles.containerr}>
                <TouchableOpacity style={styles.deck} onPress={() => navigation.navigate('DeckDetail', {deck})}>
                    <Text style={styles.textTitle}>
                        {deck.title}
                    </Text>
                    <Text style={styles.textLength}>
                        {deck.questions.length && deck.questions.length + ' ' + 'cards'}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}



export default Deck


const styles = StyleSheet.create({
    containerr:{
        flex: 1,
        padding: 50,
        margin:10,
        borderColor:'#0e0b0c',
        justifyContent:'center',
        alignItems:'center',
    },
    deck:{
        padding:20,
        justifyContent:'center',
        alignItems:'center',
    },
    textTitle:{

        fontSize:40,
        padding:10
    },
    textLength:{
        fontSize:25,
        color:'#4f575e',

    }
})