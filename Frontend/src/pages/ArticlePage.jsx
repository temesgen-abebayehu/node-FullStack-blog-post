import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [], canUpvote:false });
  const { articleId } = useParams();
  const {canUpvote} = articleInfo;

  const navigate = useNavigate();

  const { user, isLoading } = useUser(); // Fixed typo

  useEffect(() => {
    const loadArticleInfo = async () => {
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};

      const response = await axios.get(`/api/article/${articleId}`, {headers});
      const newArticleInfo = response.data;

      setArticleInfo(newArticleInfo);
    };

    if(!isLoading){
      loadArticleInfo();
    }

  }, [isLoading, user]);

  const setUpvote = async () => {
    if (user) {
      const token = user && await user.getIdToken();
      const headers = token ? {authtoken: token} : {};

      const response = await axios.put(`/api/article/${articleId}/upvote`, null, {headers});
      const newArticleInfo = response.data;

      setArticleInfo(newArticleInfo);

    } else {
      alert("You need to log in to upvote!");
    }
  };

  const article = articles.find((article) => articleId === article.name);


  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <div className="upvote-article">
        {user ? (
          <button onClick={setUpvote}>{canUpvote ? "Upvote" : "Already Upvoted"}</button>
        ) : (
          <button onClick={() => navigate("/login")}>Login to Upvote</button>
        )}
        <p>This article has {articleInfo.upvotes} upvote(s)</p>
      </div>
      {article.content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {user ? (
        <AddCommentForm
          articleName={articleId}
          onArticleUpdated={(updatedArticle) => setArticleInfo(updatedArticle)}
        />
      ) : (
        <button onClick={() => navigate("/login")}>Login to Comment</button>
      )}
      <CommentsList comments={articleInfo.comments} />
    </div>
  );
};

export default ArticlePage;
