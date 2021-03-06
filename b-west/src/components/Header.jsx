import React from 'react';

import '../styles/Header.css';
import {NavLink} from "react-router-dom";

const isUrl = (str) => {
    // language=JSRegexp
    const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/
    return regexp.test(str);
};
const Header = ({image, title, subTitle, actionButton, additionalClass, content}) => {
    let styleReady = {};
    if (image) {
        styleReady = {
            backgroundImage: 'url("' + image.src + '")',
            backgroundSize: '100% 100%'
        }
    } else {
        additionalClass += ' dark-pattern'
    }
    let actionButtonAnchor = '';
    if (actionButton.show === true || actionButton === 'true') {
        console.log('actionButton', actionButton);
        actionButtonAnchor = isUrl(actionButton.url) ?
            <a className={'btn  btn-primary btn-lg hero-button'} target={'_blank'}
               href={actionButton.url}>{actionButton.text}</a> : <NavLink to={actionButton.url}
                                                                          className={'btn btn-primary btn-lg hero-button'}
                                                                          role={'button'}>{actionButton.text}</NavLink>;

    }

    return (

        <div className={"jumbotron hero-technology " + additionalClass} style={styleReady}>
            <div className={'hero-content'}>

                {
                    title ? <h2 className="hero-title">{title}</h2> : null

                }
                {
                    subTitle ? <h3>{subTitle}</h3> : null
                }
                {
                    content ? <div className={'header-content'} dangerouslySetInnerHTML={{__html: content}}/> : null
                }


                {
                    actionButton ? (actionButton.show ?

                        actionButtonAnchor : null ) : null
                }

            </div>
        </div>

    )

}

export default Header;