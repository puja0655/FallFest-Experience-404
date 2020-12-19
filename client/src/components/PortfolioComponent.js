import React,{Component} from 'react';
import axios from 'axios';
class Port extends Component {
   constructor(props){
      super(props);
    this.state={
          companies:[]
    }
   }
   componentDidMount(){
         axios.get('http://localhost:8000/register').then(res =>{
            console.log(res);
            this.setState({companies:res.data})
         });
   }
   render(){
       const company = this.state.companies.map((company)=>{
           return(
               <div key={company.id}>
                   <div>{company.name}</div>                          {/*UI for the card*/}

               </div>
           );
       })


    return(
        <div>
           {company}
        </div>
    );
   }

}
export default Port;