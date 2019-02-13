
import React, {Component} from 'react';

class LogIn extends Component{
    render(){
        return(
            <div className ="container">
                <form>
                    <div className="form-group row">
                        <label forName="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label forName="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" className="form-control" id="inputPassword3" placeholder="Password" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-10">
                        <button type="submit" className="btn btn-primary">Sign in</button>
                        </div>
                    </div>
                    </form>
            
            
            </div>        
                
        )
    }
}
export default LogIn;