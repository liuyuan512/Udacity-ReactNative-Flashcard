import React, { Component } from 'react'
import { View, Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import DeckDetail from "./DeckDetail";


class Quiz extends Component{

    state={
        showAnswer:false,
        index:0,
        rightAnswers:0,
        questions:this.props.navigation.state.params.questions
    }


    clickCorrect=()=>{
        const {index,questions} = this.state

            this.setState((preState)=>({
                rightAnswers:questions[index].rightAnswer === true?preState.rightAnswers+1:preState.rightAnswers,
                index:preState.index <questions.length ? preState.index+1 : preState.index
            }))
    }

    clickInCorrect=()=>{
        const {index,questions} = this.state

            this.setState((preState)=>({
                rightAnswers:questions[index].rightAnswer === false?preState.rightAnswers+1:preState.rightAnswers,
                index:preState.index <questions.length ? preState.index+1 : preState.index
            }))
    }

    startOver = () =>{
        this.setState({
            showAnswer:false,
            index:0,
            rightAnswers:0,
            questions:this.props.navigation.state.params.questions
        })
    }

    goToDeck = ()=>{
        console.log("Quize的props------------",this.props)
        this.props.navigation.goBack("DeckDetail")

    }

    render(){
        console.log("Quiz的state==========",this.state)
        console.log("Quiz的props==========",this.props)

        const {questions} =this.props.navigation.state.params
        const {showAnswer,index,rightAnswers} = this.state

        return(
            index === questions.length
            ?
            <View style={styles.container}>
                <Text style={styles.score}>
                    Your Score is: {rightAnswers/questions.length * 100} score!
                </Text>
                <View style={styles.setRightAnswer}>
                    <TouchableOpacity style={styles.setRightAnswerBtn}
                                      onPress={()=>this.startOver()} >
                        <Text >Start Over</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  style={styles.setRightAnswerBtn}
                                       onPress={()=>this.goToDeck()} >
                        <Text >Go to Deck</Text>
                    </TouchableOpacity>
                </View>
            </View>
            :
            <View style={styles.container}>
                        <View style={styles.questionView}>
                            <View style={styles.aqView}>
                                <Text style={styles.textQuestion}>
                                    {showAnswer?questions[index].answer:questions[index].question}
                                </Text>
                            </View>
                            <TouchableOpacity style={styles.answerBtn} onPress={()=>this.setState((preState)=>({showAnswer:!preState.showAnswer}))}>
                                <Text style={styles.answer}>{showAnswer?'Question':'Answer'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.submitBtnView}>
                            <TouchableOpacity style={styles.correctBtn} onPress={this.clickCorrect}>
                                <Text style={styles.btnText}>Correct</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.incorrectBtn} onPress={this.clickInCorrect}>
                                <Text style={styles.btnText}>Incorrect</Text>
                            </TouchableOpacity>
                        </View>

            </View>
            )

        }
}

export default Quiz


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-around',
        alignItems:'center',
        padding:10,
    },
    questionView:{
        padding:10,
        height:150,
        margin:10,
        alignItems:'center',
        justifyContent:'space-between'

    },
    aqView:{
        margin:20
    },
    textQuestion:{
        fontSize:40,
        padding:10,
        margin:10
    },
    answerBtn:{
      height:50,
        padding:10,
        margin:10,
    },
    answer:{
        fontSize:25,
        color:'#ff1518',
    },
    submitBtnView:{
        padding:10,
        justifyContent:'flex-start',
        alignItems:'center',
        margin:10,
        height:150,
    },
    correctBtn:{
        justifyContent:'center',
        margin:10,
        backgroundColor:'#165712',
        borderRadius: 7,
        width:250,
        height:50
    },
    incorrectBtn:{
        justifyContent:'center',
        margin:10,
        backgroundColor:'#9e050a',
        borderRadius: 7,
        width:250,
        height:50
    },
    score:{
        fontSize:35,
        color:'#ff1b32',
    },
    btnText:{
        color:'#ffffff',
        textAlign:'center',
        fontSize:20,
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
})