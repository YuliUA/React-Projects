import React,{Component} from 'react';
import QuestionList from './QuestionList';

class InitUser extends Component{
    constructor(){
        super();
        this.state ={
            name: '',
            submitted: false
        }
        this.switcherComponents = this.switcherComponents.bind(this)
        this.handleSubmitAnswers = this.handleSubmitAnswers.bind(this)
    }

    handleNameSubmit(e){
        let name = this.refs.name.value;
        this.setState({
            name: name,
        });
        e.preventDefault();
    }
    
    handleSubmitAnswers(e){
        e.preventDefault();
        let submitted = this.state.submitted;
        if(e.target.id === 'submit'){
            submitted=true;
        }


        this.setState({submitted: submitted}, function(){
            console.log(this.state)
        })

    }

    switcherComponents(){
        if(this.state.name && this.state.submitted===false){
            console.log(this.state.name)
          return  <QuestionList 
                        name={this.state.name}  
                        handleSubmit = {this.handleSubmitAnswers}
                        answers = {this.handleSubmitAnswers}/> ;
        } else if(!this.state.name && this.state.submitted===false){
            return  <div>
                        <h2>Please enter your name to begin the survey</h2>
                        <form onSubmit={this.handleNameSubmit.bind(this)}>
                            <input type="text" placeholder="Enter Name..." ref="name" />
                        </form>
                    </div>;
        } else if(this.state.submitted===true){
            return  <div>
                        <h2>Thank you {this.state.name} </h2>
                    </div>
        }
    }

    render(){
        return(
            <div>
                {this.switcherComponents()}
            </div>
        )
    }
}

export default InitUser;
