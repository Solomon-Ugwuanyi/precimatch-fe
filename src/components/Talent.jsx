import React, { Component } from 'react';
import { Row, Col, Image, Button, NavLink } from 'react-bootstrap'
import MyNav from './NavBar'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import { Link, withRouter } from 'react-router-dom'
import withAuth from "./withAuth";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

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
                <MyNav user={this.props.user} />
                <main role="main">

                    <Jumbotron user={this.props.user} authorize={() => this.props.authorize()} /> {/* Header/Jumbotron End */}

                    <div className="album py-5 bg-light">
                        <div className="container">
                            <Row>
                                <Col xs={12} sm={6} md={6} style={{ display: 'inline-block' }} >
                                    <Image className="col-auto" style={{
                                        border: '1 px solid black',
                                        outline: '#CCCCCC solid 3px',
                                        width: '388px',
                                        height: '388px',
                                        padding: '0',
                                        alignItems: 'justify'
                                    }}
                                        src={this.state.talent.imageUrl} rounded />
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <h2 className="half" >{this.state.talent.name} {this.state.talent.surname}</h2>

                                    <p className="half">
                                        {this.state.talent.about}
                                    </p>
                                    <h2 className="text-left" > Contact Me</h2>
                                    <div style={{ display: 'flex', }}>
                                        <NavLink className="pl-0" href={this.state.talent.linkedinUrl}><LinkedInIcon /></NavLink>
                                        <NavLink className="pl-0" href={this.state.talent.githubUrl}><GitHubIcon /></NavLink>
                                        <NavLink className="pl-0" href={this.state.talent.email}><EmailIcon /></NavLink>
                                        <NavLink className="pl-0" href={this.state.talent.linkedinUrl}><TwitterIcon /></NavLink>
                                    </div>
                                </Col>

                            </Row>

                            <h2 className="section-header">My Portfolio</h2>

                            <Row className="portfolio-section" >
                                {this.state.projects.map((project, i) => {
                                    return (
                                        <>
                                            <Col key={i} xs={12} sm={6} md={4} >
                                                <div className="project-card my-2" >
                                                    <span style={{ color: 'blue' }}>{project.projectName}</span>
                                                    <Image className="project-pic" width={346} height={240} src={project.projectImageUrl} />
                                                    <div className={"d-flex justify-content-around"}>
                                                        <Button style={{ backgroundColor: "#e3058c", fontSize: "14px" }}  >Git <a href=""><GitHubIcon style={{ fontSize: '1rem' }} src={project.projectGithub} /></a></Button>
                                                        <Button href="https://precimatch-fe.herokuapp.com/" height="5px" className="btn-primary sign-up"> Demo</Button>


                                                    </div>
                                                </div>


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

export default withAuth(withRouter(Talent));