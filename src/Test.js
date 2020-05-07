import React, { Component } from "react";

import { FaComment } from "react-icons/fa";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import avatar from "./images/no_avatar.jpg";

export default class Test extends Component {
  constructor() {
    super();

    this.state = {
      comment: [
        {
          creator: "Maz",
          date: new Date(),
          time: "22:43",
          content:
            "Подскажите на какой равнозначный по комфорту и остальным качествам можно поменять Toyota Chaser 90. Авто с левым рулём до 1.5 млн. Ничего не вижу кроме Audi A8 long d2, но сейчас это проблемная техника. Очень нуждаюсь в дельном совете.",
          like: 57,
          dislike: 7
        },
        {
          creator: "Maz",
          date: "2/02/2020",
          time: "22:43",
          content:
            "Подскажите на какой равнозначный по комфорту и остальным качествам можно поменять Toyota Chaser 90. Авто с левым рулём до 1.5 млн. Ничего не вижу кроме Audi A8 long d2, но сейчас это проблемная техника. Очень нуждаюсь в дельном совете.",
        },
        {
          creator: "Maz",
          date: "2/02/2020",
          time: "22:43",
          content:
            "Подскажите на какой равнозначный по комфорту и остальным качествам можно поменять Toyota Chaser 90. Авто с левым рулём до 1.5 млн. Ничего не вижу кроме Audi A8 long d2, но сейчас это проблемная техника. Очень нуждаюсь в дельном совете.",
        },
      ],
    };
  }

  render() {
    return (
      <>
        <div className="container my-5">
          <div className="mb-3">
            <FaComment size="30px" className="pb-2 mr-2" />
            <span className="h3">Комментарии</span>
            {this.state.comment.length > 0 && (
              <span className="h3 ml-2">({this.state.comment.length})</span>
            )}
          </div>
          <div className="row">
            <div className="col-1 pr-1">
              <img src={avatar} height="50px" className="rounded-circle" />
            </div>
            <div className="col-8 px-0">
              <div className="row">
                <div className="col">
                  <span className="h5 font-weight-bold">
                    {this.state.comment[0].creator}
                  </span>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  {this.state.comment[0].date.toLocaleString("ru", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}{" "}
                  {this.state.comment[0].date.toLocaleString("ru", {
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </div>
              </div>
            </div>
            <div className="col h5 py-2">
              <span className="text-success"><AiOutlineLike />{this.state.comment[0].like}</span>
              <span className="text-danger ml-5"><AiOutlineDislike />{this.state.comment[0].dislike}</span>
            </div>
          </div>
          <div
            className="border border-body-1 rounded my-3 p-3"
            style={{ fontSize: "18px" }}
          >
            {this.state.comment[0].content}
          </div>
        </div>
        {/* <div className="w-100 bg-light">
          {this.state.comment[0].date.toLocaleString("ru", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}{" "}
          {this.state.comment[0].date.toLocaleString("ru", {
            hour: "numeric",
            minute: "numeric",
          })}
        </div> */}
        {/* <div>
            <img src={avatar} height="30px" className="rounded" />
            <span className="ml-3">Сергей</span>
            <br />
            <span className="ml-3">12/12/2020, 06:33</span>
          </div> */}
      </>
    );
  }
}
