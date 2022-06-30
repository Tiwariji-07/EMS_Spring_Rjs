import React, { Component } from 'react';

 

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                        <a href='https://www.linkedin.com/in/vr384/'>
                            <div className='container'>
                                <div className='navbar navbar-brand'>
                                    <img src='./logo192.png'
                                        width="30"
                                        height="30"
                                        className="d-inline-block align-top"
                                        />Employee Management System
                                </div>
                            </div>
                        </a>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;