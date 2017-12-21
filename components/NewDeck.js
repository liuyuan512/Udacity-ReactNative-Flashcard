import React,{Component} from 'react'
import { View, Text,ScrollView,StyleSheet,TouchableOpacity,TextInput } from 'react-native'
import {connect} from 'react-redux'
import {addDeck} from "../actions";


class NewDeck extends Component{

    state={
        text:null
    }

    submit=(deck)=>{
        const {goBack} = this.props.navigation;
        deck !== null && this.props.submitDeck(deck)
        goBack()
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput style={styles.input} placeholder='Deck Title' keyboardType='email-address' value={this.state.text} onChangeText={(text) => this.setState({text})}/>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>this.submit(this.state.text)} >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


const mapDispatchToProps = (dispatch)=>({
    submitDeck:(deck) => dispatch(addDeck(deck))
})

export default connect(null,mapDispatchToProps)(NewDeck)

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
    },
    title:{
        fontSize:35,
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        marginBottom:20
    },
    input:{
        marginLeft:10,
        marginRight:10,
        marginTop:20,
        marginBottom:20,

        height:35,
        width:250,
        borderWidth:1,
        marginLeft: 5,
        paddingLeft:5,
        borderColor: '#ccc',
        borderRadius: 4
    },
    submitBtn:{
        marginTop:20,
        marginBottom:20,
        marginLeft:10,
        marginRight:10,
        justifyContent:'center',
        margin:10,
        backgroundColor:'#010101',
        borderRadius: 7,
        width:250,
        height:50
    },
    submitText:{
        fontSize:20,
        textAlign:'center',
        color:'#ffffff'
    }
})