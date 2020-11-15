import React, { Component } from 'react';

import { Row, Col, Card, } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import MyNav from './NavBar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'

class Home extends Component {

    state = {
        talents: []
    }


    componentDidMount = async () => {
        const response = await fetch('http://localhost:4500/talents')
        const data = await response.json();
        this.setState({ talents: data })
    }



    render() {
        return (
            <div >
                <MyNav />

                <main role="main">

                    <Jumbotron />

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <Row >
                                {this.state.talents.map((talent) => (
                                    <Col key={talent._id} xs={12} sm={6} md={4} lg={3} className="mb-3">
                                        <Card height={24}>
                                            <Card.Img variant="top" src={talent.imageUrl} />
                                            <Card.Body>
                                                <Card.Title className="line-clamp">{talent.name} {talent.surname}</Card.Title>
                                                <h3>{talent.headline}</h3>
                                                <Card.Text>{talent.techStack}
                                                </Card.Text>
                                                <Link style={{ border: 'none', background: '#008001', color: '#fff', fontSize: '14px' }} className="btn btn-primary" to={`/talent/${talent._id}`}>
                                                    Review Details
                                                </Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>


                        </div>
                    </div>

                </main>

                <Footer />
            </div>
        );
    }
}

export default withRouter(Home);