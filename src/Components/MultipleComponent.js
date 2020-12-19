import React, { Component } from 'react'

class MultipleComponent extends Component {
    constructor(props){
      super(props);
      this.state={
        data: 
        [
           {
              "id":1,
              "name":"Foo",
              "age":"20"
           },
           {
              "id":2,
              "name":"Bar",
              "age":"30"
           },
           {
              "id":3,
              "name":"Baz",
              "age":"40"
           }
        ]
      }
    }
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <table>
               <tbody>
                  {this.state.data.map((muthu, kumar) => <TableRow key = {kumar} 
                     data = {muthu} />)}
               </tbody>
            </table>
            </div>
        )
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        )
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h1>Content</h1>
            </div>
        )
    }
}

class TableRow extends React.Component {
    render() {
       return (
          <tr>
             <td>{this.props.data.id}</td>
             <td>{this.props.data.name}</td>
             <td>{this.props.data.age}</td>
          </tr>
       );
    }
}

export default MultipleComponent;