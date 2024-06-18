import React, { Component } from 'react'

export class FunctionalCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h2>Functional Components Working!!</h2>
                <h2>The Name Is:{this.props.myname}</h2>
            </div>
        )
    }
}

export default FunctionalCom
