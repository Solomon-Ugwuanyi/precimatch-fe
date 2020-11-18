import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import Modal from "./Modal";
import ModalForm from "./Modal";
function Jumbotron(props) {
    //
    // const [id, setId] = React.useState(null)
    // React.useEffect(()=>{
    //     if(props.user) {
    //         setId(props.user._id)
    //     }
    //
    // },[id])
    // console.log(props.match.params.id)
    return (

        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Precise Matches</h1>
                    <h5 className="mb-4">Tinder for Developer Jobs</h5>
                    <img src="https://miro.medium.com/max/2160/1*Dpb3vjQtqb4D1nAU4RnRWA@2x.png" />

                    <p className="lead text-muted mb-4">Never lose an opportunity again due to downtime on your portfolio website. <br></br>
                    Host your profile and project demos on Precimatch and recruiters who like them with contact you.<br></br>
                    Be Visible with PreciMatch!</p>
                    {!props.user._id &&
                        <>
                            <Link to={'/login'}>
                                <Button
                                    className="sign-in mr-4" variant="outline-secondary">Sign in</Button>
                            </Link>

                            <Link to={'/signUp'} >
                                <Button className="sign-up" variant="outline-secondary">Sign Up</Button>
                            </Link>
                        </>
                    }{props.user._id && props.match.params.id === props.user._id && <ModalForm authorize={() => props.authorize()} user={props.user} />}

                </div>
            </section>
        </div>
    )
}
export default withRouter(Jumbotron)