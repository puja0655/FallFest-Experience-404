import React,{Component} from 'react';
import axios from 'axios';
import Register from './RegisterComponent';
import { Jumbotron } from 'reactstrap';
import {Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Modal,ModalHeader,ModalBody
,Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {NavLink} from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
            isModalOpen:false
        };
        this.toggleNav =this.toggleNav.bind(this); //in order to use this fn in our jsx code we need to bind this
        this.toggleModal =this.toggleModal.bind(this); 
        this.handleLogin =this.handleLogin.bind(this);
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert('Company name:'+ this.companyname.value +'Password:'+this.password.value);
        event.preventDefault(); //prevent to reassemble the page
    
        axios.post('http://localhost:8000/register',{companyname:this.companyname.value,password:this.password.value})
            .then(response=>{
              console.log(response);
            })
            .catch(error=>{
              console.log(error);
            })
            alert('Your response submitted');
           this.toogleModal();
    }

    render(){
      return(  <>
        <header id="header" class="fixed-top d-flex align-items-center">
    <div class="container d-flex align-items-center">

      <div class="logo mr-auto">
   {/*    <a href="index.html"><img src="assets/img/majorlogo.png" alt="" class="col-6"/></a>  */}
        <h1 class="glow"><a href="index.html"/><span>Invest-E-Neur</span></h1>


         
      </div>

      <nav class="nav-menu d-none d-lg-block">
        <ul>
          <li class="active"><a href="/#header">Home</a></li>
          <li><a href="/#about">About</a></li>
          <li><a href="/#services">Services</a></li>
          <li><a href="/#portfolio">Portfolio</a></li>
          <li><a href="/#team">Team</a></li>
          <li><a href="/premium">Pricing</a></li>
         {/*  <li class="drop-down"><a href="">Drop Down</a>
            <ul>
              <li><a href="/#">Drop Down 1</a></li>
              <li class="drop-down"><a href="/#">Drop Down 2</a>
                <ul>
                  <li><a href="/#">Deep Drop Down 1</a></li>
                  <li><a href="/#">Deep Drop Down 2</a></li>
                  <li><a href="/#">Deep Drop Down 3</a></li>
                  <li><a href="/#">Deep Drop Down 4</a></li>
                  <li><a href="/#">Deep Drop Down 5</a></li>
                </ul>
              </li>
              <li><a href="/#">Drop Down 3</a></li>
              <li><a href="/#">Drop Down 4</a></li>
              <li><a href="/#">Drop Down 5</a></li>
            </ul>
          </li> */}
          <li><a href="/#contact">Contact</a></li>

          <li class="get-started"><a href="/register">Get Started</a></li>
        </ul>
      </nav>

    </div>
  </header>


        {/* <Navbar dark expand="md">
        <div className="container">
            <NavbarToggler onClick={this.toggleNav}/>
          <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"/>
          </NavbarBrand>
          <Collapse isOpen={this.state.isNavOpen} navbar>
           <Nav navbar>
               <NavItem>
                   <NavLink className="nav-link" to="/home">
                       <span className="fa fa-home fa-lg"></span>Home
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink className="nav-link" to="/home">
                       <span className="fa fa-info fa-lg"></span>About us
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink className="nav-link" to="/home">
                       <span className="fa fa-list fa-lg"></span>Menu
                   </NavLink>
               </NavItem>
               <NavItem>
                   <NavLink className="nav-link" to="/home">
                       <span className="fa fa-address-card fa-lg"></span>Contact us
                   </NavLink>
               </NavItem>
           </Nav>
           <Nav className="ml-auto" navbar>
               <NavItem>
                   <Button outline onClick={this.toggleModal}>
                       <span className="fa fa-sign-in fa-lg"></span> Login
                   </Button>
               </NavItem>
           </Nav>
         </Collapse>
        </div>
        </Navbar>*/}
       
        
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Sign in</ModalHeader>
            <ModalBody>
                 <Form onSubmit = {this.handleLogin}>
                     <FormGroup>
                         <Label htmlFor="companyname">Company's name</Label>
                         <Input type="text" id="companyname" name="companyname" innerRef={(input)=> this.companyname = input}></Input>
                     </FormGroup>
                     <FormGroup>
                         <Label htmlFor="password">Password</Label>
                         <Input type="password" id="password" name="password" innerRef={(input)=> this.password = input}></Input>
                     </FormGroup>
                     
                     
                     <Button type="submit" value="submit" color="primary">Login</Button>
                 </Form>
            </ModalBody>
        </Modal> 
        </>
      );

    }
}

export default Header;
