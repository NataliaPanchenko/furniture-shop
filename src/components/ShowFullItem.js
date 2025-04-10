import React, { Component } from "react";
import { FaRegWindowClose } from "react-icons/fa";

export class ShowFullItem extends Component {
  render() {
    return (
      <div className="full-item">
        <div>
          <div
            className="close-btn"
            onClick={() => this.props.onShowItem(this.props.item)}
          >
            <FaRegWindowClose />
          </div>
          <img
            src={this.props.item.img}
            onClick={() => this.props.onShowItem(this.props.item)}
          ></img>
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price}$</b>
          <div
            className="add-to-cart"
            onClick={() => this.props.onAdd(this.props.item)}
          >
            +
          </div>
        </div>
      </div>
    );
  }
}

export default ShowFullItem;
