import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

// import './Navigation.css';


class Navigation extends React.Component {

 constructor(props) {
     super(props);
 }

 onSelect = (e) => {
     this.props.selected({activeKey: e});
    //  this.setState({activeKey: e});
 }

render() {
    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto" activeKey={this.props.activeKey} onSelect={this.onSelect}>
                <Nav.Link href="#goals">Chicken Goals</Nav.Link>
                <Nav.Link href="#features">Other Goals</Nav.Link>
            </Nav>
        </Navbar>
    );
  }
}
export default Navigation;
