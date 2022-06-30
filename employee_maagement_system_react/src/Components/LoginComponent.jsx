import React, { Component } from 'react';

class LoginCompoent extends Component {
    constructor(props){
        super(props)

        this.state={
            userName: '',
            password: ''
        }   
        
        this.changeUserNameHandler = this.changeUserNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.loginAdmin = this.loginAdmin.bind(this);
        //this.updateEmployee= this.updateEmployee.bind(this);
    }

    changeUserNameHandler= (event)=>{
        this.setState({userName: event.target.value});
    }

    changePasswordHandler= (event)=>{
        this.setState({password: event.target.value});
    }
    loginAdmin(){
        if(this.state.userName=='root' && this.state.password == 'root'){
            this.props.history.push('/employees');
            window.location.reload();
        }
        else{
            this.props.history.push('/');
            window.location.reload();
        }
    }


    
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 bg-light border-success'  style={{marginTop:"50px"}}>
                            <h3 className='text-center'>Please Login!!</h3>
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> User name: </label>
                                        <input placeholder='User Name' name = 'userName' className='form-control'  onChange= {this.changeUserNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Password: </label>
                                        <input placeholder='Password' name = 'password' className='form-control'  onChange= {this.changePasswordHandler}/>
                                    </div>
                                    <button onClick={()=> this.loginAdmin()} className = 'btn btn-success' style={{marginTop:"10px"}}>Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginCompoent;