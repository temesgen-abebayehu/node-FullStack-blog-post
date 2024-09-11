import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import useUser from "../hooks/useUser";

const ArticlePage = () => {
  const [articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: [] });
  const { articleId } = useParams();

  const { user, isLoading } = useUser(); // Fixed typo

  useEffect(() => {
    const loadArticleInfo = async () => {
      const response = await axios.get(`/api/article/${articleId}`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    };
    loadArticleInfo();
  }, [articleId]);

  const setUpvote = async () => {
    if (user) {
      const response = await axios.put(`/api/article/${articleId}/upvote`);
      const newArticleInfo = response.data;
      setArticleInfo(newArticleInfo);
    } else {
      alert("You need to log in to upvote!");
    }
  };

  const article = articles.find((article) => articleId === article.name);

  if (isLoading) {
    return <p>Loading...</p>; // Handle loading state
  }

  if (!article) {
    return <NotFoundPage />;
  }

  return (
    <div>
      <h2>{article.title}</h2>
      <div className="upvote-article">
        {user ? (
          <button onClick={setUpvote}>Upvote</button>
        ) : (
          <button onClick={() => alert("Login to Upvote")}>Login to Upvote</button>
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
        <button onClick={() => alert("Login to Comment")}>Login to Comment</button>
      )}
      <CommentsList comments={articleInfo.comments} />
    </div>
  );
};

export default ArticlePage;
