import React, { Component } from "react";
import ImageCarousel from "./ImageCarousel";

export default class NewsItem extends Component {
  constructor() {
    super();

    this.state = {
      showImg: null,
      activeIndex: null,
    };
  }

  handleClickImg = (activeImage) => {
    const activeIndex = this.props.newsItem.img.findIndex(
      (elem) => elem === activeImage
    );

    this.setState({
      showImg: this.props.newsItem.img,
      activeIndex: activeIndex,
    });
  };

  handleClose = () => {
    this.setState({ showImg: null });
  };

  render() {
    const { newsItem } = this.props;

    return (
      <div className="container my-3">
        <div className=" border border-dark rounded mx-auto bg-light">
          <div className="m-5">
            <div className="badge badge-secondary text-wrap px-3">
              {/**Дата время */}
              <div className="h4">
                {newsItem.date}
                <em className="h5">
                  <span className="mx-2">в</span>
                  {newsItem.time}
                </em>
              </div>
            </div>
            <div className="m-4">
              {/*COntent */}
              <h3 className="mb-4">
                {/**Header */}
                <u>{newsItem.header}</u>
              </h3>
              <div className="h4" style={{ whiteSpace: "pre-wrap" }}>
                {/**BOdy */}
                {newsItem.body}
              </div>
              <div className="row">
                {/**Images */}
                {newsItem.img != null &&
                  newsItem.img.map((imageItem) => (
                    <div className="col pb-4">
                      <img
                        src={imageItem}
                        alt="auto"
                        width="270px"
                        style={{ cursor: "pointer" }}
                        onClick={() => this.handleClickImg(imageItem)}
                      />
                    </div>
                  ))}
              </div>
              <div>
                {this.state.showImg != null && (
                  <ImageCarousel
                    images={this.state.showImg}
                    activeIndex={this.state.activeIndex}
                    handleClose={this.handleClose}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
