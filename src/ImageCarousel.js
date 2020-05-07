import React, { Component } from "react";
import { Modal, Carousel } from "react-bootstrap";

export default class ImageCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: this.props.activeIndex,
    };
  }

  handleSelect = (selectedIndex) => {
    this.setState({ activeIndex: selectedIndex });
  };

  render() {
    const { images, handleClose } = this.props;

    return (
      <Modal show={true} size="xl" onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <Carousel
            activeIndex={this.state.activeIndex}
            onSelect={this.handleSelect}
          >
            {images.map((image) => (
              <Carousel.Item>
                <img className="w-100" src={image} alt="First slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
      </Modal>
    );
  }
}
