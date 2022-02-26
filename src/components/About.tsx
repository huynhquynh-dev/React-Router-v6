import { abouts } from 'data/abouts'
import React from 'react'
import { useParams } from 'react-router-dom'

const About = () => {
    const params = useParams<{ aboutId: string }>()
    const about = abouts.find(e => e.id.toString() === params.aboutId)
    return (
        <h2>
            {about ? `About ${about?.name}` : "Not found About"}
        </h2>

    )
}

export default About