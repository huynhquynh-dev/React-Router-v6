import { abouts } from 'data/abouts'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Abouts = () => {
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
            <Outlet />
        </main >
    )
}

export default Abouts