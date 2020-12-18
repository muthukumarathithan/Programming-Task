import React, { Component } from 'react'

export class Todo extends Component {
    constructor(props){
        super(props)
        this.state = { 
            items: [], 
            text: '' 
    };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
      }
    
      handleSubmit(e) {
        e.preventDefault();
        if (this.state.text.length === 0) {
          return;
        }
        const newItem = {
          text: this.state.text,
          id: Date.now()
        };
        this.setState(state => ({
          items: state.items.concat(newItem),
          text: ''
        }));
      }
    render() {
        return (
            <div>
        <form onSubmit={this.handleSubmit}>
        <input id="new-todo" onChange={this.handleChange} value={this.state.text}/>
          <button>
            Add #{this.state.items.length + 1}
          </button>
          <TodoList items={this.state.items} />
            </form>
            </div>
        )
    }  
}

class TodoList extends React.Component {
    render() {
      return (
        <ul>
          {this.props.items.map(item => (
            <li key={item.id}>{item.text}</li>
          ))}
        </ul>
      );
    }
  }

export default Todo
