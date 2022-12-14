import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <a href="https://github.com/sandrovprado"><BsGithub /></a>
            </div>
            <div>
                <a href="https://www.linkedin.com/in/sandrovprado/"><BsLinkedin /></a>
            </div>

        </div>
    )
}

export default SocialMedia
