import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';


export default function Footer() {
    return (
        <div>
            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>
                    <ArrowRight />



                    <p>PreciMatch is a &copy; PreciGroup. </p>
                    <p>New to Bootstrap? <a href="#">Visit the homepage</a> or read our <a
                        href="#">guidelines</a>.</p>
                </div>
            </footer>
        </div>
    )
}
