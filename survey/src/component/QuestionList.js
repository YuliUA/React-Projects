import React,{Component} from 'react';
import QuestionItem from './QuestionItem';
const uuid = require('uuid');
const firebase = require('firebase');

var config = {
    apiKey: "AIzaSyAB-feukLMvGDuHXJiokunw4TTey5JxiNA",
    authDomain: "react-survey-c7c6a.firebaseapp.com",
    databaseURL: "https://react-survey-c7c6a.firebaseio.com",
    projectId: "react-survey-c7c6a",
    storageBucket: "react-survey-c7c6a.appspot.com",
    messagingSenderId: "185990182504"
  };
  firebase.initializeApp(config);


class QuestionList extends Component{
    constructor(){
        super();
        this.state ={
            
            questionsArr: [{
                name: 'q1',
                text: 'What is your favorite operating system?',
                    var1: 'Windows',
                    var2: 'OSX',
                    var3: 'Linux',
                    var4: 'Solaris',
                    var5: 'Other'
                },{
                    name: 'q2',
                    text: 'What is your favorite brand of TV?',
                    var1: 'Sony',
                    var2: 'Samsung',
                    var3: 'Green',
                    var4: 'Vizio',
                    var5: 'Other'
                },{
                    name: 'q3',
                    text: 'What is your favorite Smartphone Brand?',
                    var1: 'Apple',
                    var2: 'Samsung',
                    var3: 'Nexus',
                    var4: 'Blackberry',
                    var5: 'Other'
                },{
                    name: 'q4',
                    text: 'What is your favorite CPU Brand?',
                    var1: 'Intel',
                    var2: 'AMD',
                    var3: 'Nvidia',
                    var4: 'ARM',
                    var5: 'Other'
                }
            ],
            answers: {
                q1:'',
                q2:'',
                q3:'',
                q4:''
            },
            id: uuid.v1()
            
        }
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
        this.handleSubmitAnswers = this.handleSubmitAnswers.bind(this)
    }


    
    handleQuestionChange(e){
        var answers = this.state.answers;
        if(e.target.name === 'q1'){
            answers.q1 = e.target.value;
        } else if(e.target.name === 'q2'){
            answers.q2 = e.target.value;
        } else if(e.target.name === 'q3'){
            answers.q3 = e.target.value;
        } else if(e.target.name === 'q4'){
            answers.q4 = e.target.value;
        }
        
        this.setState({answers:answers}, function(){
            // console.log(this.state)
        });
    }

   
    handleSubmitAnswers(e){
        firebase.database().ref('surveys/'+this.state.id).set({
            name: this.props.name,
            answers:  this.state.answers
        });

        e.preventDefault()
        this.props.handleSubmit(e)
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmitAnswers} id="submit">
                <div>
                    <h2>Welcome {this.props.name}</h2>
                    <h3>Answer the Questions</h3>
                </div>
                <div>
                   {this.state.questionsArr.map((el)=>{
                        return (
                            <QuestionItem
                                name={el.name} 
                                text={el.text}  
                                var1={el.var1}
                                var2={el.var2}
                                var3={el.var3}
                                var4={el.var4}
                                var5={el.var5}
                                handleQuestion={this.handleQuestionChange}
                            />)
                        })
                    }
                </div>
                <div>
                    <input type="submit" value="Submit" />
               </div>
            </form>
        )
    }
}
export default QuestionList;