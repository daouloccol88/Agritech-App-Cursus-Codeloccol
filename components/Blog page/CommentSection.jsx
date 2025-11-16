import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const CommentSection = ({ comments, setComments }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [commentText, setCommentText] = useState("");
  const params = useParams();
  const { id } = params;

  const handleAddComment = () => {
    if (!name || !email || !commentText)
      return alert("All fields are required");

    const allComments = JSON.parse(localStorage.getItem("comments") || "[]");

    const newComment = {
      id: Date.now(),
      blogId: id,
      name,
      email,
      text: commentText,
      createdAt: new Date().toISOString(),
    };

    allComments.push(newComment);
    localStorage.setItem("comments", JSON.stringify(allComments));
    setComments([...comments, newComment]);

    // Reset form
    setName("");
    setEmail("");
    setCommentText("");
  };
  return (
    <div>
      {comments.length === 0 && (
        <p>No comments yet. Be the first to comment!</p>
      )}
      <h4>Comments ({comments.length})</h4>
      <div className="d-flex flex-column justify-content-end">
        {comments.map((c) => (
          <div
            key={c.id}
            className="border border-success p-2 rounded mb-2"
            style={{ width: "50%" }}
          >
            <div className="d-flex justify-content-between">
              <div>
                <span>
                  <strong>{c.name}</strong>
                </span>{" "}
                <span>({c.email})</span>
              </div>
              <div>
                <i className="bi bi-arrow-return-left fs-3"></i>
              </div>
            </div>

            <small className="text-muted">
              {new Date(c.createdAt).toLocaleString()}
              <p className="fw-semibold">{c.text}</p>
            </small>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-end mt-5">
        <div
          className="bg-body-secondary rounded-3 p-4"
          style={{ width: "75%" }}
        >
          <h5>Add a Comment</h5>
          <div className="mb-3">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <input
                  className="form-control mb-2"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="col-md-6 col-sm-12">
                <input
                  className="form-control mb-2"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <textarea
              className="form-control mb-2"
              placeholder="Your Comment"
              rows="10"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            ></textarea>
            <button
              className="btn bg-green text-white rounded-pill p-3 mt-3"
              onClick={handleAddComment}
            >
              Submit Comment <i className="bi bi-arrow-up-right fs-5"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentSection;
