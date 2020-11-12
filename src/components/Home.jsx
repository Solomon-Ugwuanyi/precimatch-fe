import React, { Component } from 'react';
import './home.css';
import { Row, Col, Card, } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'
import MyNav from './NavBar'

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
            <div style={{ backgroundImage: `url("https://cdn.hipwallpaper.com/m/85/71/LSka14.jpg")` }}>
                <MyNav />

                <main role="main">

                    <section className="jumbotron text-center">
                        <div className="container">
                            <h1>Precise Matches</h1>
                            <h5>Tinder for Developer Jobs</h5>
                            <p className="lead text-muted">Scan through a carefully curated directory of job ready developers, equipped with industry best practices and latest stacks. See some projects you like? Shoot them an email!</p>
                            <p spacing="30px">
                                <a href="#" className="btn btn-primary my-2">Sign In</a>
                                <a href="#" className="btn btn-secondary my-2">Sign Up</a>
                            </p>
                        </div>
                    </section>

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <Row >
                                {this.state.talents.map((talent) => (
                                    <Col key={talent._id} xs={12} sm={6} md={4} lg={3}>
                                        <Card height={24}>
                                            <Card.Img variant="top" src={talent.imageUrl} />
                                            <Card.Body>
                                                <Card.Title>{talent.name} {talent.surname}</Card.Title>
                                                <h2>{talent.headline}</h2>
                                                <Card.Text>{talent.aboutMe}
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

                <footer className="text-muted">
                    <div className="container">
                        <p className="float-right">
                            <a href="#">Back to top</a>
                        </p>
                        <p>Album example is &copy; Bootstrap, but please download and customize it for yourself!</p>
                        <p>New to Bootstrap? <a href="https://getbootstrap.com/">Visit the homepage</a> or read our <a
                            href="../getting-started/introduction/">getting started guide</a>.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default withRouter(Home);