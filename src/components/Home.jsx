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
            <div>
                <header>
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
                                <svg xmlns="https://icon-library.com/images/precision-icon/precision-icon-29.jpg" width="20" height="20" fill="none" stroke="currentColor"
                                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" className="mr-2"
                                    viewBox="0 0 24 24" focusable="false">
                                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
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
                            <h1>Album example</h1>
                            <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator,
                  etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                            <p>
                                <a href="#" className="btn btn-primary my-2">Main call to action</a>
                                <a href="#" className="btn btn-secondary my-2">Secondary action</a>
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