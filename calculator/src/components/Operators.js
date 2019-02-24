import React,{Component} from 'react';
import {connect} from 'react-redux';

class Operators extends Component{
    render(){
        return(
            <div className="operators-wraper">
                {
                    this.props.operators.map((item)=>{
                        return  <input type="button" key={item} value={item} onClick={this.props.addOperator}/>
                    })
                }
            </div>
        )
    }

}

const mapStateToProps = (state)=>{
    return {operators: state.operations}
} 

const mapDispatchToProps =(dispatch)=>{
 return{
    addOperator: (e)=>dispatch({type: 'ADD_OPERATOR', text: e.target.value})
 }
}


export default connect(mapStateToProps, mapDispatchToProps)(Operators)