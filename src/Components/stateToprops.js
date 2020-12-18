import React, { Component } from 'react'

 class TestComponents extends Component {
    constructor(props){
        super(props)
        this.state = 
        { name: 'world'
   }
   }
    render() {
        return (
            <div>
                {this.props.country}
            </div>
        )
    }
}
export default TestComponents