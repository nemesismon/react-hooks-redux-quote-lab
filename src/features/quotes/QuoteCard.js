import React from "react";
import { upvoteQuote, downvoteQuote } from "./quotesSlice";
import { useDispatch, useSelector } from "react-redux";

function QuoteCard(props) {

  const dispatch = useDispatch()
  const quotes = useSelector((state) => state)
  

  function handleUpvotes() {
    dispatch(upvoteQuote(props.quote.id))
  }

  function handleDownvotes() {
    dispatch(downvoteQuote(props.quote.id))
  }

  return (
    <div key={props.quote.id}>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{props.quote.content/*Render Quote Content*/}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{props.quote.author/*Render Quote Author*/}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button type="button" className="btn btn-primary" onClick={handleUpvotes}>
              Upvote
            </button>
            <button type="button" className="btn btn-secondary" onClick={handleDownvotes}>
              Downvote
            </button>
            <button type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {props.quote.votes/*Render Quote Votes*/}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
