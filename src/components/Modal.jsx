import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap'
function ModalForm(props) {
    const [show, setShow] = React.useState(false);
    const [details, setDetails] = React.useState({})
    React.useEffect(() => {
        setDetails(props.user)
    }, [])

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { user } = props

    const submitData = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(process.env.REACT_APP_URL + '/talents/' + user._id, {
                method: 'PUT',
                body: JSON.stringify(details),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            })
            if (response.ok) {
                //this.props.history.push('/')
                handleClose()
                props.authorize()

            }
            console.log(response)
            const data = await response.json()
            console.log(data)
        } catch (e) {
            console.log(e)
        }

    }
    return (
        <>
            <Button style=
                {{
                    border: 'none',
                    background: '#008001',
                    color: '#fff',
                    fontSize: '14px',

                }} variant="outline-secondary" onClick={handleShow}>Edit</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Update Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className={"w-50 m-auto py-4"}>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="email" value={details["email"]} placeholder="Enter email" onChange={(e) => setDetails({ ...details, email: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" value={details["name"]} placeholder="Enter name" onChange={(e) => setDetails({ ...details, name: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" value={details["surname"]} placeholder="Enter surname" onChange={(e) => setDetails({ ...details, surname: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="url" value={details["imageUrl"]} placeholder="Enter imageUrl" onChange={(e) => setDetails({ ...details, imageUrl: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" value={details["headline"]} placeholder="Enter headline" onChange={(e) => setDetails({ ...details, headline: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" value={details["techStack"]} placeholder="Enter techStack" onChange={(e) => setDetails({ ...details, techStack: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" value={details["linkedinUrl"]} placeholder="Enter linkedInUrl" onChange={(e) => setDetails({ ...details, linkedinUrl: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">

                            <Form.Control type="text" value={details["githubUrl"]} placeholder="Enter githubUtl" onChange={(e) => setDetails({ ...details, githubUrl: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" value={details["about"]} placeholder="Enter about" onChange={(e) => setDetails({ ...details, about: e.currentTarget.value })} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" value={details["phone"]} placeholder="Enter phone" onChange={(e) => setDetails({ ...details, phone: e.currentTarget.value })} />
                        </Form.Group>

                        {/*<Form.Group controlId="formBasicPassword">*/}

                        {/*    <Form.Control type="password" value={details["password"]} placeholder="Password" onChange={(e) => setDetails({...details, email:e.currentTarget.value})} />*/}
                        {/*</Form.Group>*/}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                    <Button variant="primary" type="submit" onClick={(e) => submitData(e)} >
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalForm;