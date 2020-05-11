import React, { Component } from "react";
import CommentItem from "./CommentItem";
import CommentEditor from "./CommentEditor";

import { FaComment } from "react-icons/fa";

export default class CommentBlock extends Component {
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
          comment: [
            {
              creator: "Maz",
              date: new Date(),
              time: "22:43",
              content:
                "Подскажите на какой равнозначный по комфорту и остальным качествам можно поменять Toyota Chaser 90. Авто с левым рулём до 1.5 млн. Ничего не вижу кроме Audi A8 long d2, но сейчас это проблемная техника. Очень нуждаюсь в дельном совете.",
              comment: null,
            },
          ],
        },
        {
          creator: "Maz",
          date: new Date(),
          time: "22:43",
          content:
            "Подскажите на какой равнозначный по комфорту и остальным качествам можно поменять Toyota Chaser 90. Авто с левым рулём до 1.5 млн. Ничего не вижу кроме Audi A8 long d2, но сейчас это проблемная техника. Очень нуждаюсь в дельном совете.",
          comment: null,
        },
        {
          creator: "Maz",
          date: new Date(),
          time: "22:43",
          content:
            "Подскажите на какой равнозначный по комфорту и остальным качествам можно поменять Toyota Chaser 90. Авто с левым рулём до 1.5 млн. Ничего не вижу кроме Audi A8 long d2, но сейчас это проблемная техника. Очень нуждаюсь в дельном совете.",
          comment: null,
        },
      ],
      length: 4,
    };
  }

  render() {
    return (
      <>
        <div className="container my-5">
          <div className="mb-3">
            <FaComment size="30px" className="pb-2 mr-2" />
            <span className="h3">Комментарии</span>
            {this.state.length > 0 && (
              <span className="h3 ml-2">({this.state.length})</span>
            )}
          </div>
          <CommentEditor />
          {this.state.comment.map((comment) => (
            <CommentItem comment={comment} />
          ))}
        </div>
      </>
    );
  }
}
