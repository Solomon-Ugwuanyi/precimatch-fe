import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap'
import MyNav from './NavBar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import { Link, withRouter } from 'react-router-dom'

class Talent extends Component {
    state = {
        talent: {},
        projects: []
    }



    componentDidMount = async () => {
        const id = this.props.match.params.id
        const response = await fetch(`${process.env.REACT_APP_URL}/talents/${id}`)
        const talent = await response.json()
        this.setState({ talent })


        const res = await fetch(`${process.env.REACT_APP_URL}/talents/${id}/projects`)
        const projects = await res.json()
        this.setState({ projects })
    }

    render() {
        console.log("talent detals from talent page", this.state.talent)
        console.log("projects detals from talent page", this.state.projects)
        return (
            <div style={{}}>
                <MyNav />
                <main role="main">

                    <Jumbotron /> {/* Header/Jumbotron End */}

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <Row>
                                <Col xs={12} sm={6} md={3} style={{ display: 'inline-block' }} >
                                    <Image style={{
                                        border: '1 px solid black',
                                        outline: '#CCCCCC solid 3px',
                                        width: '388px',
                                        height: '388px'
                                    }}
                                        src={this.state.talent.imageUrl} rounded />
                                </Col>
                                <Col xs={12} sm={6} md={6}>
                                    <h2 className="half" >{this.state.talent.name} {this.state.talent.surname}</h2>

                                    <p className="half">
                                        {this.state.talent.aboutMe}
                                    </p>

                                </Col>
                                <Col xs={12} sm={6} md={3}>
                                    <p className="three-quarters">
                                        Loremm ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </p>
                                </Col>
                            </Row>

                            <h1 className="section-header">My Portfolio</h1>

                            <Row className="portfolio-section" >
                                {this.state.projects.map((project, i) => {
                                    return (
                                        <>
                                            <Col key={i} xs={12} sm={6} md={4} >
                                                <Image className="project-pic" width={346} height={240} src={project.projectImageUrl} rounded />
                                            </Col>
                                        </>
                                    )

                                })}

                            </Row>




                        </div>
                    </div>

                </main>
                {/* Footer Start End */}
                <Footer />
            </div >
        );
    }
}

export default Talent;