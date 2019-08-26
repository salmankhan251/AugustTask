import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {placedOrder} from './Action';
import {Button} from 'react-bootstrap';


class PlaceOrder extends Component{
    constructor(props){
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            email: '',
            phoneNumber:'',
            CPassword: '',
            Password: ''
        };
    }

    onChange = (event) => {

        this.setState({
                [event.target.name]: event.target.value
            }
        );
    }
    submitDataButton = (event) =>
        {
            event.preventDefault();
            /*this.props.placeOrder(this.state);*/
            this.props.dispatch(placedOrder(this.state.firstname,this.state.lastname,this.state.email,this.state.phoneNumber,this.state.password,this.state.CPassword))
    }
    render(){
        return(
            <div style={{marginTop:'18px',marginLeft:'80px',border:'2px solid black',marginRight:'800px'}}>
                <form onSubmit={this.submitDataButton}>
                    First Name:<input type="text" name="firstname"  value={this.state.firstname} onChange={this.onChange.bind(this)}/><br/>
                    Last Name:<input type="text" name="lastname" value={this.state.lastname} onChange={this.onChange.bind(this)}/><br/>
                    Phone Number:<input type="text" name="phoneNumber" placeholder="xxx-xxxx-xxx" pattern="^\d{3}-\d{4}-\d{3}$" value={this.state.onChange} onChange={this.onChange.bind(this)}/><br/>
                    Email:<input type="email" name="email" value={this.state.email} onChange={this.onChange.bind(this)}/><br/>
                    Password:<input type="password" name="Password" value={this.state.Password} onChange={this.onChange.bind(this)}/><br/>
                    Confirm Password:<input type="text" name="CPassword" value={this.state.CPassword} onChange={this.onChange.bind(this)}/><br/>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
        );
    }
}
function  mapStateToProps(dispatch){
    return bindActionCreators({placedOrder}, dispatch);
}
export default connect(null,mapStateToProps)(PlaceOrder)
