import React,{Component} from 'react';
import { connect } from "react-redux";

class Numbers extends Component{
    render(){
        console.log('num props', this.props)
        return(
            <div className="numb-wraper">
                {
                    this.props.btns.map((item)=>{
                       return <input type="button" key={item} value={item} onClick={this.props.typeNumber}/>
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps= (dispatch)=>{
    return{
        typeNumber: (e)=>dispatch({type:'ADD_ELEM', text: e.target.value})
    }
}

const mapStateToProps=(state)=>{
   return{
        btns: state.buttons
   } 
}


export default connect(mapStateToProps,mapDispatchToProps) (Numbers)