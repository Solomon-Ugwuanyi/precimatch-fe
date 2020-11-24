import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';


export default function Footer() {
    return (
        <div>
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="https://precimatch-fe.herokuapp.com/">Back to top</a>
                    </p>
                    <ArrowRight />



                    <p>PreciMatch is a &copy; PreciGroup. </p>
                    <p> <a href="https://precimatch-fe.herokuapp.com/">Visit the homepage</a> or read our <a
                        href="https://precimatch-fe.herokuapp.com/">guidelines</a>.</p>
                </div>
            </footer>
        </div>
    )
}
