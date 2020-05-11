import React, { Component } from "react";

import avatar from "./images/no_avatar.jpg";
import CommentEditor from "./CommentEditor";

export default class CommentItem extends Component {
  constructor() {
    super();

    this.state = {
      reply: false,
    };
  }

  handleReply = () => {
    this.setState({ reply: true });
  };

  handleCancel = () => {
    this.setState({ reply: false });
  };

  render() {
    const { comment } = this.props;

    return (
      <>
        <div className="row">
          <div className="col-1 pr-1">
            <img src={avatar} height="50px" className="rounded-circle" />
          </div>
          <div className="col-8 px-0">
            <div className="row">
              <div className="col">
                <span className="h5 font-weight-bold">{comment.creator}</span>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {comment.date.toLocaleString("ru", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}{" "}
                {comment.date.toLocaleString("ru", {
                  hour: "numeric",
                  minute: "numeric",
                })}
              </div>
            </div>
          </div>
        </div>
        <div
          className="border border-body-1 rounded mt-3 p-3 "
          style={{ fontSize: "18px" }}
        >
          {comment.content}
        </div>
        <div className="">
          {this.state.reply == false && (
            <div className="row justify-content-end pr-3">
              <button
                className="btn btn-white text-muted"
                onClick={this.handleReply}
              >
                Ответить
              </button>
            </div>
          )}
          {this.state.reply == true && (
            <div className="ml-5">
              <CommentEditor handleCancel={this.handleCancel} edit={true}/>
            </div>
          )}
        </div>

        {comment.comment != null &&
          comment.comment.map((commentItem) => (
            <div className="ml-5">
              <CommentItem comment={commentItem} />
            </div>
          ))}
      </>
    );
  }
}
