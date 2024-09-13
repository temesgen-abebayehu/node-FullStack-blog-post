import axios from "axios";
import React, { useState } from "react";
import useUser from "../hooks/useUser";

const AddCommentForm = ({ articleName, onArticleUpdated }) => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const { user } = useUser();

  const addComment = async () => {
    const token = user && (await user.getIdToken());
    const headers = token ? { authtoken: token } : {};

    const responce = await axios.post(
      `/api/article/${articleName}/comments`,
      {
        postedBy: name,
        text: commentText,
      },
      {
        headers,
      }
    );
    const updatedArticle = responce.data;
    onArticleUpdated(updatedArticle);
    setName("");
    setCommentText("");
  };

  return (
    <div id="add-comment-form">
      <h3>Add Comment:</h3>

      {user && <p>You comment's as {user.email}</p>}  
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        rows="4"
        cols="50"
      />
      <button onClick={addComment}>Add Comment</button>
    </div>
  );
};

export default AddCommentForm;
