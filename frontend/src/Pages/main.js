import React from 'react'
import MainVideo from '../video.mp4'
import '../main.css'
import { Link } from 'react-router-dom'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>LETS CONNECT</h1>
                <div className="btn-group">
                    <Link to='/home'>
                    <button className="btn">START</button>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default hero