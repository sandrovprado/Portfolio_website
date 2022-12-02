import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';


import { AppWrap } from '../../wrapper';
import './Header.scss';


const Header = () => {
    return (
        <div className="app__header app__flex">
            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }} //from fully invisible to visible
                transition={{ duration: 0.5 }} 
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            
                            <Typewriter 
                                onInit={(typewriter) =>{
                                    typewriter
                                    .typeString('Hello, I am ')
                                    .typeString('<span style="color: #313bac; ">Alessandro</span>')
                                    .start();
                                }}

                               
                            />
                            
                        </div>
                    </div>
                    <div className="tag-cmp app__flex">
                            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:8e11b067-6ff4-4702-b706-1d494796a018" target="_blank" rel="noopener noreferrer"><button className="resumeBtn">Resume</button></a>
                    </div>
                </div>

            </motion.div>

        </div>
    )
}

export default AppWrap(Header,'home');
