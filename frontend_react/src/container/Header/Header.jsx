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
                            <a href="https://acrobat.adobe.com/id/urn:aaid:sc:VA6C2:83d60947-3c0b-468a-8a2c-71caecd81147" target="_blank" rel="noopener noreferrer"><button className="resumeBtn">Resume</button></a>
            
                    </div>
                </div>

            </motion.div>

        </div>
    )
}

export default AppWrap(Header,'home');
