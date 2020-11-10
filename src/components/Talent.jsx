import React, { Component } from 'react';
import './home.css';
import { Row, Col, Image } from 'react-bootstrap'
import { Link, withRouter } from 'react-router-dom'

class Talent extends Component {

    render() {
        return (
            <div style={{ backgroundImage: `url("https://cdn.hipwallpaper.com/m/85/71/LSka14.jpg")` }}>
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
                            <a href="https://navigable.com" className="navbar-brand d-flex align-items-center">
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
                    </section> {/* Header/Jumbotron End */}

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <Row>
                                <Col xs={12} sm={6} md={3} style={{ display: 'inline-block' }} >
                                    <Image src="https://cvmedici.humanitas.it/uploads/doctors/stefano_miceli/stefano_miceli_img_profile.jpg" rounded />
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <p className="half">
                                        Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>

                                </Col>
                                <Col xs={12} sm={6} md={3}>
                                    <p className="three-quarters">
                                        Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Col>
                            </Row>

                            <h1 className="section-header">My Portfolio</h1>
                            <Row>
                                <Col className="project-pic" xs={12} sm={6} md={4} >
                                    <Image width={292} height={336} src="https://blog.tubebuddy.com/image.axd?picture=/YT%20News/hp1.png" rounded />
                                </Col>
                                <Col className="project-pic" xs={12} sm={6} md={4} >
                                    <Image width={292} height={336} src="https://thelinkedinman.com/wp-content/uploads/2015/02/new-homepage-image-2.jpg" rounded />
                                </Col>
                                <Col className="project-pic" xs={12} sm={6} md={4} >
                                    <Image width={292} height={336} src="https://i.ytimg.com/vi/w5GQcHxJH1w/maxresdefault.jpg" rounded />
                                </Col>
                            </Row>




                        </div>
                    </div>

                </main>
                {/* Footer Start End */}
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
            </div >
        );
    }
}

export default Talent;