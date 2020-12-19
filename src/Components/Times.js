import React, { Component } from 'react'

export default class Times extends Component {
    constructor(props){
        super(props)
        this.state={
            seconds:0
        };
    }

    tick() {
        this.setState(state => ({
          seconds: state.seconds + 1
        }));
      }
      componentDidMount() {
        this.interval = setInterval(() => this.tick(), 10000);
      }
    
      componentWillUnmount() {

        clearInterval(this.interval);
      }

    render() {
        return (
            <div>
                {this.state.seconds}
            </div>
        )
    }
}