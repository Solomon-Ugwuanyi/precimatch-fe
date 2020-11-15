import React from 'react'
import { Button } from 'react-bootstrap'

export default function Jumbotron() {
    return (
        <div>
            <section className="jumbotron text-center">
                <div className="container">
                    <h1>Precise Matches</h1>
                    <h5>Tinder for Developer Jobs</h5>
                    <img src="https://miro.medium.com/max/2160/1*Dpb3vjQtqb4D1nAU4RnRWA@2x.png" />

                    <p className="lead text-muted">Scan through a carefully curated directory of job ready developers, equipped with industry best practices and latest stacks. See some projects you like? Shoot them an email!</p>

                    <Button style=
                        {{
                            border: 'none',
                            background: '#008001',
                            color: '#fff',
                            fontSize: '14px',


                        }}
                        className="btn btn-primary mr-5 " variant="outline-secondary">Sign in</Button>
                    <Button style=
                        {{
                            border: 'none',
                            background: '#008001',
                            color: '#fff',
                            fontSize: '14px',

                        }} variant="outline-secondary">Sign Up</Button>

                </div>
            </section>
        </div>
    )
}
