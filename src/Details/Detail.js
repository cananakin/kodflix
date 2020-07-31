import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

import getTechnologies from '../get-technologies';

import './Detail.css';

export default class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            technology: {}
        }
    }

    componentDidMount = () => {
        const technology_id = this.props.match.params.technology_id;
        let technology = getTechnologies().find(stack => stack.id === technology_id);
        this.setState( {technology })
    }

    render() {
        if(this.state.technology === undefined) {
            return <Redirect to="/not-found"/>
        }
        return (
            <div className="Details">
                <div className="breadcrumb">
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li> / </li>
                        <li> {this.state.technology.name} </li>
                    </ul>
                
                </div>
                <h1>{this.state.technology.name}</h1>
                <div className="content">
                    <p className="text">{this.state.technology.detail}</p>
                    <img className="image" src={this.state.technology.source} alt={this.state.technology.name}/>
                </div>
                
               
                
            </div>
        )
    }
}
