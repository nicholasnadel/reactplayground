import React, { Component } from 'react';
import PropTypes from 'prop-types'

class ProjectItem extends Component {
    deleteProject(id){
      this.props.onDelete(id);
    }

  render() {
    return (
      <li className="Project">
        <strong>{this.props.project.title} - {this.props.project.category}: <a onClick={this.deleteProject.bind(this, this.props.project.id)} href="#">x</a> </strong>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  project: PropTypes.object,
  onDelete: PropTypes.func
}

export default ProjectItem;
