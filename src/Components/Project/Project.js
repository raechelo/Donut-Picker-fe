import React, { Component } from 'react';
import ReactModal from 'react-modal';
import MiniDonut from  '../MiniDonut/MiniDonut';

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
   
  let palettes = this.props.palettes.filter(palette => {
    return palette.project_id === this.props.id
  })

  let listItems = palettes.map(palette => <li>{palette.name}</li>)

  let displayDonuts = palettes.map((palette, i) => {
    console.log(palettes)
    if (palette[`color_${i+1}`][0] === '#') {
      return (<div
        ><MiniDonut fill={palette[`color_${i+1}`]} />
        <MiniDonut fill={palette[`color_${i+2}`]} />
        <MiniDonut fill={palette[`color_${i+3}`]} />
        <MiniDonut fill={palette[`color_${i+4}`]} />
        <MiniDonut fill={palette[`color_${i+5}`]} />
        <MiniDonut fill={palette[`color_${i+6}`]} />
      </div>)
    }
  })

  return (
    <section>
      <article className="Project">
        <h4 className="Project-name">{this.props.name}</h4>
        {listItems}
        {displayDonuts}
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
