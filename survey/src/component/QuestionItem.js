import React,{Component} from 'react';

class QuestionItem extends Component{
    constructor(){
        super();
    
        this.handleQuestionChange = this.handleQuestionChange.bind(this);
    }
    
    handleQuestionChange(e){
       this.props.handleQuestion(e)
    }

    
    render(){
        return(
            <div className="questionItem">
                <label className="label">{this.props.text}</label><br />
                <input type="radio" className="variant" name={this.props.name} value={this.props.var1} onChange={this.handleQuestionChange} />{this.props.var1}<br />
                <input type="radio" className="variant" name={this.props.name} value={this.props.var2} onChange={this.handleQuestionChange} />{this.props.var2}<br />
                <input type="radio" className="variant" name={this.props.name} value={this.props.var3} onChange={this.handleQuestionChange} />{this.props.var3}<br />
                <input type="radio" className="variant" name={this.props.name} value={this.props.var4} onChange={this.handleQuestionChange} />{this.props.var4}<br />
                <input type="radio" className="variant" name={this.props.name} value={this.props.var5} onChange={this.handleQuestionChange} />{this.props.var5}<br />
          </div>
        )
    }
}
export default QuestionItem;