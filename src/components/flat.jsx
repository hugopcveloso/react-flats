import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const flat = this.props;
    flat.selectFlat(flat.index);
  }

  render() {
    return (
      <div
        className={`card${this.props.flat.selected ? 'active' : ''}`}
        style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.2)), url('${this.props.flat.imageUrl}')` }}>
        <div className="card-category">{this.props.flat.price} {this.props.flat.priceCurrency}</div>
        <div className="card-description">
          <h1>{this.props.flat.name}</h1>
        </div>
        <a
          className="card-link"
          onClick={this.handleClick}
        ></a>

      </div>
    )}
}

export default Flat;

