import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { url, client, urlFor } from '../../client';

// const abouts = [
//     { title: 'Web Development', description: 'I am a good web developer.', imgURL: images.about01 },
//     { title: 'Front-End Development', description: 'I am a good web developer.', imgURL: images.about02 },
//     { title: 'Back-End Development', description: 'I am a good web developer.', imgURL: images.about03 },
//     { title: 'MERN Stack', description: 'I am a good web developer.', imgURL: images.about04 }
// ];

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        const query = '*[_type == "abouts"]';

        client.fetch(query)
            .then((data) => setAbouts(data))
    }, [])


    return (
        <>

            <h2 className="head-text">About <span>Me</span></h2>

            <div className="app__profiles">
                {abouts.map((about, index) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: 'tween' }} //using framer motiton 
                        className="app__profile-item"
                        key={about.title + index}

                    >
                        <img src={urlFor(about.imgUrl)} alt="about.title" />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
                        <p className="p-text" style={{ marginTop: 10} }>{about.description}</p>

                    </motion.div>
                ))}
            </div>

            

        </>

    )
}

export default AppWrap(
    MotionWrap(About, 'app__about'), 
    'about',
    "app__whitebg"
);
