import React, { Component } from 'react';

import { Row, Col, Card, } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import MyNav from './NavBar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import {Form, Button , Container} from 'react-bootstrap'
class SignUp extends Component {


    constructor(props) {
        super(props);
        this.state = {
            user:{}
        }
    }

    submitData =async (e) => {
        e.preventDefault()
        try{
            const response = await fetch(process.env.REACT_APP_URL+'/talents', {
                method:'POST',
                body:JSON.stringify(this.state.user),
                headers:{
                    'Content-Type':'application/json'
                }
            })
            const data = await  response.json()
            console.log(data)
        }catch (e) {

        }


    }


    render() {
        return (
            <div >
                <MyNav />

                <main role="main">
                    <Container className={"d-flex"} style={{height:'70vh'}}>
                        <Form className={"w-50 m-auto py-4"}>
                            <Form.Group controlId="formBasicEmail">

                                <Form.Control type="email" value={this.state.user["email"]} placeholder="Enter email" onChange={(e)=> this.setState({user:{...this.state.user, email:e.target.value}})} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">

                                <Form.Control type="name" value={this.state.user["name"]} placeholder="Name" onChange={(e)=> this.setState({user:{...this.state.user, name:e.target.value}})} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">

                                <Form.Control type="Surname" value={this.state.user["surname"]} placeholder="Surname"  onChange={(e)=> this.setState({user:{...this.state.user, surname:e.target.value}})}/>
                            </Form.Group>


                            <Form.Group controlId="formBasicPassword">

                                <Form.Control type="password" value={this.state.user["password"]} placeholder="Password" onChange={(e)=> this.setState({user:{...this.state.user, password:e.target.value}})} />
                            </Form.Group>

                            <Button variant="primary" type="submit" onClick={(e) => this.submitData(e)} >
                                Submit
                            </Button>
                        </Form>

                    </Container>


                </main>

                <Footer />
            </div>
        );
    }
}

export default withRouter(SignUp);