import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)

        this.state={
            id: this.props.match.params.id,//to get id from url
            //firstName: '',
            //lastName: '',
            //emailId: '',
            employee: {}
        }   
    }
    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( (res)=> {
             this.setState({employee: res.data});
            //this.setState({firstName: employee.fname, lastName: employee.lname, emailId: employee.emailId});
        });
    }

    home(){
        this.props.history.push('/employees');
        window.location.reload();
    }

    render() {
        return (
            <div>
                <br></br>
                <br></br>
                <div className='card col-md-6 offset-md-3 bg-light border-success'  style={{marginTop:"50px"}}>
                    <h3 className='card card-header card-title text-center'>View Employee Details</h3>
                    <div className='card-body' style={{marginTop:"20px"}}>
                        <div className='row'>
                            <label><b>Employee first name: </b></label>
                            <div>{this.state.employee.fname}</div>
                        </div>
                        <div className='row'>
                            <label><b>Employee last name: </b></label>
                            <div>{this.state.employee.lname}</div>
                        </div>
                        <div className='row'>
                            <label><b>Employee Email Id: </b></label>
                            <div>{ this.state.employee.emailId}</div>
                        </div>
                        <div className='row'>
                            <button className='btn btn-success' onClick={this.home.bind(this)} style={{marginTop:"10px"}}>Home</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;