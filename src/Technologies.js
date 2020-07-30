
import React, { Component } from 'react'

import Stack from './Stack'

import reactJs from './images/react-icon.svg'
import html5 from './images/html5-icon.svg'
import css3 from './images/css-icon.svg'
import nodeJs from './images/nodejs-icon.svg'
import mongoDB from './images/mongodb-icon.svg'
import heroku from './images/heroku-icon.svg'

export default class Technologies extends Component {
    render() {
        return (
            <>
               <div className="container">
                    <Stack id="react" name="ReactJS" source={reactJs} />
                    <Stack id="html5" name="HTML5" source={html5} />
                    <Stack id="css3" name="CSS3" source={css3} />
                    <Stack id="nodejs" name="NodeJS" source={nodeJs} />
                    <Stack id="mongodb" name="MongoDB" source={mongoDB} />
                    <Stack id="heroku" name="Heroku" source={heroku} />
                </div> 
            </>
        )
    }
}
