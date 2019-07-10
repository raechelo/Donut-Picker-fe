import React, { Component } from 'react';
import ReactModal from 'react-modal';

class Project extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false
    }
  }

  handleOpenModal = () => {
    this.setState({ showModal: true });
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

 render() {

  return (
    <section>
      <article className="Project">
        <h4 className="Project-name">{this.props.name}</h4>
        <i onClick={this.handleOpenModal} className="fas fa-pencil-alt project-icon"></i>
        <i className="fas fa-trash-alt project-icon"></i>
      </article>
      <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Palette Modal"
        >
          <button onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
    </section>
  )
 }
}

export default Project;