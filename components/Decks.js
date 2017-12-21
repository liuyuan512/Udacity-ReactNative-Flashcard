import React,{Component} from 'react'
import { View, Text,ScrollView,StyleSheet,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'
import Deck from "./Deck";


class Decks extends Component{

    render(){

        console.log("Decks的props出来了吗=======",this.props)
        const {decks,navigation} = this.props
        return(
            <ScrollView contentContainerStyle={styles.contentContainer}>
                {decks.map((deck) =><Deck key ={deck.title} deck={deck} navigation={navigation}/>)}
            </ScrollView>
        )
    }

}

const mapStateToProps = (state)=>({
    decks:Object.keys(state).map(key =>state[key])
})


export default connect(mapStateToProps)(Decks)

const styles = StyleSheet.create({
    contentContainer:{
        justifyContent:'flex-start',
        alignItems:'center',
    }
})