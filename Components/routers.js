import React, {Component} from 'react';
import PlaceOrder from './placeOrder';/*
import {Button} from 'react-bootstrap';*/
import seeOrder from './seeOrder';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom'

export default class Routers extends Component{

    render(){
  return(
      <Router>
      <div style={{marginTop:'200px',marginLeft:'700px'}}>


          <Link to="/placeOrder"><button style={{backgroundColor:'lightGray',marginLeft:'40px',width:'200px',height:'80px'}}>Place Order</button></Link>
          <Link to="/SeeOrders"><button style={{backgroundColor:'lightGray',marginLeft:'40px',width:'200px',height:'80px'}}>See Orders</button></Link>

          <Route path="/placeOrder" component={PlaceOrder} />
          <Route path="/SeeOrders" component={seeOrder}/>

      </div>
      </Router>

  );
    }


 /*       return (
            <Router>
                <div>
                    <Container fluid>
                        <div style={{borderWidth:1, borderColor:'red'}}>
                            <Row>
                                <Col sm={3} className = "side">
                                    <ul>
                                        <Button className = "button" variant = "secondary" size ="lg" block> <Link to="/placeOrder">placeOrder</Link>
                                        </Button>
                                        <Button className = "button" variant = "secondary"  size ="lg" block> <Link to="/SeeOrders">SeeOrders</Link>
                                        </Button>
                                    </ul>
                                </Col>
                                <Col>
                                    <Route path="/placeOrder" component={PlaceOrder} />
                                    <Route path="/SeeOrders" component={seeOrder}/>

                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Router>
        );*/


}





























































/*
import React from 'react';
import { Container,Row, Col,Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Registration from './registration';
import Result from './resultdata';
export default class Routers extends React.Component{
    render(){
        return (
            <Router>
                <div id="page-wrap">
                    <Container fluid className="sideBarClass">
                        <div style={{borderWidth:1, borderColor:'red'}}>
                            <Row>
                                <Col sm={3} className = "side">
                                    <ul>
                                        <Button className = "button" variant = "secondary" size ="lg" block style = {{borderColor:'black',width:'300px',height:'80px'}}> <Link to="/pOrder">Place Order</Link>
                                        </Button>
                                        <Button className = "button" variant = "secondary"  size ="lg" block style = {{borderColor:'black',width:'300px',height:'80px'}}> <Link to="/seeOrder">See Order</Link>
                                        </Button>
                                    </ul>
                                </Col>
                                <Col>
                                    <Route path="/placeOrder" component={Registration} />
                                    <Route path="/SeeOrders" component={Result}/>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Router>
        );
    }
}*/
