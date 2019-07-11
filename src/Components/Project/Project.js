import React, { Component } from 'react';
import ReactModal from 'react-modal';
import MiniDonut from  '../MiniDonut/MiniDonut';
const shortid = require("shortid");


class Project extends Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
      currentPalette: {}
    }
  }

  handleOpenModal = (e) => {
    const { id } = e.target
    this.setState({ showModal: true });
    let palette = this.props.palettes.find(palette => palette.id === parseInt(id));
    this.setState({currentPalette: palette})
  }
  
  handleCloseModal = () => {
    this.setState({ showModal: false });
  }

  deletePalette = (id) => {
    let option = {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: id
      })
    };
    fetch(`http://localhost:3001/api/v1/palettes/${id}`, option)
    .then(response =>  response.json())
    .then(result => console.log(result))
  }

  render() {

  let palettes = this.props.palettes.filter(palette => {
    return palette.project_id === this.props.id
  })

  let displayDonuts = palettes.map((palette, i) => {
    if (palette[`color_${i+1}`][0] === '#') {
      return (<div key={shortid.generate()} className="mini-donut-section">
        <h2 className="mini-palette-name">{palette.name}</h2>
        <i id={palette.id} onClick={this.handleOpenModal} className="fas fa-pencil-alt project-icon edit-palette"></i>
        <MiniDonut fill={palette[`color_${i+1}`]} />
        <MiniDonut fill={palette[`color_${i+2}`]} />
        <MiniDonut fill={palette[`color_${i+3}`]} />
        <MiniDonut fill={palette[`color_${i+4}`]} />
        <MiniDonut fill={palette[`color_${i+5}`]} />
        <MiniDonut fill={palette[`color_${i+6}`]} />
      </div>)
    }
  });

  let displayModal = (<div className="mini-donut-section-modal">
        <div className="edit-project-name-modal">
          <h2 className="mini-palette-name-modal">Edit {this.state.currentPalette.name}</h2>
          <input type="text" className="project-name-input-modal" onChange={this.handleChange} />
          <button onClick={() => this.deletePalette(this.state.currentPalette.id)} className="delete-modal">Delete Palette</button>
        </div>
        <div className="mini-donuts-modal">
          <MiniDonut fill={this.state.currentPalette.color_1} />
          <MiniDonut fill={this.state.currentPalette.color_2} />
          <MiniDonut fill={this.state.currentPalette.color_3} />
          <MiniDonut fill={this.state.currentPalette.color_4} />
          <MiniDonut fill={this.state.currentPalette.color_5} />
          <MiniDonut fill={this.state.currentPalette.color_6} />
        </div>
        <button onClick={this.handleCloseModal}>Close</button>
      </div>)

  return (
    <section>
      <article className="Project">
        <h4 className="Project-name">
        <i className="fas fa-folder-open project-icon" onClick={this.handleOpenModal}></i>
        {this.props.name}</h4>
        <div className="display-donuts">
          {displayDonuts}
        </div>
      </article>
      <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Palette Modal">
           <div className="modal-display-donuts">
          { this.state.showModal && displayModal }
          </div>
        </ReactModal>
    </section>
    )
  }
}


export default Project;
