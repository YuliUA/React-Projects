import React, {Component} from 'react';
import {connect} from 'react-redux';
import Numbers from './Numbers';
import Operators from './Operators';


class Calculator extends Component{
    render(){
        // console.log(this.props)
        return (
            <div className="wraper">
                <form className="form"><div>My Calculator</div> 
                    <input type="text" value={this.props.value} readOnly/>
                    <input type="button" value="Del" onClick={this.props.reset}/>
                </form>
                <div className="container">
                    <Numbers />
                    <Operators/>
                    <button onClick={this.props.equal}>=</button>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        equal: ()=> dispatch({type:'EQUAL'}),
        reset: () => dispatch ({type:'RESET'})
    }
}
const mapStateToProps = (state)=>{
    return{
        value: state.number
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);