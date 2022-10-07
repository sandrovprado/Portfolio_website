import React from 'react';
import { NavigationDots, SocialMedia } from '../components';


//rafce
//gives each section of the website an id for reference 
const AppWrap = (Component, idName, cLassNames) => function HOC() {
    return (
        <div id={idName} className={`app__container ${cLassNames}`}>
            <SocialMedia />

            <div className="app__wrapper app__flex">
                <Component />

                <div className="copyright">
                    <p className="p-text">@2022 Alessandro</p>
                    <p className="p-text">All right reserved</p>

                </div>
            </div>
            <NavigationDots active = {idName}/> 
        </div>
    )
}

export default AppWrap
