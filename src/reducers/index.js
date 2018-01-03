import {ADD_DECK,ADD_CARD} from '../actions/index'

const defaultDecks = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer:'A library for managing user interfaces',
                rightAnswer: true
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer:'The componentDidMount lifecycle event',
                rightAnswer: false
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer: 'The combination of a function and the lexical environment within which that function was declared.',
                rightAnswer: false
            }
        ]
    }
}

const decks = (state=defaultDecks,action)=>{
    const {deck,card} =action
    switch (action.type){
        case ADD_DECK:
            return {
                ...state,
                [deck.title]:deck
            }
        case ADD_CARD:
            console.log("新增加的deck的新增加的addcard---",deck,state)
            return{
                ...state,
                [deck]:{
                    ...state[deck],
                    questions:[
                        ...state[deck].questions,
                        {
                            question:card.question,
                            answer:card.answer,
                            rightAnswer:card.rightAnswer
                        }
                    ]
                }
            }
        default:
            return state
    }
}

export default decks