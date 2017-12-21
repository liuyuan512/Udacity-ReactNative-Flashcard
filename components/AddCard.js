import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView,TextInput } from 'react-native'
import {connect} from 'react-redux'
import { addCard } from '../actions'

class AddCard extends Component{

    state={
         answer:null,
         question:null,
        rightAnswer:true
    }


    submit = (deck,question,answer,rightAnswer)=>{
        const card = {question,answer,rightAnswer}
        const {goBack} = this.props.navigation;
        this.props.dispatch(addCard(deck,card))
        goBack()
    }


    render(){
        console.log("AddCard的state==========",this.state)
        console.log("AddCard的props==========",this.props)
        const {deck} = this.props.navigation.state.params


        return(
            <View style={styles.container}>
                <View>
                    <View style={styles.input}>
                        <TextInput
                                   style={styles.inputText}
                                   placeholder='Please input your question'
                                   keyboardType='default' value={this.state.question}
                                   onChangeText={(question) => this.setState({question})}/>
                        <TextInput
                                   style={styles.inputText}
                                   placeholder='Please input your answer'
                                   keyboardType='default' value={this.state.answer}
                                   onChangeText={(answer) => this.setState({answer})}/>
                    </View>
                    <Text>The answer to your question is Right or Wrong?</Text>
                    <View style={styles.setRightAnswer}>
                        <TouchableOpacity style={styles.setRightAnswerBtn}
                                          onPress={()=>this.setState({rightAnswer:true})} >
                            <Text >Right</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.setRightAnswerBtn}
                                           onPress={()=>this.setState({rightAnswer:false})} >
                            <Text >Wrong</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity style={styles.submitBtn} onPress={()=>this.submit(deck,this.state.question,this.state.answer,this.state.rightAnswer)} >
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )

    }
}

export default connect()(AddCard)


const styles = StyleSheet.create({
   container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        padding:10,
    },
    input:{
        padding:10,
        height:150,
        margin:10,
        alignItems:'center',
        justifyContent:'flex-start'
    },
    inputText:{
       margin:20
    },
    setRightAnswer:{
       flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
        margin:10
    },
    setRightAnswerBtn:{
        padding:10,
        margin:10,
        justifyContent:'center',
        borderRadius: 7,
    },
    submitBtn:{
        padding:10,
        margin:10,
        justifyContent:'center',
        margin:10,
        backgroundColor:'#010101',
        borderRadius: 7,
    },
    submitText:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:20,
    }
})