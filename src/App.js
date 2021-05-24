import React from 'react';
import './App.css'

const  List = props => <ul>{props.children}</ul>;
const Item = props => <li>{props.children}</li>;


export default class App extends React.Component {

  state = {
    list : []
  }

  handleCreate = (value) => {
    this.setState((prevState) => ({
      list : [value, ...prevState.list]
    }))
  }

  render() {
    return (
      <div className="App">
        <h1>Todos</h1>
        <FormTodo
          onCreate={this.handleCreate}
        />
        <List>
          {this.state.list.map(item => {
            return <Item key={item}>{item}</Item>
          })}
        </List>
      </div>
    )
  }

}

class FormTodo extends React.Component {

  state = {
    value : ""
  }

  handleChange = (event) => {
    this.setState( () => ({
      value : event.target.value
    }))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onCreate(this.state.value);
    this.setState({value: ''});
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name todo:
          <input 
            onChange={this.handleChange}
            type="text" 
            name="name" 
            value={this.state.value}
          />
        </label>
        <input type="submit" value="click me!"/>
      </form>
    )
  }

}

