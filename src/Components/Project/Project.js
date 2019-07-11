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

  let palettes = props.palettes.filter(palette => {
  return palette.project_id === props.id
}) 
let listItems = palettes.map(palette => <li key={shortid.generate()}>{palette.name}</li>)

render() {
   
  let palettes = this.props.palettes.filter(palette => {
    return palette.project_id === this.props.id
  })

  // let listItems = palettes.map(palette => <h5>{palette.name}</h5>)

  let displayDonuts = palettes.map((palette, i) => {
    if (palette[`color_${i+1}`][0] === '#') {
      return (<div className="mini-donut-section">
        <h2>{palette.name}</h2>
        <MiniDonut fill={palette[`color_${i+1}`]} />
        <MiniDonut fill={palette[`color_${i+2}`]} />
        <MiniDonut fill={palette[`color_${i+3}`]} />
        <MiniDonut fill={palette[`color_${i+4}`]} />
        <MiniDonut fill={palette[`color_${i+5}`]} />
        <MiniDonut fill={palette[`color_${i+6}`]} />
        <i onClick={this.handleOpenModal} className="fas fa-pencil-alt project-icon"></i>
      </div>)
    }
  });

  return (
    <section>
      <article className="Project">
        <h4 className="Project-name">{this.props.name}</h4>
          <i onClick={this.handleOpenModal} className="fas fa-pencil-alt project-icon"></i>
        <div className="display-donuts">
          {displayDonuts}
        </div>
      </article>
      <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Palette Modal">
          <button onClick={this.handleCloseModal}>Close</button>
        </ReactModal>
    </section>
    )
  }


export default Project;
