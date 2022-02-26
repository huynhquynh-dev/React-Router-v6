import { abouts } from 'data/abouts'
import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <main>
            <h2>About</h2>
            <div>
                <nav>
                    {abouts.map(about => (
                        <Link key={about.id} to={`${about.id}`} > {about.name}</Link>
                    ))}
                </nav>
            </div>
        </main >
    )
}

export default About