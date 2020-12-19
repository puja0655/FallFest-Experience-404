import React,{Component} from 'react';
import {Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem,Modal,ModalHeader,ModalBody
    ,Form,FormGroup,Label,Input,Button,Col} from 'reactstrap';
import {REGION} from '../shared/data';   
import axios from 'axios';   
import Header from './HeaderComponent'; 



class Register extends Component{
    
    constructor(props){
        super(props);
        this.state={
            region:REGION,
            value: "IT",
            value2: "Andaman and Nicobar Islands"
            
        }
        this.handleChange =this.handleChange.bind(this); //in order to use this fn in our jsx code we need to bind this
        this.handleChange2 =this.handleChange2.bind(this); 
        this.toggleModal =this.toggleModal.bind(this); 
        this.handleLogin =this.handleLogin.bind(this);
    }
    handleChange = (event) =>
    this.setState({value: event.target.value});

    handleChange2 = (event) =>
    this.setState({value2: event.target.value});


    

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        
        alert('Company name:'+ this.companyname.value +' Password:'+this.password.value);
        event.preventDefault(); //prevent to reassemble the page
    
        axios.post('http://localhost:8000/register',{companyname:this.companyname.value,founder:this.founder.value,mobile:this.mobile.value,password:this.password.value,sector:this.state.value,region:this.state.value2,description:this.description.value})
            .then(response=>{
              console.log(response);
            })
            .catch(error=>{
              console.log(error);
            })
            alert('Your response submitted');
           
    }

    render(){
        const Region = this.state.region.map((region)=>{
            return(
                <option value={region.name}>{region.name}</option>
            );
        });

        return(<>
             <Header/>
            <div className="container"><br/><br/><br/><br/>
                 {/* <Form onSubmit = {this.handleLogin} className="m-5">
                     <FormGroup row>
                         <Label htmlFor="companyname" sm={1}>Company's name</Label>
                         <Col>
                         <Input type="text" id="companyname" name="companyname" innerRef={(input)=> this.companyname = input}></Input>
                         </Col>
                         <Label htmlFor="founder">Founder/Managing Director</Label>
                         <Col>
                         <Input type="text" id="founder" name="founder" innerRef={(input)=> this.founder = input}></Input>
                         </Col>
                     </FormGroup>
                     <FormGroup>
                         <Label htmlFor="password">Password</Label>
                         <Input type="password" id="password" name="password" innerRef={(input)=> this.password = input}></Input>
                     </FormGroup>
                     <FormGroup>
                         <Label htmlFor="confirmpassword">Confirm Password</Label>
                         <Input type="confirmpassword" id="confirmpassword" name="confirmpassword" innerRef={(input)=> this.confirmpassword = input}></Input>
                     </FormGroup>
                     
                     <Button type="submit" value="submit" color="primary">Submit</Button>
                 </Form> */}
                 <div className="row ">
            <div className="col-md-4 py-5 text-white text-center " style={{"backgroundColor":"#BA00E5"}} data-aos="fade-up">
                <div className=" ">
                    <div className="card-body">
                        <img src="http://www.ansonika.com/mavia/img/registration_bg.svg" style={{"width":"30%"}}/>
                        <h2 className="py-3">Register your Startup</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vehicula mauris nec nunc lobortis, at tincidunt ex lobortis. Praesent volutpat aliquam ipsum, ut ultricies odio ornare vitae. Mauris pellentesque magna eget nibh dignissim, sit amet scelerisque lacus auctor. Suspendisse eget lectus non dolor vestibulum imperdiet. Nunc tincidunt erat id augue hendrerit rhoncus. Nulla facilisi. Cras nibh 

                       </p>
                    </div>
                </div>
            </div>
            <div className="col-md-7 py-5 border m-3 p-3" data-aos="fade-down">
                <h4 className="pb-4">Please fill with your details</h4>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup row>
                        <div className="form-group col-md-6">
                          <Input id="companyname" name="companyname" placeholder="Company's Name" className="form-control" type="text" innerRef={(input)=> this.companyname = input}/>
                        </div>
                        <div className="form-group col-md-6">
                          <Input type="text" className="form-control" id="founder" name="founder" placeholder="Founder/Managing Director" innerRef={(input)=> this.founder = input}/>
                        </div>
                      </FormGroup>
                      <FormGroup row>
                        <div className="form-group col-md-8">
                            <Input id="Mobile No." name="Mobile No." placeholder="Mobile No." className="form-control" required="required" type="text" innerRef={(input)=> this.mobile = input}/>
                        </div>
                      </FormGroup>
                      <FormGroup row>  
                        <div className="form-group col-md-6">
                                <Label htmlFor="inputState" sm={1}>Sector</Label>  
                                  <select id="inputState" name="inputState" value={this.state.value} onChange={this.handleChange} className="form-control" innerRef={(input)=> this.sector = input}>
                                    <option value="IT">IT</option>
                                    <option value="Education">Education</option>
                                    <option value="Agriculture">Agriculture</option>
                                    <option value="Environment">Environment</option>
                                    <option value="Ecommerce">Ecommerce</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Health care">Health care</option>
                                  </select>
                        </div>
                        {/* <div className="form-group col-md-12">
                                  <textarea id="comment" name="comment" cols="40" rows="5" className="form-control"></textarea>
                        </div> */}
                        </FormGroup>
                        <FormGroup row className="col-12 col-md-7 offset-3">  
                    
                        <div className="form-group">
                            <div className="form-group">
                                <div className="form-check">
                                  <Input className="form-check-input " type="checkbox" value="" id="invalidCheck2"/>
                                  <Label className="form-check-label" for="invalidCheck2">
                                    <strong>Is your company officially registered?<span style={{"color":"red"}}>*</span></strong>
                                  </Label>
                                </div>
                              </div>
                    
                          </div>
                    </FormGroup>
                    <FormGroup row>  
                        <div className="form-group col-md-7">
                                <Label htmlFor="inputState" sm={1}>Region</Label>  
                                  <select id="inputState" name="inputState" value={this.state.value2} className="form-control" onChange={this.handleChange2} innerRef={(input)=> this.region = input}>
                                    {Region}
                                  </select>
                        </div>
                        
                        </FormGroup>
                        <FormGroup row>
                        <div className="form-group col-md-9">
                            <Input id="password" name="password" placeholder="Password" className="form-control" required="required" type="password" innerRef={(input)=> this.password = input}/>
                        </div>
                      </FormGroup>
                      <FormGroup row>
                        <div className="form-group col-md-9">
                            <Input id="confirmpass" name="confirmpass" placeholder="Confirm Password" className="form-control" required="required" type="password" innerRef={(input)=> this.confirmpass = input}/>
                        </div>
                      </FormGroup>
                      <FormGroup row>
                        <div className="form-group col-md-7">
                            <Input id="file" name="file" placeholder="Upload File" className="form-control" required="required" type="file" innerRef={(input)=> this.file = input}/>
                        </div>
                      </FormGroup>
                      <FormGroup row>
                           <div className="form-group col-md-12">
                                  <Input id="description" placeholder="Description" name="description" cols="40" rows="5" type="textarea" className="form-control" innerRef={(input)=> this.description = input}></Input>
                        </div> 
                      </FormGroup>
                
                      <Button type="submit" value="submit" color="primary" onClick={this.handleLogin}>Submit</Button>

                </Form>
            </div>
        </div>
            </div>
            </>
        );
}
}
export default Register;
