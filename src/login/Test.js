/* /*  import React, { Component } from 'react';


//class Test extends React.Component {
   /*
  constructor(props){
     super(props);

     this.state = {
         fields: {},
         errors: {}
     }
  }

  handleValidation(){
      let fields = this.state.fields;
      let errors = {};
      let formIsValid = true;

      //Name
      if(!fields["name"]){
         formIsValid = false;
         errors["name"] = "Cannot be empty";
      }

      if(typeof fields["name"] !== "undefined"){
         if(!fields["name"].match(/^[a-zA-Z]+$/)){
            formIsValid = false;
            errors["name"] = "Only letters";
         }        
      }

      //Email
      if(!fields["email"]){
         formIsValid = false;
         errors["email"] = "Cannot be empty";
      }

      if(typeof fields["email"] !== "undefined"){
         let lastAtPos = fields["email"].lastIndexOf('@');
         let lastDotPos = fields["email"].lastIndexOf('.');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
     }  

     this.setState({errors: errors});
     return formIsValid;
 }

 contactSubmit(e){
      e.preventDefault();

      if(this.handleValidation()){
         alert("Form submitted");
      }else{
         alert("Form has errors.")
      }

  }

  handleChange(field, e){         
      let fields = this.state.fields;
      fields[field] = e.target.value;        
      this.setState({fields});
  }

  render(){
      return (
          <div>           
             <form name="contactform" className="contactform" onSubmit= {this.contactSubmit.bind(this)}>
                  <div className="col-md-6">
                    <fieldset>
                         <input ref="name" type="text" size="30" placeholder="Name" onChange={this.handleChange.bind(this, "name")} value={this.state.fields["name"]}/>
                         <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        <br/>
                       <input refs="email" type="text" size="30" placeholder="Email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]}/>
                       <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                       <br/>
                       <input refs="phone" type="text" size="30" placeholder="Phone" onChange={this.handleChange.bind(this, "phone")} value={this.state.fields["phone"]}/>
                       <br/>
                       <input refs="address" type="text" size="30" placeholder="Address" onChange={this.handleChange.bind(this, "address")} value={this.state.fields["address"]}/>
                       <br/>
                   </fieldset>
                </div>
                <input type="submit"/>
            </form>
          </div>
    )
  }
} */






 /*    constructor(props) {
        super(props);
        this.state = {
            items: [],
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div className="App-header">
                <h3>TODO</h3>
                <TodoList items={this.state.items}/>
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.text}
                    />
                    <button>
                        Add #{this.state.items.length + 1}
                    </button>
                </form>
            </div>
        );
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if(!this.state.text.length) {
            return;
        }
        const newItem = {
            id: Date.now(),
            text: this.state.text,
        }
        this.setState(prev => ({
            items: prev.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}

 */
// ========================================
//import 'bootstrap/dist/css/bootstrap.css';
//import { withRouter } from 'react-router-dom';
//import {  Container, Row, Col } from 'reactstrap';
//import Button from 'reactstrap/lib/Button';
//import Input from 'reactstrap/lib/Input';

/* class Test extends Component {
constuctor() {
this.routeChange = this.routeChange.bind(this);
}
routeChange(){
 let path = `newPath`;
 //this.props.history.push(path);
 }
render() {
 return (
<div className="app flex-row align-items-center">
     <Container>
  ...
                 <Row>
                   <Col xs="6">                      
                     <Button color="primary" className="px-4"
                       onClick={this.routeChange}
                         >
                         Login
                      </Button>
                   </Col>
                   <Col xs="6" className="text-right">
                     <Button color="link" className="px-0">Forgot password?</Button>
                   </Col>
                 </Row>
            ...
     </Container>
   </div>
 );
}
} */
//class Test extends React.Component {
  /*  triggerFoo() {
     this.foo.toggle();
   }
   render() {
     return (
       <div className="app flex-row align-items-center">
       <Container>
         <Foo ref={foo => this.foo = foo} />
         <Button onClick={this.triggerFoo.bind(this)}/>
         </Container>
       </div>
     );  
   }
 }
 
 class Foo extends React.Component {
   state = {foo: false}
   toggle() {
     this.setState({
       foo: !this.state.foo
     });
   }
   render() {
     return (
       <div>
         Foo Triggered: {this.state.foo.toString()}
       </div>
     );
   }
 }
 
 
 class Button extends React.Component {
   render() {
     return (
       <button onClick={this.props.onClick}>
         Click This
       </button>
     );
   };
 } */
 
/* 
   
class Test extends React.Component {

   constructor(props){
      super(props);
      this.state = {
           active:'FIRST'
       }
       this.handleClick = this.handleClick.bind(this);
      }

   handleClick() {
       let active = this.state.active;
       let newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
       this.setState({
           active: newActive
       });
   }

   render(){     
      return ( 
         <Container>
           <div>
               {this.state.active === 'FIRST' ? (
                   <Button>bghg</Button>
               ) : this.state.active === 'SECOND' ? (
                   <Input>yyyyyyyy</Input>
               ) : null}
               <button type="button" onClick={this.handleClick}>
                   Toggle
               </button>
           </div>
           </Container>
           )
   };
}

export default withRouter(Test);
//export default Parent;
 */ 