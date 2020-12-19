import React,{Component} from 'react';
import  Home  from './HomeComponent';
import  Header  from './HeaderComponent';
import  Footer  from './FooterComponent';
import Premium from './PremiumComponent';
import Register from './RegisterComponent';
import {Switch,Route,Redirect} from 'react-router-dom'
import Port from './PortfolioComponent';
class Main extends Component{
      render(){
          return(
              <div>
                  
                  <Switch>
                      <Route path='/home' component= {Home}/>
                      <Route path = '/register' component={Register}/>
                      <Route path = '/premium' component={Premium}/>
                      <Route path = '/port' component={Port}/>
                      <Redirect to='/home'/>
                  </Switch>
                  <Footer/>
              </div>
          );
      }

}
export default Main;