
import React, { Component } from 'react'

import Stack from './Stack'
import getTechnologies from './get-technologies';

export default class Technologies extends Component {
    render() {
        return (
            <>
               <div className="container">
                   {
                       getTechnologies().map(stack => <Stack key={stack.id} id={stack.id} name={stack.name} source={stack.source} />)
                   }
                </div> 
            </>
        )
    }
}


