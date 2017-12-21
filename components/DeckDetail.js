import React,{ Component } from 'react'
import { View,StyleSheet,Button,Text,TouchableOpacity } from 'react-native'
import {connect} from 'react-redux'

class DeckDetail extends Component{

    render(){

        const {myDeck} = this.props
        console.log("DeckDetail的props=======",this.props)
        return(
            <View style={styles.container}>
                <View style={styles.deck}>
                    <Text style={styles.textTitle}>{myDeck.title}</Text>
                    <Text style={styles.textLength}>{myDeck.questions.length+' '}cards</Text>
                </View>
                <View style={styles.btnView}>


                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('Quiz',{questions:myDeck.questions})}>
                        <Text style={styles.btnText}>Start Quiz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={()=>this.props.navigation.navigate('AddCard',{deck:myDeck.title})}>
                        <Text style={styles.btnText}>Add Card</Text>
                    </TouchableOpacity>

                </View>


            </View>
        )
    }

}

const mapStateToProps = (state,props) =>({
    myDeck:Object.keys(state).map(key =>state[key]).filter(k => k.title === props.navigation.state.params.deck.title)[0]
})
export default connect(mapStateToProps)(DeckDetail)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
    },
    deck:{
        padding:10,
        height:150,
        margin:10,
        alignItems:'center',
    },
    textTitle:{
        fontSize:40,
        padding:10,
        margin:10,

    },
    textLength:{
        fontSize:25,
        color:'#4f575e',
        margin:10,
    },
    btnView:{
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center',
        margin:10,

    },
    btn: {
        padding: 10,
        margin:10,
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

    btnText:{
        fontSize:20,
    }
})