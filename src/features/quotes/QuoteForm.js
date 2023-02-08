import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { useDispatch } from "react-redux";
import { addQuote } from "./quotesSlice";

function QuoteForm() {

  const [content, setContent] = useState("")
  const [author, setAuthor] = useState("")
  const [contentID, setContentID] = useState("")
  const [votes, setVotes] = useState(0)

  const [formData, setFormData] = useState({
      content: content,
      author: author,
      id: contentID,
      votes: votes,
  });

  const dispatch = useDispatch()

  function handleChange(e) {
    e.preventDefault()
      if (e.target.name === 'content') {
        setContent(e.target.value)
      } else if (e.target.name === 'author') {
        setAuthor(e.target.value)
      }
      setContentID(uuid())
    setFormData({content: content, author: author, id: contentID, votes: votes})
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    dispatch(addQuote(formData))
    setContent("")
    setAuthor("")
    setContentID("")
    setVotes(0)
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <div className="panel panel-default">
            <div className="panel-body">
              <form className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="content" className="col-md-4 control-label">
                    Quote
                  </label>
                  <div className="col-md-5">
                    <textarea
                      className="form-control"
                      id="content"
                      value={content}
                      name="content"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="author" className="col-md-4 control-label">
                    Author
                  </label>
                  <div className="col-md-5">
                    <input
                      className="form-control"
                      type="text"
                      id="author"
                      value={author}
                      name="author"
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-md-6 col-md-offset-4">
                    <button type="submit" className="btn btn-default" onClick={handleSubmit}>
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuoteForm;
