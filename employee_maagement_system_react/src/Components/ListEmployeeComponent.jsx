import React, { Component } from 'react';
import EmployeeService from '../Services/EmployeeService';


class ListEmployeeComponent extends Component {
    
    constructor(props){
        super(props)

        this.state= {
            employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        //const navigate = useNavigate();
        this.editEmployee = this.editEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
        this.logoutEmployee = this.logoutEmployee.bind(this);

    }

    //without REST API call
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then( res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id !== id)});
        });
    }

    editEmployee(id){
        this.props.history.push(`/add-employee/${id}`);
        window.location.reload();

    }

    viewEmployee(id){
        this.props.history.push(`/view-employee/${id}`);
        window.location.reload();

    }

    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({employees: res.data});
        });
    }
    addEmployee(){
        this.props.history.push('add-employee/-1');
        window.location.reload();
    }

    logoutEmployee(){
        this.props.history.push('/');
        window.location.reload();
    }
    
    
    render() {
        return (
            <div>
                <h2 className='text-center'> Employees List</h2>
                    <button className='btn btn-success' onClick={this.addEmployee} style={{marginTop:'20px'}}>Add Employee</button>
                    <button onClick={()=> this.logoutEmployee()} className='btn btn-danger' style={{marginTop:'20px',marginLeft:'20px'}}>Logout</button>
                <div className='row'>
                    <table className='table table-striped table-bordered table-hover table-dark' style={{marginTop:'20px'}}>
                        <thead>
                            <tr>
                                <th>Employee first name</th>
                                <th>Employee last name</th>
                                <th>Employee email id</th>
                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employees.map(
                                    employee =>
                                    <tr key={employee.id}>
                                        <td>{employee.fname}</td>
                                        <td>{employee.lname}</td>
                                        <td>{employee.emailId}</td>
                                        <td>
                                            <button onClick={()=> this.editEmployee(employee.id)} className = 'btn btn-success' style={{marginLeft: "20px"}}>Update</button>
                                            <button onClick={()=> this.deleteEmployee(employee.id)} className = 'btn btn-danger' style={{marginLeft: "40px"}}>Delete</button>
                                            <button onClick={()=> this.viewEmployee(employee.id)} className = 'btn btn-info' style={{marginLeft: "40px"}}>View</button>
                                        </td>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>

                
            </div>
        );
    }
}

export default ListEmployeeComponent;