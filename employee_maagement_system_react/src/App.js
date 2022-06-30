import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom'
import ListEmployeeComponent from './Components/ListEmployeeComponent';
import HeaderComponent from './Components/HeaderComponent';
import FooterComponent from './Components/FooterComponent';
import CreateEMployeeComponent from './Components/CreateEMployeeComponent';
import UpdateEmployeeComponent from './Components/UpdateEmployeeComponent';
import ViewEmployeeComponent from './Components/ViewEmployeeComponent';
import {createBrowserHistory} from 'history';
import LoginComponent from './Components/LoginComponent';



function App() {
  return (
    <div>
      <Router>
          <HeaderComponent/>
            <div className='bg-light'>
              <div className="container">
                <Switch>
                  <Route path='/employees' component= {ListEmployeeComponent}></Route>
                  <Route path='/add-employee/:id' component= {CreateEMployeeComponent}></Route>
                  {/*<Route exact path='/update-employee/:id' component= {UpdateEmployeeComponent}></Route>*/}
                  <Route path='/view-employee/:id' component= {ViewEmployeeComponent}></Route>
                  <Route path='/' exact component = {LoginComponent}></Route>

                </Switch>
              </div>
            </div>
          <br></br>
          <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
