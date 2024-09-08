import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import NotFoundPage from "./NotFoundPage";
import articles from "./article-content";
import CommentsList from "../components/CommentsList";


const ArticlePage = () => {
    const [articleInfo, setArticleInfo] = useState({upvotes:0, comments:[]});
    const {articleId} = useParams();
    
    useEffect(()=>{
        const loadArticleInfo = async () => {
            const responce = await axios.get(`/api/article/${articleId}`);
            const newArticleInfo = responce.data;
            setArticleInfo(newArticleInfo);
        }
        loadArticleInfo();
    }, [articleId]);

    const setUpvote = async() =>{
        const responce = await axios.put(`/api/article/${articleId}/upvote`);
        const newArticleInfo = responce.data;
        setArticleInfo(newArticleInfo);
    }

    
    const article = articles.find((article) => articleId === article.name);

    if(!article){
        return <NotFoundPage />;
    }

    return (
        <div>
            <h2>{article.title}</h2>
            <div className="upvote-article">
                <button onClick={setUpvote}>Upvote</button>
                <p>This article has {articleInfo.upvotes} upvote(s)</p>
            </div>            
            {article.content.map((paragraph, index) =>(
                <p key={index}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
        </div>
    );
};

export default ArticlePage;