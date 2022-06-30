import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class CreateEMployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,//for single component
            firstName: '',
            lastName: '',
            emailId: ''
        }   
        
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        //this.saveEmployee= this.saveEmployee.bind(this);
    }
    //for single component
    componentDidMount(){
        //
        if(this.state.id==-1){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res)=> {
                let employee = res.data;
                this.setState({firstName: employee.fname, lastName: employee.lname, emailId: employee.emailId});
            });
        }
    }

    saveEmployee=(e) =>{
        e.preventDefault();

        let employee = {fname: this.state.firstName, lname: this.state.lastName, emailId: this.state.emailId};
        console.log('employee => ' + JSON.stringify(employee));
        if(this.state.id==-1){
            EmployeeService.createEmployee(employee).then(res => {
                this.props.history.push('/employees');
                window.location.reload();
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then(res => {
                this.props.history.push('/employees');
                window.location.reload();
            });
            
        }
    }

    //for single component
    getTitle(){
        if(this.state.id==-1){
            return <h3 className='text-center'>Add Employee</h3>
        }else{
            return <h3 className='text-center'>Update Employee</h3>
        }
    }


    changeFirstNameHandler= (event)=>{
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event)=>{
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event)=>{
        this.setState({emailId: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='card col-md-6 offset-md-3 bg-light border-success'  style={{marginTop:"50px"}}>
                            {
                                //for single component
                                this.getTitle()
                            }
                            <div className='card-body'>
                                <form>
                                    <div className='form-group'>
                                        <label> First Name: </label>
                                        <input placeholder='First Name' name = 'firstName' className='form-control' value={this.state.firstName} onChange= {this.changeFirstNameHandler}/>
                                    </div>
                                    <div className='form-group'>
                                        <label> Last Name: </label>
                                        <input placeholder='Last Name' name = 'lastName' className='form-control' value={this.state.lastName} onChange= {this.changeLastNameHandler}/>
                                    </div>
                                    <div className='form-group' controlId="formBasicEmail">
                                        <label> Email Id: </label>
                                        <input placeholder='Email Id' name = 'emailId' className='form-control' value={this.state.emailId} onChange= {this.changeEmailHandler}/>
                                    </div>
                                    <button className='btn btn-success' onClick={this.saveEmployee.bind(this)} style={{marginTop:"10px"}}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "20px",marginTop:"10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        );
    }
}

export default CreateEMployeeComponent;