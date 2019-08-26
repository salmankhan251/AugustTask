import React, {Component} from 'react';
import {connect} from 'react-redux';

class seeOrder extends Component{
    render(){
        return(
            <div style={{marginTop:'18px',marginLeft:'80px',border:'2px solid black',marginRight:'800px'}}>
                <table>
                    <tbody>
                    <th>First Name:{this.props.PlaceOrder.firstname}</th>
                    <th> Last Name:{this.props.PlaceOrder.lastname}</th>
                    <th>Phone Number:{this.props.PlaceOrder.phoneNumber}</th>
                    <th>Email:{this.props.PlaceOrder.email}</th>

                    </tbody>
                </table>

            </div>

        );
    }
}
function  mapStateToProps(state){
    return {
        PlaceOrder:state.PlaceOrder
    }
}
export default connect(mapStateToProps)(seeOrder)