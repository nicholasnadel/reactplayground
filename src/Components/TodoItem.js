import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoItem extends Component {
    deleteTodo(id){
      this.props.onDelete(id);
    }

  render() {
    return (
      <li className="Todo">
        <strong>{this.props.todo.title} - {this.props.todo.category}: <a onClick={this.deleteTodo.bind(this, this.props.todo.id)} href="#">x</a> </strong>
      </li>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  onDelete: PropTypes.func
}

export default TodoItem;
