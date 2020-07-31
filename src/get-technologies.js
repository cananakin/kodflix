//import React from 'react'

import reactJs from './images/react-icon.svg'
import html5 from './images/html5-icon.svg'
import css3 from './images/css-icon.svg'
import nodeJs from './images/nodejs-icon.svg'
import mongoDB from './images/mongodb-icon.svg'
import heroku from './images/heroku-icon.svg'


const getTechnologies = () => [
        { id: 'react', name: 'ReactJS', source: reactJs, detail: `React is a JavaScript library for building user interfaces.

        Declarative: React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes. Declarative views make your code more predictable, simpler to understand, and easier to debug.
        Component-Based: Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
        Learn Once, Write Anywhere: We don't make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code. React can also render on the server using Node and power mobile apps using React Native.` },
        { id: 'html5', name: 'HTML5', source: html5, detail: `HTML is the standard markup language for Web pages.
        With HTML you can create your own Website.
        This tutorial follows the latest HTML5 standard.
        HTML is easy to learn - You will enjoy it!` },
        { id: 'css3', name: 'CSS3', source: css3, detail:`CSS is a language that describes the style of an HTML document.

        CSS describes how HTML elements should be displayed.
        
        This tutorial will teach you CSS from basic to advanced.` },
        { id: 'nodejs', name: 'NodeJS', source: nodeJs, detail: `Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine.`},
        { id: 'mongodb', name: 'MongoDB', source: mongoDB, detail: `MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.

        No database makes you more productive.` },
        { id: 'heroku', name: 'Heroku', source: heroku, detail:`Heroku is a platform as a service based on a managed container system, with integrated data services and a powerful ecosystem, for deploying and running modern apps. The Heroku developer experience is an app-centric approach for software delivery, integrated with today’s most popular developer tools and workflows.` }
    ]

export default getTechnologies;