import React, { Component } from 'react';
import './home.css';
import { Row, Col, Card, Button } from 'react-bootstrap'

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
                <header className="fixed-header">
                    <div className="collapse bg-dark" id="navbarHeader">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-8 col-md-7 py-4">
                                    <h4 className="text-white">About</h4>
                                    <p className="text-muted">Add some information about the album below, the author, or any other background
                                    context. Make it a few sentences long so folks can pick up some informative tidbits. Then, link them off
                      to some social networking sites or contact information.</p>
                                </div>
                                <div className="col-sm-4 offset-md-1 py-4">
                                    <h4 className="text-white">Contact</h4>
                                    <ul className="list-unstyled">
                                        <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                        <li><a href="#" className="text-white">Like on Facebook</a></li>
                                        <li><a href="#" className="text-white">Email me</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="navbar navbar-dark bg-dark shadow-sm">
                        <div className="container d-flex justify-content-between">
                            <a href="#" className="navbar-brand d-flex align-items-center">
                                <svg src="https://icon-library.com/images/precision-icon/precision-icon-29.jpg" width="30" height="20" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="mr-2"
                                    viewBox="0 0 24 24" focusable="false">
                                    <circle cx="12" cy="13" r="4" /></svg>
                                <strong>Precimatch</strong>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader"
                                aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </div>
                </header>

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
                                                <Button variant="primary">View Details</Button>
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

export default Home;