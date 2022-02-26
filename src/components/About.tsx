import { abouts } from 'data/abouts'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const About = () => {
    const params = useParams<{ aboutId: string }>()
    const about = abouts.find(e => e.id.toString() === params.aboutId)
    const navigate = useNavigate()

    useEffect(() => {
        if (!about) navigate("/about")
    }, [about])

    return (
        <h2>
            About for {about?.name}
        </h2>

    )
}

export default About